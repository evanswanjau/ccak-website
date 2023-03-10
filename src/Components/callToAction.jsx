import { Slide } from "react-reveal";

export const CallToAction = () => {
    return (
        <Slide bottom>
            <div className="w-11/12 my-20 mx-auto bg-[url('http://localhost:5173/src/assets/home/BGHomeVid.png')] bg-cover bg-center bg-no-repeat rounded-lg">
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
        </Slide>
    );
};
