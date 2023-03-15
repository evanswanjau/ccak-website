import { Slide, Fade } from "react-reveal";
import { LogoCarousel } from "../../Components/carousel";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
import {
    UsersIcon,
    ScaleIcon,
    StarIcon,
    Squares2X2Icon,
    CubeTransparentIcon,
    WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { SubFooter } from "../../Containers/subFooter";

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

const affiliations = [
    {
        name: "aku",
        link: "https://hospitals.aku.edu/nairobi/Pages/default.aspx",
        image: "/logos/aku.gif",
    },
    {
        name: "nema",
        link: "https://www.nema.go.ke/",
        image: "/logos/nema.png",
    },
    {
        name: "epra",
        link: "https://www.epra.go.ke/",
        image: "/logos/epra.jpg",
    },
    {
        name: "kebs",
        link: "https://www.kebs.org/",
        image: "/logos/kebs.png",
    },
    {
        name: "kefri",
        link: "https://www.kefri.org/",
        image: "/logos/kefri.png",
    },
    {
        name: "kirdi",
        link: "https://www.kirdi.go.ke/",
        image: "/logos/kirdi.jpg",
    },
];

const pillars = [
    {
        icon: <ScaleIcon className="w-8 text-[#329E49]" />,
        name: "representation and advocacy",
        description:
            "Through this pillar CCAK aims to improve the environment, sector cohesion and self-regulation. The priorities are on actions to improve the policy, legal and regulatory environment, budgetary allocation towards clean cooking, see better partnerships and collaboration and influence sector strategy",
    },
    {
        icon: <UsersIcon className="w-8 text-[#329E49]" />,
        name: "membership and member oriented services",
        description:
            "CCAK aims to recruit and retain members and have a strong and influential membership base. Core, associate and honorary members will be identified and will benefit from renewed value propositions along ten fundamental value areas.",
    },
    {
        icon: <CubeTransparentIcon className="w-8 text-[#329E49]" />,
        name: "standards and technical issues",
        description:
            "Through this pillar CCAK aims to improve the environment, sector cohesion and self-regulation. The priorities are on actions to improve the policy, legal and regulatory environment, budgetary allocation towards clean cooking, see better partnerships and collaboration and influence sector strateg",
    },
    {
        icon: <Squares2X2Icon className="w-8 text-[#329E49]" />,
        name: "knowledge and information management",
        description:
            "CCAK aims to recruit and retain members and have a strong and influential membership base. Core, associate and honorary members will be identified and will benefit from renewed value propositions along ten fundamental value areas.",
    },
    {
        icon: <WrenchScrewdriverIcon className="w-8 text-[#329E49]" />,
        name: "institution strengthening and resourcing",
        description:
            "Through this pillar CCAK aims to improve the environment, sector cohesion and self-regulation. The priorities are on actions to improve the policy, legal and regulatory environment, budgetary allocation towards clean cooking, see better partnerships and collaboration and influence sector strateg",
    },
];

export const AboutUsPage = () => {
    return (
        <div className="pt-[4rem] lg:pt-[8.2rem]">
            <section className="flex flex-col md:flex-row w-full pt-6 md:pb-40 md:pt-20 px-6 md:px-16">
                <div className="hidden w-full lg:block md:w-1/12">
                    <Fade>
                        <div className="border-t-2 border-black mx-5 my-1"></div>
                    </Fade>
                </div>
                <div className="w-full lg:w-6/12 md:pr-5">
                    <Fade>
                        <h6 className="text-black text-xs font-bold">
                            ABOUT US
                        </h6>
                    </Fade>
                    <Slide bottom>
                        <h2 className="text-black text-4xl lg:text-5xl my-8 font-bold">
                            The Clean Cooking Association of Kenya (CCAK)
                        </h2>
                    </Slide>
                </div>
                <div className="w-full mt-5 md:mt-0 lg:w-5/12">
                    <Slide bottom>
                        <h5 className="font-semibold pb-5">
                            The Clean Cooking Association of Kenya: Working
                            Towards a Healthier Nation.
                        </h5>
                    </Slide>

                    <Slide bottom>
                        <p className="my-5 text-gray-600">
                            The Clean Cooking Association of Kenya is a sector
                            association with a vision to see universal access
                            and adoption of clean cooking solutions and
                            practices in Kenya, through a sustainable market
                            environment.
                            <br />
                            <br />
                            In addition to promoting clean cooking solutions,
                            the association's focus on creating a sustainable
                            market environment is also important.
                        </p>
                    </Slide>
                </div>
            </section>
            <section className="p-6 md:p-16 bg-[#EFF7F2]">
                <Slide bottom>
                    <div
                        style={{
                            backgroundImage: `url(${
                                import.meta.env.VITE_IMAGEKIT +
                                "about_us_section_2_video_bg.jpg"
                            })`,
                        }}
                        className="md:-mt-40 mx-auto flex justify-center w-10/12 p-32 bg-cover bg-center bg-no-repeat rounded-lg group cursor-pointer"
                    >
                        <PlayCircleIcon className="w-12 text-white group-hover:scale-[1.15] duration-300 ease-in-out" />
                    </div>
                </Slide>
                <div
                    id="our-mission"
                    className="flex flex-col md:flex-row justify-evenly my-6"
                >
                    <div id="our-vision" className="lg:w-4/12">
                        <Slide bottom>
                            <h6 className="text-black text-sm font-semibold my-5">
                                OUR MISSION
                            </h6>
                        </Slide>

                        <Slide bottom>
                            <h5 className="font-semibold pb-5 text-2xl">
                                Championing Sustainable Solutions for Universal
                                Adoption
                            </h5>
                        </Slide>
                        <Slide bottom>
                            <p className="text-gray-600">
                                The Clean Cooking Association of Kenya is the
                                sector champion influencing a suitable market
                                environment and capacity development of its
                                members and other stakeholders, enabling them to
                                cause universal adoption of clean and efficient
                                cooking solutions in Kenya.
                            </p>
                        </Slide>
                    </div>
                    <div className="lg:w-4/12">
                        <Slide bottom>
                            <h6 className="text-black text-sm font-semibold my-5">
                                OUR VISION
                            </h6>
                        </Slide>

                        <Slide bottom>
                            <h5 className="font-semibold pb-5 text-2xl">
                                Building a Sustainable Future with Clean Cooking
                                Solutions
                            </h5>
                        </Slide>
                        <Slide bottom>
                            <p className="text-gray-600">
                                Universal access and adoption of clean and
                                efficient cooking solutions and practices in
                                Kenya, through a sustainable market environment.
                            </p>
                        </Slide>
                    </div>
                </div>
                <div id="our-partners" className="py-3">
                    <Fade>
                        <h6 className="text-black text-sm font-semibold my-5">
                            OUR PARTNERS AND DONORS
                        </h6>
                    </Fade>
                    <LogoCarousel logos={partners} />
                </div>
                <div className="py-3">
                    <Fade>
                        <h6 className="text-black text-sm font-semibold my-5">
                            OUR AFFILIATIONS
                        </h6>
                    </Fade>
                    <LogoCarousel logos={affiliations} />
                </div>
            </section>
            <section className="p-6 lg:p-16">
                <Slide bottom>
                    <h2 className="font-semibold text-4xl pb-10 flex justify-center">
                        About Us
                    </h2>
                </Slide>
                <div className="flex flex-col lg:flex-row  space-y-12 lg:space-y-0 lg:space-x-12">
                    <div className="lg:w-6/12">
                        <p className="text-gray-600">
                            <Slide bottom>
                                Clean Cooking Association of Kenya (CCAK), is a
                                private, not for profit, business membership
                                organization representing stakeholders in the
                                clean cooking sector. The members are mainly
                                drawn from the private sector as well as
                                representatives from government, academia,
                                development partners, Non-Governmental
                                Organizations among others.
                            </Slide>
                            <br />
                            <br />
                            <Slide bottom>
                                The main objective of CCAK is to advocate for an
                                enabling environment at both national and county
                                levels to catalyze the growth of the clean
                                cooking sector and promote adoption of clean
                                cooking technologies, capacity building of the
                                sector and sector coordination. The association
                                has effective frameworks of engagement with
                                government and other stakeholders to coordinate
                                and advocate for the sector.
                            </Slide>
                        </p>
                    </div>
                    <div className="lg:w-6/12">
                        <Slide bottom>
                            <p className="text-gray-600">
                                CCAK recently launched its five year strategy
                                outlined in five pillars to help it achieve its
                                mission as the sector champion. With the renewed
                                focus and strategy, CCAK expects to have 10
                                million households using clean cooking solutions
                                by 2022; see a 90% drop in health impacts by
                                2022; improve livelihoods; impact at least 7
                                million women; mitigate climate change and;
                                preserve the environment. For these to be
                                achieved, CCAK works around five key strategic
                                pillars:
                            </p>
                        </Slide>
                    </div>
                </div>
            </section>
            <section className="p-6 lg:p-16">
                <div className="flex flex-col lg:flex-row text-white bg-black md:space-x-10 p-6 lg:p-16 rounded-lg">
                    <div className="lg:w-6/12">
                        <Slide bottom>
                            <h3 className="text-3xl md:text-4xl mb-10">
                                Why clean cooking is important
                            </h3>
                        </Slide>

                        <Slide bottom>
                            <p className="text-gray-400">
                                Clean cooking is essential for a variety of
                                reasons. Traditional cooking methods, such as
                                burning wood or charcoal, release harmful
                                pollutants that can cause respiratory and other
                                health problems.
                            </p>
                        </Slide>
                        <br />
                        <Slide bottom>
                            <p className="text-gray-400">
                                They reduce or eliminate these pollutants,
                                improving indoor air quality and promoting
                                better health.
                            </p>
                        </Slide>
                        <br />
                        <Slide bottom>
                            <p className="text-gray-400">
                                Additionally, traditional cooking methods
                                contribute to deforestation and other
                                environmental problems. Clean cooking solutions
                                use renewable energy sources, produce fewer
                                emissions, and reduce reliance on biomass fuel.
                            </p>
                        </Slide>
                    </div>
                    <div className="mt-10 sm:mt-0 lg:w-6/12 lg:pt-10">
                        <Fade>
                            <img
                                className="rounded-lg"
                                src={
                                    import.meta.env.VITE_IMAGEKIT +
                                    "about_us_section_6_clean_cooking_importance.jpg"
                                }
                                alt="Importance of clean cooking"
                            />
                        </Fade>
                    </div>
                </div>
            </section>
            <section className="p-6 lg:px-8">
                <Slide bottom>
                    <h2 className="font-semibold text-3xl md:text-4xl flex justify-center">
                        Our Five Key Strategic Pillars
                    </h2>
                </Slide>
                <div className="flex flex-row md:px-6 lg:px-16 py-5">
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-y-10 sm:gap-12 lg:p-10">
                        {pillars.map((pillar) => {
                            return (
                                <Slide bottom>
                                    <div className="space-y-2">
                                        {pillar.icon}
                                        <h6 className="font-semibold capitalize text-[#329E49]">
                                            {pillar.name}
                                        </h6>
                                        <p className="text-gray-600">
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
                <SubFooter />
            </section>
        </div>
    );
};
