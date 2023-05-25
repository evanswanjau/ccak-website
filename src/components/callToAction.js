import { Fade } from "react-reveal";

export const CallToAction = () => {
    return (
        <Fade>
            <div
                style={{
                    backgroundImage: `url(${
                        process.env.REACT_APP_IMAGEKIT_URL +
                        "call_to_action_section_contribute_to_clean_cooking.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678480594240"
                    })`,
                }}
                className="flex mb-10 mx-6 lg:mx-16 bg-cover bg-center bg-no-repeat rounded-lg"
            >
                <div className="bg-black/[.3] rounded-lg px-3 py-10 lg:p-24">
                    <h3 style={{lineHeight:"50px"}} className="text-white text-2xl mx-auto lg:mb-10 lg:w-10/12 sm:text-4xl text-center font-semibold">
                        You can contribute to the universal adoption of clean
                        cooking in Kenya by 2028
                    </h3>
                    <div className="flex flex-row justify-center items-center my-5 space-x-6">
                        <a href="/membership/register">
                            <button
                                href="/get-involved/become-a-member"
                                className="bg-[#329E49] font-manjari leading-none pb-3 pt-4 px-5 text-white hover:bg-[#ED7423] hover:text-white rounded-md transition duration-300 ease-in-out tracking-widest"
                            >
                                BECOME A MEMBER
                            </button>
                        </a>

                        <a href="/get-involved/donate">
                            <button
                                href="/get-involved/become-a-member"
                                className="bg-white font-manjari leading-none pb-3 pt-4 px-5 hover:bg-[#ED7423] hover:text-white rounded-md transition duration-300 ease-in-out tracking-widest"
                            >
                                DONATE
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </Fade>
    );
};
