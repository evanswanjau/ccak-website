import React from "react";
import { Link } from "react-router-dom";
import { magnifyingGlass } from "@heroicons/react/24/solid";

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
        <div className="flex flex-wrap pt-7 px-5 pb-5 w-100 font-manjari text-gray-600 bg-[#329E49]">
            <div className="w-9/12">
                <ul className="flex flex-row">
                    {links.map((link) => (
                        <a href={link.link}>
                            <li
                                className="px-5 cursor-pointer text-lg text-white hover:text-[#ED7423]"
                                onClick={() => {
                                    link.link === "#" &&
                                        setDropDown({
                                            show: true,
                                            category: link.name,
                                        });
                                }}
                            >
                                {link.name}
                            </li>
                        </a>
                    ))}
                </ul>
            </div>
            <div className="w-3/12">
                <magnifyingGlass />
                {/* <Link to="/">
                    <img className="mx-5" src={logo} alt="CCAK Logo" />
                </Link> */}
            </div>
        </div>
    );
};
