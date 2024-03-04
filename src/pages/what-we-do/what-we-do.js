import React, { useState } from "react";
import ReactHtmlParser from "react-html-parser";
import { Slide, Fade } from "react-reveal";
import {
    UsersIcon,
    ScaleIcon,
    Squares2X2Icon,
    CubeTransparentIcon,
    WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { SubFooter } from "../../layouts/subFooter";
import { RecentProjects } from "../../layouts/recentProjects";
import { Page } from "../../layouts/page";


export const WhatWeDoPage = () => {
    const [data, updateData] = useState([]);

    return (
        <Page
            title="What We Do"
            description="Our primary objective is to advocate for an enabling environment at both national and county levels to catalyze the growth of the clean cooking sector. We aim to promote the adoption of clean cooking technologies, build capacity within the sector, and coordinate with stakeholders to advocate for the sector."
            page="what-we-do"
            data={data}
            updateData={updateData}
        >
            <div className="pt-[3.8rem] lg:pt-[6.6rem]">
                <section className="flex flex-col md:flex-row w-full p-6 md:p-32 space-x-8 items-center">
                    <div className="w-full lg:w-6/12">
                        <Fade>
                            <h6 className="text-black text-xs font-bold">
                                WHAT WE DO
                            </h6>
                        </Fade>
                        <Slide bottom>
                            <h2 className="text-gray-800 text-4xl lg:text-6xl mt-1 mb-8 font-bold">
                                {data[0]?.content.title}
                            </h2>
                        </Slide>
                        <Slide bottom>
                            <p className="my-5 text-gray-600">
                                {data[0]?.content.content}
                            </p>
                        </Slide>
                    </div>
                    <div className="w-full lg:w-6/12">
                        <Fade>
                            <img
                                className="rounded-lg mx-auto"
                                src={
                                    process.env.REACT_APP_IMAGEKIT_URL +
                                    data[0]?.content.image
                                }
                                alt={data[0]?.content.title}
                            />
                        </Fade>
                    </div>
                </section>
                <section className="p-6 lg:p-32 bg-[#dbefdf]">
                    <Slide bottom>
                        <h2 className="font-semibold text-gray-800 text-2xl lg:text-5xl mb-24 flex justify-center">
                            {data[1]?.content.title}
                        </h2>
                    </Slide>
                    <div className="w-full text-gray-800  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 sm:gap-12 my-12">
                        {data[1]?.content?.items.map((item) => {
                            return (
                                <Slide bottom key={item.name}>
                                    <div className="w-full flex flex-col md:flex-row space-y-3 md:space-y-0">
                                        <div className="w-2/12">
                                            {ReactHtmlParser(item.icon)}
                                        </div>
                                        <div className="sm:w-10/12">
                                            <h6 className="font-bold text-xl mb-2 capitalize">
                                                {item.name}
                                            </h6>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </Slide>
                            );
                        })}
                    </div>
                </section>
                <section>
                    <RecentProjects title={data[2]?.content?.title} />
                </section>
                <section>
                    <SubFooter data={data[3]?.content} />
                </section>
            </div>
        </Page>
    );
};
