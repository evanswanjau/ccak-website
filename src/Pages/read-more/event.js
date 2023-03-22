import { Slide, Fade } from "react-reveal";
import { Link } from "react-router-dom";
import { Event } from "../../Components/event";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
} from "react-share";
import {
    CalendarDaysIcon,
    MapPinIcon,
    CursorArrowRaysIcon,
} from "@heroicons/react/24/outline";
import { BsTwitter, BsFacebook, BsLinkedin } from "react-icons/bs";

const data = {
    title: "2023 Annual General Meeting",
    excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    content: (
        <div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <br />
            <p>
                Diam ut venenatis tellus in metus vulputate eu scelerisque.
                Donec pretium vulputate sapien nec sagittis aliquam malesuada
                bibendum. Ac tincidunt vitae semper quis lectus nulla. Nunc sed
                blandit libero volutpat sed. Congue mauris rhoncus aenean vel
                elit scelerisque mauris pellentesque. Aenean et tortor at risus
                viverra adipiscing at in tellus. Enim nec dui nunc mattis enim
                ut tellus elementum. Imperdiet nulla malesuada pellentesque elit
                eget. Et sollicitudin ac orci phasellus egestas tellus rutrum.
                Nec nam aliquam sem et tortor consequat id porta.
            </p>
            <br />

            <p>
                Nibh mauris cursus mattis molestie a iaculis. Adipiscing elit ut
                aliquam purus sit. Nulla porttitor massa id neque aliquam
                vestibulum. Elit duis tristique sollicitudin nibh sit. Nisl nunc
                mi ipsum faucibus. Quis vel eros donec ac odio tempor. Gravida
                in fermentum et sollicitudin. Aliquet porttitor lacus luctus
                accumsan tortor posuere ac ut. Porttitor rhoncus dolor purus non
                enim praesent elementum facilisis leo. Amet cursus sit amet
                dictum.
            </p>
        </div>
    ),
    event: "physical",
    venue_link: "https://goo.gl/maps/pwhgWAdkxCALwEZV6",
    online_link: "https://zoom.us/j/5551112222",
    location: "Mombasa Road",
    venue: "CCAK Offices",
    date: "2023-04-01",
    start_time: "10:00",
    end_time: "17:00",
};

const upComingEvents = [
    {
        title: "Netherlands Enterprise Agency",
        venue: "KICC",
        image: "events/event_default.jpg",
        url: "mission-40k",
    },
    {
        title: "Netherlands Enterprise Agency",
        venue: "KICC",
        image: "events/event_default.jpg",
        url: "mission-40k",
    },
    {
        title: "Netherlands Enterprise Agency",
        venue: "KICC",
        image: "events/event_default.jpg",
        url: "mission-40k",
    },
];

export const EventReadMore = ({}) => {
    return (
        <div className="pt-[4rem] lg:pt-[8.2rem]">
            <section className="text-center bg-[#EFF7F2] pt-24 pb-16">
                <Slide bottom>
                    <h className="text-sm font-bold mt-5 text-gray-600">
                        EVENTS
                    </h>
                </Slide>
                <Slide bottom>
                    <h1 className="text-3xl md:text-4xl font-semibold mb-5">
                        {data.title}
                    </h1>
                </Slide>
                <Slide bottom>
                    <p className="w-full px-5 md:w-6/12 mx-auto text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                </Slide>
                <Slide bottom>
                    <div className="flex flex-col md:flex-row justify-center my-6 space-y-3 md:space-y-0 md:space-x-6 font-semibold">
                        <p className="justify-center flex flex-row space-x-1">
                            <MapPinIcon className="-mt-2 w-6 text-[#329E49]" />
                            <span>{data.location + ", " + data.venue}</span>
                        </p>
                        <p className="justify-center flex flex-row space-x-1">
                            <CalendarDaysIcon className="-mt-2 w-6 text-[#329E49]" />
                            <span> 1st April 2023 {data.start_time} AM</span>
                        </p>
                    </div>
                </Slide>
                <Slide bottom>
                    <div className="flex flex-row justify-center my-6 space-x-6 font-semibold">
                        <div className="py-5 space-x-10 space flex">
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
                                title={data.title}
                                hashtag="#ccak"
                            />
                            <LinkedinShareButton
                                children={
                                    <BsLinkedin className="text-2xl text-[#0E76A8]" />
                                }
                                url={window.location.href}
                                title={data.title}
                            />
                        </div>
                    </div>
                </Slide>
            </section>
            <div className="flex flex-col md:flex-row px-6 lg:px-16">
                <div className="md:w-9/12 py-10">
                    <p>{data.content}</p>
                </div>
                <div className="md:w-4/12 pt-10 lg:px-10">
                    <button className="bg-[#329E49] w-full font-manjari leading-none pb-3 pt-4 px-5 text-white hover:bg-[#ED7423] hover:text-white rounded-md transition duration-300 ease-in-out tracking-widest">
                        ATTEND THIS EVENT
                    </button>
                    <div className="py-3">
                        <div className="mt-3 mb-8">
                            <AddToCalendarButton
                                name={data.title}
                                description={data.content}
                                location={data.location + ", " + data.venue}
                                startDate={data.date}
                                startTime={data.start_time}
                                endTime={data.end_time}
                                timeZone="Africa/Nairobi"
                                options={["Google"]}
                            ></AddToCalendarButton>
                        </div>
                        <div className="flex flex-row my-3">
                            <div className="w-2/12">
                                <MapPinIcon className="w-10 text-[#329E49]" />
                            </div>
                            <div className="flex flex-col w-10/12">
                                <p>GET DIRECTIONS</p>
                                <Link
                                    className="break-all text-sky-600"
                                    href={data.venue_link}
                                    target="_blank"
                                >
                                    {data.venue_link}
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-row my-3">
                            <div className="w-2/12">
                                <CursorArrowRaysIcon className="w-10 text-[#329E49]" />
                            </div>
                            <div className="flex flex-col w-10/12">
                                <p>JOIN ONLINE EVENT</p>
                                <Link
                                    className="break-all text-sky-600"
                                    href={data.online_link}
                                    target="_blank"
                                >
                                    {data.online_link}
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="py-3">
                        <Fade top>
                            <h2 className="w-full text-xl text-black font-bold py-3">
                                Upcoming Events
                            </h2>
                        </Fade>
                        <div className="grid grid-cols-1 gap-y-6">
                            {upComingEvents.map((item) => {
                                return <Event data={item} />;
                            })}
                        </div>
                    </div>

                    {/* <MediaCentreSideBar category="events" /> */}
                </div>
            </div>
            <section>{/* <RecentNews /> */}</section>
        </div>
    );
};
