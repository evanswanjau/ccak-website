import React from "react";
import { Event } from "../Components/event";

const data = [
    {
        title: "Netherlands Enterprise Agency",
        venue: "KICC",
        image: "http://localhost:5173/src/assets/home/BGHomeVid.png",
        url: "mission-40k",
    },
    {
        title: "Netherlands Enterprise Agency",
        venue: "KICC",
        image: "http://localhost:5173/src/assets/home/BGHomeVid.png",
        url: "mission-40k",
    },
    {
        title: "Netherlands Enterprise Agency",
        venue: "KICC",
        image: "http://localhost:5173/src/assets/home/BGHomeVid.png",
        url: "mission-40k",
    },
    {
        title: "Netherlands Enterprise Agency",
        venue: "KICC",
        image: "http://localhost:5173/src/assets/home/BGHomeVid.png",
        url: "mission-40k",
    },
];

export const UpcomingEvents = () => {
    return (
        <div className="py-5">
            <div className="flex flex-row px-16">
                <h2 className="w-3/12 text-2xl text-black font-bold">
                    Upcoming Events
                </h2>
                <div className="w-9/12 border-t border-gray-200 mt-4"></div>
            </div>
            <div className="grid grid-cols-4 gap-6 px-16 py-10">
                {data.map((item) => {
                    return <Event data={item} />;
                })}
            </div>
        </div>
    );
};
