import { Fade } from "react-reveal";

export const CallToAction = ({ data }) => {
    return (
        <Fade>
            <div
                style={{
                    backgroundImage: `url(${
                        process.env.REACT_APP_IMAGEKIT_URL + data.image
                    })`,
                }}
                className="flex mb-20 mx-6 lg:mx-32 bg-cover bg-bottom bg-no-repeat rounded-lg"
            >
                <div className="bg-black/[.3] rounded-lg px-3 py-20 lg:p-32 w-full">
                    <h3
                        style={{ lineHeight: "50px" }}
                        className="text-white text-2xl mx-auto lg:mb-10 lg:w-10/12 sm:text-4xl text-center font-semibold capitalize-first"
                    >
                        {data.title}
                    </h3>
                    <div className="flex flex-row justify-center items-center my-5 space-x-6">
                        <a href="/membership/register">
                            <button
                                href={data.buttons[0].link}
                                className="bg-[#EC7422] font-manjari leading-none pb-3 pt-4 px-5 text-white hover:bg-[#ce621b] rounded-md transition duration-300 ease-in-out tracking-widest uppercase"
                            >
                                {data.buttons[0].name}
                            </button>
                        </a>

                        <a href="/get-involved/donate">
                            <button
                                href={data.buttons[1].link}
                                className="bg-white font-manjari leading-none pb-3 pt-4 px-5 hover:bg-[#ED7423] hover:text-white rounded-md transition duration-300 ease-in-out tracking-widest uppercase"
                            >
                                {data.buttons[1].name}
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </Fade>
    );
};
