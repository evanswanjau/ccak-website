import {
    UserIcon,
    BookmarkIcon,
    CreditCardIcon,
    LockClosedIcon,
    HomeIcon,
} from "@heroicons/react/24/outline";
const lists = [
    { name: "Home", link: "/social-hub/home", icon: <HomeIcon className="w-6 -mt-1" /> },
    { name: "Profile", link: "/social-hub/profile", icon: <UserIcon className="w-6 -mt-1" /> },
    {
        name: "Bookmarks",
        link: "/social-hub/bookmarks",
        icon: <BookmarkIcon className="w-6 -mt-1" />,
    },
    {
        name: "Billing",
        link: "/social-hub/billing",
        icon: <CreditCardIcon className="w-6 -mt-1" />,
    },
    {
        name: "Change Password",
        link: "/social-hub/change-password",
        icon: <LockClosedIcon className="w-6 -mt-1" />,
    },
];

export const SideMenu = () => {
    return (
        <div className="p-10 rounded-lg shadow-lg">
            {lists.map((list, i) => {
                return (
                    <a
                        href={list.link}
                        className={`flex py-5 space-x-4 ${
                            i + 1 < lists.length && "border-b border-gray-100"
                        } text-gray-600 hover:text-[#ED7423] transition duration-300 ease-in-out`}
                    >
                        {list.icon}
                        <p>{list.name}</p>
                    </a>
                );
            })}
        </div>
    );
};
