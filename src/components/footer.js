import { useState } from "react";
import { InputForm } from "./forms/input-form";
import { subscribeUser } from "../api/api-calls";
import { ErrorMessage } from "./forms/error";
import { SuccessMessage } from "./forms/success";

export const Footer = () => {
    const [data, updateData] = useState({ email: "" });
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const links = [
        { name: "Home", url: "/" },
        { name: "About Us", url: "/who-we-are/about-us" },
        { name: "What We Do", url: "/what-we-do" },
        { name: "Events", url: "/media-centre/events" },
        {
            name: "Donate",
            url: "/get-involved/donate",
        },
        { name: "Contact Us", url: "/get-involved/contact-us" },
    ];

    return (
        <footer className="w-full px-5 md:px-10 pt-5 bg-[#ED7423] bg-opacity-30">
            <div className="flex flex-col lg:flex-row lg:space-x-8">
                <div className="w-full lg:w-8/12 flex flex-col">
                    <a href="/">
                        <img
                            className="w-20 mb-8"
                            src="/ccak_logo.png"
                            alt="CCAK Logo"
                        />
                    </a>
                    <ul className="flex flex-col md:flex-row md:space-x-10 space-y-4 md:space-y-0 list-none">
                        {links.map((item, i) => {
                            return (
                                <a href={item.url} key={i}>
                                    <li className="text-black font-semibold hover:text-[#ED7423] transition duration-300 ease-in-out">
                                        {item.name}
                                    </li>
                                </a>
                            );
                        })}
                    </ul>
                </div>
                <div className="w-full lg:w-4/12 pt-5 lg:pt-14 font-manjari justfy-end items-end">
                    {error && (
                        <ErrorMessage error={error} setError={setError} />
                    )}
                    {success && (
                        <SuccessMessage
                            success={success}
                            setSuccess={setSuccess}
                        />
                    )}
                    <div className="w-full space-x-4 flex lg:flex-row">
                        <InputForm
                            type="text"
                            name="email"
                            label="email address"
                            data={data}
                            updateData={updateData}
                        />
                        <button
                            className="bg-[#329E49] leading-none pb-3 pt-4 px-4 mt-5 font-manjari text-white hover:bg-[#ED7423] hover:text-white rounded-md transition duration-300 ease-in-out tracking-widest"
                            onClick={() => {
                                subscribeUser(data, setSuccess, setError);
                            }}
                        >
                            SUBSCRIBE
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row text-black border-t border-gray-600 py-5 mt-12 text-sm">
                <p className="w-full lg:w-6/12">
                    © Clean Cooking Association Kenya 2023 &nbsp;|&nbsp; All
                    rights Reserved
                </p>
                <p className="w-full lg:w-6/12 lg:text-right">
                    <a
                        href="legal/terms-and-conditions"
                        className="hover:text-[#ED7423] transition delay-100 ease-in-out"
                    >
                        Terms and Conditions
                    </a>
                    &nbsp; | &nbsp;
                    <a
                        href="legal/privacy-policy"
                        className="hover:text-[#ED7423]"
                    >
                        Privacy Policy
                    </a>
                </p>
            </div>
        </footer>
    );
};
