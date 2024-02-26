import React, { useState } from "react";
import {
    UserIcon,
    BookmarkIcon,
    CreditCardIcon,
    LockClosedIcon,
    HomeIcon,
    ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { logout } from "../../../helpers/auth";
import { HiXMark, HiPlus } from "react-icons/hi2";

const lists = [
    {
        name: "Home",
        link: "/social-hub",
        icon: <HomeIcon className="w-6 -mt-1" />,
    },
    {
        name: "Profile",
        link: "/my-account/profile",
        icon: <UserIcon className="w-6 -mt-1" />,
    },
    {
        name: "Bookmarks",
        link: "/my-account/bookmarks",
        icon: <BookmarkIcon className="w-6 -mt-1" />,
    },
    {
        name: "Billing",
        link: "/my-account/billing",
        icon: <CreditCardIcon className="w-6 -mt-1" />,
    },
    {
        name: "Change Password",
        link: "/my-account/change-password",
        icon: <LockClosedIcon className="w-6 -mt-1" />,
    },
    {
        name: "Logout",
        link: "#",
        icon: <ArrowLeftOnRectangleIcon className="w-6 -mt-1" />,
    },
];

export const SideMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button
                className={`${
                    isOpen
                        ? "bg-white rounded-b-none rounded-t-lg shadow-lg p-3 border border-white"
                        : "border border-teal-800"
                }  md:hidden w-full font-manjari flex p-2 px-4 items-center justify-between text-teal-900 rounded-lg`}
                onClick={() => setIsOpen(!isOpen)}
            >
                MENU{" "}
                {isOpen ? (
                    <HiXMark className="text-lg text-teal-900 ml-2" />
                ) : (
                    <HiPlus className="text-lg text-teal-900 ml-2" />
                )}
            </button>
            <div
                className={`${
                    isOpen ? "block rounded-t-none pt-0" : "hidden"
                } md:block p-10 rounded-lg shadow-lg bg-white`}
            >
                {lists.map((list, i) => {
                    return (
                        <a
                            key={i}
                            href={list.link}
                            className={`flex py-5 space-x-4 ${
                                i + 1 < lists.length &&
                                "border-b border-gray-100"
                            } ${
                                window.location.pathname.split("/")[2] ===
                                list.link.split("/")[2]
                                    ? list.link === "#"
                                        ? "text-red-600"
                                        : "text-[#329E49]"
                                    : "text-gray-600"
                            } hover:text-[#329E49] transition duration-300 ease-in-out`}
                            onClick={() => {
                                if (list.name === "Logout") logout();
                            }}
                        >
                            {list.icon}
                            <p>{list.name}</p>
                        </a>
                    );
                })}
            </div>
        </div>
    );
};
