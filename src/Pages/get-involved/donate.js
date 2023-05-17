import { Slide, Fade } from "react-reveal";
import { DonationStats } from "../../Containers/donationStats";

export const DonatePage = () => {
    return (
        <div className="pt-[4rem] lg:pt-[8.2rem]">
            <section className="flex flex-col md:flex-row w-full py-6 md:py-20 px-6 md:px-12 bg-[#EFF7F2]">
                <div className="hidden w-full lg:block md:w-1/12">
                    <Fade>
                        <div className="border-t-2 border-black mx-5 my-2"></div>
                    </Fade>
                </div>
                <div className="w-full lg:w-6/12 md:pr-5">
                    <Fade>
                        <h6 className="text-black font-semibold">DONATE</h6>
                    </Fade>
                    <Slide bottom>
                        <h2 className="text-black text-4xl lg:text-6xl my-8 font-bold">
                            Donate today and support a good cause
                        </h2>
                    </Slide>
                    <Slide bottom>
                        <p className="my-5 text-gray-600">
                            When you donate, you’re supporting effective
                            solutions to big environmental challenges—an
                            investment in the future of our planet.
                        </p>
                    </Slide>
                    <Slide bottom>
                        <button className="bg-[#329E49] font-manjari leading-none pb-3 pt-4 px-5 text-white hover:bg-[#ED7423] hover:text-white rounded-md transition duration-300 ease-in-out tracking-widest">
                            DONATE NOW
                        </button>
                    </Slide>
                </div>
                <div className="w-full mt-5 flex items-center md:mt-0 lg:w-5/12">
                    <Fade>
                        <img
                            className="rounded-lg"
                            src={
                                process.env.REACT_APP_IMAGEKIT_URL +
                                "donate_page_section_1.jpg"
                            }
                            alt="Importance of clean cooking"
                        />
                    </Fade>
                </div>
            </section>
            <section className="w-full flex flex-col lg:flex-row p-6 lg:p-16 space-y-12 lg:space-y-0 lg:space-x-12">
                <div className="lg:w-6/12">
                    <Fade>
                        <h5 className="font-semibold pb-5">
                            We are committed to using every dollar donated
                            towards our programs, and we are grateful for your
                            support in helping us achieve our goals.
                        </h5>
                    </Fade>
                    <Fade>
                        <p className="text-gray-600">
                            At Clean Cooking Association of Kenya we are the
                            national clean cooking sector representative and the
                            lead champion for sustainable universal clean and
                            efficient cooking in Kenya. We innate and steer
                            policy, regulation, and fiscal change that favour
                            our members, influence standards, gather, analyse
                            and disseminate information and offer value addition
                            to our members. Your Donation will support the
                            association’s effort to influence the universal
                            access and adoption of clean and efficient cooking
                            solutions and practices in Kenya.
                        </p>
                    </Fade>
                </div>
                <div className="lg:w-6/12">
                    <Fade>
                        <h5 className="font-semibold pb-5">
                            Your contribution can make a real difference in our
                            efforts to improve health outcomes, protect the
                            environment, and uplift livelihoods.
                        </h5>
                    </Fade>
                    <Fade>
                        <p className="text-gray-600">
                            Your donation can help us achieve our goal of
                            providing access to clean cooking solutions for
                            millions of households in Kenya, reducing the number
                            of deaths caused by indoor air pollution and
                            improving overall health outcomes. Your donation can
                            also help mitigate the effects of climate change and
                            contribute to environmental conservation. Thank you
                            for considering a donation to our cause. Together,
                            we can create a cleaner, healthier, and more
                            sustainable future for all.
                        </p>
                    </Fade>
                </div>
            </section>
            <DonationStats />
        </div>
    );
};
