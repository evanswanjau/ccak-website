import { Slide, Fade } from "react-reveal";
import { Career } from "../../Components/career";

const data = [
    {
        title: "Call for clean cooking technologies to participate KOSAP results based financing",
        description:
            "The Kenya Off-Grid Solar Access Project (KOSAP) is a flagship project of the Ministry of Energy, financed by the World Bank. Component 2 of the project is a US$ 47 million funding window encompassing two results-based financings (RBF) facilities for solar (US$ 12 million)...",
        url: "#",
    },
    {
        title: "Call for clean cooking technologies to participate KOSAP results based financing",
        description:
            "The Kenya Off-Grid Solar Access Project (KOSAP) is a flagship project of the Ministry of Energy, financed by the World Bank. Component 2 of the project is a US$ 47 million funding window encompassing two results-based financings (RBF) facilities for solar (US$ 12 million)...",
        url: "#",
    },
    {
        title: "Call for clean cooking technologies to participate KOSAP results based financing",
        description:
            "The Kenya Off-Grid Solar Access Project (KOSAP) is a flagship project of the Ministry of Energy, financed by the World Bank. Component 2 of the project is a US$ 47 million funding window encompassing two results-based financings (RBF) facilities for solar (US$ 12 million)...",
        url: "#",
    },
    {
        title: "Call for clean cooking technologies to participate KOSAP results based financing",
        description:
            "The Kenya Off-Grid Solar Access Project (KOSAP) is a flagship project of the Ministry of Energy, financed by the World Bank. Component 2 of the project is a US$ 47 million funding window encompassing two results-based financings (RBF) facilities for solar (US$ 12 million)...",
        url: "#",
    },
    {
        title: "Call for clean cooking technologies to participate KOSAP results based financing",
        description:
            "The Kenya Off-Grid Solar Access Project (KOSAP) is a flagship project of the Ministry of Energy, financed by the World Bank. Component 2 of the project is a US$ 47 million funding window encompassing two results-based financings (RBF) facilities for solar (US$ 12 million)...",
        url: "#",
    },
];

export const FundingOpportunitiesPage = () => {
    return (
        <div className="pt-[4rem] lg:pt-[8.2rem]">
            <section className="text-center py-12">
                <Slide bottom>
                    <h1 className="text-4xl px-6 font-semibold my-5">
                        Funding Opportunities
                    </h1>
                </Slide>
                <Slide bottom>
                    <p className="w-full text-gray-600 px-6 lg:w-6/12 mx-auto">
                        CCAK regularly seeks out and applies for funding
                        opportunities from various sources such as government
                        agencies, private foundations, and other organizations.
                    </p>
                </Slide>
                <div className="flex flex-row px-6 lg:px-16 py-5">
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-y-6 sm:gap-6 py-10">
                        {data.map((item) => {
                            return <Career data={item} />;
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};
