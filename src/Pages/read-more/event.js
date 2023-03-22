import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import { Event } from "../../Components/event";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import {
    MapPinIcon,
    CursorArrowRaysIcon,
} from "@heroicons/react/24/outline";
import { ReadMoreHeader } from "../../Components/readMoreHeader";
import { SubFooter } from "../../Containers/subFooter";

const data = {
    id: 1,
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
    category: "events",
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

export const EventReadMore = () => {
    return (
        <div className="pt-[4rem] lg:pt-[8.2rem]">
            <ReadMoreHeader data={data} />
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
                </div>
            </div>
            <section className="my-10">
                <SubFooter />
            </section>
        </div>
    );
};
