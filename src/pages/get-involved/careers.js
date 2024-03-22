import { useState } from "react";
import { Slide, Fade } from "react-reveal";
import { PostsWidget } from "../../layouts/postsWidget";
import { Page } from "../../layouts/page";

export const CareersPage = () => {
    const [data, updateData] = useState([]);
    const [searchData, updateSearchData] = useState({
        keyword: "",
        table: "posts",
        category: "careers",
        project_status: "",
        access: "public",
        status: "published",
        page: 1,
        limit: 12,
    });

    return (
        <Page
            title="Careers"
            description="Joining our team at the Clean Cooking Association of Kenya (CCAK) is an opportunity to make a meaningful impact in the clean cooking sector."
            image={
                process.env.REACT_APP_IMAGEKIT_URL +
                "careers_page_section_1.jpg"
            }
            page="careers"
            data={data}
            updateData={updateData}
        >
            <div className="pt-[3.8rem] lg:pt-[6.6rem]">
                <section className="flex flex-col lg:space-x-8 items-center lg:flex-row w-full p-6 lg:p-32 bg-[#F2F9F4]">
                    <div className="w-full lg:w-6/12">
                        <Fade>
                            <h6 className="text-black text-xs font-semibold">
                                CAREERS
                            </h6>
                        </Fade>
                        <Slide bottom>
                            <h2 className="text-gray-800 text-4xl lg:text-6xl mt-1 mb-8 font-bold">
                                {data[0]?.content?.title}
                            </h2>
                        </Slide>
                        <Slide bottom>
                            <p className="my-5 text-gray-600">
                                {data[0]?.content?.content}
                            </p>
                        </Slide>
                    </div>
                    <div className="w-full flex items-center lg:w-6/12">
                        <Fade>
                            <img
                                className="rounded-lg mx-auto"
                                src={
                                    process.env.REACT_APP_IMAGEKIT_URL +
                                    data[0]?.content?.image
                                }
                                alt={data[0]?.content?.title}
                            />
                        </Fade>
                    </div>
                </section>
                <section className="text-center py-12 lg:px-32">
                    <Slide bottom>
                        <h1 className="text-4xl lg:text-6xl text-gray-800 font-semibold my-5">
                            {data[1]?.content?.title}
                        </h1>
                    </Slide>
                    <Slide bottom>
                        <p className="w-full text-gray-600 px-6 lg:w-6/12 mx-auto">
                            {data[1]?.content?.content}
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
