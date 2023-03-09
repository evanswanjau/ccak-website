import { Slide, Fade } from "react-reveal";
import { Career } from "../../Components/career";

const data = [
    {
        title: "Consultancy for the provision of media management services to CCAK.",
        description:
            "The objective of the project is to provide communications support to the Clean Cooking Association of Kenya to help them build a foundation for effective communication to the local governments and other relevant stakeholders from the public and private sector...",
        url: "mission-40k",
    },
    {
        title: "Consultancy for the provision of media management services to CCAK.",
        description:
            "The objective of the project is to provide communications support to the Clean Cooking Association of Kenya to help them build a foundation for effective communication to the local governments and other relevant stakeholders from the public and private sector...",
        url: "mission-40k",
    },
    {
        title: "Consultancy for the provision of media management services to CCAK.",
        description:
            "The objective of the project is to provide communications support to the Clean Cooking Association of Kenya to help them build a foundation for effective communication to the local governments and other relevant stakeholders from the public and private sector...",
        url: "mission-40k",
    },
    {
        title: "Consultancy for the provision of media management services to CCAK.",
        description:
            "The objective of the project is to provide communications support to the Clean Cooking Association of Kenya to help them build a foundation for effective communication to the local governments and other relevant stakeholders from the public and private sector...",
        url: "mission-40k",
    },
    {
        title: "Consultancy for the provision of media management services to CCAK.",
        description:
            "The objective of the project is to provide communications support to the Clean Cooking Association of Kenya to help them build a foundation for effective communication to the local governments and other relevant stakeholders from the public and private sector...",
        url: "mission-40k",
    },
    {
        title: "Consultancy for the provision of media management services to CCAK.",
        description:
            "The objective of the project is to provide communications support to the Clean Cooking Association of Kenya to help them build a foundation for effective communication to the local governments and other relevant stakeholders from the public and private sector...",
        url: "mission-40k",
    },
    {
        title: "Consultancy for the provision of media management services to CCAK.",
        description:
            "The objective of the project is to provide communications support to the Clean Cooking Association of Kenya to help them build a foundation for effective communication to the local governments and other relevant stakeholders from the public and private sector...",
        url: "mission-40k",
    },
    {
        title: "Consultancy for the provision of media management services to CCAK.",
        description:
            "The objective of the project is to provide communications support to the Clean Cooking Association of Kenya to help them build a foundation for effective communication to the local governments and other relevant stakeholders from the public and private sector...",
        url: "mission-40k",
    },
];

export const ConsultancyPage = () => {
    return (
        <div>
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
