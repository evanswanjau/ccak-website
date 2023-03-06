import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logoblack.svg";

export const TopBar = ({ setDropDown }) => {
    const links = [
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
        <div className="flex flex-wrap p-2 w-100 font-manjari text-gray-600">
            <div className="w-3/12">
                <Link to="/">
                    <img className="mx-5" src={logo} alt="CCAK Logo" />
                </Link>
            </div>
            <div className="w-9/12">
                <ul className="flex flex-row justify-end items-center">
                    {links.map((link) => (
                        <a href={link.link}>
                            <li
                                className={` ${
                                    link.name !== "RESOURCE CENTRE" &&
                                    "border-l"
                                }  px-5 cursor-pointer hover:text-[#ED7423]`}
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
                    <Link to="/donate">
                        <button className="bg-[#329E49] text-white pt-2 pb-1 px-5 mx-5 hover:bg-[#3ab554] rounded-md tracking-widest">
                            DONATE
                        </button>
                    </Link>
                </ul>
            </div>
        </div>
    );
};
