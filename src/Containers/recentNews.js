import React, { useState, useEffect } from "react";
import { News } from "../Components/news";
import { Fade } from "react-reveal";
import { apiRequest } from "../api/api-calls";

export const RecentNews = () => {
    const [data, updateData] = useState([]);

    useEffect(() => {
        apiRequest("get", "post/search/all/news/4", data, updateData);
    }, []); // eslint-disable-line

    return (
        <div className="py-5">
            <Fade top>
                <div className="flex flex-row px-6 lg:px-16">
                    <h2 className="w-full lg:w-2/12 text-2xl text-left text-black font-bold">
                        Recent News
                    </h2>
                    <div className="hidden md:block w-10/12 border-t border-gray-200 mt-4"></div>
                </div>
            </Fade>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-y-6 sm:gap-6 px-6 lg:px-16 py-10">
                {data.map((item, i) => {
                    return <News key={i} data={item} />;
                })}
            </div>
        </div>
    );
};
