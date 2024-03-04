import { useState } from "react";
import { Slide } from "react-reveal";
import { PostsWidget } from "../../layouts/postsWidget";
import { Page } from "../../layouts/page";

export const ConsultancyPage = () => {
    const [data, updateData] = useState([]);
    const [searchData, updateSearchData] = useState({
        keyword: "",
        table: "posts",
        category: "consultancy",
        project_status: "",
        access: "public",
        status: "published",
        page: 1,
        limit: 9,
    });

    return (
        <Page
            title="Consultancy"
            description="Working with CCAK will give you an opportunity to have a positive impact on the lives of millions of people through advocating for policy changes, and promoting the adoption of clean cooking technologies."
            page="consultancy"
            data={data}
            updateData={updateData}
        >
            <div className="pt-[3.8rem] lg:pt-[6.6rem]">
                <section className="text-center py-12">
                    <Slide bottom>
                        <h1 className="text-5xl font-semibold my-5">
                            Consultancy
                        </h1>
                    </Slide>
                    <Slide bottom>
                        <p className="w-full text-gray-600 px-6 lg:w-6/12 mx-auto">
                            {data[0]?.content?.header}
                        </p>
                    </Slide>
                    <div className="flex flex-row px-6 lg:px-16 py-5">
                        <PostsWidget
                            category="careers"
                            searchData={searchData}
                            updateSearchData={updateSearchData}
                        />
                    </div>
                </section>
            </div>{" "}
        </Page>
    );
};
