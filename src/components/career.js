import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";
import { Fade } from "react-reveal";

export const Career = ({ data: { id, category, title, excerpt } }) => {
    return (
        <Fade>
            <a
                href={`/get-involved/${category}/read-more/${id}/${title
                    .replace(/ /g, "-")
                    .replace("'", "")
                    .replace(":", "")
                    .toLowerCase()}`}
            >
                <div className="bg-[#BEF3C0] group text-left p-5 rounded-lg transition duration-300 ease-in-out hover:bg-[#ED7423] flex flex-col h-full">
                    <div className="flex w-full justify-between border-b border-gray-400 pb-3 group-hover:border-white transition duration-150 ease-in-out">
                        <h3 className="w-10/12 font-semibold mb-1 group-hover:text-white transition duration-150 ease-in-out">
                            {title}
                        </h3>
                        <div className="w-2/12 flex justify-end">
                            <span className="w-8 h-8 bg-white rounded-full flex justify-center">
                                <ArrowSmallRightIcon className="w-6 text-center" />
                            </span>
                        </div>
                    </div>

                    <p
                        className="text-gray-600 pt-3 group-hover:text-white transition duration-150 ease-in-out line-clamp-3"
                        title={excerpt}
                    >
                        {excerpt}
                    </p>
                </div>
            </a>
        </Fade>
    );
};
