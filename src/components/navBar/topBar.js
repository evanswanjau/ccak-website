import React from "react";

export const TopBar = ({ setDropDown }) => {
    const links = [
        {
            link: "https://www.ccak-ics.or.ke",
            name: "CCAK ICS",
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
                                    link.name !== "CCAK ICS" && "border-l"
                                }  px-5 cursor-pointer hover:text-[#ED7423]`}
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
                                    link.link === "https://www.ccak-ics.or.ke"
                                        ? "_blank"
                                        : "_self"
                                }
                                rel="noreferrer"
                            >
                                <li
                                    className={` ${
                                        link.name !== "CCAK ICS" && "border-l"
                                    }  px-5 cursor-pointer hover:text-[#ED7423]`}
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
