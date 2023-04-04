import { SocialHubPost } from "../../Components/navBar/socialHub/post";
import { SideMenu } from "../../Components/navBar/socialHub/sideMenu";
import {
    PhoneIcon,
    EnvelopeIcon,
    MapPinIcon,
    LinkIcon,
} from "@heroicons/react/24/outline";

const posts = [
    {
        id: 1,
        name: "burn manufactures",
        logo: "burn.jpeg",
        post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "home_hero_section.jpg",
        comments: 12,
        likes: 24,
    },
    {
        id: 2,
        name: "burn manufactures",
        logo: "burn.jpeg",
        post: " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: "",
        comments: 5,
        likes: 67,
    },
    {
        id: 3,
        name: "burn manufactures",
        logo: "burn.jpeg",
        post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "home_hero_section.jpg",
        comments: 4,
        likes: 23,
    },
    {
        id: 4,
        name: "burn manufactures",
        logo: "burn.jpeg",
        post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "home_hero_section.jpg",
        comments: 15,
        likes: 100,
    },
    {
        id: 5,
        name: "burn manufactures",
        logo: "burn.jpeg",
        post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "",
        comments: 11,
        likes: 120,
    },
];

export const SocialHubProfilePage = () => {
    return (
        <div className="pt-[4rem] lg:pt-[8.2rem]">
            <div className="flex flex-col md:flex-row px-6 lg:px-16 space-x-6">
                <div className="md:w-3/12 py-10">
                    <div className="fixed md:w-3/12">
                        <SideMenu />
                    </div>
                </div>
                <div className="md:w-6/12 pt-10 lg:px-10">
                    <div className="space-y-6">
                        <div className="flex rounded-lg shadow-md p-5 space-x-6 text-gray-600">
                            <div className="w-2/12">
                                <img
                                    src="/logos/burn.jpeg"
                                    alt="member logo"
                                    className="w-12 h-12 rounded-full"
                                    git
                                />
                            </div>
                            <div className="w-10/12">
                                <h3 className="font-semibold text-2xl text-black mb-2">
                                    Burn Manufactures
                                </h3>
                                <p>
                                    Technolgy:{" "}
                                    <b className="font-bold text-black">
                                        Biomass Cookstoves
                                    </b>
                                </p>
                                <p>
                                    Impacting lives and the environment through
                                    efficient cooking appliance
                                </p>
                                <div className="my-2 space-y-4">
                                    <a
                                        href="tel:0700667788"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex space-x-2 hover:text-[#ED7423] transition duration-300 ease-in-out"
                                    >
                                        <PhoneIcon className="w-5" />
                                        <p>0700667788</p>
                                    </a>
                                    <a
                                        href="mail:kenya@burnmfg.com"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex space-x-2 hover:text-[#ED7423] transition duration-300 ease-in-out"
                                    >
                                        <EnvelopeIcon className="w-5" />
                                        <p>kenya@burnmfg.com</p>
                                    </a>
                                    <div className="flex space-x-2">
                                        <MapPinIcon className="w-5" />
                                        <p>
                                            New Horizons Industrial Park, Ruiru,
                                            Kenya
                                        </p>
                                    </div>
                                    <a
                                        href="https://burnstoves.com"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex space-x-2 hover:text-[#ED7423] transition duration-300 ease-in-out"
                                    >
                                        <LinkIcon className="w-5" />
                                        <p>https://burnstoves.com</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="space-y-6 mb-5">
                                {posts.map((post) => {
                                    return <SocialHubPost data={post} />;
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
