import { useState, useEffect } from "react";
import { useSnackbar } from "notistack";
import { Slide } from "react-reveal";
import { search } from "../api/api-calls";
import { SkeletonLoader } from "../components/skeletonLoader";
import { MediaCentreSideBar } from "./mediaCentreSideBar";
import { RecentNews } from "./recentNews";
import { UpcomingEvents } from "./upcomingEvents";
import { News } from "../components/news";
import { Event } from "../components/event";
import { Gallery } from "../components/gallery";
import { Pagination } from "../components/pagination";

export const DynamicPageLayout = ({ pageData: { page, description } }) => {
    const [loading, setLoading] = useState(true);
    const [data, updateData] = useState([]);
    const [paginationData, setPaginationData] = useState({});
    const [searchData, updateSearchData] = useState({
        keyword: "",
        table: "posts",
        category: page,
        project_status: "",
        access: "public",
        status: "published",
        page: 1,
        limit: 9,
    });

    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        search(
            "posts",
            searchData,
            updateData,
            setPaginationData,
            enqueueSnackbar,
            setLoading
        );
    }, [searchData]); // eslint-disable-line

    const getEmpty = () => {
        return (
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
                            No results found with the keyword{" "}
                            <b>{searchData.keyword}</b>
                        </>
                    )}
                </p>
            </div>
        );
    };

    const getContent = (item) => {
        if (page === "events") return <Event key={item.id} data={item} />;
        if (page === "news" || page === "blog" || page === "press-release")
            return <News key={item.id} data={item} />;
        if (page === "photo-gallery")
            return <Gallery key={item.id} data={item} />;
    };

    return (
        <div className="pt-[3.8rem] lg:pt-[6.6rem]">
            <section className="text-center py-12">
                <Slide bottom>
                    <h1 className="text-4xl font-semibold my-5 capitalize">
                        {page.replace(/-/, " ")} Page
                    </h1>
                </Slide>
                <Slide bottom>
                    <p className="w-full px-5 md:w-6/12 mx-auto">
                        {description}
                    </p>
                </Slide>
            </section>
            <div className="flex flex-col-reverse lg:flex-row px-6 lg:px-16">
                <div className="w-full lg:w-9/12">
                    {loading ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 sm:gap-6 py-10">
                            {Array.from({ length: searchData.limit }).map(
                                (_, i) => {
                                    return (
                                        <SkeletonLoader key={i} type={page} />
                                    );
                                }
                            )}
                        </div>
                    ) : data.length < 1 ? (
                        getEmpty()
                    ) : (
                        <>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 sm:gap-4 py-10">
                                {data.map((item) => {
                                    return getContent(item);
                                })}
                            </div>
                            {paginationData.count > searchData.limit && (
                                <div className="my-5 text-center">
                                    <Pagination
                                        paginationData={paginationData}
                                        search={searchData}
                                        updateSearch={updateSearchData}
                                    />
                                </div>
                            )}
                        </>
                    )}
                </div>
                <div className="w-full lg:w-4/12 lg:pt-10 lg:pl-10">
                    <MediaCentreSideBar
                        category={page}
                        searchData={searchData}
                        updateSearchData={updateSearchData}
                    />
                </div>
            </div>
            <section>
                {page === "events" ? <RecentNews /> : <UpcomingEvents />}
            </section>
        </div>
    );
};
