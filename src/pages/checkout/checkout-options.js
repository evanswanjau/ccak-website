import { HiChevronRight } from "react-icons/hi";
import { InputForm } from "../../components/forms/input-form";

const PaymentOption = ({
    option,
    current,
    setCurrent,
    setError,
    setSuccess,
}) => {
    const handleClick = () => {
        setCurrent(option.key);
        setError("");
        setSuccess("");
    };

    return (
        <>
            <div
                className={`px-3 pt-4 pb-[0.7em] uppercase mt-5 rounded flex justify-between cursor-pointer border-2 border-gray-800 text-gray-800 ${
                    current === option.key && " text-white bg-gray-800"
                } hover:text-white hover:bg-gray-800 transition-all duration-700 ease-in-out`}
                onClick={handleClick}
            >
                <h1 className="tracking-wider font-bold">{option.label}</h1>
                <HiChevronRight className="-mt-[0.1em] text-2xl" />
            </div>
            {current === option.key && (
                <div className="p-3 bg-gray-100 rounded-b-lg">
                    {option.content}
                </div>
            )}
        </>
    );
};

export const CheckoutOptions = ({
    current,
    setCurrent,
    member,
    invoice,
    details,
    updateDetails,
    setError,
    setSuccess,
}) => {
    const paymentOptions = [
        {
            key: "stk-push",
            label: "STK push",
            content: (
                <>
                    <p>
                        1. A payment request will be sent to{" "}
                        <b>{member.phone_number}</b> for amount{" "}
                        <b>{invoice.balance}</b>
                    </p>
                    <p>2. Enter your M-PESA pin to complete the transaction</p>
                </>
            ),
        },
        {
            key: "mpesa-deposit",
            label: "Mpesa Deposit",
            content: (
                <>
                    <div className="text-gray-700 tracking-wider flex flex-col space-y-1">
                        <p>1. Go to the M-Pesa menu</p>
                        <p>2. Click Lipa na M-Pesa</p>
                        <p>3. Go to Buy Goods and Services</p>
                        <p>
                            4. Enter till number{" "}
                            <b className="text-black">893302</b>
                        </p>
                        <p>5. Enter the amount you wish to pay</p>
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
                </>
            ),
        },
        {
            key: "bank-deposit",
            label: "Bank Deposit",
            content: (
                <table className="tracking-wider text-gray-700">
                    <tbody>
                        <tr>
                            <td className="py-2">
                                <b>Account Name:</b>
                            </td>
                            <td>Clean Cooking Association of Kenya (CCAK)</td>
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
                            <td>Lavington supreme centre branch</td>
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
                    </tbody>
                </table>
            ),
        },
    ];

    return (
        <div>
            <h2 className="font-semibold text-lg mt-2">Payment Method</h2>
            <div className="font-manjari my-5">
                {paymentOptions.map((option) => (
                    <PaymentOption
                        key={option.key}
                        option={option}
                        current={current}
                        setCurrent={setCurrent}
                        member={member}
                        invoice={invoice}
                        details={details}
                        updateDetails={updateDetails}
                        setError={setError}
                        setSuccess={setSuccess}
                    />
                ))}
            </div>
        </div>
    );
};
