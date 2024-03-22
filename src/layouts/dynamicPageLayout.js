import { useState } from "react";
import { Slide } from "react-reveal";
import { MediaCentreSideBar } from "./mediaCentreSideBar";
import { ShortPostsLayout } from "./shortPostsLayout";
import { PostsWidget } from "./postsWidget";
import { Page } from "./page";

export const DynamicPageLayout = ({ pageData: { page, description } }) => {
    const [data, updateData] = useState([]);
    const [searchData, updateSearchData] = useState({
        keyword: "",
        table: "posts",
        category: page,
        project_status: "",
        access: "public",
        status: "published",
        page: 1,
        limit: 12,
    });

    return (
        <Page
            title={`${
                page.charAt(0).toUpperCase() + page.slice(1).replace(/-/, " ")
            }`}
            description={description}
            page={page}
            data={data}
            updateData={updateData}
        >
            <div className="pt-[3.8rem] lg:pt-[6.6rem]">
                <section className="text-center py-12">
                    <Slide bottom>
                        <h1 className="text-4xl lg:text-6xl text-gray-800 font-bold my-5 capitalize">
                            {page.replace(/-/, " ")}
                        </h1>
                    </Slide>
                    <Slide bottom>
                        <p className="w-full px-5 md:w-8/12 lg:w-6/12 mx-auto">
                            {data[0]?.content.header}
                        </p>
                    </Slide>
                </section>
                <div
                    className={`flex lg:${
                        ![
                            "external-publications",
                            "internal-publications",
                            "newsletters",
                        ].includes(searchData.category) && "flex-row"
                    } flex-col-reverse px-6 lg:px-16`}
                >
                    <div
                        className={`w-full lg:${
                            ![
                                "external-publications",
                                "internal-publications",
                                "newsletters",
                            ].includes(searchData.category) && "w-9/12"
                        }`}
                    >
                        <PostsWidget
                            category={page}
                            searchData={searchData}
                            updateSearchData={updateSearchData}
                        />
                    </div>
                    <div
                        className={`w-full lg:${
                            ![
                                "external-publications",
                                "internal-publications",
                                "newsletters",
                            ].includes(searchData.category) && "w-4/12"
                        } lg:pt-10 lg:pl-10`}
                    >
                        <MediaCentreSideBar
                            category={page}
                            searchData={{ ...searchData, page: 1, limit: 12 }}
                            updateSearchData={updateSearchData}
                        />
                    </div>
                </div>
                <section>
                    {page === "events" ? (
                        <ShortPostsLayout
                            title="Recent News"
                            category="news"
                            limit={4}
                        />
                    ) : (
                        <ShortPostsLayout
                            title="Upcoming Events"
                            category="events"
                            limit={4}
                        />
                    )}
                </section>
            </div>
        </Page>
    );
};
