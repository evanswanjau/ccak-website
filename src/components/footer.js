import { useState } from "react";
import { InputForm } from "./forms/input-form";
import { subscribeUser } from "../api/api-calls";
import { ErrorMessage } from "./forms/error";
import { SuccessMessage } from "./forms/success";
import {
    BsTwitter,
    BsFacebook,
    BsLinkedin,
    BsYoutube,
    BsTiktok,
    BsInstagram,
} from "react-icons/bs";

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
                            className="w-20"
                            src="/ccak_logo.png"
                            alt="CCAK Logo"
                        />
                    </a>
                    <div className="py-10 space-x-8 space flex">
                        <a
                            href="https://web.facebook.com/CleanCookingKe"
                            target="_blank"
                            rel="noreferrer"
                            title="@CleanCookingKe"
                        >
                            <BsFacebook className="text-xl text-[#3b5998] hover:text-[#ED7423] transition duration-300 ease-in-out" />
                        </a>
                        <a
                            href="https://twitter.com/CleanCookingKe"
                            target="_blank"
                            rel="noreferrer"
                            title="@CleanCookingKe"
                        >
                            <BsTwitter className="text-xl text-[#00ACEE] hover:text-[#ED7423] transition duration-300 ease-in-out" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/clean-cooking-association-of-kenya-ccak-ba852517b"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <BsLinkedin className="text-xl text-[#0077b5] hover:text-[#ED7423] transition duration-300 ease-in-out" />
                        </a>
                        <a
                            href="https://www.youtube.com/@cleancookingassociationofk1288"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <BsYoutube className="text-xl text-[#FF0000] hover:text-[#ED7423] transition duration-300 ease-in-out" />
                        </a>
                        <a
                            href="https://www.tiktok.com/@ccakenya"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <BsTiktok className="text-xl text-black hover:text-[#ED7423] transition duration-300 ease-in-out" />
                        </a>
                        <a
                            href="https://www.instagram.com/ccakenya"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <BsInstagram className="text-xl text-[#D62976] hover:text-[#ED7423] transition duration-300 ease-in-out" />
                        </a>
                    </div>
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
