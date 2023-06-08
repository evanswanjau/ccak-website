import { Fade } from "react-reveal";

export const ResearchDownload = ({
    data: { title, excerpt, published, url, category, size },
}) => {
    return (
        <Fade>
            <div className="bg-[#F2F9F4] text-left p-5 rounded-lg">
                <div className="flex w-full pb-3 group-hover:border-white transition duration-150 ease-in-out">
                    <h3 className="font-semibold mb-1 group-hover:text-white transition duration-150 ease-in-out">
                        {title}
                    </h3>
                </div>
                <div className="flex flex-row justify-between items-center mt-3">
                    <button
                        href="#"
                        className="bg-white font-manjari leading-none pb-2 text-md pt-3 px-5 hover:bg-[#ED7423] hover:text-white rounded-md transition duration-300 ease-in-out tracking-widest"
                    >
                        DOWNLOAD
                    </button>
                    <p>{size}</p>
                </div>
            </div>
        </Fade>
    );
};
