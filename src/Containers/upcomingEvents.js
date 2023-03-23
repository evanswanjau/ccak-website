import React from "react";
import { Event } from "../Components/event";
import { Fade } from "react-reveal";

const data = [
    {
        id: 1,
        title: "Netherlands Enterprise Agency",
        venue: "KICC",
        image: "events/event_default.jpg",
        url: "1/netherlands-enterprice-agency/",
    },
    {
        id: 2,
        title: "Netherlands Enterprise Agency",
        venue: "KICC",
        image: "events/event_default.jpg",
        url: "2/netherlands-enterprice-agency/",
    },
    {
        id: 3,
        title: "Netherlands Enterprise Agency",
        venue: "KICC",
        image: "events/event_default.jpg",
        url: "3/netherlands-enterprice-agency/",
    },
    {
        id: 4,
        title: "Netherlands Enterprise Agency",
        venue: "KICC",
        image: "events/event_default.jpg",
        url: "4/netherlands-enterprice-agency/",
    },
];

export const UpcomingEvents = () => {
    return (
        <div className="py-5">
            <Fade top>
                <div className="flex flex-row px-6 lg:px-16">
                    <h2 className="w-full lg:w-3/12 text-2xl text-black font-bold">
                        Upcoming Events
                    </h2>
                    <div className="hidden md:block w-9/12 border-t border-gray-200 mt-4"></div>
                </div>
            </Fade>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-y-6 sm:gap-6 px-6 lg:px-16 py-10">
                {data.map((item, i) => {
                    return <Event key={i} data={item} />;
                })}
            </div>
        </div>
    );
};
