import React from "react";

export const TopBar = ({ setDropDown }) => {
    const links = [
        {
            link: "/social-hub/home",
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
                        className="w-28"
                        src="/ccak_side_logo.png"
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
                                    link.name !== "SOCIAL HUB" &&
                                    "border-l"
                                }  px-5 cursor-pointer hover:text-[#ED7423]`}
                                onClick={() => {
                                    setDropDown({
                                        show: true,
                                        category: link.name,
                                    });
                                }}
                            >
                                {link.name}
                            </li>
                        ) : (
                            <a href={link.link} key={link.name}>
                                <li
                                    className={` ${
                                        link.name !== "SOCIAL HUB" &&
                                        "border-l"
                                    }  px-5 cursor-pointer hover:text-[#ED7423]`}
                                >
                                    {link.name}
                                </li>
                            </a>
                        )
                    )}
                    <a href="/get-involved/donate">
                        <button className="bg-[#329E49] text-white pt-2 pb-1 px-5 mx-5 hover:bg-[#3ab554] rounded-md tracking-widest">
                            DONATE
                        </button>
                    </a>
                </ul>
            </div>
        </nav>
    );
};
