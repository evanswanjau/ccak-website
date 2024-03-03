import React, { useState } from "react";
import CountUp from "react-countup";
import ReactHtmlParser from "react-html-parser";
import { RecentProjects } from "../layouts/recentProjects";
import { SubFooter } from "../layouts/subFooter";
import { Carousel } from "../components/carousel";
import { Slide, Fade } from "react-reveal";
import {
    GlobeEuropeAfricaIcon,
    ChartBarSquareIcon,
    UserGroupIcon,
    SunIcon,
} from "@heroicons/react/24/outline";
import { HomeSlider } from "../layouts/homeSlider";
import { Page } from "../layouts/page";

export const HomePage = () => {
    const [data, updateData] = useState([]);

    return (
        <Page
            title="Clean Cooking Association of Kenya (CCAK)"
            description="CCAK advocates for an enabling environment to catalyze growth in the clean cooking sector and promote adoption of clean technologies."
            data={data}
            updateData={updateData}
        >
            <div className="text-gray-600 pt-[3.8rem] lg:pt-[6.6rem]">
                <section>
                    <HomeSlider
                        data={data[0]?.content}
                        youtubeId={data[1]?.content?.youtubeId}
                    />
                </section>
                <section className="flex flex-col items-center space-x-12 lg:flex-row p-6 lg:p-32">
                    <div className="lg:w-6/12">
                        <Fade>
                            <h6 className="text-black font-bold text-xs">
                                ABOUT US
                            </h6>
                        </Fade>
                        <Slide bottom>
                            <h2 className="text-gray-800 text-4xl font-semibold mt-1 mb-8">
                                {data[2]?.content?.title}
                            </h2>
                        </Slide>
                        <Slide bottom>
                            <p className="my-5">{data[2]?.content?.content}</p>
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
                    <div className="lg:w-6/12">
                        <Fade>
                            <img
                                className="rounded-lg"
                                src={
                                    process.env.REACT_APP_IMAGEKIT_URL +
                                    data[2]?.content?.image
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
                                {data[3]?.content?.title}
                            </h6>
                        </Fade>
                        <Carousel
                            items={data[3]?.content?.images.map((logo, i) => {
                                return (
                                    <div
                                        key={i}
                                        className="hover:scale-[1.1] duration-300 ease-in-out border-none"
                                        title={logo.name}
                                    >
                                        <a
                                            href={logo.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex justify-center items-center border-none"
                                        >
                                            <img
                                                src={logo.image}
                                                alt={logo.name}
                                                style={{ maxHeight: "8em" }}
                                            />
                                        </a>
                                    </div>
                                );
                            })}
                            autoplay={true}
                            slides={1}
                            show={6}
                            reverse={false}
                            arrow={false}
                        />
                    </div>
                    <div className="py-3">
                        <Fade>
                            <h6 className="text-black text-sm font-semibold my-5">
                                {data[4]?.content?.title}
                            </h6>
                        </Fade>
                        <Carousel
                            items={data[4]?.content?.images.map((logo, i) => {
                                return (
                                    <div
                                        key={i}
                                        className="hover:scale-[1.1] duration-300 ease-in-out border-none"
                                        title={logo.name}
                                    >
                                        <a
                                            href={logo.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex justify-center items-center border-none"
                                        >
                                            <img
                                                src={logo.image}
                                                alt={logo.name}
                                                style={{ maxHeight: "8em" }}
                                            />
                                        </a>
                                    </div>
                                );
                            })}
                            autoplay={true}
                            slides={1}
                            show={6}
                            reverse={false}
                            arrow={false}
                        />
                    </div>
                </section>
                <section className="flex flex-col lg:flex-row w-full p-6 lg:py-20 lg:p-32 bg-[#dbefdf]">
                    <div className="lg:w-6/12">
                        <Slide bottom>
                            <h6 className="font-bold text-xs text-black">
                                WHAT WE DO
                            </h6>
                        </Slide>
                        <Slide bottom>
                            <h2 className="font-semibold text-4xl mt-1 mb-8 text-black">
                                {data[5]?.content?.title}
                            </h2>
                        </Slide>
                        <Slide bottom>
                            <p className="my-5 ">{data[5]?.content?.content}</p>
                        </Slide>

                        <ul className="border-l border-gray-900 text-gray-900">
                            {data[5]?.content?.items.map((item, i) => (
                                <Slide bottom key={i}>
                                    <li className="flex flex-row my-8">
                                        <div className="mx-5">
                                            {ReactHtmlParser(item.icon)}
                                        </div>
                                        <div className="lg:w-2/4">
                                            <h4 className="text-xle">
                                                {item.title}
                                            </h4>
                                            <p>{item.desc}</p>
                                        </div>
                                    </li>
                                </Slide>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:w-6/12 mt-5 lg:m-0">
                        <Fade>
                            <img
                                className="rounded-lg max-h-[40em] mx-auto"
                                src={
                                    process.env.REACT_APP_IMAGEKIT_URL +
                                    "home_section_2_promote_clean_cooking.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678477808057"
                                }
                                alt="Promoting clean cooking"
                            />
                        </Fade>
                    </div>
                </section>
                <section className="py-10 px-6 lg:px-32">
                    <h2 className="font-semibold text-4xl my-10 flex justify-center normal-case">
                        {data[6]?.content?.title}
                    </h2>
                    <div>
                        {data[6]?.content?.achievements
                            .filter((item) => item.achievement === "members")
                            .map((item, i) => (
                                <div className="text-center">
                                    <h3 className="font-semibold text-[11em] text-[#EC7422]">
                                        <CountUp
                                            end={item.count}
                                            duration={10}
                                        />
                                    </h3>
                                    <h3 className="uppercase font-bold text-2xl tracking-widest">
                                        {item.achievement}
                                    </h3>
                                </div>
                            ))}
                    </div>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 py-10">
                        {data[6]?.content?.achievements
                            .filter((item) => item.achievement !== "members")
                            .map((item, i) => (
                                <div className="py-5 text-center">
                                    <div className="text-7xl my-5 font-bold text-black">
                                        <CountUp
                                            end={item.count}
                                            duration={10}
                                        />
                                    </div>
                                    <h3 className="uppercase font-bold tracking-widest">
                                        {item.achievement}
                                    </h3>
                                </div>
                            ))}
                    </div>
                </section>
                <section>
                    <RecentProjects title={data[7]?.content?.title} />
                </section>
                <section>
                    <SubFooter data={data[8]?.content} />
                </section>
            </div>
        </Page>
    );
};
