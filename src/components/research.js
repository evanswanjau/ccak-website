import { Fade } from "react-reveal";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { simpleDate } from "../helpers/date";

export const Research = ({
    data: { title, excerpt, published, url, category },
}) => {
    return (
        <Fade>
            <a href={`/resource-centre/${category}/read-more/${url}`}>
                <div className="bg-[#F2F9F4] group text-left p-5 rounded-lg transition duration-300 ease-in-out hover:bg-[#ED7423]">
                    <div className="flex w-full justify-between border-b border-gray-400 pb-3 group-hover:border-white transition duration-150 ease-in-out">
                        <div>
                            <h3 className="w-10/12 font-semibold mb-1 group-hover:text-white transition duration-150 ease-in-out">
                                {title}
                            </h3>
                            <p className="text-sm text-gray-400 group-hover:text-white transition duration-150 ease-in-out">
                                {simpleDate(published)}
                            </p>
                        </div>
                        <div className="w-2/12 flex justify-end items-center">
                            <BsFileEarmarkPdf className="text-5xl group-hover:text-white transition duration-150 ease-in-out" />
                        </div>
                    </div>

                    <p className="text-gray-600 pt-3 group-hover:text-white transition duration-150 ease-in-out">
                        {excerpt}
                    </p>
                </div>
            </a>
        </Fade>
    );
};
