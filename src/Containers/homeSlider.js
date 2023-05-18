import { Swiper, SwiperSlide } from "swiper/react";
import { Slide } from "react-reveal";
import { PlayCircleIcon } from "@heroicons/react/24/solid";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectFade, Autoplay, Pagination, Navigation } from "swiper";

const data = [
    {
        title: "Clean cooking for a healthier environment",
        content:
            "Rural and peri-urban women and children in Kenya suffer more from household air pollution caused by traditional cooking methods.",
    },
    {
        title: "Limited Access to Clean Cooking Solutions",
        content:
            "Ensuring equitable access to clean cooking technologies and fuels for all households in Kenya, reducing the health and environmental impacts of traditional cooking methods.",
    },
    {
        title: "High Dependence on Solid Fuels",
        content:
            "Promoting the transition from solid fuels to cleaner and more sustainable cooking fuels, improving indoor air quality and reducing deforestation rates in Kenya.",
    },
    {
        title: "Lack of Awareness and Behavioral Change",
        content:
            "Raising awareness and promoting behavioral change among communities to adopt clean cooking practices, reducing the exposure of women and children to harmful household air pollution.",
    },
    {
        title: "Inadequate Financing for Clean Cooking Initiatives",
        content:
            "Mobilizing financial resources and advocating for increased funding support to accelerate the adoption of clean cooking technologies, fostering sustainable and scalable solutions in Kenya.",
    },
    {
        title: "Insufficient Research and Development",
        content:
            "Promoting research and development in clean cooking technologies, fuels, and practices, driving innovation and evidence-based solutions to address the health and environmental challenges associated with traditional cooking methods.",
    },
    {
        title: "Limited Integration of Gender Considerations",
        content:
            "Integrating gender considerations into clean cooking initiatives, empowering women as key stakeholders and change agents for cleaner and healthier cooking practices.",
    },
];

export const HomeSlider = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                grabCursor={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                speed={500}
                loop={true}
                className="mySwiper"
            >
                {data.map((item, i) => {
                    return (
                        <SwiperSlide
                            style={{
                                backgroundImage: `url(${
                                    process.env.REACT_APP_IMAGEKIT_URL +
                                    "sliders/slider" +
                                    (i + 1) +
                                    ".jpg"
                                })`,
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                height: "calc(100vh - 8em)",
                            }}
                        >
                            <div className="flex flex-row items-center bg-black/[.3] w-full h-full">
                                <div className="lg:w-7/12 lg:ml-14 p-6 text-white content-center">
                                    <Slide right>
                                        <h1 className="text-4xl md:text-6xl font-bold my-5">
                                            {item.title}
                                        </h1>
                                    </Slide>
                                    <Slide bottom>
                                        <p className="text-xl font-bold mt-5 leading-normal">
                                            {item.content}
                                        </p>
                                    </Slide>
                                    {i === 0 && (
                                        <Slide bottom>
                                            <div className="flex space-x-3 lg:space-x-8 my-10">
                                                <a href={"/what-we-do"}>
                                                    <button className="bg-white text-gray-600 pt-3 pb-2 px-6 hover:bg-[#ED7423] hover:text-white rounded-md transition duration-300 ease-in-out tracking-widest">
                                                        WHAT WE DO
                                                    </button>
                                                </a>
                                                <button className="flex text-xl items-center space-x-2 hover:text-[#ED7423] transition duration-300 ease-in-out">
                                                    <PlayCircleIcon className="w-6" />
                                                    <p className="">
                                                        Play Video
                                                    </p>
                                                </button>
                                            </div>
                                        </Slide>
                                    )}
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
};
