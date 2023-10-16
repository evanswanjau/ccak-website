import React, { useState, useEffect } from "react";
import { Project } from "../components/project";
import { Slide, Fade } from "react-reveal";
import { searchPosts } from "../api/api-calls";

export const RecentProjects = () => {
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
        limit: 5,
        ip_address: "",
        created_by: 0,
    };

    useEffect(() => {
        searchPosts(searchData, updateData);
    }, []); // eslint-disable-line

    return (
        <div className="px-6 py-10 lg:p-16">
            <div className="flex flex-row w-full ">
                <div className="hidden lg:block lg:w-1/12">
                    <Fade>
                        <div className="border-t-2 border-black mx-5 mt-1"></div>
                    </Fade>
                </div>
                <div className="lg:w-11/12">
                    <Slide bottom>
                        <h6 className="text-black font-bold text-xs">
                            SOME OF OUR PROJECTS
                        </h6>
                    </Slide>
                    <Slide bottom>
                        <h2 className="text-black text-2xl lg:text-4xl font-semibold my-8">
                            Transforming Cooking Practices for Cleaner and
                            Healthier Homes
                        </h2>
                    </Slide>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-y-6 sm:gap-6 py-3 lg:py-10">
                {data.map((project, i) => {
                    return <Project key={i} data={project} />;
                })}
            </div>
        </div>
    );
};
