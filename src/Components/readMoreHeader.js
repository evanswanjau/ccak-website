import { Slide } from "react-reveal";
import { simpleDate } from "../helpers/date";
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
} from "react-share";
import { CalendarDaysIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { BsTwitter, BsFacebook, BsLinkedin } from "react-icons/bs";

export const ReadMoreHeader = ({
    data: {
        title,
        excerpt,
        category,
        published,
        location,
        venue,
        date,
        start_time,
    },
}) => {
    return (
        <section className="flex justify-center bg-[#EFF7F2] pt-24 pb-16">
            <div className="lg:w-6/12 text-center">
                <Slide bottom>
                    <h6 className="text-sm font-bold mt-5 text-gray-600 uppercase">
                        {category}
                    </h6>
                </Slide>
                <Slide bottom>
                    <h1 className="text-2xl md:text-3xl font-semibold mb-5">
                        {title}
                    </h1>
                </Slide>
                <Slide bottom>
                    <p className="px-5 text-gray-600">{excerpt}</p>
                </Slide>
                <div>
                    {category === "events" ? (
                        <Slide bottom>
                            <div className="flex flex-col md:flex-row justify-center my-6 space-y-3 md:space-y-0 md:space-x-6 font-semibold">
                                <p className="justify-center flex flex-row space-x-1">
                                    <MapPinIcon className="-mt-2 w-6 text-[#329E49]" />
                                    <span>{location + ", " + venue}</span>
                                </p>
                                <p className="justify-center flex flex-row space-x-1">
                                    <CalendarDaysIcon className="-mt-2 w-6 text-[#329E49]" />
                                    <span>
                                        {" "}
                                        {simpleDate(date) + " " + start_time} AM
                                    </span>
                                </p>
                            </div>
                        </Slide>
                    ) : (
                        <Slide bottom>
                            <p className="flex flex-row justify-center space-x-2 my-5 font-semibold">
                                <CalendarDaysIcon className="-mt-2 w-6 text-[#329E49]" />
                                <span> {simpleDate(published)}</span>
                            </p>
                        </Slide>
                    )}
                </div>

                <Slide bottom>
                    <div className="flex flex-row my-6 space-x-6 font-semibold">
                        <div className="py-5 space-x-10 space flex justify-center w-full">
                            <FacebookShareButton
                                children={
                                    <BsFacebook className="text-2xl text-[#3b5998]" />
                                }
                                url={window.location.href}
                                hashtag="#ccak"
                            />
                            <TwitterShareButton
                                children={
                                    <BsTwitter className="text-2xl text-[#1DA1F2]" />
                                }
                                url={window.location.href}
                                title={title}
                                hashtag="#ccak"
                            />
                            <aedinShareButton
                                children={
                                    <BsLinkedin className="text-2xl text-[#0E76A8]" />
                                }
                                url={window.location.href}
                                title={title}
                            />
                        </div>
                    </div>
                </Slide>
            </div>
        </section>
    );
};
