import { useState } from "react";
import { Slide, Fade } from "react-reveal";
import { DonationStats } from "../../layouts/donationStats";
import { DonateNow } from "../../layouts/donate";
import { Page } from "../../layouts/page";

export const DonatePage = () => {
    const [data, updateData] = useState([]);
    const [show, setShow] = useState(false);

    return (
        <Page
            title="Donate"
            description="We are committed to using your donations towards the adoption of clean cooking technologies in Kenya, and we are grateful for your support in helping us achieve our goals."
            page="donate"
            data={data}
            updateData={updateData}
        >
            <div className="pt-[3.8rem] lg:pt-[6.6rem]">
                {show && <DonateNow setShow={setShow} />}

                <section className="flex flex-col items-center space-x-8 md:flex-row w-full p-6 lg:p-32 bg-[#F2F9F4]">
                    <div className="w-full lg:w-6/12">
                        <Fade>
                            <h6 className="text-black text-xs font-semibold">
                                DONATE
                            </h6>
                        </Fade>
                        <Slide bottom>
                            <h2 className="text-gray-900 text-4xl lg:text-6xl mt-1 mb-8 font-bold">
                                {data[0]?.content?.title}
                            </h2>
                        </Slide>
                        <Slide bottom>
                            <p className="my-5 text-gray-600">
                                {data[0]?.content?.content}
                            </p>
                        </Slide>
                        <Slide bottom>
                            <button
                                className="bg-[#ED7423] font-manjari leading-none pb-3 pt-4 px-5 text-white hover:bg-[#ce621b] hover:text-white rounded-md transition duration-300 ease-in-out tracking-widest"
                                onClick={() => {
                                    setShow(true);
                                }}
                            >
                                DONATE NOW
                            </button>
                        </Slide>
                    </div>
                    <div className="w-full flex items-center lg:w-6/12">
                        <Fade>
                            <img
                                className="rounded-lg"
                                src={
                                    process.env.REACT_APP_IMAGEKIT_URL +
                                    data[0]?.content?.image
                                }
                                alt={data[0]?.content?.title}
                            />
                        </Fade>
                    </div>
                </section>
                <section className="w-full flex flex-col lg:flex-row p-6 lg:p-32 space-y-12 lg:space-y-0 lg:space-x-12">
                    <div className="lg:w-6/12">
                        <Fade>
                            <h5 className="font-semibold text-xl pb-5">
                                {data[1]?.content[0]?.title}
                            </h5>
                        </Fade>
                        <Fade>
                            <p className="text-gray-600">
                                {data[1]?.content[0]?.content}
                            </p>
                        </Fade>
                    </div>
                    <div className="lg:w-6/12">
                        <Fade>
                            <h5 className="font-semibold text-xl pb-5">
                                {data[1]?.content[1]?.title}
                            </h5>
                        </Fade>
                        <Fade>
                            <p className="text-gray-600">
                                {data[1]?.content[1]?.content}
                            </p>
                        </Fade>
                    </div>
                </section>
                <DonationStats data={data[2]?.content} />
            </div>
        </Page>
    );
};
