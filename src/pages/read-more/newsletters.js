import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ReadMoreHeader } from "../../components/readMoreHeader";
import { SubFooter } from "../../layouts/subFooter";
import { apiRequest } from "../../api/api-calls";
import { ResearchDownload } from "../../components/research-download";

export const NewslettersReadMore = () => {
    const params = useParams();
    const [data, updateData] = useState({ files: { data: [] } });

    useEffect(() => {
        apiRequest("get", "post/" + params.id, data, updateData);
    }, []); // eslint-disable-line

    return (
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
                <SubFooter />
            </section>
        </div>
    );
};
