import { useState } from "react";
import { HiChevronRight } from "react-icons/hi";
import { InputForm } from "../../../components/forms/input-form";

const options = ["bank deposit", "mpesa deposit", "mpesa express"];

export const Checkout = ({ data, updateData }) => {
    const [current, setCurrent] = useState("bank deposit");
    const [details, updateDetails] = useState({
        mpesaCode: "",
        mpesaNumber: data.phone_number,
    });

    console.log(details);
    console.log(data);

    return (
        <div className="flex font-manjari space-x-4 my-5">
            <div className="w-full lg:w-5/12 rounded-lg p-2">
                <ul className="flex flex-col space-y-2">
                    {options.map((option) => {
                        return (
                            <li
                                className={`px-3 pt-4 pb-[0.7em] uppercase rounded-lg flex justify-between cursor-pointer text-gray-600 ${
                                    option === current &&
                                    "shadow-lg text-white bg-gray-400"
                                } hover:shadow-lg hover:text-white hover:bg-gray-400 transition-all duration-700 ease-in-out`}
                                onClick={() => {
                                    setCurrent(option);
                                }}
                            >
                                <span className="tracking-wider font-semibold">
                                    {option}
                                </span>
                                <HiChevronRight className="-mt-[0.1em] text-2xl" />
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="w-full lg:w-7/12 bg-gray-50 rounded-lg p-3">
                {current === "bank deposit" && (
                    <div>
                        <table className="tracking-wider text-gray-700">
                            <tr>
                                <td className="py-2">
                                    <b>Account Name:</b>
                                </td>
                                <td>
                                    {" "}
                                    Clean Cooking Association of Kenya (CCAK)
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
                        </table>
                    </div>
                )}
                {current === "mpesa deposit" && (
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
                )}
                <br />

                {current === "mpesa express" && (
                    <>
                        <div className="text-gray-700 tracking-wider flex flex-col space-y-1">
                            <p>1. Confirm your checkout phone number</p>
                            <p>2. Click Continue</p>
                            <p>
                                3. A payment request will been sent to your
                                mobile device.
                            </p>
                            <p>
                                4. Enter your M-PESA pin to complete your
                                transaction.
                            </p>
                        </div>
                        <div className="mt-5 uppercase">
                            <InputForm
                                type="text"
                                name="mpesaNumber"
                                label="Mpesa Phone Number"
                                required={true}
                                data={details}
                                updateData={updateDetails}
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
