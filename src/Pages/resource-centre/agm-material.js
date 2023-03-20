import { Slide } from "react-reveal";
import { Research } from "../../Components/research";

const data = [
    {
        title: "Analysis of the implications of the value-added tax on clean cooking in Kenya",
        description:
            "A key policy objective of the Government of Kenya (GoK) is to meet the Sustainable Development Goal (SDG) 7 target of universal access to clean cooking solutions by 2028.",
        url: "mission-40k",
        published: "February 20, 2023",
        downloads: 23,
        size: "136.6 kb",
    },
    {
        title: "Analysis of the implications of the value-added tax on clean cooking in Kenya",
        description:
            "A key policy objective of the Government of Kenya (GoK) is to meet the Sustainable Development Goal (SDG) 7 target of universal access to clean cooking solutions by 2028.",
        url: "mission-40k",
        published: "February 20, 2023",
        downloads: 23,
        size: "136.6 kb",
    },
    {
        title: "Analysis of the implications of the value-added tax on clean cooking in Kenya",
        description:
            "A key policy objective of the Government of Kenya (GoK) is to meet the Sustainable Development Goal (SDG) 7 target of universal access to clean cooking solutions by 2028.",
        url: "mission-40k",
        published: "February 20, 2023",
        downloads: 23,
        size: "136.6 kb",
    },
    {
        title: "Analysis of the implications of the value-added tax on clean cooking in Kenya",
        description:
            "A key policy objective of the Government of Kenya (GoK) is to meet the Sustainable Development Goal (SDG) 7 target of universal access to clean cooking solutions by 2028.",
        url: "mission-40k",
        published: "February 20, 2023",
        downloads: 23,
        size: "136.6 kb",
    },
    {
        title: "Analysis of the implications of the value-added tax on clean cooking in Kenya",
        description:
            "A key policy objective of the Government of Kenya (GoK) is to meet the Sustainable Development Goal (SDG) 7 target of universal access to clean cooking solutions by 2028.",
        url: "mission-40k",
        published: "February 20, 2023",
        downloads: 23,
        size: "136.6 kb",
    },
    {
        title: "Analysis of the implications of the value-added tax on clean cooking in Kenya",
        description:
            "A key policy objective of the Government of Kenya (GoK) is to meet the Sustainable Development Goal (SDG) 7 target of universal access to clean cooking solutions by 2028.",
        url: "mission-40k",
        published: "February 20, 2023",
        downloads: 23,
        size: "136.6 kb",
    },
    {
        title: "Analysis of the implications of the value-added tax on clean cooking in Kenya",
        description:
            "A key policy objective of the Government of Kenya (GoK) is to meet the Sustainable Development Goal (SDG) 7 target of universal access to clean cooking solutions by 2028.",
        url: "mission-40k",
        published: "February 20, 2023",
        downloads: 23,
        size: "136.6 kb",
    },
];

export const AgmMaterialPage = () => {
    return (
        <div className="pt-[4rem] lg:pt-[8.2rem]">
            <section className="text-center py-12">
                <Slide bottom>
                    <h1 className="text-4xl font-semibold my-5">
                        AGM Material
                    </h1>
                </Slide>
                <Slide bottom>
                    <p className="w-full text-gray-600 px-6 lg:w-6/12 mx-auto">
                        Welcome to the AGM page! On this page, we will provide
                        you with a comprehensive guide to everything you need to
                        know about our Annual General Meetings.
                    </p>
                </Slide>
                <div className="flex flex-row px-6 lg:px-16 py-5">
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-y-6 sm:gap-6 py-10">
                        {data.map((item, i) => {
                            return <Research key={i} data={item} />;
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};
