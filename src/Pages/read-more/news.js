import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { News } from "../../Components/news";
import { ReadMoreHeader } from "../../Components/readMoreHeader";
import { Fade } from "react-reveal";
import { SubFooter } from "../../Containers/subFooter";
import { apiRequest } from "../../api/api-calls";
import ReactHtmlParser from "react-html-parser";

const recentData = [
    {
        id: 1,
        category: "news",
        title: "Don’t destroy greenery and don’t spoil scenery",
        published: "2023-03-08",
        excerpt: "Lorem ipsum dolor sit amet, conser adipiscing elit...",
        image: "news/news_default.jpg",
        url: "1/dont-destroy-greenery-and-dont-spoil-scenery",
    },
    {
        id: 2,
        category: "news",
        title: "Don’t destroy greenery and don’t spoil scenery",
        published: "2023-03-08",
        excerpt: "Lorem ipsum dolor sit amet, conser adipiscing elit...",
        image: "news/news_default.jpg",
        url: "2/dont-destroy-greenery-and-dont-spoil-scenery",
    },
    {
        id: 3,
        category: "news",
        title: "Don’t destroy greenery and don’t spoil scenery",
        published: "2023-03-08",
        excerpt: "Lorem ipsum dolor sit amet, conser adipiscing elit...",
        image: "news/news_default.jpg",
        url: "3/dont-destroy-greenery-and-dont-spoil-scenery",
    },
    {
        id: 4,
        category: "news",
        title: "Don’t destroy greenery and don’t spoil scenery",
        published: "2023-03-08",
        excerpt: "Lorem ipsum dolor sit amet, conser adipiscing elit...",
        image: "news/news_default.jpg",
        url: "4/dont-destroy-greenery-and-dont-spoil-scenery",
    },
];

export const NewsReadMore = () => {
    const params = useParams();
    const [data, updateData] = useState([]);
    const [recentData, updateRecentData] = useState([]);

    useEffect(() => {
        apiRequest("get", "post/" + params.id, data, updateData);
        apiRequest(
            "get",
            "post/search/all/news/4",
            recentData,
            updateRecentData
        );
    }, []); // eslint-disable-line

    return (
        <div className="pt-[4rem] lg:pt-[8.2rem]">
            <ReadMoreHeader data={data} />
            <section className="flex flex-col md:flex-row px-6 lg:px-16">
                <div className="md:w-9/12 py-10" id="content">
                    {ReactHtmlParser(data.content)}
                </div>
                <div className="md:w-4/12 pt-10 lg:px-10">
                    <div className="py-3">
                        <Fade top>
                            <h2 className="w-full text-xl text-black font-bold py-5">
                                Recent News
                            </h2>
                        </Fade>
                        <div className="grid grid-cols-1 gap-y-6">
                            {recentData.map((item) => {
                                return <News data={item} />;
                            })}
                        </div>
                    </div>
                </div>
            </section>
            <section className="my-10">
                <SubFooter />
            </section>
        </div>
    );
};
