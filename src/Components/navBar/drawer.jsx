import { useState } from "react";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";

const data = [
    {
        links: [],
        info: {
            title: "HOME",
            link: "/",
        },
    },
    {
        links: [
            {
                link: "/who-we-are/about-us",
                name: "ABOUT US",
            },
            {
                link: "/who-we-are/about-us/#our-mission",
                name: "OUR MISSION",
            },
            {
                link: "/who-we-are/about-us/#our-vision",
                name: "OUR VISION",
            },
            {
                link: "/who-we-are/about-us/#our-partners",
                name: "OUR PARTNERS",
            },
            {
                link: "/who-we-are/our-team",
                name: "OUR TEAM",
            },
        ],
        info: {
            title: "WHO WE ARE",
            content:
                "Welcome to the Clean Cooking Association of Kenya (CCAK), a private, not for profit, business membership organization representing stakeholders in the clean cooking sector. We are committed to promoting the use of clean cooking solutions and practices in Kenya.  Our objective is to advocate for an enabling environment to catalyze the growth of the clean cooking sector and promote adoption of clean cooking technologies, capacity building of the sector, and sector coordination.",
            link: "#",
        },
        image: "http://localhost:5173/src/assets/home/BGHomeVid.png",
    },
    {
        links: [],
        info: {
            title: "WHAT WE DO",
            link: "/what-we-do",
        },
    },
    {
        links: [
            {
                link: "/get-involved/careers/",
                name: "CAREERS",
            },
            {
                link: "/get-involved/consultancy/",
                name: "CONSULTANCY",
            },
            {
                link: "/get-involved/funding-opportunities/",
                name: "FUNDING OPPORTUNITIES",
            },
            {
                link: "/get-involved/donate/",
                name: "DONATE",
            },
            {
                link: "/get-involved/contact-us/",
                name: "CONTACT US",
            },
        ],
        info: {
            title: "GET INVOLVED",
            content:
                "We welcome individuals, organizations, and companies who share our vision and want to join us in promoting the adoption of clean cooking solutions and practices in Kenya. There are several ways to get involved with CCAK, whether it's by volunteering your time and skills, becoming a member, supporting our fundraising efforts, or collaborating with us on a project.",
            link: "#",
        },
        image: "http://localhost:5173/src/assets/home/BGHomeVid.png",
    },
    {
        links: [],
        info: {
            title: "MEMBERSHIP",
            link: "#",
        },
    },
    {
        links: [
            {
                link: "/resource-centre/research-papers/",
                name: "RESEARCH PAPERS",
            },
            {
                link: "/resource-centre/agm-material/",
                name: "AGM MATERIAL",
            },
        ],
        info: {
            title: "RESOURCE CENTRE",
            content:
                "Here you will find a wealth of information and resources related to clean cooking, including research reports, case studies, technical documents, and training materials. Our Resource Centre is designed to serve as a one-stop-shop for anyone seeking knowledge and insights on clean cooking technologies, practices, and policies in Kenya.",
            link: "#",
        },
        image: "http://localhost:5173/src/assets/home/BGHomeVid.png",
    },
    {
        links: [
            {
                link: "/media-centre/press-release/",
                name: "PRESS RELEASE",
            },
            {
                link: "/media-centre/news/",
                name: "NEWS",
            },
            {
                link: "/media-centre/events/",
                name: "EVENTS",
            },
            {
                link: "/media-centre/projects/",
                name: "PROJECTS",
            },
            {
                link: "/media-centre/photo-gallery/",
                name: "PHOTO GALLERY",
            },
        ],
        info: {
            title: "MEDIA CENTRE",
            content:
                "Our media centre serves as a hub for anyone seeking to learn more about the clean cooking sector in Kenya and the efforts being made to promote its growth. We are committed to transparency and ensuring that accurate and up-to-date information is easily accessible to all stakeholders. We invite you to explore our media centre and contact us with any inquiries.",
            link: "#",
        },
        image: "http://localhost:5173/src/assets/home/BGHomeVid.png",
    },
];

export const Drawer = ({ mobile, setMobile }) => {
    const [current, setCurrent] = useState("");

    return (
        <div
            id="drawerBackground"
            className="bg-black bg-opacity-50 w-full h-screen -mt-[3.8rem] z-40"
            onClick={(e) => {
                e.target.id === "drawerBackground" &&
                    setMobile(false);
            }}
        >
            <div
                // prettier-ignore
                class={`fixed top-0 left-0  font-manjari h-screen p-4 overflow-y-auto transition-translate duration-300 ease-in-out ${!mobile ? '-translate-x-full' : 'translate-x-0'} bg-[#329E49] w-80`}
                tabindex="-1"
            >
                <div className="flex flex-row items-center justify-between border-b pb-5">
                    <a href="/">
                        <img
                            className="w-32"
                            src="/ccak_side_logo_white.png"
                            alt="CCAK Logo"
                        />
                    </a>
                    <button
                        type="button"
                        class="text-white hover:text-[#ED7423] bg-transparent hover:bg-white rounded-lg text-sm p-1.5 transition duration-300 ease-in-out"
                        onClick={() => {
                            setMobile(false);
                        }}
                    >
                        <XMarkIcon className="w-6 font-bold " />
                        <span class="sr-only">Close menu</span>
                    </button>
                </div>

                <div class="py-4 overflow-y-auto">
                    <ul class="space-y-2">
                        {data.map((item) => {
                            return (
                                <li key={item.links.title}>
                                    <a href={item.info.link}>
                                        <button
                                            type="button"
                                            class="flex items-center w-full pt-3 pb-2 px-2 text-base font-normal text-white rounded-lg group hover:bg-white hover:text-[#ED7423] transition duration-300 ease-in-out"
                                            onClick={() => {
                                                setCurrent(
                                                    current === item.info.title
                                                        ? ""
                                                        : item.info.title
                                                );
                                            }}
                                        >
                                            <span class="flex-1 ml-3 text-left whitespace-nowrap">
                                                {item.info.title}
                                            </span>
                                            {item.links.length > 1 && (
                                                <ChevronDownIcon className="w-5" />
                                            )}
                                        </button>
                                    </a>
                                    <ul
                                        id="dropdown-example"
                                        class={`${
                                            current !== item.info.title &&
                                            "hidden"
                                        } py-2 space-y-2`}
                                    >
                                        {item.links.map((link) => {
                                            return (
                                                <li key={link.name}>
                                                    <a
                                                        href={link.link}
                                                        class="flex items-center w-full pt-3 pb-2 px-2 text-base font-normal text-white rounded-lg pl-11 group hover:bg-white hover:text-[#ED7423] transition duration-300 ease-in-out"
                                                    >
                                                        {link.name}
                                                    </a>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};
