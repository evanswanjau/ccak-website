import { useState } from "react";
import { Slide } from "react-reveal";
import { MediaCentreSideBar } from "./mediaCentreSideBar";
import { ShortPostsLayout } from "./shortPostsLayout";
import { PostsWidget } from "./postsWidget";

export const DynamicPageLayout = ({ pageData: { page, description } }) => {
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
                    <PostsWidget
                        category={page}
                        searchData={searchData}
                        updateSearchData={updateSearchData}
                    />
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
    );
};
