import { ReadMoreHeader } from "../../components/readMoreHeader";
import { SubFooter } from "../../layouts/subFooter";
import { ResearchDownload } from "../../components/research-download";

const data = {
    id: 1,
    title: "Analysis of the implications of the value-added tax on clean cooking in Kenya",
    excerpt:
        "A key policy objective of the Government of Kenya (GoK) is to meet the Sustainable Development Goal (SDG) 7 target of universal access to clean cooking solutions by 2028.",
    category: "research papers",
    published: "2023-04-01",
};

const downloads = [
    {
        title: "Analysis of the implications of the value-added tax on clean cooking in Kenya",
        category: "agm-material",
        published: "2023-03-08",
        downloads: 23,
        size: "136.6 kb",
    },
    {
        title: "Analysis of the implications of the value-added tax on clean cooking in Kenya",
        category: "agm-material",
        published: "2023-03-08",
        downloads: 23,
        size: "136.6 kb",
    },
    {
        title: "Analysis of the implications of the value-added tax on clean cooking in Kenya",
        category: "agm-material",
        published: "2023-03-08",
        downloads: 23,
        size: "136.6 kb",
    },
    {
        title: "Analysis of the implications of the value-added tax on clean cooking in Kenya",
        category: "agm-material",
        published: "2023-03-08",
        downloads: 23,
        size: "136.6 kb",
    },
    {
        title: "Analysis of the implications of the value-added tax on clean cooking in Kenya",
        category: "agm-material",
        published: "2023-03-08",
        downloads: 23,
        size: "136.6 kb",
    },
    {
        title: "Analysis of the implications of the value-added tax on clean cooking in Kenya",
        category: "agm-material",
        published: "2023-03-08",
        downloads: 23,
        size: "136.6 kb",
    },
];

export const ResearchPapersReadMore = () => {
    return (
        <div className="pt-[4rem] lg:pt-[8.2rem]">
            <ReadMoreHeader data={data} />
            <section className="flex flex-col md:flex-row px-6 lg:px-16">
                <div className="py-10">
                    <div className="grid grid-cols-4 gap-6">
                        {downloads.map((item) => {
                            return <ResearchDownload data={item} />;
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
