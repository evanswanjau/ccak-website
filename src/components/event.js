import React from "react";

import { MapPinIcon } from "@heroicons/react/24/solid";
import { Fade } from "react-reveal";

const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
];

export const Event = ({
    data: { id, image, event_date, title, venue, folder },
}) => {
    const getDay = () => event_date.split("T")[0].split("-")[2];
    const getMonth = () => {
        return months[
            event_date.split("T")[0].split("-")[1].replace("0", "") - 1
        ];
    };

    return (
        <Fade>
            <a
                href={`/media-centre/events/read-more/${id}/${title
                    .replace(/ /g, "-")
                    .replace("'", "")
                    .replace(":", "")
                    .toLowerCase()}`}
            >
                <div
                    style={{
                        backgroundImage: `url(${
                            process.env.REACT_APP_IMAGEKIT_URL +
                            folder +
                            "/" +
                            image
                        })`,
                    }}
                    className={`relative bg-cover bg-center bg-no-repeat rounded-lg text-white group min-h-[250px]`}
                >
                    <div className="w-fit bg-white text-black text-center px-3">
                        <h2 className="text-3xl font-bold tracking-widest">
                            {getDay()}
                        </h2>
                        <h4 className="text-sm font-bold tracking-widest">
                            {getMonth()}
                        </h4>
                    </div>
                    <div className="flex flex-col justify-end items-end absolute inset-0">
                        <div className="w-full rounded-b-lg bg-gradient-to-t from-black to-transparent p-3 pt-16 group-hover:text-[#ED7423] transition duration-300 ease-in-out">
                            <h3 className="font-medium mb-1">{title}</h3>
                            <p className="flex flex-row font-bold capitalize">
                                <MapPinIcon className="h-4 w-4 mr-1" />
                                {venue}
                            </p>
                        </div>
                    </div>
                </div>
            </a>
        </Fade>
    );
};
