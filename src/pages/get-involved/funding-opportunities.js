import { useState } from "react";
import { Slide } from "react-reveal";
import { PostsWidget } from "../../layouts/postsWidget";
import { Page } from "../../layouts/page";

export const FundingOpportunitiesPage = () => {
    const [data, updateData] = useState([]);
    const [searchData, updateSearchData] = useState({
        keyword: "",
        table: "posts",
        category: "funding-opportunities",
        project_status: "",
        access: "public",
        status: "published",
        page: 1,
        limit: 9,
    });

    return (
        <Page
            title="Funding Opportunities"
            description="Joining our team at the Clean Cooking Association of Kenya (CCAK) is an opportunity to make a meaningful impact in the clean cooking sector."
            page="consultancy"
            data={data}
            updateData={updateData}
        >
            <div className="pt-[3.8rem] lg:pt-[6.6rem]">
                <section className="text-center py-12">
                    <Slide bottom>
                        <h1 className="text-5xl px-6 font-semibold my-5">
                            Funding Opportunities
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
            </div>
        </Page>
    );
};
