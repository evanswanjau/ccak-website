import React from "react";

import { Slide, Fade } from "react-reveal";
import {
    UsersIcon,
    ScaleIcon,
    Squares2X2Icon,
    CubeTransparentIcon,
    WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { SubFooter } from "../layouts/subFooter";
import { RecentProjects } from "../layouts/recentProjects";

const items = [
    {
        icon: (
            <ScaleIcon className="w-8 text-[#329E49] group-hover:text-[#ED7423] transition duration-300 ease-in-out" />
        ),
        name: "environment advocate",
        description:
            "We work to create policies and regulatory frameworks that enable the growth of the clean cooking sector.",
    },
    {
        icon: (
            <UsersIcon className="w-8 text-[#329E49] group-hover:text-[#ED7423] transition duration-300 ease-in-out" />
        ),
        name: "capacity building",
        description:
            "We promote training and capacity building initiatives to improve the skills of those working in the clean cooking sector.",
    },
    {
        icon: (
            <CubeTransparentIcon className="w-8 text-[#329E49] group-hover:text-[#ED7423] transition duration-300 ease-in-out" />
        ),
        name: "stakeholder coordination",
        description:
            "We collaborate with government, private sector, and other partners to coordinate efforts and advocate for the sector.",
    },
    {
        icon: (
            <Squares2X2Icon className="w-8 text-[#329E49] group-hover:text-[#ED7423] transition duration-300 ease-in-out" />
        ),
        name: "promote clean cooking",
        description:
            "We encourage the adoption of clean cooking technologies and solutions to reduce the negative impacts of traditional cooking methods.",
    },
    {
        icon: (
            <WrenchScrewdriverIcon className="w-8 text-[#329E49] group-hover:text-[#ED7423] transition duration-300 ease-in-out" />
        ),
        name: "research and development",
        description:
            "We promote innovation and research in the clean cooking sector to drive advancements and improvements.",
    },
    {
        icon: (
            <WrenchScrewdriverIcon className="w-8 text-[#329E49] group-hover:text-[#ED7423] transition duration-300 ease-in-out" />
        ),
        name: "impact lives",
        description:
            "We promote clean cooking solutions that reduce health impacts, improve livelihoods, and mitigate climate change. ",
    },
];

export const WhatWeDoPage = () => {
    return (
        <div className="pt-[4rem] lg:pt-[8.2rem]">
            <section className="flex flex-col md:flex-row w-full py-6 md:py-20 px-6 md:px-12">
                <div className="hidden w-full lg:block md:w-1/12">
                    <Fade>
                        <div className="border-t-2 border-black mx-5 my-1"></div>
                    </Fade>
                </div>
                <div className="w-full lg:w-6/12 md:pr-5">
                    <Fade>
                        <h6 className="text-black text-xs font-bold">
                            WHAT WE DO
                        </h6>
                    </Fade>
                    <Slide bottom>
                        <h2 className="text-black text-4xl lg:text-5xl my-8 font-bold">
                            Collaborating for change through clean cooking
                        </h2>
                    </Slide>
                    <Slide bottom>
                        <p className="my-5 text-gray-600">
                            Our primary objective is to advocate for an enabling
                            environment at both national and county levels to
                            catalyze the growth of the clean cooking sector. We
                            aim to promote the adoption of clean cooking
                            technologies, build capacity within the sector, and
                            coordinate with stakeholders to advocate for the
                            sector.
                        </p>
                    </Slide>
                </div>
                <div className="w-full mt-5 md:mt-0 lg:w-5/12 flex justify-center">
                    <Fade>
                        <img
                            className="rounded-lg"
                            src={
                                process.env.REACT_APP_IMAGEKIT_URL +
                                "what_we_do_section_1_celebrating_change.jpg"
                            }
                            alt="Collaborating for change through clean cooking"
                        />
                    </Fade>
                </div>
            </section>
            <section className="p-6 lg:p-16 bg-[#EFF7F2]">
                <Slide bottom>
                    <h2 className="font-semibold text-2xl md:text-4xl flex my-6 justify-center">
                        What we do through clean cooking
                    </h2>
                </Slide>
                <div className="flex flex-row md:px-6 py-5">
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 sm:gap-12 lg:px-12 lg:py-16">
                        {items.map((item) => {
                            return (
                                <Slide bottom key={item.name}>
                                    <div className="w-full flex flex-col md:flex-row space-y-3 md:space-y-0 group">
                                        <div className="w-2/12">
                                            {item.icon}
                                        </div>
                                        <div className="sm:w-10/12">
                                            <h6 className="font-semibold capitalize mb-2 group-hover:text-[#ED7423] transition duration-300 ease-in-out">
                                                <a href="#">{item.name}</a>
                                            </h6>
                                            <p className="text-gray-600">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </Slide>
                            );
                        })}
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
