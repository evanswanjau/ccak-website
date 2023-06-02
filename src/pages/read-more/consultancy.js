import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Fade } from "react-reveal";
import { ReadMoreHeader } from "../../components/readMoreHeader";
import { SubFooter } from "../../layouts/subFooter";
import { Career } from "../../components/career";
import { apiRequest } from "../../api/api-calls";
import ReactHtmlParser from "react-html-parser";

export const ConsultancyReadMore = () => {
    const params = useParams();
    const [data, updateData] = useState([]);
    const [recentData, updateRecentData] = useState([]);

    useEffect(() => {
        apiRequest("get", "post/" + params.id, data, updateData);
        apiRequest(
            "get",
            "post/search/all/consultancy/4",
            recentData,
            updateRecentData
        );
    }, []); // eslint-disable-line

    return (
        <div className="pt-[3.8rem] lg:pt-[6.9rem]">
            <ReadMoreHeader data={data} />
            <section className="flex flex-col md:flex-row px-6 lg:px-16">
                <div className="md:w-9/12 py-10" id="content">
                    {ReactHtmlParser(data.content)}
                </div>
                <div className="md:w-4/12 pt-10 lg:px-10">
                    <div className="py-3">
                        <Fade top>
                            <h2 className="w-full text-xl text-black font-bold py-3">
                                Recent Funding Opportunities
                            </h2>
                        </Fade>
                        <div className="grid grid-cols-1 gap-y-6">
                            {recentData.map((item) => {
                                return <Career data={item} />;
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
