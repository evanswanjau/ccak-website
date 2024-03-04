import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ReadMoreHeader } from "../../components/readMoreHeader";
import { SubFooter } from "../../layouts/subFooter";
import {
    apiRequest,
    searchData as searchFooterData,
} from "../../api/api-calls";
import { ResearchDownload } from "../../components/research-download";
import { Page } from "../../layouts/page";

export const NewslettersReadMore = () => {
    const params = useParams();
    const [data, updateData] = useState({ files: { data: [] } });
    const [footerData, updateFooterData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        apiRequest("get", "post/" + params.id, data, updateData).finally(() =>
            setLoading(false)
        );
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
            data={data}
            updateData={updateData}
            readMorePage={true}
            readMoreLoading={loading}
        >
            <div className="pt-[3.8rem] lg:pt-[6.6rem]">
                <ReadMoreHeader data={data} />
                <section className="flex flex-col md:flex-row px-6 lg:px-16">
                    <div className="py-10 w-full">
                        <div className="flex flex-wrap w-full">
                            {data.files.data.map((item) => {
                                return (
                                    <ResearchDownload
                                        data={{
                                            ...item,
                                            file: item,
                                            title: data.title,
                                            folder: data.folder,
                                        }}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </section>
                <section className="my-10">
                    <SubFooter data={footerData[8]?.content} />
                </section>
            </div>
        </Page>
    );
};
