import { PlayIcon } from "@heroicons/react/24/solid";
import { Fade } from "react-reveal";

export const Package = ({ data: { name, category, price, list } }) => {
    return (
        <Fade bottom>
            <div className="bg-[#EFF7F2] py-6 px-3 lg:py-10 rounded-lg">
                <h6 className="uppercase text-xl font-semibold text-gray-500">
                    {category}
                </h6>
                <h4 className="text-xl uppercase font-semibold">{name}</h4>
                <h3 className="text-4xl font-bold mt-5">{price}</h3>
                <p className="pb-5">Per Year</p>
                <ul className="text-left text-gray-600 my-5">
                    {list.map((item, i) => {
                        return (
                            <li className="flex my-4 text-md font-manjari">
                                <PlayIcon className="w-4 mr-3 -mt-[5px] text-[#97DAAD]" />
                                <span className="w-11/12">{item}</span>
                            </li>
                        );
                    })}
                </ul>
                <br />
                <a
                    href="/membership/register"
                    className="bg-[#329E49] font-manjari leading-none mt-10 pb-3 pt-4 px-5 text-white hover:bg-[#ED7423] hover:text-white rounded-md transition duration-300 ease-in-out tracking-widest"
                >
                    GET STARTED
                </a>
            </div>
        </Fade>
    );
};
