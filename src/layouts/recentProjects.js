import React, { useState, useEffect } from "react";
import { Project } from "../components/project";
import { Slide } from "react-reveal";
import { searchPosts } from "../api/api-calls";
import { Carousel } from "../components/carousel";

export const RecentProjects = ({ title }) => {
    const [data, updateData] = useState([]);

    const searchData = {
        keyword: "",
        table: "posts",
        category: "projects",
        technology: "",
        project_status: "",
        access: "public",
        status: "published",
        page: 1,
        limit: 12,
        ip_address: "",
        created_by: 0,
    };

    useEffect(() => {
        searchPosts(searchData, updateData);
    }, []); // eslint-disable-line

    return (
        <div className="px-6 py-10 lg:px-32 lg:py-24">
            <div className="flex flex-row w-full ">
                <div className="lg:w-11/12">
                    <Slide bottom>
                        <h6 className="text-black font-bold text-xs">
                            OUR PROJECTS
                        </h6>
                    </Slide>
                    <Slide bottom>
                        <h2 className="text-gray-800 text-4xl md:text-5xl font-semibold mt-1 capitalize-first">
                            {title}
                        </h2>
                    </Slide>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-6 py-3 lg:py-10">
                <Carousel
                    items={data.map((project, i) => {
                        return (
                            <Project key={i} data={project} carousel={true} />
                        );
                    })}
                    autoplay={true}
                    slides={1}
                    show={4}
                    reverse={false}
                    arrow={true}
                />
            </div>
        </div>
    );
};
