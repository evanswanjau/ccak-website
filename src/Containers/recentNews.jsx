import React from "react";
import { News } from "../Components/News";

export const RecentNews = () => {
    const data = [
        {
            title: "Don’t destroy greenery and don’t spoil scenery",
            published: "February 20, 2023",
            excerpt: "Lorem ipsum dolor sit amet, conser adipiscing elit...",
            image: "http://localhost:5173/src/assets/home/BGHomeVid.png",
            url: "url",
        },
        {
            title: "Don’t destroy greenery and don’t spoil scenery",
            published: "February 20, 2023",
            excerpt: "Lorem ipsum dolor sit amet, conser adipiscing elit...",
            image: "http://localhost:5173/src/assets/home/BGHomeVid.png",
            url: "url",
        },
        {
            title: "Don’t destroy greenery and don’t spoil scenery",
            published: "February 20, 2023",
            excerpt: "Lorem ipsum dolor sit amet, conser adipiscing elit...",
            image: "http://localhost:5173/src/assets/home/BGHomeVid.png",
            url: "url",
        },
        {
            title: "Don’t destroy greenery and don’t spoil scenery",
            published: "February 20, 2023",
            excerpt: "Lorem ipsum dolor sit amet, conser adipiscing elit...",
            image: "http://localhost:5173/src/assets/home/BGHomeVid.png",
            url: "url",
        },
    ];

    return (
        <div>
            <div className="flex flex-row px-16">
                <h2 className="w-2/12 text-3xl text-black">Recent News</h2>
                <div className="w-10/12 border-t border-gray-200 mt-4"></div>
            </div>
            <div className="grid grid-cols-4 gap-6 px-16 py-10">
                {data.map((item) => {
                    return <News data={item} />;
                })}
            </div>
        </div>
    );
};
