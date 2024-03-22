import React, { useState } from "react";
import CountUp from "react-countup";
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

const iconComponents = {
    GlobeEuropeAfricaIcon: GlobeEuropeAfricaIcon,
    ChartBarSquareIcon: ChartBarSquareIcon,
    UserGroupIcon: UserGroupIcon,
    SunIcon: SunIcon,
};

const getIcon = (iconString) => {
    const match = iconString.match(/<(\w+)/);
    const iconName = match ? match[1] : null;
    const IconComponent = iconComponents[iconName];
    return iconName ? <IconComponent className="w-8" /> : null;
};

export const HomePage = () => {
    const [data, updateData] = useState([]);

    return (
        <Page
            title="Clean Cooking Association of Kenya (CCAK)"
            description="CCAK advocates for an enabling environment to catalyze growth in the clean cooking sector and promote adoption of clean technologies."
            page="home"
            data={data}
            updateData={updateData}
        >
            <div className="text-gray-600 pt-[4.3rem] lg:pt-[6.6rem]">
                <section>
                    <HomeSlider
                        data={data[0]?.content}
                        youtubeId={data[1]?.content?.youtubeId}
                    />
                </section>
                <section className="flex flex-col-reverse items-center lg:space-x-12 lg:flex-row p-6 lg:p-32">
                    <div className="lg:w-6/12">
                        <Fade>
                            <h6 className="text-black font-bold text-xs">
                                ABOUT US
                            </h6>
                        </Fade>
                        <Slide bottom>
                            <h2 className="text-gray-800 text-4xl md:text-5xl font-semibold mt-1 mb-8">
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
                    <div className="lg:w-6/12 mb-8 lg:mb-0">
                        <Fade>
                            <img
                                className="rounded-lg"
                                src={
                                    process.env.REACT_APP_IMAGEKIT_URL +
                                    data[2]?.content?.image
                                }
                                alt={data[2]?.content?.title}
                            />
                        </Fade>
                    </div>
                </section>
                <section className="py-10 px-6 lg:px-16">
                    <div className="py-3">
                        <Fade>
                            <h6 className="text-black text-sm font-semibold my-5 uppercase">
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
                                                src={
                                                    process.env
                                                        .REACT_APP_IMAGEKIT_URL +
                                                    logo.image
                                                }
                                                alt={logo.name}
                                                style={{ maxHeight: "4em" }}
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
                            <h6 className="text-black text-sm font-semibold my-5 uppercase">
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
                                                src={
                                                    process.env
                                                        .REACT_APP_IMAGEKIT_URL +
                                                    logo.image
                                                }
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
                <section className="flex flex-col-reverse lg:flex-row w-full p-6 lg:py-20 lg:p-32 bg-[#dbefdf]">
                    <div className="lg:w-6/12">
                        <Slide bottom>
                            <h6 className="font-bold text-xs text-black">
                                WHAT WE DO
                            </h6>
                        </Slide>
                        <Slide bottom>
                            <h2 className="font-semibold text-4xl md:text-5xl  mt-1 mb-8 text-gray-800">
                                {data[5]?.content?.title}
                            </h2>
                        </Slide>
                        <Slide bottom>
                            <p className="my-5 ">{data[5]?.content?.content}</p>
                        </Slide>

                        <ul className="border-l border-gray-800 text-gray-800">
                            {data[5]?.content?.items.map((item, i) => (
                                <Slide bottom key={i}>
                                    <li className="flex flex-row my-8">
                                        <div className="mx-5">
                                            {getIcon(item.icon)}
                                        </div>
                                        <div className="lg:w-2/4">
                                            <h4 className="text-xl font-semibold">
                                                {item.title}
                                            </h4>
                                            <p>{item.desc}</p>
                                        </div>
                                    </li>
                                </Slide>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:w-6/12 mb-8 lg:mb-0 flex items-center justify-center">
                        <Fade>
                            <img
                                className="rounded-lg max-h-[40em] mx-auto"
                                src={
                                    process.env.REACT_APP_IMAGEKIT_URL +
                                    data[5]?.content?.image
                                }
                                alt={data[5]?.content?.title}
                            />
                        </Fade>
                    </div>
                </section>
                <section className="py-10 px-6 lg:px-32">
                    <h2 className="font-semibold text-4xl md:text-5xl my-10 flex justify-center normal-case  text-gray-800">
                        {data[6]?.content?.title}
                    </h2>
                    <div>
                        {data[6]?.content?.achievements
                            .filter((item) => item.achievement === "members")
                            .map((item, i) => (
                                <div className="text-center">
                                    <h3 className="font-semibold text-8xl md:text-[11em] text-[#EC7422]">
                                        <CountUp
                                            end={item.count}
                                            duration={10}
                                            formattingFn={(value) =>
                                                `+${value}`
                                            }
                                        />
                                    </h3>
                                    <h3 className="uppercase font-bold text-2xl tracking-widest text-gray-800">
                                        {item.achievement}
                                    </h3>
                                </div>
                            ))}
                    </div>
                    <div className="w-full grid  sm:grid-cols-2 lg:grid-cols-3 gap-y-12 py-10">
                        {data[6]?.content?.achievements
                            .filter((item) => item.achievement !== "members")
                            .map((item, i) => (
                                <div className="py-2 md:py-5 text-center">
                                    <div className="text-7xl my-5 font-bold text-black">
                                        <CountUp
                                            end={item.count}
                                            duration={10}
                                            formattingFn={(value) =>
                                                `+${value}`
                                            }
                                        />
                                    </div>
                                    <h3 className="uppercase font-bold tracking-widest text-gray-800">
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
