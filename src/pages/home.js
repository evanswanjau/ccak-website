import React from "react";
import CountUp from "react-countup";

import { RecentProjects } from "../layouts/recentProjects";
import { SubFooter } from "../layouts/subFooter";
import { LogoCarousel } from "../components/carousel";
import { Slide, Fade } from "react-reveal";
import {
    GlobeEuropeAfricaIcon,
    ChartBarSquareIcon,
    UserGroupIcon,
    SunIcon,
} from "@heroicons/react/24/outline";
import { HomeSlider } from "../layouts/homeSlider";

export const HomePage = () => {
    const whatWedo = [
        {
            title: "Impact at least 7 million women",
            desc: "We have set out to impact at least 7 million women through its five-year strategy.",
            icon: <ChartBarSquareIcon className="w-6 text-white" />,
        },
        {
            title: "Mitigate climate change",
            desc: "Promoting clean cooking is an effective way to mitigate climate change.",
            icon: <GlobeEuropeAfricaIcon className="w-6 text-white" />,
        },
        {
            title: "Improving livelihoods",
            desc: "By reducing exposure to indoor air pollution, clean cooking  can improve the well-being of individuals.",
            icon: <UserGroupIcon className="w-6 text-white" />,
        },
        {
            title: "Preserve the environment",
            desc: "Producing fewer greenhouse gas emissions we are able to reducing the carbon footprint.",
            icon: <SunIcon className="w-6 text-white" />,
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
            name: "wwf kenya",
            link: "https://www.wwfkenya.org/",
            image: "/logos/wwf-kenya.png",
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
        <div className="text-gray-600 pt-[3.8rem] lg:pt-[6.6rem]">
            <section>
                <HomeSlider />
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
                    <br />
                    <Slide bottom>
                        <a
                            href={"/who-we-are/about-us"}
                            className="bg-[#EC7422] text-white pt-4 pb-3 px-6 hover:bg-[#ce621b] hover:text-white rounded-md transition duration-300 ease-in-out"
                        >
                            LEARN MORE
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
            <section className="flex flex-col lg:flex-row w-full p-6 lg:py-20 lg:p-12 bg-[#EC7422]">
                <div className="hidden lg:block w-1/12">
                    <div className="border-t-2 border-white mx-5 mt-2"></div>
                </div>
                <div className="lg:w-6/12">
                    <Slide bottom>
                        <h6 className="text-white font-bold text-xs">
                            WHAT WE DO
                        </h6>
                    </Slide>
                    <Slide bottom>
                        <h2 className="text-white font-semibold text-4xl my-6">
                            Promoting clean cooking solutions
                        </h2>
                    </Slide>
                    <Slide bottom>
                        <p className="my-5 text-white">
                            The Clean Cooking Association of Kenya (CCAK) is a
                            not-for-profit business membership organization
                            representing stakeholders in the clean cooking
                            sector.
                        </p>
                    </Slide>

                    <ul className="border-l border-gray-50 text-gray-50">
                        {whatWedo.map((item, i) => (
                            <Slide bottom key={i}>
                                <li className="flex flex-row my-8">
                                    <div className="mx-5">{item.icon}</div>
                                    <div className="lg:w-2/4">
                                        <p className="text-xl font-semibold text-white">
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
                            className="rounded-lg max-h-[40em]"
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
                <h2 className="font-semibold text-3xl my-10 md:text-4xl text-black flex justify-center">
                    Our Achievements at a Glance
                </h2>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 sm:gap-6 py-10">
                    <div className="text-xl font-bold text-center">
                        <h3>Interministerial Committees</h3>
                        <div className="text-4xl my-5 text-black">
                            +<CountUp end={11} duration={5} />
                        </div>
                    </div>
                    <div className="text-xl font-bold text-center">
                        <h3>Projects Done</h3>
                        <div className="text-4xl my-5 text-black">
                            +<CountUp end={15} duration={5} />
                        </div>
                    </div>
                    <div className="text-xl font-bold text-center">
                        <h3>Members</h3>
                        <div className="text-4xl my-5 text-black">
                            +<CountUp end={100} duration={5} />
                        </div>
                    </div>
                    <div className="text-xl font-bold text-center">
                        <h3>Sector standards and guidelines</h3>
                        <div className="text-4xl my-5 text-black">
                            <CountUp end={10} duration={5} />
                        </div>
                    </div>
                </div>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 sm:gap-6 py-10">
                    <div className="text-xl font-bold text-center">
                        <h3>Clean Cooking Week</h3>
                        <div className="text-4xl my-5 text-black">
                            <CountUp end={4} duration={5} />
                        </div>
                    </div>
                    <div className="text-xl font-bold text-center">
                        <h3>Resources Raised</h3>
                        <div className="text-4xl my-5 text-black">
                            +<CountUp end={140} duration={5} />M
                        </div>
                    </div>
                    <div className="text-xl font-bold text-center">
                        <h3>Annual Clean Cooking Awards</h3>
                        <div className="text-4xl my-5 text-black">
                            +<CountUp end={4} duration={5} />
                        </div>
                    </div>
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
