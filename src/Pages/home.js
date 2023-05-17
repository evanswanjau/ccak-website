import React from "react";

import { RecentProjects } from "../Containers/recentProjects";
import { SubFooter } from "../Containers/subFooter";
import { LogoCarousel } from "../Components/carousel";
import { Slide, Fade } from "react-reveal";
import {
    GlobeEuropeAfricaIcon,
    ChartBarSquareIcon,
    UserGroupIcon,
    SunIcon,
} from "@heroicons/react/24/outline";
import { PlayCircleIcon } from "@heroicons/react/24/solid";

export const HomePage = () => {
    const whatWedo = [
        {
            title: "Impact at least 7 million women",
            desc: "We have set out to impact at least 7 million women through its five-year strategy.",
            icon: <ChartBarSquareIcon className="w-6 text-[#329E49]" />,
        },
        {
            title: "Mitigate climate change",
            desc: "Promoting clean cooking is an effective way to mitigate climate change.",
            icon: <GlobeEuropeAfricaIcon className="w-6 text-[#329E49]" />,
        },
        {
            title: "Improving livelihoods",
            desc: "By reducing exposure to indoor air pollution, clean cooking  can improve the well-being of individuals.",
            icon: <UserGroupIcon className="w-6 text-[#329E49]" />,
        },
        {
            title: "Preserve the environment",
            desc: "Producing fewer greenhouse gas emissions we are able to reducing the carbon footprint.",
            icon: <SunIcon className="w-6 text-[#329E49]" />,
        },
    ];

    const partners = [
        {
            name: "cca",
            link: "https://cleancooking.org/",
            image: "/logos/cca.png",
        },
        {
            name: "hivos",
            link: "https://hivos.org/",
            image: "/logos/hivos.jpg",
        },
        {
            name: "giz",
            link: "https://www.giz.de/de/html/index.html",
            image: "/logos/giz.png",
        },
        {
            name: "practical action",
            link: "https://practicalaction.org/",
            image: "/logos/practical-action.png",
        },
        {
            name: "un habitait",
            link: "https://unhabitat.org/",
            image: "/logos/un-habitat.png",
        },
        {
            name: "snv",
            link: "https://snv.org/",
            image: "/logos/snv.png",
        },
    ];

    return (
        <div className="text-gray-600 pt-[4rem] lg:pt-[8.2rem]">
            <section
                style={{
                    backgroundImage: `url(${
                        process.env.REACT_APP_IMAGEKIT_URL +
                        "home_hero_section.jpg"
                    })`,
                }}
                className={`h-screen bg-cover bg-center bg-no-repeat`}
            >
                <div className="flex flex-row items-center bg-black/[.3] w-full h-full">
                    <div className="lg:w-6/12 lg:ml-14 p-6 text-white content-center">
                        <Slide bottom>
                            <h1 className="text-4xl md:text-6xl font-bold my-5">
                                Clean cooking for a healthier environment
                            </h1>
                        </Slide>
                        <Slide bottom>
                            <p className="text-lg my-5">
                                Rural and peri-urban women and children in Kenya
                                suffer more from household air pollution caused
                                by traditional cooking methods.
                            </p>
                        </Slide>
                        <Slide bottom>
                            <div className="flex space-x-3 lg:space-x-8 my-10">
                                <a href={"/what-we-do"}>
                                    <button className="bg-white text-gray-600 pt-3 pb-2 px-6 hover:bg-[#ED7423] hover:text-white rounded-md transition duration-300 ease-in-out tracking-widest">
                                        WHAT WE DO
                                    </button>
                                </a>
                                <button className="flex text-xl items-center space-x-2 hover:text-[#ED7423] transition duration-300 ease-in-out">
                                    <PlayCircleIcon className="w-6" />
                                    <p className="">Play Video</p>
                                </button>
                            </div>
                        </Slide>
                    </div>
                </div>
            </section>
            <section className="flex flex-col lg:flex-row w-full p-6 lg:py-20 lg:p-12 bg-[#EFF7F2]">
                <div className="hidden lg:block w-1/12">
                    <div className="border-t-2 border-black mx-5 mt-2"></div>
                </div>
                <div className="lg:w-6/12">
                    <Slide bottom>
                        <h6 className="text-black font-bold text-xs">
                            WHAT WE DO
                        </h6>
                    </Slide>
                    <Slide bottom>
                        <h2 className="text-black font-semibold text-4xl my-6">
                            Promoting clean cooking solutions
                        </h2>
                    </Slide>
                    <Slide bottom>
                        <p className="my-5">
                            The Clean Cooking Association of Kenya (CCAK) is a
                            not-for-profit business membership organization
                            representing stakeholders in the clean cooking
                            sector.
                        </p>
                    </Slide>

                    <ul className="border-l">
                        {whatWedo.map((item, i) => (
                            <Slide bottom key={i}>
                                <li className="flex flex-row my-8">
                                    <div className="mx-5">{item.icon}</div>
                                    <div className="lg:w-2/4">
                                        <p className="text-xl font-semibold  text-black">
                                            {item.title}
                                        </p>
                                        <p>{item.desc}</p>
                                    </div>
                                </li>
                            </Slide>
                        ))}
                    </ul>
                </div>
                <div className="lg:w-5/12 mt-5 lg:m-0">
                    <Fade>
                        <img
                            className="rounded-lg"
                            src={
                                process.env.REACT_APP_IMAGEKIT_URL +
                                "home_section_2_promote_clean_cooking.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678477808057"
                            }
                            alt="Promoting clean cooking"
                        />
                    </Fade>
                </div>
            </section>
            <section className="py-10 px-6 lg:px-16">
                <div className="py-3">
                    <Fade>
                        <h6 className="text-black text-sm font-semibold my-5">
                            OUR PARTNERS AND DONORS
                        </h6>
                    </Fade>
                    <LogoCarousel logos={partners} />
                </div>
            </section>
            <section className="flex flex-col lg:flex-row p-6 lg:p-12">
                <div className="hidden lg:block w-1/12">
                    <div className="border-t-2 border-black mx-5 mt-1"></div>
                </div>
                <div className="lg:w-6/12 lg:pr-10">
                    <Fade>
                        <h6 className="text-black font-bold text-xs">
                            ABOUT US
                        </h6>
                    </Fade>
                    <Slide bottom>
                        <h2 className="text-black text-4xl font-semibold my-8">
                            Advocating the adoption of clean cooking
                            technologies
                        </h2>
                    </Slide>
                    <Slide bottom>
                        <p className="my-5">
                            The main objective of CCAK is to advocate for an
                            enabling environment at both national and county
                            levels to catalyze the growth of the clean cooking
                            sector and promote adoption of clean cooking
                            technologies, capacity building of the sector and
                            sector coordination.
                        </p>
                    </Slide>
                    <Slide bottom>
                        <p className="my-5">
                            The association has effective frameworks of
                            engagement with government and other stakeholders to
                            coordinate and advocate for the sector.
                        </p>
                    </Slide>
                    <Slide bottom>
                        <a href={"/who-we-are/about-us"}>
                            <button className="bg-[#329E49] text-white pt-3 pb-2 px-6 my-5 hover:bg-[#ED7423] hover:text-white rounded-md transition duration-300 ease-in-out">
                                LEARN MORE
                            </button>
                        </a>
                    </Slide>
                </div>
                <div className="lg:w-5/12 mt-5 lg:m-0 lg:py-16">
                    <Fade>
                        <img
                            className="rounded-lg"
                            src={
                                process.env.REACT_APP_IMAGEKIT_URL +
                                "home_section_4_promote_clean_cooking.jpg"
                            }
                            alt="Promoting clean cooking"
                        />
                    </Fade>
                </div>
            </section>
            <section>
                <RecentProjects />
            </section>
            <section>
                <SubFooter />
            </section>
        </div>
    );
};
