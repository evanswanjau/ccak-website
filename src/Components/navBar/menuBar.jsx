import React from "react";

export const MenuBar = ({ setDropDown }) => {
    const links = [
        {
            link: "/",
            name: "HOME",
        },
        {
            link: "#",
            name: "WHO WE ARE",
        },
        {
            link: "/what-we-do",
            name: "WHAT WE DO",
        },
        {
            link: "#",
            name: "GET INVOLVED",
        },
        {
            link: "#",
            name: "MEMBERSHIP",
        },
    ];

    return (
        <div className="flex flex-row items-center py-5 px-5 w-100 font-manjari text-gray-600 bg-[#329E49]">
            <div className="lg:w-10/12 pt-1">
                <ul className="flex flex-row">
                    {links.map((link) =>
                        link.link === "#" ? (
                            <li
                                className="px-5 cursor-pointer truncate text-lg text-gray-100 hover:text-white"
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
                            <a href={link.link}>
                                <li className="px-5 cursor-pointer truncate text-lg text-gray-100 hover:text-white">
                                    {link.name}
                                </li>
                            </a>
                        )
                    )}
                </ul>
            </div>
            <div className="lg:w-2/12">
                <input
                    className="w-full placeholder-gray-300 bg-[#2e8641] text-white font-manjari outline-0 rounded-md pt-2 pb-1 px-3"
                    type="text"
                    placeholder={`Search`}
                />
            </div>
        </div>
    );
};
