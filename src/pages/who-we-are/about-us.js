import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Slide, Fade } from "react-reveal";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
import {
    UsersIcon,
    ScaleIcon,
    Squares2X2Icon,
    CubeTransparentIcon,
    WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { SubFooter } from "../../layouts/subFooter";
import { ModalYoutubeVideo } from "../../layouts/modalVideo";
import { Page } from "../../layouts/page";
import { Carousel } from "../../components/carousel";

const iconComponents = {
    UsersIcon: UsersIcon,
    ScaleIcon: ScaleIcon,
    Squares2X2Icon: Squares2X2Icon,
    CubeTransparentIcon: CubeTransparentIcon,
    WrenchScrewdriverIcon: WrenchScrewdriverIcon,
};

const getIcon = (iconString) => {
    const match = iconString.match(/<(\w+)/);
    const iconName = match ? match[1] : null;
    const IconComponent = iconComponents[iconName];
    return iconName ? <IconComponent className="w-8" /> : null;
};

export const AboutUsPage = () => {
    const [show, setShow] = useState(false);
    const [data, updateData] = useState([]);

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            console.log(location.hash);
            let elem = document.getElementById(location.hash.slice(1));
            if (elem) {
                elem.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }
    }, [location]);

    return (
        <Page
            title="About Us"
            description="In addition to promoting clean cooking solutions, the association's focus on creating a sustainable market environment is also important."
            page="about-us"
            data={data}
            updateData={updateData}
        >
            <div className="pt-[3.8rem] lg:pt-[6.6rem]">
                <ModalYoutubeVideo
                    show={show}
                    setShow={setShow}
                    youtubeId={data[1]?.content?.youtubeId}
                />
                <section className="flex flex-col space-y-8 md:space-x-8 md:flex-row w-full mb-40 p-6 lg:p-32">
                    <div className="w-full lg:w-6/12">
                        <Fade>
                            <h6 className="text-black text-xs font-bold">
                                ABOUT US
                            </h6>
                        </Fade>
                        <Slide bottom>
                            <h2 className="text-gray-800 text-4xl lg:text-6xl font-bold">
                                {data[0]?.content?.title}
                            </h2>
                        </Slide>
                    </div>
                    <div className="w-full mt-5 md:mt-0 lg:w-5/12">
                        <Slide bottom>
                            <h5 className="font-semibold text-lg pb-5">
                                {data[0]?.content["sub-title"]}
                            </h5>
                        </Slide>

                        <Slide bottom>
                            <p className="my-5 text-gray-600">
                                {data[0]?.content?.content}
                            </p>
                        </Slide>
                    </div>
                </section>
                <section
                    id="our-mission-vision"
                    className="p-6 lg:p-32 bg-[#dbefdf]"
                >
                    <Slide bottom>
                        <div
                            style={{
                                backgroundImage: `url(https://img.youtube.com/vi/${data[1]?.content?.youtubeId}/maxresdefault.jpg)`,
                            }}
                            className="-mt-48 lg:-mt-80 mx-auto flex justify-center items-center w-full md:w-10/12 py-20 LG:py-40 bg-cover bg-center bg-no-repeat rounded-lg group cursor-pointer"
                            onClick={() => {
                                setShow(true);
                            }}
                        >
                            <PlayCircleIcon className="w-16 text-white group-hover:scale-[1.15] group-hover:text-[#ED7423] duration-300 ease-in-out border-5 border-red-600" />
                        </div>
                    </Slide>
                    <div className="flex flex-col md:flex-row justify-evenly mt-16">
                        <div className="lg:w-4/12">
                            <Slide bottom>
                                <h6 className="text-black text-2xl font-semibold my-5 uppercase tracking-wider">
                                    {data[2]?.content?.[0]?.title}
                                </h6>
                            </Slide>

                            <Slide bottom>
                                <p className="text-gray-600">
                                    {data[2]?.content?.[0]?.content}
                                </p>
                            </Slide>
                        </div>
                        <div className="lg:w-4/12">
                            <Slide bottom>
                                <h6 className="text-black text-2xl font-semibold my-5 uppercase tracking-wider">
                                    {data[2]?.content?.[1]?.title}
                                </h6>
                            </Slide>

                            <Slide bottom>
                                <p className="text-gray-600">
                                    {data[2]?.content?.[1]?.content}
                                </p>
                            </Slide>
                        </div>
                    </div>
                </section>
                <section className="p-6 lg:p-16">
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
                </section>
                <section className="p-6 lg:px-32 py-24">
                    <Slide bottom>
                        <h2 className="font-semibold text-5xl pb-10 flex justify-center capitalize-first">
                            {data[5]?.content?.title}
                        </h2>
                    </Slide>
                    <div className="flex flex-col lg:flex-row space-y-12 lg:space-y-0 lg:space-x-8">
                        <div className="lg:w-6/12">
                            <p className="text-gray-800">
                                <Slide bottom>
                                    {data[5]?.content?.content[0]?.content}
                                </Slide>
                            </p>
                        </div>
                        <div className="lg:w-6/12">
                            <Slide bottom>
                                <p className="text-gray-800">
                                    <Slide bottom>
                                        {data[5]?.content?.content[1]?.content}
                                    </Slide>
                                </p>
                            </Slide>
                        </div>
                    </div>
                </section>
                <section className="p-6 lg:p-16">
                    <div className="flex flex-col-reverse lg:flex-row items-center bg-[#f5bb95] lg:space-x-10 p-6 lg:p-16 rounded-lg">
                        <div className="lg:w-6/12">
                            <Slide bottom>
                                <h3 className="text-4xl md:text-5xl mb-10 font-bold text-gray-800">
                                    {data[6]?.content?.title}
                                </h3>
                            </Slide>

                            <Slide bottom>
                                <p className="text-lg text-gray-800">
                                    {data[6]?.content?.content}
                                </p>
                            </Slide>
                        </div>
                        <div className="lg:w-6/12 mb-5 lg:mb-0">
                            <Fade>
                                <img
                                    className="rounded-lg mx-auto"
                                    src={
                                        process.env.REACT_APP_IMAGEKIT_URL +
                                        data[6]?.content?.image
                                    }
                                    alt={data[6]?.content?.title}
                                />
                            </Fade>
                        </div>
                    </div>
                </section>
                <section className="p-6 lg:px-8">
                    <Slide bottom>
                        <h2 className="font-semibold text-4xl md:text-5xl flex justify-center text-gray-800">
                            {data[7]?.content?.title}
                        </h2>
                    </Slide>
                    <div className="flex flex-row md:px-6 lg:px-16 py-5">
                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-y-10 sm:gap-12 lg:p-10">
                            {data[7]?.content?.pillars.map((pillar, i) => {
                                return (
                                    <Slide bottom key={i}>
                                        <div className="space-y-2">
                                            {getIcon(pillar.icon)}
                                            <h6 className="font-bold text-xl capitalize">
                                                {pillar.name}
                                            </h6>
                                            <p className="text-gray-800">
                                                {pillar.description}
                                            </p>
                                        </div>
                                    </Slide>
                                );
                            })}
                        </div>
                    </div>
                </section>
                <section>
                    <SubFooter data={data[8]?.content} />
                </section>
            </div>
        </Page>
    );
};
