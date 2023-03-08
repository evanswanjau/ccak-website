import React from "react";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { Fade } from "react-reveal";

export const Event = ({ data: { image, date, title, venue, url } }) => {
    return (
        <Fade>
            <a href={`/media-centre/events/${url}`}>
                <div
                    className={`bg-[url('${image}')] bg-cover bg-center bg-no-repeat rounded-lg text-white group`}
                >
                    <div className="w-fit bg-white text-black text-center px-3">
                        <h2 className="text-3xl font-bold tracking-widest">
                            12
                        </h2>
                        <h4 className="text-sm font-bold tracking-widest">
                            JUN
                        </h4>
                    </div>
                    <div className="rounded-b-lg bg-gradient-to-t from-black to-transparent p-3 pt-24 group-hover:text-[#ED7423] transition duration-300 ease-in-out">
                        <h3 className="font-medium mb-1">{title}</h3>
                        <p className="flex flex-row font-bold">
                            <MapPinIcon className="h-4 w-4 mr-1" />
                            {venue}
                        </p>
                    </div>
                </div>
            </a>
        </Fade>
    );
};
