import { useState, useEffect } from "react";
import { Project } from "../../components/project";
import { MediaCentreSideBar } from "../../layouts/mediaCentreSideBar";
import { RecentNews } from "../../layouts/recentNews";
import { Slide } from "react-reveal";
import { apiRequest } from "../../api/api-calls";

export const BlogPage = () => {
    const [data, updateData] = useState([]);

    useEffect(() => {
        apiRequest("get", "post/search/all/projects/12", data, updateData);
    }, []); // eslint-disable-line

    return (
        <div className="pt-[4rem] lg:pt-[8.2rem]">
            <section className="text-center py-12">
                <Slide bottom>
                    <h1 className="text-4xl font-semibold my-5">Blog</h1>
                </Slide>
                <Slide bottom>
                    <p className="w-full px-5 md:w-6/12 mx-auto">
                        Welcome to our blog! This is where we showcase some of
                        the exciting articles about CCAK.
                    </p>
                </Slide>
            </section>
            <div className="flex flex-row px-6 lg:px-16">
                <div className="w-full lg:w-9/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-y-6 sm:gap-6 py-10">
                    {data.map((item, i) => {
                        return <Project key={i} data={item} />;
                    })}
                </div>
                <div className="hidden lg:block w-4/12 pt-10 pl-10">
                    <MediaCentreSideBar category="blog" />
                </div>
            </div>
            <section>
                <RecentNews />
            </section>
        </div>
    );
};
