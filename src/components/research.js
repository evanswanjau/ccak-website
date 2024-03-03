import { Fade } from "react-reveal";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { simpleDate } from "../helpers/date";

export const Research = ({
    data: { id, title, excerpt, published, category },
}) => {
    return (
        <Fade>
            <a
                href={`/resource-centre/${category}/read-more/${id}/${title
                    .replace(/ /g, "-")
                    .replace("'", "")
                    .toLowerCase()}`}
            >
                <div className="bg-gray-200 group text-left p-5 rounded-lg transition duration-300 ease-in-out hover:bg-[#ED7423] flex flex-col h-full">
                    <div className="flex w-full justify-between border-b border-gray-400 pb-3 group-hover:border-white transition duration-150 ease-in-out">
                        <div>
                            <h3 className="w-10/12 text-xl font-bold mb-1 group-hover:text-white transition duration-150 ease-in-out">
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

                    <p className="text-gray-600 pt-3 group-hover:text-white transition duration-150 ease-in-out line-clamp-4">
                        {excerpt}
                    </p>
                </div>
            </a>
        </Fade>
    );
};
