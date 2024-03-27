import { HiCheckCircle } from "react-icons/hi";

export const PaymentComplete = () => {
    return (
        <div className="py-24 flex flex-col justify-center items-center">
            <HiCheckCircle className="text-[8em] mx-auto text-green-600 mb-10" />
            <h2 className="text-center text-gray-800 font-semibold text-2xl">
                Your payment is complete
            </h2>
            <p className="text-center text-gray-600">
                Thank you for your payment. You will receive an email
                confirmation shortly.
            </p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-x-4 md:space-y-0 mt-10">
                <a
                    className="tracking-widest bg-green-600 hover:border-green-700 hover:bg-green-700 text-white flex justify-center font-bold rounded-lg text-sm px-5 pt-3 pb-[.5em] transition duration-700 ease-in-out"
                    href="/"
                >
                    BACK TO MAIN SITE
                </a>
                <a
                    className="tracking-widest border-2 border-green-600 hover:border-green-700 hover:bg-green-700 text-green-600 hover:text-white font-semibold flex justify-center rounded-lg text-sm px-5 pt-3 pb-[.5em] transition duration-700 ease-in-out"
                    href="/membership/register"
                >
                    BECOME A MEMBER
                </a>
            </div>
        </div>
    );
};
