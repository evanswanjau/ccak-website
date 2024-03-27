import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useState, useEffect } from "react";
import axios from "axios";
import { paymentsByInvoice, activateMpesaPayment } from "../../api/api-calls";
import { ButtonLoader } from "../../components/btnLoader";
import { getInvoice } from "../../api/member-api-calls";
import { BillingDetails } from "./billing-details";
import { CheckoutOptions } from "./checkout-options";
import { CheckoutSummary } from "./checkout-summary";
import { PaymentComplete } from "./payment-complete";

export const CheckoutInvoice = () => {
    const params = useParams();
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const [member, setMember] = useState({});
    const [invoice, updateInvoice] = useState({});
    const [payments, setPayments] = useState([]);
    const [btnLoading, setBtnLoading] = useState(false);
    const [current, setCurrent] = useState("stk-push");
    const [completed, setCompleted] = useState(false);
    const [details, updateDetails] = useState({
        mpesaCode: "",
        mpesaNumber: "",
    });

    const parsePhone = (phoneNumber) => {
        phoneNumber = String(phoneNumber);
        if (!phoneNumber.startsWith("+254")) {
            if (phoneNumber.startsWith("0")) {
                phoneNumber = "+254" + phoneNumber.substring(1);
            } else if (phoneNumber.startsWith("254")) {
                phoneNumber = "+" + phoneNumber;
            } else {
                phoneNumber = "+254" + phoneNumber;
            }
        }
        return phoneNumber;
    };

    const getTotal = () => {
        let total = 0;

        invoice.items.map((item) => {
            total += item.unit_price * item.quantity;
            return total;
        });

        return total;
    };

    const calculateTotalPaid = (payments) => {
        if (Array.isArray(payments)) {
            return payments.reduce(
                (total, payment) => total + parseFloat(payment.amount),
                0
            );
        } else {
            return 0;
        }
    };

    const checkPaymentComplete = (totalPaid, total) => {
        return totalPaid >= total;
    };

    const searchPayment = async (mpesaCode, attempt = 0) => {
        if (!mpesaCode || attempt > 5) return;

        setBtnLoading(true);

        try {
            const { data } = await activateMpesaPayment({
                transaction_id: mpesaCode,
                invoice_number: params.no,
                email: invoice.email || member.email,
            });

            if (data.length > 0) {
                const paymentAmount = parseFloat(data[0].amount);

                if (paymentAmount < getTotal()) {
                    setError("");
                    setSuccess(
                        `Your partial payment of KSH ${paymentAmount.toLocaleString()} has been received`
                    );

                    const allPayments = await getAllPayments();
                    const totalPaid = calculateTotalPaid(allPayments.results);

                    if (checkPaymentComplete(totalPaid, getTotal())) {
                        setCompleted(true);
                    } else {
                        await getInvoice(
                            params.id,
                            updateInvoice,
                            params.type !== "donation"
                        );
                        await getAllPayments();
                    }
                }

                if (checkPaymentComplete(paymentAmount, getTotal())) {
                    setCompleted(true);
                }
            } else {
                if (current === "stk-push") {
                    setTimeout(
                        () => searchPayment(mpesaCode, attempt + 1),
                        3000
                    );
                } else {
                    throw new Error("Payment not found");
                }
            }
        } catch (error) {
            setError(
                `Sorry, we couldn't process your payment. ${error.message}`
            );
            setBtnLoading(false);
        }
    };

    const getAllPayments = () => {
        return paymentsByInvoice(params.no).then(({ data }) => {
            setPayments(data.results);
            return data;
        });
    };

    const checkout = async () => {
        setBtnLoading(true);
        try {
            if (current === "mpesa-deposit") {
                await searchPayment(details.mpesaCode.toUpperCase());
            } else if (current === "bank-deposit") {
                handleBankDeposit();
            } else if (current === "stk-push") {
                await handleStkPush();
            }
        } catch (error) {
            setError(
                "An error occurred during the checkout process. Please try again."
            );
            setSuccess("");
        }
    };

    const handleBankDeposit = () => {
        const redirectUrl =
            invoice.description !== "Donation"
                ? "/my-account/billing"
                : "/get-involved/donate";
        window.location.replace(redirectUrl);
    };

    const handleStkPush = async () => {
        const [firstName, lastName] = member.name.split(" ");
        setError("");
        setSuccess("");
        const response = await axios.post(
            `${process.env.REACT_APP_API_URL}kopokopo/payment/receive`,
            {
                first_name: firstName,
                last_name: lastName,
                email: member.email,
                phone_number: parsePhone(member.phone_number),
                amount: String(Number(invoice.balance)),
                metadata: {
                    customer_id: 123,
                },
            }
        );
        await checkPaymentStatus(response.data.data.id);
    };

    const checkPaymentStatus = async (paymentId) => {
        const intervalId = setInterval(async () => {
            const response = await axios.post(
                `${process.env.REACT_APP_API_URL}kopokopo/payment/query`,
                {
                    payment_id: paymentId,
                }
            );
            const status = response.data.data.attributes.status;
            if (status === "Received" || status === "Pending") {
                setSuccess(
                    "A payment request has been sent to your phone, kindly enter your M-PESA pin to complete the transaction"
                );
                setError("");
            } else if (status === "Failed") {
                clearInterval(intervalId);
                setSuccess("");
                setError(response.data.data.attributes.event.errors);
                setBtnLoading(false);
            } else if (status === "Success") {
                if (response.data.data.attributes.event.resource) {
                    clearInterval(intervalId);
                    await searchPayment(
                        response.data.data.attributes.event.resource.reference.toUpperCase()
                    );
                }
            }
        }, 1000);
    };

    let disabled = false;
    if (current === "mpesa-deposit") disabled = details.mpesaCode === "";

    useEffect(() => {
        getInvoice(params.id, updateInvoice, params.type !== "donation").then(
            (data) => {
                setMember({ ...member, ...data.customer });
            }
        );

        getAllPayments();
    }, []); //eslint-disable-line

    return (
        <div className="w-full lg:w-8/12 md:rounded-lg md:shadow-lg mx-auto my-5">
            {completed ? (
                <PaymentComplete />
            ) : (
                <>
                    <div className="shadow-md py-2 px-6">
                        <a href="/">
                            <img
                                className="w-14"
                                src="/ccak_logo.png"
                                alt="CCAK Logo"
                            />
                        </a>
                    </div>
                    <div className="flex justify-between pt-10 pb-5 mx-6 border-b">
                        <h1 className="text-2xl font-semibold">
                            {invoice.description}
                        </h1>
                        <h1
                            className={`flex text-xl font-semibold uppercase ${
                                invoice.status === "unpaid"
                                    ? "text-red-600"
                                    : "text-green-600"
                            }`}
                        >
                            {invoice?.status}
                        </h1>
                    </div>
                    <div className="flex flex-col md:flex-row md:space-x-4 lg:space-x-8 p-6">
                        <div className="w-full md:w-6/12 flex flex-col space-y-5">
                            <BillingDetails
                                member={member}
                                setMember={setMember}
                            />
                            <CheckoutOptions
                                current={current}
                                setCurrent={setCurrent}
                                member={member}
                                invoice={invoice}
                                details={details}
                                updateDetails={updateDetails}
                                setError={setError}
                                setSuccess={setSuccess}
                            />
                        </div>
                        <div className="w-full md:w-6/12">
                            {invoice.items && invoice.items.length > 0 && (
                                <CheckoutSummary
                                    invoice={invoice}
                                    payments={payments}
                                    current={current}
                                    success={success}
                                    error={error}
                                    member={member}
                                    total={getTotal()}
                                />
                            )}
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
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
