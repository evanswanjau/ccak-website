import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Fade } from "react-reveal";
import { ReadMoreHeader } from "../../components/readMoreHeader";
import { SubFooter } from "../../layouts/subFooter";
import { Career } from "../../components/career";
import {
    apiRequest,
    searchPosts,
    searchData as searchFooterData,
} from "../../api/api-calls";
import ReactHtmlParser from "react-html-parser";
import { Page } from "../../layouts/page";

export const ConsultancyReadMore = () => {
    const params = useParams();
    const [data, updateData] = useState([]);
    const [footerData, updateFooterData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [recentData, updateRecentData] = useState([]);
    const searchData = {
        keyword: "",
        table: "posts",
        category: "consultancy",
        technology: "",
        project_status: "",
        access: "public",
        status: "published",
        page: 1,
        limit: 4,
        ip_address: "",
        created_by: 0,
    };

    useEffect(() => {
        apiRequest("get", "post/" + params.id, data, updateData).finally(() =>
            setLoading(false)
        );
        searchPosts(searchData, updateRecentData);
        searchFooterData(
            "content",
            {
                page: "about-us",
            },
            updateFooterData
        );
    }, []); // eslint-disable-line
    return (
        <Page
            title={data.title}
            description={data.excerpt}
            image={
                process.env.REACT_APP_IMAGEKIT_URL + "consultancy/" + data.image
            }
            data={data}
            updateData={updateData}
            readMorePage={true}
            readMoreLoading={loading}
        >
            <div className="pt-[3.8rem] lg:pt-[6.6rem]">
                <ReadMoreHeader data={data} />
                <section className="flex flex-col md:flex-row px-6 lg:px-16">
                    <div className="md:w-9/12 py-10" id="content">
                        {ReactHtmlParser(data.content)}
                    </div>
                    <div className="md:w-4/12 pt-10 lg:px-10">
                        <div className="py-3">
                            <Fade top>
                                <h2 className="w-full text-xl text-black font-bold py-3">
                                    More Consultancies
                                </h2>
                            </Fade>
                            <div className="grid grid-cols-1 gap-y-6">
                                {recentData.slice(1).map((item) => {
                                    return <Career data={item} />;
                                })}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="my-10">
                    {footerData[8]?.content && (
                        <SubFooter data={footerData[8]?.content} />
                    )}
                </section>
            </div>
        </Page>
    );
};
