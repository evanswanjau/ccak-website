import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Slide } from "react-reveal";
import { PlayCircleIcon } from "@heroicons/react/24/solid";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectFade, Autoplay, Pagination, Navigation } from "swiper";
import { ModalYoutubeVideo } from "./modalVideo";

export const HomeSlider = ({ data, youtubeId }) => {
    const [show, setShow] = useState(false);

    return (
        <>
            <ModalYoutubeVideo show={show} setShow={setShow} youtubeId={youtubeId} />
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
                                    ".jpg?tr=w-1204"
                                })`,
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                height: "calc(100vh - 6.6em)",
                            }}
                        >
                            <div className="flex flex-row items-center bg-black/[.3] w-full h-full">
                                <div className="lg:w-7/12 lg:ml-14 p-6 text-white content-center">
                                    <h1 className="text-4xl md:text-6xl font-bold my-5">
                                        {item.title}
                                    </h1>
                                    <p className="text-xl font-bold mt-5 leading-normal">
                                        {item.content}
                                    </p>
                                    <div className="flex space-x-3 lg:space-x-8 my-10">
                                        <a href={"/what-we-do"}>
                                            <button className="bg-white text-gray-600 pt-3 pb-2 px-6 hover:bg-[#ED7423] hover:text-white rounded-md transition duration-300 ease-in-out tracking-widest">
                                                WHAT WE DO
                                            </button>
                                        </a>
                                        <button
                                            className="flex text-xl items-center space-x-2 hover:text-[#ED7423] transition duration-300 ease-in-out"
                                            onClick={() => {
                                                setShow(true);
                                            }}
                                        >
                                            <PlayCircleIcon className="w-6" />
                                            <p className="">Play Video</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
};
