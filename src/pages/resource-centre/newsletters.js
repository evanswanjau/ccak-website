import { useState, useEffect } from "react";
import { Slide } from "react-reveal";
import { Research } from "../../components/research";
import { searchPosts } from "../../api/api-calls";
import { SkeletonLoader } from "../../components/skeletonLoader";
import { InputForm } from "../../components/forms/input-form";
import { Page } from "../../layouts/page";

export const NewslettersPage = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, updateData] = useState([]);
    const [searchData, updateSearchData] = useState({
        keyword: "",
        table: "posts",
        category: "newsletters",
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
        <Page
            title="Newsletters"
            description="Join us as we highlight success stories, share innovative technologies, showcase policy developments, and shed light on the importance of clean cooking for sustainable development."
        >
            <div className="pt-[3.8rem] lg:pt-[6.6rem]">
                <section className="text-center py-12">
                    <Slide bottom>
                        <h1 className="text-4xl font-semibold my-5">
                            Newsletters
                        </h1>
                    </Slide>
                    <Slide bottom>
                        <p className="w-full text-gray-600 px-6 lg:w-6/12 mx-auto">
                            Join us as we highlight success stories, share
                            innovative technologies, showcase policy
                            developments, and shed light on the importance of
                            clean cooking for sustainable development.
                        </p>
                    </Slide>
                    <div className="flex flex-row px-6 lg:px-16 py-5">
                        <div className="w-full">
                            <div className="w-4/12 mx-auto my-10">
                                <InputForm
                                    type="text"
                                    name="keyword"
                                    label={`Search Newsletters`}
                                    data={searchData}
                                    updateData={updateSearchData}
                                />
                            </div>

                            {loading && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-y-6 sm:gap-6 py-10">
                                    {[1, 2, 3, 4, 5, 6].map((_, i) => {
                                        return (
                                            <SkeletonLoader
                                                key={i}
                                                type="careers"
                                            />
                                        );
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
                                            No new publications at the moment
                                        </p>
                                    </div>
                                )}

                            {error && !loading && (
                                <div className="flex justify-center mt-14">
                                    <p className="text-xl text-gray-500">
                                        Connection error, please try refreshing
                                        your page.
                                    </p>
                                </div>
                            )}

                            {!loading && data.length > 0 && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-y-6 sm:gap-6 py-10">
                                    {data.map((item, i) => {
                                        return <Research key={i} data={item} />;
                                    })}
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </Page>
    );
};
