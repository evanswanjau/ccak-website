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
                        New
                    </span>
                    <span class="font-bold mr-2 text-left flex-auto font-montserrat text-black">
                        *789*788#
                    </span>
                </div>
            ),
        },
        {
            link: "/social-hub",
            name: "SOCIAL HUB",
        },
        {
            link: "#",
            name: "RESOURCE CENTRE",
        },
        {
            link: "#",
            name: "MEDIA CENTRE",
        },
    ];

    return (
        <nav className="flex flex-row p-2 w-100 font-manjari text-gray-600 bg-white items-centre lg:px-16">
            <div className="w-3/12">
                <a href="/">
                    <img
                        className="w-10"
                        src="/ccak_logo.png"
                        alt="CCAK Logo"
                    />
                </a>
            </div>
            <div className="w-9/12">
                <ul className="flex flex-row justify-end items-center">
                    {links.map((link) =>
                        link.link === "#" ? (
                            <li
                                key={link.name}
                                className={` ${
                                    link.link !== "tel:*789*788#" &&
                                    "border-l hover:text-[#ED7423]"
                                }  px-5 cursor-pointer`}
                                onMouseEnter={() => {
                                    setDropDown({
                                        show: true,
                                        category: link.name,
                                    });
                                }}
                            >
                                {link.name}
                            </li>
                        ) : (
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
                                    }  px-5 cursor-pointer`}
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
                        )
                    )}
                    <a href="/get-involved/donate">
                        <button className="bg-[#EC7422] text-white pt-[0.3em] px-3 mx-5 hover:bg-[#ce621b] rounded-md tracking-widest">
                            DONATE
                        </button>
                    </a>
                </ul>
            </div>
        </nav>
    );
};
