import { useState } from "react";
import { Slide, Fade } from "react-reveal";
import { PostsWidget } from "../../layouts/postsWidget";

export const CareersPage = () => {
    const [searchData, updateSearchData] = useState({
        keyword: "",
        table: "posts",
        category: "careers",
        project_status: "",
        access: "public",
        status: "published",
        page: 1,
        limit: 9,
    });

    return (
        <div className="pt-[3.8rem] lg:pt-[6.6rem]">
            <section className="flex flex-col md:flex-row w-full py-6 md:py-20 px-6 md:px-12 bg-[#F2F9F4]">
                <div className="hidden w-full lg:block md:w-1/12">
                    <Fade>
                        <div className="border-t-2 border-black mx-5 my-2"></div>
                    </Fade>
                </div>
                <div className="w-full lg:w-6/12 md:pr-5">
                    <Fade>
                        <h6 className="text-black font-semibold">CAREERS</h6>
                    </Fade>
                    <Slide bottom>
                        <h2 className="text-black text-4xl lg:text-6xl my-8 font-bold">
                            An environment for opportunity and growth.
                        </h2>
                    </Slide>
                    <Slide bottom>
                        <p className="my-5 text-gray-600">
                            Joining our team at the Clean Cooking Association of
                            Kenya (CCAK) is an opportunity to make a meaningful
                            impact in the clean cooking sector.
                            <br />
                            <br />
                            As a member of our team, you will work alongside
                            experts and professionals from various fields,
                            including government, academia, and the private
                            sector.
                        </p>
                    </Slide>
                </div>
                <div className="w-full mt-5 flex items-center md:mt-0 lg:w-5/12">
                    <Fade>
                        <img
                            className="rounded-lg"
                            src={
                                process.env.REACT_APP_IMAGEKIT_URL +
                                "careers_page_section_1.jpg"
                            }
                            alt="Importance of clean cooking"
                        />
                    </Fade>
                </div>
            </section>
            <section className="text-center py-12">
                <Slide bottom>
                    <h1 className="text-4xl font-semibold my-5">
                        Available Jobs
                    </h1>
                </Slide>
                <Slide bottom>
                    <p className="w-full text-gray-600 px-6 lg:w-6/12 mx-auto">
                        You will have the opportunity to advocate for policy
                        changes, promote the adoption of clean cooking
                        technologies, and work towards creating a sustainable
                        market environment for the sector.
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
    );
};
