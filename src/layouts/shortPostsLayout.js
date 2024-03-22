import React, { useState } from "react";
import { Fade } from "react-reveal";
import { PostsWidget } from "./postsWidget";

export const ShortPostsLayout = ({ title, category, limit, carousel }) => {
    const [searchData, updateSearchData] = useState({
        keyword: "",
        table: "posts",
        category: category,
        project_status: "",
        access: "public",
        status: "published",
        page: 1,
        limit: limit,
    });

    return (
        <div className="w-full px-6 lg:p-9">
            <Fade top>
                <div className="flex flex-row">
                    <h2 className="w-full lg:w-4/12 text-2xl text-black font-bold">
                        {title}
                    </h2>
                    <div className="hidden md:block w-8/12 border-t border-gray-200 mt-4"></div>
                </div>
            </Fade>
            <PostsWidget
                category={category}
                searchData={searchData}
                updateSearchData={updateSearchData}
                pagination={false}
                carousel={carousel}
            />
        </div>
    );
};
