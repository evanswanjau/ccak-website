import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useState, useEffect } from "react";
import { HiChevronRight } from "react-icons/hi";
import { InputForm } from "../components/forms/input-form";
import { paymentsByInvoice, activateMpesaPayment } from "../api/api-calls";
import { ButtonLoader } from "../components/btnLoader";
import { getMemberInvoice, getMember } from "../api/member-api-calls";

export const CheckoutInvoice = () => {
    const params = useParams();
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const [member, setMember] = useState({});
    const [invoice, updateInvoice] = useState({});
    const [payments, setPayments] = useState([]);
    const [btnLoading, setBtnLoading] = useState(false);
    const [current, setCurrent] = useState("mpesa-deposit");
    const [details, updateDetails] = useState({
        mpesaCode: "",
        mpesaNumber: "",
    });

    const getTotal = () => {
        let total = 0;
        invoice.items.map((item) => {
            total += item.unit_price * item.quantity;
            return total;
        });

        return total;
    };

    const searchPayment = () => {
        setSuccess("");
        setError("");
        activateMpesaPayment({
            transaction_id: details.mpesaCode,
            invoice_number: params.no,
            email: invoice.email || member.email,
        })
            .then(({ data }) => {
                if (data.length > 0) {
                    if (parseFloat(data[0].amount) < getTotal()) {
                        setSuccess(
                            "Your partial payment of KSH " +
                                parseFloat(data[0].amount).toLocaleString() +
                                " has been received"
                        );

                        getAllPayments().then((data) => {
                            let totalAmountPaid = 0;
                            for (let i = 0; i < data.length; i++) {
                                totalAmountPaid += parseFloat(
                                    payments[i].amount
                                );
                            }

                            if (
                                totalAmountPaid > getTotal() ||
                                totalAmountPaid === getTotal()
                            ) {
                                const redirectTimeout = setTimeout(() => {
                                    window.location.replace(
                                        invoice.description !== "Donation"
                                            ? "/my-account/billing"
                                            : "/get-involved/donate"
                                    );
                                }, 5000); // 5000 milliseconds = 5 seconds

                                return () => clearTimeout(redirectTimeout);
                            } else {
                                getMemberInvoice(params.id, updateInvoice);
                                getAllPayments();
                                setBtnLoading(false);
                            }
                        });
                    }

                    if (
                        parseFloat(data[0].amount) > getTotal() ||
                        parseFloat(data[0].amount) === getTotal()
                    ) {
                        setSuccess(
                            "Your payment of KSH " +
                                parseFloat(data[0].amount).toLocaleString() +
                                " has been received"
                        );
                        const redirectTimeout = setTimeout(() => {
                            window.location.replace(
                                invoice.description !== "Donation"
                                    ? "/my-account/billing"
                                    : "/get-involved/donate"
                            );
                        }, 5000); // 5000 milliseconds = 5 seconds

                        return () => clearTimeout(redirectTimeout);
                    }
                } else {
                    setBtnLoading(false);
                    setError(
                        "Sorry, we couldn't process your payment. Payment not found"
                    );
                }
            })
            .catch((error) => {
                setBtnLoading(false);
                setError(
                    "Sorry, we couldn't process your payment. Unknown error occurred please try again"
                );
            });
    };

    const getAllPayments = () => {
        return paymentsByInvoice(params.no).then(({ data }) => {
            setPayments(data);
            return data;
        });
    };

    const checkout = () => {
        setBtnLoading(true);
        if (current === "mpesa-deposit") {
            searchPayment();
        }
        if (current === "bank-deposit") {
            if (invoice.description !== "Donation") {
                window.location.replace("/my-account/billing");
            } else {
                window.location.replace("/get-involved/donate");
            }
        }
    };

    let disabled = false;
    if (current === "mpesa-deposit") disabled = details.mpesaCode === "";

    useEffect(() => {
        getMember(setMember).finally(() => {
            if (member.first_name)
                setMember({
                    ...member,
                    name: member.first_name + " " + member.last_name,
                });
        });

        getMemberInvoice(params.id, updateInvoice);

        getAllPayments();
    }, []); //eslint-disable-line

    return (
        <div className="w-full lg:w-8/12 rounded-lg shadow-lg mx-auto my-5">
            <div className="shadow-md py-2 px-10">
                <a href="/">
                    <img
                        className="w-14"
                        src="/ccak_logo.png"
                        alt="CCAK Logo"
                    />
                </a>
            </div>
            <div className="flex justify-between pt-10 pb-5 mx-10 border-b">
                <h1 className="text-2xl font-semibold">
                    {invoice.description}
                </h1>
                <h1
                    className={`text-xl font-semibold uppercase ${
                        invoice.status === "unpaid"
                            ? "text-red-600"
                            : "text-green-600"
                    }`}
                >
                    STATUS: {invoice.status}
                </h1>
            </div>
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-6/12 p-10 space-y-5">
                    <div>
                        <h2 className="font-semibold text-lg my-2">
                            Billing Details
                        </h2>
                        <div className="w-full my-1">
                            <InputForm
                                type="text"
                                name="name"
                                label="Full Name"
                                required={true}
                                data={member}
                                updateData={setMember}
                            />
                        </div>
                        <div className="w-full my-1">
                            <InputForm
                                type="email"
                                name="email"
                                label="Email Address"
                                required={true}
                                data={member}
                                updateData={setMember}
                            />
                        </div>
                        <div className="w-full my-1">
                            <InputForm
                                type="text"
                                name="phone_number"
                                label="Phone Number"
                                required={true}
                                data={member}
                                updateData={setMember}
                            />
                        </div>
                    </div>
                    <div>
                        <h2 className="font-semibold text-lg mt-2">
                            Payment Method
                        </h2>
                        <div className="font-manjari my-5">
                            <div
                                className={`px-3 pt-4 pb-[0.7em] uppercase mt-2 rounded flex justify-between cursor-pointer text-gray-600 ${
                                    "mpesa-deposit" === current &&
                                    " text-white bg-gray-400"
                                } hover:text-white hover:bg-gray-400 transition-all duration-700 ease-in-out`}
                                onClick={() => {
                                    setCurrent("mpesa-deposit");
                                }}
                            >
                                <span className="tracking-wider font-semibold">
                                    Mpesa Deposit
                                </span>
                                <HiChevronRight className="-mt-[0.1em] text-2xl" />
                            </div>
                            {current === "mpesa-deposit" && (
                                <div className="p-3 bg-gray-100 rounded-b-lg">
                                    <div className="text-gray-700 tracking-wider flex flex-col space-y-1">
                                        <p>1. Go to the M-Pesa menu</p>
                                        <p>2. Click Lipa na M-Pesa</p>
                                        <p>3. Go to Buy Goods and Services</p>
                                        <p>
                                            4. Enter till number{" "}
                                            <b className="text-black">893302</b>
                                        </p>
                                        <p>
                                            5. Enter the amount you wish to pay
                                        </p>
                                        <p>6. Enter your M-Pesa PIN number</p>
                                    </div>

                                    <div className="mt-5 uppercase">
                                        <InputForm
                                            type="text"
                                            name="mpesaCode"
                                            label="MPESA CODE"
                                            required={true}
                                            data={details}
                                            updateData={updateDetails}
                                        />
                                    </div>
                                </div>
                            )}
                            <div
                                className={`px-3 pt-4 pb-[0.7em] uppercase mt-5 rounded flex justify-between cursor-pointer text-gray-600 ${
                                    "bank-deposit" === current &&
                                    " text-white bg-gray-400"
                                } hover:text-white hover:bg-gray-400 transition-all duration-700 ease-in-out`}
                                onClick={() => {
                                    setCurrent("bank-deposit");
                                }}
                            >
                                <span className="tracking-wider font-semibold">
                                    Bank Deposit
                                </span>
                                <HiChevronRight className="-mt-[0.1em] text-2xl" />
                            </div>
                            {current === "bank-deposit" && (
                                <div className="p-3 bg-gray-100 rounded-b-lg">
                                    <table className="tracking-wider text-gray-700">
                                        <tr>
                                            <td className="py-2">
                                                <b>Account Name:</b>
                                            </td>
                                            <td>
                                                {" "}
                                                Clean Cooking Association of
                                                Kenya (CCAK)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-1 tracking-widest w-[10em]">
                                                <b>Account No:</b>
                                            </td>
                                            <td>1450261021774</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1 tracking-widest w-[10em]">
                                                <b>Bank:</b>
                                            </td>
                                            <td>Equity Bank Limited</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1 tracking-widest w-[10em]">
                                                <b>Branch:</b>
                                            </td>
                                            <td>
                                                Lavington supreme centre branch
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-1 tracking-widest w-[10em]">
                                                <b>Currency:</b>
                                            </td>
                                            <td>Kenya Shillings</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1 tracking-widest w-[10em]">
                                                <b>Branch Code:</b>
                                            </td>
                                            <td>141</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1 tracking-widest w-[10em]">
                                                <b>Bank Code:</b>
                                            </td>
                                            <td>68</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1 tracking-widest w-[10em]">
                                                <b>SWIFT Code:</b>
                                            </td>
                                            <td>EQBLKENA</td>
                                        </tr>
                                    </table>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-6/12 p-10">
                    <h2 className="font-semibold text-lg my-2">
                        Checkout Summary
                    </h2>
                    {invoice.invoice_number && (
                        <>
                            <ul>
                                {invoice.items.map((item) => {
                                    return (
                                        <li className=" border-b py-5">
                                            <div className="font-semibold flex justify-between">
                                                <h3>
                                                    {item.quantity} x{" "}
                                                    {item.name}
                                                </h3>
                                                <h3 className="text-lg">
                                                    KES{" "}
                                                    {item.unit_price.toLocaleString()}
                                                </h3>
                                            </div>
                                            {item.name === "Registration" && (
                                                <p className="py-3 text-gray-600">
                                                    Secure your registration for
                                                    a lifetime, ensuring you
                                                    never miss out on the
                                                    exceptional privileges that
                                                    come with being a registered
                                                    member.
                                                </p>
                                            )}
                                            {item.name ===
                                                "Annual Subscription" && (
                                                <p className="py-3 text-gray-600">
                                                    From unique offers to
                                                    tailored experiences, this
                                                    subscription ensures you
                                                    stay connected and engaged
                                                    throughout the year.
                                                </p>
                                            )}
                                            {item.name === "Donation" && (
                                                <p className="py-3 text-gray-600">
                                                    Make a meaningful difference
                                                    by contributing to our
                                                    Charity Fund. Your donation
                                                    will directly support
                                                    various charitable
                                                    initiatives and projects
                                                    aimed at improving the lives
                                                    of those in need.
                                                </p>
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                            <div className="flex justify-between text-4xl font-bold my-5">
                                <h3>Total</h3>
                                <h3>KES {getTotal().toLocaleString()}</h3>
                            </div>

                            {payments.length > 0 && (
                                <div>
                                    <h3 className="text-lg font-semibold">
                                        Payments Made
                                    </h3>
                                    {payments.map((payment) => {
                                        return (
                                            <p className="uppercase flex justify-between border-b my-2 py-1">
                                                <span>
                                                    {payment.method} -{" "}
                                                    {payment.transaction_id}
                                                </span>
                                                <span className="font-bold">
                                                    KES{" "}
                                                    {payment.amount.toLocaleString()}
                                                </span>
                                            </p>
                                        );
                                    })}
                                    <div className="flex justify-between text-xl font-bold my-5">
                                        <h3>Total Amount Paid</h3>
                                        <h3>
                                            KES{" "}
                                            {invoice.paid_amount.toLocaleString()}
                                        </h3>
                                    </div>
                                    <div className="flex justify-between text-xl font-bold my-5 border-t py-2">
                                        <h3>Balance</h3>
                                        <h3>
                                            KES{" "}
                                            {invoice.balance.toLocaleString()}
                                        </h3>
                                    </div>
                                </div>
                            )}
                            <div
                                className={`flex items-center p-4 mb-4 text-sm ${
                                    success === "" && error === ""
                                        ? "text-blue-800 bg-blue-50"
                                        : error !== ""
                                        ? "text-red-800 bg-red-50"
                                        : "text-green-800 bg-green-50"
                                } rounded-lg `}
                                role="alert"
                            >
                                <svg
                                    className="flex-shrink-0 inline w-4 h-4 mr-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                </svg>
                                <span className="sr-only">Info</span>
                                {current === "bank-deposit" &&
                                    success === "" && (
                                        <div>
                                            <span className="font-medium">
                                                Info!
                                            </span>{" "}
                                            Once you've made the bank deposit.
                                            Kindly send your bank payment
                                            details to{" "}
                                            <span className="font-medium">
                                                finance@ccak.or.ke
                                            </span>
                                        </div>
                                    )}

                                {current === "mpesa-deposit" &&
                                    success === "" &&
                                    error === "" && (
                                        <div>
                                            <span className="font-medium">
                                                Info!
                                            </span>{" "}
                                            Kindly enter the Mpesa code and
                                            click continue
                                        </div>
                                    )}

                                {success !== "" && (
                                    <div>
                                        <span className="font-medium">
                                            Success!
                                        </span>{" "}
                                        {success}
                                    </div>
                                )}

                                {error !== "" && (
                                    <div>
                                        <span className="font-medium">
                                            Error!
                                        </span>{" "}
                                        {error}
                                    </div>
                                )}
                            </div>
                            <button
                                type="button"
                                disabled={disabled}
                                className={`w-full tracking-widest ${
                                    disabled || btnLoading
                                        ? "bg-gray-200"
                                        : "bg-[#329E49] hover:bg-[#3ab554]"
                                }  text-white flex justify-center font-medium rounded-lg text-sm px-5 py-3 my-5 transition duration-700 ease-in-out`}
                                onClick={() => {
                                    checkout();
                                }}
                            >
                                {btnLoading ? <ButtonLoader /> : "CONTINUE"}
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
