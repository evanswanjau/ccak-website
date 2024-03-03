import { useState, useEffect } from "react";
import { useSnackbar } from "notistack";
import { Project } from "../../components/project";
import { MediaCentreSideBar } from "../../layouts/mediaCentreSideBar";
import { Slide } from "react-reveal";
import { search } from "../../api/api-calls";
import { ShortPostsLayout } from "../../layouts/shortPostsLayout";
import { Page } from "../../layouts/page";
import { Pagination } from "../../components/pagination";
import { SkeletonLoader } from "../../components/skeletonLoader";

export const ProjectsPage = () => {
    const [pageData, updatePageData] = useState([]);
    const [data, updateData] = useState([]);
    const [current, setCurrent] = useState("all");
    const [paginationData, setPaginationData] = useState({});
    const [loading, setLoading] = useState(true);

    const { enqueueSnackbar } = useSnackbar();

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
    });

    useEffect(() => {
        window.scrollTo(0, 0);
        search(
            "posts",
            searchData,
            updateData,
            setPaginationData,
            enqueueSnackbar,
            setLoading
        );
    }, [searchData]); // eslint-disable-line

    return (
        <Page
            title="Projects"
            description="Welcome to our projects page! This is where we display our our ongoing and completed projects."
            page="projects"
            data={pageData}
            updateData={updatePageData}
        >
            <div className="pt-[3.8rem] lg:pt-[6.6rem]">
                <section className="text-center py-12">
                    <Slide bottom>
                        <h1 className="text-4xl font-semibold my-5">
                            Projects
                        </h1>
                    </Slide>
                    <Slide bottom>
                        <p className="w-full px-5 md:w-6/12 mx-auto">
                            {pageData[0]?.content.header}
                        </p>
                    </Slide>
                </section>
                <div className="flex flex-row px-6 lg:px-16">
                    <div className="w-full lg:w-9/12">
                        <div className="mb-4 border-b border-gray-200">
                            <ul className="flex flex-nowrap -mb-px font-medium text-center font-manjari">
                                {["all", "ongoing", "completed"].map((item) => {
                                    return (
                                        <li
                                            className="mr-2"
                                            role="presentation"
                                        >
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

                        <div className="w-full">
                            {loading ? (
                                <div
                                    className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${
                                        searchData.limit === 4 ? 4 : 3
                                    } gap-y-6 sm:gap-6 py-10`}
                                >
                                    {Array.from({
                                        length: searchData.limit,
                                    }).map((_, i) => {
                                        return (
                                            <SkeletonLoader
                                                key={i}
                                                type="events"
                                            />
                                        );
                                    })}
                                </div>
                            ) : data.length < 1 ? (
                                <div className="text-center py-24">
                                    <img
                                        src="/empty.png"
                                        alt="empty"
                                        className="w-52 mx-auto my-5 opacity-60"
                                    />
                                    <p className="text-xl text-gray-500">
                                        {searchData.keyword === "" ? (
                                            <>No new posts at the moment</>
                                        ) : (
                                            <>
                                                No results found with the
                                                keyword{" "}
                                                <b>{searchData.keyword}</b>
                                            </>
                                        )}
                                    </p>
                                </div>
                            ) : (
                                <>
                                    <div
                                        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${
                                            searchData.limit === 4 ? 4 : 3
                                        } gap-y-6 sm:gap-4 py-10`}
                                    >
                                        {data.map((item, i) => {
                                            return (
                                                <Project key={i} data={item} />
                                            );
                                        })}
                                    </div>
                                    {paginationData.count >
                                        searchData.limit && (
                                        <div className="my-5 text-center">
                                            <Pagination
                                                paginationData={paginationData}
                                                search={searchData}
                                                updateSearch={updateSearchData}
                                                setLoading={setLoading}
                                            />
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
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
                    <ShortPostsLayout
                        title="Upcoming Events"
                        category="events"
                        limit={4}
                    />
                </section>
            </div>{" "}
        </Page>
    );
};
