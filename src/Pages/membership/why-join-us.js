import { Slide, Fade } from "react-reveal";
import { Link } from "react-router-dom";

export const WhyJoinUsPage = () => {
    return (
        <div className="pt-[4rem] lg:pt-[8.2rem]">
            <section
                style={{
                    backgroundImage: `url(${
                        process.env.REACT_APP_IMAGEKIT + "/why_join_us/why_join_us.jpg"
                    })`,
                }}
                className={`h-screen bg-cover bg-center bg-no-repeat`}
            >
                <div className="flex flex-row bg-black/[.5] w-full h-full justify-center">
                    <div className="lg:w-6/12 p-6 text-white text-center mt-24">
                        <Slide bottom>
                            <h1 className="text-4xl md:text-6xl font-bold my-10">
                                Why Join Us?
                            </h1>
                        </Slide>
                        <Slide bottom>
                            <p className="text-lg my-5">
                                The Clean Cooking Association of Kenya as a
                                member can provide you with access to a range of
                                resources and opportunities that can help you to
                                advance your work in the clean cooking sector
                                and contribute to the association's vision of
                                universal access and adoption of clean cooking
                                solutions and practices in Kenya.
                            </p>
                        </Slide>
                    </div>
                </div>
            </section>
            <section className="flex flex-col-reverse lg:flex-row p-6 lg:p-24 items-center lg:space-x-6">
                <div className="lg:w-6/12 ">
                    <Slide bottom>
                        <h2 className="text-2xl lg:text-4xl font-bold mt-10 lg:mt-5">
                            Access to information and resources
                        </h2>
                    </Slide>
                    <Slide bottom>
                        <p className="mt-8 mb-5 text-gray-600">
                            As a member of the association, you may have access
                            to a range of information and resources related to
                            clean cooking practices and solutions in Kenya.
                            Including research reports and studies on the
                            health, social, economic, and environmental impacts
                            of clean cooking practices in Kenya.
                        </p>
                    </Slide>
                    <Slide bottom>
                        <Link to="/membership/packages">
                            <button className="bg-[#329E49] font-manjari leading-none mt-5 pb-3 pt-4 px-5 text-white hover:bg-[#ED7423] hover:text-white rounded-md transition duration-300 ease-in-out tracking-widest">
                                GET STARTED
                            </button>
                        </Link>
                    </Slide>
                </div>
                <div className="lg:w-6/12">
                    <Fade>
                        <img
                            className="rounded-lg"
                            src={
                                process.env.REACT_APP_IMAGEKIT +
                                "/why_join_us/access_to_information_and_resources.jpg"
                            }
                            alt="Importance of clean cooking"
                        />
                    </Fade>
                </div>
            </section>
            <section className="flex flex-col lg:flex-row p-6 lg:p-24 items-center lg:space-x-10">
                <div className="lg:w-6/12">
                    <Fade>
                        <img
                            className="rounded-lg"
                            src={
                                process.env.REACT_APP_IMAGEKIT +
                                "/why_join_us/networking_opportunities.jpg"
                            }
                            alt="Importance of clean cooking"
                        />
                    </Fade>
                </div>
                <div className="lg:w-6/12 ">
                    <Slide bottom>
                        <h2 className="text-2xl lg:text-4xl font-bold mt-10 lg:mt-5">
                            Networking opportunities
                        </h2>
                    </Slide>
                    <Slide bottom>
                        <p className="mt-8 mb-5 text-gray-600">
                            We provide various networking opportunities that
                            members can take advantage of, including: Meetings
                            with other members of the association to discuss
                            issues related to clean cooking. Participation in
                            events, where members can meet other people and
                            organizations involved in the clean cooking sector.
                        </p>
                    </Slide>
                    <Slide bottom>
                        <Link to="/membership/packages">
                            <button className="bg-[#329E49] font-manjari leading-none mt-5 pb-3 pt-4 px-5 text-white hover:bg-[#ED7423] hover:text-white rounded-md transition duration-300 ease-in-out tracking-widest">
                                GET STARTED
                            </button>
                        </Link>
                    </Slide>
                </div>
            </section>{" "}
            <section className="flex flex-col-reverse lg:flex-row p-6 lg:p-24 items-center lg:space-x-6">
                <div className="lg:w-6/12 ">
                    <Slide bottom>
                        <h2 className="text-2xl lg:text-4xl font-bold mt-10 lg:mt-5">
                            Training and capacity building
                        </h2>
                    </Slide>
                    <Slide bottom>
                        <p className="mt-8 mb-5 text-gray-600">
                            As a member of the association, you may have access
                            to training and capacity-building opportunities,
                            such as: Training on how to use and maintain clean
                            cookstoves and other clean cooking technologies,
                            workshops and other learning opportunities related
                            to advocacy and policy development.
                        </p>
                    </Slide>
                    <Slide bottom>
                        <Link to="/membership/packages">
                            <button className="bg-[#329E49] font-manjari leading-none mt-5 pb-3 pt-4 px-5 text-white hover:bg-[#ED7423] hover:text-white rounded-md transition duration-300 ease-in-out tracking-widest">
                                GET STARTED
                            </button>
                        </Link>
                    </Slide>
                </div>
                <div className="lg:w-6/12">
                    <Fade>
                        <img
                            className="rounded-lg"
                            src={
                                process.env.REACT_APP_IMAGEKIT +
                                "/why_join_us/training_and_capacity_building.jpg"
                            }
                            alt="Training and capacity building"
                        />
                    </Fade>
                </div>
            </section>{" "}
            <section className="flex flex-col lg:flex-row p-6 lg:p-24 items-center lg:space-x-6">
                <div className="lg:w-6/12">
                    <Fade>
                        <img
                            className="rounded-lg"
                            src={
                                process.env.REACT_APP_IMAGEKIT +
                                "/why_join_us/advocacy_support.jpg"
                            }
                            alt="Advocacy support"
                        />
                    </Fade>
                </div>
                <div className="lg:w-6/12 ">
                    <Slide bottom>
                        <h2 className="text-2xl lg:text-4xl font-bold mt-10 lg:mt-5">
                            Advocacy support
                        </h2>
                    </Slide>
                    <Slide bottom>
                        <p className="mt-8 mb-5 text-gray-600">
                            The association may provide support and resources to
                            members involved in advocacy efforts related to
                            clean cooking, including: Assistance with policy
                            development and advocacy campaigns to promote clean
                            cooking solutions in Kenya. Collaboration with other
                            organizations and individuals involved in clean
                            cooking advocacy efforts in Kenya.
                        </p>
                    </Slide>
                    <Slide bottom>
                        <Link to="/membership/packages">
                            <button className="bg-[#329E49] font-manjari leading-none mt-5 pb-3 pt-4 px-5 text-white hover:bg-[#ED7423] hover:text-white rounded-md transition duration-300 ease-in-out tracking-widest">
                                GET STARTED
                            </button>
                        </Link>
                    </Slide>
                </div>
            </section>{" "}
            <section className="flex flex-col-reverse lg:flex-row p-6 lg:p-24 items-center lg:space-x-6">
                <div className="lg:w-6/12 ">
                    <Slide bottom>
                        <h2 className="text-2xl lg:text-4xl font-bold mt-10 lg:mt-5">
                            Business development support
                        </h2>
                    </Slide>
                    <Slide bottom>
                        <p className="mt-8 mb-5 text-gray-600">
                            The association may provide support to members
                            involved in business development related to clean
                            cooking, including: Access to funding opportunities
                            and investors interested in supporting clean cooking
                            solutions in Kenya. Assistance with product
                            development and quality assurance to ensure that
                            clean cooking technologies meet the needs of
                            consumers in Kenya.
                        </p>
                    </Slide>
                    <Slide bottom>
                        <Link to="/membership/packages">
                            <button className="bg-[#329E49] font-manjari leading-none mt-5 pb-3 pt-4 px-5 text-white hover:bg-[#ED7423] hover:text-white rounded-md transition duration-300 ease-in-out tracking-widest">
                                GET STARTED
                            </button>
                        </Link>
                    </Slide>
                </div>
                <div className="lg:w-6/12">
                    <Fade>
                        <img
                            className="rounded-lg"
                            src={
                                process.env.REACT_APP_IMAGEKIT +
                                "/why_join_us/business_development_support.jpg"
                            }
                            alt="Business development support"
                        />
                    </Fade>
                </div>
            </section>
        </div>
    );
};
