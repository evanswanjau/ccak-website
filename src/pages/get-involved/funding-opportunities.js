import { useState } from "react";
import { Slide } from "react-reveal";
import { PostsWidget } from "../../layouts/postsWidget";
import { Page } from "../../layouts/page";

export const FundingOpportunitiesPage = () => {
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
        >
            <div className="pt-[3.8rem] lg:pt-[6.6rem]">
                <section className="text-center py-12">
                    <Slide bottom>
                        <h1 className="text-4xl px-6 font-semibold my-5">
                            Funding Opportunities
                        </h1>
                    </Slide>
                    <Slide bottom>
                        <p className="w-full text-gray-600 px-6 lg:w-6/12 mx-auto">
                            CCAK regularly shares funding opportunities from
                            various sources such as government agencies, private
                            foundations, and other organizations with the public
                            and its members.
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
