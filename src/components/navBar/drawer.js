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
                link: "/who-we-are/our-team",
                name: "OUR TEAM",
            },
            {
                link: "/who-we-are/about-us#our-mission-vision",
                name: "OUR MISSION",
            },
            {
                link: "/who-we-are/about-us#our-mission-vision",
                name: "OUR VISION",
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
        links: [
            {
                link: "/what-we-do",
                name: "WHAT WE DO",
            },
            {
                link: "/what-we-do/projects",
                name: "PROJECTS",
            },
        ],
        info: {
            title: "WHAT WE DO",
            link: "#",
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
        links: [
            {
                link: "/membership/packages/",
                name: "MEMBER PACKAGES",
            },
            {
                link: "/membership/our-members/",
                name: "OUR MEMBERS",
            },
            {
                link: "/membership/register/",
                name: "MEMBER REGISTRATION",
            },
            {
                link: "/membership/login/",
                name: "MEMBER LOGIN",
            },
        ],
        info: {
            title: "MEMBERSHIP",
            content:
                "We welcome individuals, organizations, and companies who share our vision and want to join us in promoting the adoption of clean cooking solutions and practices in Kenya. There are several ways to get involved with CCAK, whether it's by volunteering your time and skills, becoming a member, supporting our fundraising efforts, or collaborating with us on a project.",
            link: "#",
        },
    },
    {
        links: [
            {
                link: "/resource-centre/internal-publications/",
                name: "INTERNAL PUBLICATIONS",
            },
            {
                link: "/resource-centre/external-publications/",
                name: "EXTERNAL PUBLICATIONS",
            },
            {
                link: "/resource-centre/newsletters/",
                name: "NEWSLETTERS",
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
                link: "/media-centre/blog/",
                name: "BLOG",
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
    {
        links: [],
        info: {
            title: "SOCIAL HUB",
            link: "/social-hub/",
        },
    },
    {
        links: [],
        info: {
            title: (
                <div
                    class="py-[0.2em] items-center tracking-widest leading-none lg:rounded-full flex lg:inline-flex"
                    role="alert"
                >
                    <span class="flex rounded-full bg-yellow-200 uppercase px-2 pt-1 pb-[0.5] text-xs font-bold mr-3">
                        USSD
                    </span>
                    <span class="font-bold mr-2 text-left flex-auto font-poppins text-black">
                        *789*788#
                    </span>
                </div>
            ),
            link: "tel:*789*788#",
        },
    },
    {
        links: [],
        info: {
            title: "+254 707 111 669",
            link: "tel:+254707111669",
        },
    },
    {
        links: [],
        info: {
            title: "info@ccak.or.ke",
            link: "mailto:info@ccak.or.ke",
        },
    },
];

export const Drawer = ({ mobile, setMobile }) => {
    const [current, setCurrent] = useState("");

    return (
        <div
            id="drawerBackground"
            className="bg-black bg-opacity-50 w-full h-screen -mt-[3.8rem] z-40"
            onClick={(e) => {
                e.target.id === "drawerBackground" && setMobile(false);
            }}
        >
            <div
                // prettier-ignore
                className={`fixed top-0 left-0  font-manjari h-screen p-4 overflow-y-auto transition-translate duration-300 ease-in-out ${!mobile ? '-translate-x-full' : 'translate-x-0'} bg-[#FAD5BB] w-80`}
                tabindex="-1"
            >
                <div className="flex flex-row items-center justify-between border-b border-black pb-5">
                    <a href="/">
                        <img
                            className="w-14"
                            src="/ccak_logo.png"
                            alt="CCAK Logo"
                        />
                    </a>
                    <button
                        type="button"
                        className="text-white bg-transparent hover:bg-black rounded-lg text-sm p-1.5 transition duration-300 ease-in-out"
                        onClick={() => {
                            setMobile(false);
                        }}
                    >
                        <XMarkIcon className="w-6 font-bold " />
                        <span className="sr-only">Close menu</span>
                    </button>
                </div>

                <div className="py-4 overflow-y-auto">
                    <ul className="space-y-2">
                        {data.map((item) => {
                            return (
                                <li key={item.links.title}>
                                    <a href={item.info.link}>
                                        <button
                                            type="button"
                                            className="flex items-center w-full pt-3.5 pb-3 px-2.5 text-base font-bold font-poppins text-black rounded-lg group hover:text-[#ED7423] transition duration-300 ease-in-out"
                                            onClick={() => {
                                                setCurrent(
                                                    current === item.info.title
                                                        ? ""
                                                        : item.info.title
                                                );
                                            }}
                                        >
                                            <span className="flex-1 ml-3 text-left whitespace-nowrap">
                                                {item.info.title}
                                            </span>
                                            {item.links.length > 1 && (
                                                <ChevronDownIcon className="w-5" />
                                            )}
                                        </button>
                                    </a>
                                    <ul
                                        id="dropdown-example"
                                        className={`${
                                            current !== item.info.title &&
                                            "hidden"
                                        } py-2 space-y-2`}
                                    >
                                        {item.links.map((link) => {
                                            return (
                                                <li key={link.name}>
                                                    <a
                                                        href={link.link}
                                                        className="flex items-center w-full pt-3 pb-2 px-2 text-base font-bold font-poppins text-black rounded-lg pl-11 group  hover:text-[#ED7423] transition duration-300 ease-in-out"
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
