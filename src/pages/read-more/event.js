import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Fade } from "react-reveal";
import { Event } from "../../components/event";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import { MapPinIcon, CursorArrowRaysIcon } from "@heroicons/react/24/outline";
import { ReadMoreHeader } from "../../components/readMoreHeader";
import { SubFooter } from "../../layouts/subFooter";
import { apiRequest } from "../../api/api-calls";
import ReactHtmlParser from "react-html-parser";

export const EventReadMore = () => {
    const params = useParams();
    const [data, updateData] = useState([]);
    const [upcomingEvents, updateUpcomingEvents] = useState([]);

    useEffect(() => {
        apiRequest("get", "post/" + params.id, data, updateData);
        apiRequest(
            "get",
            "post/search/all/events/4",
            upcomingEvents,
            updateUpcomingEvents
        );
    }, []); // eslint-disable-line

    return (
        <div className="pt-[3.8rem] lg:pt-[6.9rem]">
            <ReadMoreHeader data={data} />
            <div className="flex flex-col md:flex-row px-6 lg:px-16">
                <div className="md:w-9/12 py-10" id="content">
                    {ReactHtmlParser(data.content)}
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
                                startDate={data.event_date}
                                startTime={data.start_time}
                                endTime={data.end_time}
                                timeZone="Africa/Nairobi"
                                options={["Google"]}
                            ></AddToCalendarButton>
                        </div>
                        {data.venue === "online" ? (
                            <div className="flex flex-row my-3">
                                <div className="w-2/12">
                                    <CursorArrowRaysIcon className="w-10 text-[#329E49]" />
                                </div>
                                <div className="flex flex-col w-10/12">
                                    <p>JOIN ONLINE EVENT</p>
                                    <a
                                        className="break-all text-sky-600"
                                        href={data.venue_link}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {data.venue_link}
                                    </a>
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-row my-3">
                                <div className="w-2/12">
                                    <MapPinIcon className="w-10 text-[#329E49]" />
                                </div>
                                <div className="flex flex-col w-10/12">
                                    <p>GET DIRECTIONS</p>
                                    <a
                                        className="break-all text-sky-600"
                                        href={data.venue_link}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {data.venue_link}
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="py-3">
                        <Fade top>
                            <h2 className="w-full text-xl text-black font-bold py-3">
                                Upcoming Events
                            </h2>
                        </Fade>
                        <div className="grid grid-cols-1 gap-y-6">
                            {upcomingEvents.map((item) => {
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
