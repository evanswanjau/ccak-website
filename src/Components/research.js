import { Fade } from "react-reveal";
import { BsFileEarmarkPdf } from "react-icons/bs";

export const Research = ({
    data: { title, excerpt, published, url, downloads, size },
}) => {
    return (
        <Fade>
            <div className="bg-[#EFF7F2] text-left p-5 rounded-lg">
                <div className="flex w-full justify-between border-b border-gray-400 pb-3 group-hover:border-white transition duration-150 ease-in-out">
                    <div>
                        <h3 className="w-10/12 font-semibold mb-1 group-hover:text-white transition duration-150 ease-in-out">
                            {title}
                        </h3>
                        <p className="text-sm text-gray-400">{published}</p>
                    </div>
                    <div className="w-2/12 flex justify-end items-center">
                        <BsFileEarmarkPdf className="text-5xl" />
                    </div>
                </div>

                <p className="text-gray-600 pt-3 group-hover:text-white transition duration-150 ease-in-out">
                    {excerpt}
                </p>
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
