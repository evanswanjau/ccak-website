import { useState } from "react";
import { PersonalDetails } from "./forms/onboarding/personal";
import { ButtonLoader } from "../components/btnLoader";
import { validateEmail, validatePhoneNumber } from "../helpers/validation";
import { ErrorMessage } from "../components/forms/error";
import { InputForm } from "../components/forms/input-form";
import {
    generateInvoice,
    storeDonation,
    updateDonation,
} from "../api/api-calls";

const amountOptions = ["1000", "5000", "10000", "20000", "50000", "100000"];

export const DonateNow = ({ setShow }) => {
    const [btnLoading, setBtnLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, updateData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        company: "",
        designation: "",
        amount: 0,
        step: "personal",
    });

    const proceedToCheckout = (donation) => {
        const invoiceData = {
            description: "Donation",
            items: [
                {
                    name: "Donation",
                    quantity: 1,
                    unit_price: data.amount,
                },
            ],
            donation_id: donation.id,
            customer: {
                name: data.first_name + " " + data.last_name,
                email: data.email,
                phone_number: data.phone_number,
                address: data.postal_address,
            },
        };

        generateInvoice(invoiceData).then(({ data }) => {
            updateDonation({
                ...donation,
                invoice_number: data.invoice_number,
            }).then(() => {
                window.location.replace(
                    "/checkout/invoice/" +
                        data.id +
                        "/" +
                        data.invoice_number +
                        "/donation"
                );
            });
        });
    };

    const submitData = () => {
        try {
            validateEmail(data.email);
            validatePhoneNumber(data.phone_number);

            setError(false);

            if (data.step === "personal")
                updateData({ ...data, step: "amount" });
            if (data.step === "amount")
                storeDonation(data).then(({ data }) => {
                    proceedToCheckout(data);
                });
        } catch (error) {
            setBtnLoading(false);
            setError(error.message);
        }
    };

    let disabled = false;

    if (data.step === "personal") {
        disabled =
            data.first_name === "" ||
            data.last_name === "" ||
            data.email === "" ||
            data.phone_number === "" ||
            data.company === "" ||
            data.designation === "";
    } else if (data.step === "amount") {
        disabled = data.amount === "" || data.amount === 0;
    }

    return (
        <div className="bg-black bg-opacity-50 text-white fixed w-full h-screen z-50 -mt-[3.8em] lg:-mt-[6.6em]">
            <div className="flex items-center justify-center min-h-screen p-2">
                <div className="relative bg-white text-black flex w-full md:w-10/12 lg:w-8/12 mx-auto justify-between rounded-lg shadow">
                    <div
                        style={{
                            backgroundImage: `url(${
                                process.env.REACT_APP_IMAGEKIT_URL +
                                "donate_page_section_1.jpg"
                            })`,
                        }}
                        className="hidden lg:flex w-6/12 bg-cover bg-center bg-no-repeat rounded-l-lg"
                    ></div>

                    <div className="w-full lg:w-6/12 px-5 overflow-y-auto max-h-[calc(100vh-1rem)]">
                        <div className="flex items-start  mt-5">
                            <h3 className="font-semibold text-gray-800  text-2xl lg:text-4xl">
                                {data.step === "personal"
                                    ? "Personal Details"
                                    : "Choose Amount"}
                            </h3>
                            <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                                data-modal-hide="staticModal"
                                onClick={() => {
                                    setShow(false);
                                }}
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                        {error && (
                            <ErrorMessage error={error} setError={setError} />
                        )}
                        {data.step === "personal" && (
                            <div>
                                <PersonalDetails
                                    data={data}
                                    updateData={updateData}
                                />
                            </div>
                        )}

                        {data.step === "amount" && (
                            <div>
                                <div className="flex flex-wrap my-5">
                                    {amountOptions.map((option) => {
                                        return (
                                            <p
                                                key={option}
                                                className="border p-3 pb-2 w-25 my-2 mr-3 text-lg rounded-lg cursor-pointer"
                                                onClick={() => {
                                                    updateData({
                                                        ...data,
                                                        amount: parseInt(
                                                            option
                                                        ),
                                                    });
                                                }}
                                            >
                                                {parseInt(
                                                    option
                                                ).toLocaleString("en-US")}{" "}
                                                KES
                                            </p>
                                        );
                                    })}
                                </div>
                                <InputForm
                                    type="number"
                                    name="amount"
                                    label="Amount to donate (KSH)"
                                    required={true}
                                    data={data}
                                    updateData={updateData}
                                />
                            </div>
                        )}

                        <div className="flex space-x-4">
                            <button
                                type="button"
                                className="w-full tracking-widest bg-white hover:bg-gray-800 text-black hover:text-white border border-gray-800 flex justify-center font-medium rounded-lg text-sm px-5 py-3 my-5 transition duration-200 ease-in-out"
                                onClick={() => {
                                    if (data.step === "personal")
                                        setShow(false);

                                    if (data.step === "amount")
                                        updateData({
                                            ...data,
                                            step: "personal",
                                        });
                                }}
                            >
                                BACK
                            </button>
                            <button
                                type="button"
                                disabled={disabled}
                                className={`w-full tracking-widest ${
                                    disabled || btnLoading
                                        ? "bg-gray-200"
                                        : "bg-[#329E49] hover:bg-[#3ab554]"
                                }  text-white flex justify-center font-medium rounded-lg text-sm px-5 py-3 my-5 transition duration-700 ease-in-out`}
                                onClick={() => {
                                    submitData();
                                }}
                            >
                                {btnLoading ? <ButtonLoader /> : "CONTINUE"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
