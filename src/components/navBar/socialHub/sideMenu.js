import {
    UserIcon,
    BookmarkIcon,
    CreditCardIcon,
    LockClosedIcon,
    HomeIcon,
    ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { logout } from "../../../helpers/auth";

const lists = [
    {
        name: "Home",
        link: "/social-hub",
        icon: <HomeIcon className="w-6 -mt-1" />,
    },
    // {
    //     name: "Profile",
    //     link: "/my-account/profile",
    //     icon: <UserIcon className="w-6 -mt-1" />,
    // },
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
    return (
        <div className="p-10 rounded-lg shadow-lg">
            {lists.map((list, i) => {
                return (
                    <a
                        key={i}
                        href={list.link}
                        className={`flex py-5 space-x-4 ${
                            i + 1 < lists.length && "border-b border-gray-100"
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
    );
};
