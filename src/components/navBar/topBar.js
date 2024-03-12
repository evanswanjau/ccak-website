import React from "react";

export const TopBar = ({ setDropDown }) => {
    const links = [
        {
            link: "tel:*789*788#",
            name: (
                <div
                    class="py-[0.2em]  px-2 bg-gray-200 items-center tracking-widest leading-none lg:rounded-full flex lg:inline-flex hover:bg-green-200 group transition-all duration-500"
                    role="alert"
                >
                    <span class="flex rounded-full bg-yellow-200 uppercase px-2 pt-1 pb-[0.5] text-xs font-bold mr-3">
                        USSD
                    </span>
                    <span class="font-bold mr-2 text-left flex-auto font-poppins text-black">
                        *789*788#
                    </span>
                </div>
            ),
        },
        {
            link: "tel:+254707111669",
            name: "+254 707 111 669",
        },
        {
            link: "mailto:info@ccak.or.ke",
            name: "info@ccak.or.ke",
        },
        {
            link: "/social-hub",
            name: "SOCIAL HUB",
        },
    ];

    return (
        <nav className="flex flex-row p-2 w-100 text-gray-600 bg-white items-centre lg:px-10 relative">
            <div className="w-3/12">
                <a href="/">
                    <img
                        className="w-[6.2em] absolute bg-white shadow-xl top-50"
                        src="/ccak_logo.png"
                        alt="CCAK Logo"
                    />
                </a>
            </div>
            <div className="w-9/12">
                <ul className="flex flex-row space-x-8 justify-end items-center">
                    {links.map((link) => (
                        <a
                            href={link.link}
                            key={link.name}
                            target={
                                link.link === "tel:*789*788#"
                                    ? "_blank"
                                    : "_self"
                            }
                            rel="noreferrer"
                        >
                            <li
                                className={` ${
                                    link.link !== "tel:*789*788#" &&
                                    "border-l hover:text-[#ED7423]"
                                }  pl-5 cursor-pointer  font-poppins font-semibold text-sm tracking-wide`}
                                onMouseEnter={() => {
                                    setDropDown({
                                        show: false,
                                        category: "",
                                    });
                                }}
                            >
                                {link.name}
                            </li>
                        </a>
                    ))}
                    <a href="/get-involved/donate">
                        <button className="border border-[#EC7422] text-[#EC7422] py-1 px-4 font-poppins font-bold hover:bg-[#ce621b] hover:text-white rounded-md tracking-widest transition delay-75 ease-in-out">
                            DONATE
                        </button>
                    </a>
                </ul>
            </div>
        </nav>
    );
};
