import { useState, useEffect } from "react";
import { News } from "../../components/news";
import { MediaCentreSideBar } from "../../layouts/mediaCentreSideBar";
import { RecentNews } from "../../layouts/recentNews";
import { Slide } from "react-reveal";
import { searchPosts } from "../../api/api-calls";
import { SkeletonLoader } from "../../components/skeletonLoader";

export const PressReleasePage = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, updateData] = useState([]);

    const [searchData, updateSearchData] = useState({
        keyword: "",
        table: "posts",
        category: "press-release",
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
        searchPosts(searchData, updateData)
            .catch(() => {
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [searchData]); // eslint-disable-line

    return (
        <div className="pt-[3.8rem] lg:pt-[6.6rem]">
            <section className="text-center py-12">
                <Slide bottom>
                    <h1 className="text-4xl font-semibold my-5">
                        Press Release
                    </h1>
                </Slide>
                <Slide bottom>
                    <p className="w-full text-gray-600 px-6 md:w-6/12 mx-auto">
                        Here you will find a variety of press releases covering
                        topics such as new product launches, company milestones,
                        industry awards, and more.
                    </p>
                </Slide>
            </section>
            <div className="flex flex-row px-6 lg:px-16">
                <div className="w-full lg:w-9/12">
                    {loading && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-y-6 sm:gap-6 py-10">
                            {[1, 2, 3, 4, 5, 6].map((_, i) => {
                                return <SkeletonLoader key={i} type="news" />;
                            })}
                        </div>
                    )}

                    {!loading &&
                        !error &&
                        searchData.keyword !== "" &&
                        data.length < 1 && (
                            <div className="flex justify-center mt-14">
                                <p className="text-xl text-gray-500">
                                    No results found with the keyword{" "}
                                    <b>{searchData.keyword}</b>
                                </p>
                            </div>
                        )}

                    {!loading &&
                        !error &&
                        searchData.keyword === "" &&
                        data.length < 1 && (
                            <div className="flex justify-center mt-14">
                                <p className="text-xl text-gray-500">
                                    No new posts at the moment
                                </p>
                            </div>
                        )}

                    {error && !loading && (
                        <div className="flex justify-center mt-14">
                            <p className="text-xl text-gray-500">
                                Connection error, please try refreshing your
                                page.
                            </p>
                        </div>
                    )}

                    {!loading && data.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-y-6 sm:gap-6 py-10">
                            {data.map((item, i) => {
                                return <News key={i} data={item} />;
                            })}
                        </div>
                    )}
                </div>

                <div className="hidden lg:block w-4/12 pt-10 pl-10">
                    <MediaCentreSideBar
                        category="press-release"
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
