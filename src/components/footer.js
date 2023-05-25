import { useState } from "react";
import { InputForm } from "./forms/input-form";

export const Footer = () => {
    const [data, updateData] = useState({ email: "" });
    const links = [
        { name: "About Us", url: "/who-we-are/about-us" },
        {
            name: "Our Mission",
            url: "/who-we-are/about-us#our-mission",
        },
        { name: "Our Vision", url: "/who-we-are/about-us#our-vision" },
        {
            name: "Our Partners",
            url: "/who-we-are/about-us#our-partners",
        },
        { name: "Our Team", url: "/who-we-are/our-team" },
    ];

    return (
        <footer className="w-full px-5 md:px-10 pt-5 text-gray-800 bg-gray-50">
            <div className="flex flex-col lg:flex-row lg:space-x-8">
                <div className="w-full lg:w-8/12 flex flex-col">
                    <a href="/">
                        <img
                            className="w-40 mb-8"
                            src="/ccak_side_logo.png"
                            alt="CCAK Logo"
                        />
                    </a>
                    <ul className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 list-none">
                        {links.map((item, i) => {
                            return (
                                <a href={item.url} key={i}>
                                    <li className="text-gray-800 hover:text-[#ED7423] transition duration-300 ease-in-out">
                                        {item.name}
                                    </li>
                                </a>
                            );
                        })}
                    </ul>
                </div>
                <div className="w-full lg:w-4/12 pt-5 font-manjari items-end flex space-x-4 lg:flex-row">
                    <InputForm
                        type="text"
                        name="email"
                        label="email address"
                        data={data}
                        updateData={updateData}
                    />
                    <button className="bg-[#329E49] leading-none pb-3 pt-4 px-4 mt-5 font-manjari text-white hover:bg-[#ED7423] hover:text-white rounded-md transition duration-300 ease-in-out tracking-widest">
                        SUBSCRIBE
                    </button>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row border-t py-5 mt-12 text-sm">
                <p className="w-full lg:w-6/12">
                    © Clean Cooking Association Kenya 2023 &nbsp;|&nbsp; All
                    rights Reserved
                </p>
                <p className="w-full lg:w-6/12 lg:text-right">
                    <a
                        href="legal/terms-and-conditions"
                        className="hover:text-[#ED7423]"
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
