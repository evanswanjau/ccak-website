import { Slide } from "react-reveal";
import { Career } from "../../Components/career";

const data = [
    {
        id: 1,
        category: "consultancy",
        title: "Consultancy for the provision of media management services to CCAK.",
        excerpt:
            "The objective of the project is to provide communications support to the Clean Cooking Association of Kenya to help them build a foundation for effective communication to the local governments and other relevant stakeholders from the public and private sector...",
        url: "1/consultancy-for-the-provision-of-media-management-services-to-ccak",
    },
    {
        id: 2,
        category: "consultancy",
        title: "Consultancy for the provision of media management services to CCAK.",
        excerpt:
            "The objective of the project is to provide communications support to the Clean Cooking Association of Kenya to help them build a foundation for effective communication to the local governments and other relevant stakeholders from the public and private sector...",
        url: "2/consultancy-for-the-provision-of-media-management-services-to-ccak",
    },
    {
        id: 3,
        category: "consultancy",
        title: "Consultancy for the provision of media management services to CCAK.",
        excerpt:
            "The objective of the project is to provide communications support to the Clean Cooking Association of Kenya to help them build a foundation for effective communication to the local governments and other relevant stakeholders from the public and private sector...",
        url: "3/consultancy-for-the-provision-of-media-management-services-to-ccak",
    },
    {
        id: 4,
        category: "consultancy",
        title: "Consultancy for the provision of media management services to CCAK.",
        excerpt:
            "The objective of the project is to provide communications support to the Clean Cooking Association of Kenya to help them build a foundation for effective communication to the local governments and other relevant stakeholders from the public and private sector...",
        url: "4/consultancy-for-the-provision-of-media-management-services-to-ccak",
    },
];

export const ConsultancyPage = () => {
    return (
        <div className="pt-[4rem] lg:pt-[8.2rem]">
            <section className="text-center py-12">
                <Slide bottom>
                    <h1 className="text-4xl font-semibold my-5">Consultancy</h1>
                </Slide>
                <Slide bottom>
                    <p className="w-full text-gray-600 px-6 lg:w-6/12 mx-auto">
                        Working with us you will have the opportunity to have a
                        positive impact on the lives of millions of people,
                        including advocating for policy changes, and promoting
                        the adoption of clean cooking technologies.
                    </p>
                </Slide>
                <div className="flex flex-row px-6 lg:px-16 py-5">
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-y-6 sm:gap-6 py-10">
                        {data.map((item, i) => {
                            return <Career key={i} data={item} />;
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};
