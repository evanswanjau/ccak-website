const InfoText = ({ name }) => {
    const infoTexts = {
        Registration:
            "Secure your registration for a lifetime, ensuring you never miss out on the exceptional privileges that come with being a registered member.",
        "Annual Subscription":
            "From unique offers to tailored experiences, this subscription ensures you stay connected and engaged throughout the year.",
        Donation:
            "Make a meaningful difference by contributing to our Charity Fund. Your donation will directly support various charitable initiatives and projects aimed at improving the lives of those in need.",
    };
    return <p className="py-3 text-gray-600">{infoTexts[name]}</p>;
};

const PaymentInfo = ({ payment }) => (
    <p className="uppercase flex justify-between border-b my-2 py-1">
        <span>
            {payment.method} - {payment.transaction_id}
        </span>
        <span className="font-bold">KES {payment.amount.toLocaleString()}</span>
    </p>
);

const AlertMessage = ({ current, success, error, member, invoice }) => {
    const messages = {
        "bank-deposit": `Once you've made the bank deposit. Kindly send your bank payment details to finance@ccak.or.ke`,
        "mpesa-deposit": `Kindly enter the Mpesa code and click continue`,
        "stk-push": `A payment request will be been sent to ${
            member.phone_number
        } for amount ${invoice.balance.toLocaleString()}`,
    };

    return (
        <div>
            <span className="font-medium">
                {(success && "Success!") || (error && "Error!") || "Info!"}
            </span>{" "}
            {(success && success) || (error && error) || messages[current]}
        </div>
    );
};

export const CheckoutSummary = ({
    invoice,
    payments,
    current,
    success,
    error,
    member,
    total,
}) => {
    const currency = "KES";
    return (
        <>
            <h2 className="font-semibold text-lg my-2">Checkout Summary</h2>
            {invoice.invoice_number && (
                <>
                    <ul>
                        {invoice.items.map((item) => {
                            return (
                                <li key={item.id} className=" border-b py-5">
                                    <div className="font-semibold flex justify-between">
                                        <h3>
                                            {item.quantity} x {item.name}
                                        </h3>
                                        <h3 className="text-lg">
                                            {currency}{" "}
                                            {item.unit_price.toLocaleString()}
                                        </h3>
                                    </div>
                                    <div className="hidden md:block">
                                        <InfoText name={item.name} />
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="flex justify-between text-4xl font-bold my-5">
                        <h3>Total</h3>
                        <h3>
                            {currency} {total}
                        </h3>
                    </div>
                    {payments.length > 0 && (
                        <div>
                            <h3 className="text-lg font-semibold">
                                Payments Made
                            </h3>
                            {payments.map((payment, i) => (
                                <PaymentInfo
                                    key={i}
                                    payment={payment}
                                />
                            ))}
                            <div className="flex justify-between text-xl font-bold my-5">
                                <h3>Total Amount Paid</h3>
                                <h3>
                                    KES {invoice.paid_amount.toLocaleString()}
                                </h3>
                            </div>
                            <div className="flex justify-between text-xl font-bold my-5 border-t py-2">
                                <h3>Balance</h3>
                                <h3>KES {invoice.balance.toLocaleString()}</h3>
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
                        <AlertMessage
                            current={current}
                            success={success}
                            error={error}
                            member={member}
                            invoice={invoice}
                        />
                    </div>
                </>
            )}
        </>
    );
};
