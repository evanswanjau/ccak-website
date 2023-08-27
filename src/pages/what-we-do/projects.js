import { useState, useEffect } from "react";
import { Project } from "../../components/project";
import { MediaCentreSideBar } from "../../layouts/mediaCentreSideBar";
import { RecentNews } from "../../layouts/recentNews";
import { Slide } from "react-reveal";
import { searchPosts } from "../../api/api-calls";

export const ProjectsPage = () => {
    const [data, updateData] = useState([]);
    const [current, setCurrent] = useState("all");

    const [searchData, updateSearchData] = useState({
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
    });

    useEffect(() => {
        searchPosts(searchData, updateData);
    }, [searchData]); // eslint-disable-line

    return (
        <div className="pt-[3.8rem] lg:pt-[6.6rem]">
            <section className="text-center py-12">
                <Slide bottom>
                    <h1 className="text-4xl font-semibold my-5">Projects</h1>
                </Slide>
                <Slide bottom>
                    <p className="w-full px-5 md:w-6/12 mx-auto">
                        Welcome to our projects page! This is where we display
                        our our ongoing and completed projects.
                    </p>
                </Slide>
            </section>
            <div className="flex flex-row px-6 lg:px-16">
                <div className="w-full lg:w-9/12">
                    <div className="mb-4 border-b border-gray-200">
                        <ul className="flex flex-nowrap -mb-px font-medium text-center font-manjari">
                            {["all", "ongoing", "completed"].map((item) => {
                                return (
                                    <li className="mr-2" role="presentation">
                                        <button
                                            className={`${
                                                current === item
                                                    ? "text-[#329E49] border-[#329E49]"
                                                    : "text-gray-500 border-transparent"
                                            }  tracking-wide border-b-2 font-bold inline-block capitalize p-4 hover:text-[#329E49] hover:border-[#329E49]`}
                                            onClick={() => {
                                                setCurrent(item);
                                                updateSearchData({
                                                    ...searchData,
                                                    project_status:
                                                        item !== "all"
                                                            ? item
                                                            : "",
                                                });
                                            }}
                                        >
                                            {item} Projects
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {searchData.keyword !== "" && data.length < 1 && (
                        <div className="flex justify-center mt-14">
                            <p className="text-xl text-gray-500">
                                No results found with the keyword{" "}
                                <b>{searchData.keyword}</b>
                            </p>
                        </div>
                    )}

                    {data.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-y-6 sm:gap-6 py-10">
                            {data.map((item, i) => {
                                return <Project key={i} data={item} />;
                            })}
                        </div>
                    )}
                </div>

                <div className="hidden lg:block w-4/12 pt-10 pl-10">
                    <MediaCentreSideBar
                        category="projects"
                        searchData={searchData}
                        updateSearchData={updateSearchData}
                    />
                </div>
            </div>
            <section>
                <RecentNews />
            </section>
        </div>
    );
};
