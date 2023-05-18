import { useState, useEffect } from "react";
import { News } from "../../Components/news";
import { MediaCentreSideBar } from "../../Containers/mediaCentreSideBar";
import { RecentNews } from "../../Containers/recentNews";
import { Slide } from "react-reveal";
import { apiRequest } from "../../api/api-calls";


export const PressReleasePage = () => {
    const [data, updateData] = useState([]);

    useEffect(() => {
        apiRequest("get", "post/search/all/press-release/12", data, updateData);
    }, []); // eslint-disable-line

    return (
        <div className="pt-[4rem] lg:pt-[8.2rem]">
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
                <div className="w-full lg:w-9/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-y-6 sm:gap-6 py-10">
                    {data.map((item, i) => {
                        return <News key={i} data={item} />;
                    })}
                </div>
                <div className="hidden lg:block w-4/12 pt-10 pl-10">
                    <MediaCentreSideBar category="press release" />
                </div>
            </div>
            <section>
                <RecentNews />
            </section>
        </div>
    );
};
