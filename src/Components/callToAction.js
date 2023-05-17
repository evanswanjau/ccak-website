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
                className="w-10/12 mb-10 mx-auto bg-cover bg-center bg-no-repeat rounded-lg"
            >
                <div className="bg-black/[.3] px-6 md:px-10 py-8 rounded-lg">
                    <h3 className="text-white text-2xl sm:text-4xl text-center my-10 font-semibold leading-snug">
                        You can contribute to make <br /> the environment
                        greener!
                    </h3>
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-6 pb-10">
                        <a href="#">
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
