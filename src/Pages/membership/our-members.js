import { Slide, Fade } from "react-reveal";
import { OurMember } from "../../Components/ourMember";

const data = [
    {
        name: "burn",
        category: "corporate large",
        technology: "biomass cookstoves",
        phone_number: "0706585629",
        location: "New Horizons Industrial Park, Ruiru Kenya",
    },
    {
        name: "burn",
        category: "corporate large",
        technology: "biomass cookstoves",
        phone_number: "0706585629",
        location: "New Horizons Industrial Park, Ruiru Kenya",
    },
    {
        name: "burn",
        category: "corporate large",
        technology: "biomass cookstoves",
        phone_number: "0706585629",
        location: "New Horizons Industrial Park, Ruiru Kenya",
    },
    {
        name: "burn",
        category: "corporate large",
        technology: "biomass cookstoves",
        phone_number: "0706585629",
        location: "New Horizons Industrial Park, Ruiru Kenya",
    },
    {
        name: "burn",
        category: "corporate large",
        technology: "biomass cookstoves",
        phone_number: "0706585629",
        location: "New Horizons Industrial Park, Ruiru Kenya",
    },
    {
        name: "burn",
        category: "corporate large",
        technology: "biomass cookstoves",
        phone_number: "0706585629",
        location: "New Horizons Industrial Park, Ruiru Kenya",
    },
    {
        name: "burn",
        category: "corporate large",
        technology: "biomass cookstoves",
        phone_number: "0706585629",
        location: "New Horizons Industrial Park, Ruiru Kenya",
    },
    {
        name: "burn",
        category: "corporate large",
        technology: "biomass cookstoves",
        phone_number: "0706585629",
        location: "New Horizons Industrial Park, Ruiru Kenya",
    },
];

let technologies = [
    "associate-members",
    "biogas",
    "biomass",
    "eletricity-and-lpg",
    "ethanol",
    "solar",
];

let categories = [
    "corporate-large",
    "corporate-medium",
    "corporate-small",
    "corporate-micro",
    "ngo-international",
    "ngo-local",
    "donor-large",
    "asoociation-membership",
    "CSO",
    "intitution-research,technology",
    "individual",
    "students",
];

export const OurMembersPage = () => {
    return (
        <div className="pt-[4rem] lg:pt-[8.2rem]">
            <section className="text-center py-12">
                <Slide bottom>
                    <h1 className="text-4xl font-semibold my-5">Members</h1>
                </Slide>
                <Slide bottom>
                    <p className="w-full text-gray-600 px-6 lg:w-6/12 mx-auto">
                        Our members are committed to promoting adoption of clean
                        cooking technologies, capacity building of the sector,
                        and sector coordination, and work together towards an
                        enabling environment at both national and county levels
                        to catalyze the growth of the clean cooking sector.
                    </p>
                </Slide>
            </section>
            <div className="flex flex-row px-6 lg:px-16">
                <div className="w-full lg:w-9/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-y-6 sm:gap-6 py-10">
                    {data.map((item, i) => {
                        return <OurMember key={i} data={item} />;
                    })}
                </div>
                <div className="hidden lg:block w-4/12 pt-10 pl-10">
                    <Fade>
                        <input
                            className="w-full bg-gray-100 mb-5 font-manjari outline-0 rounded-md pt-3 pb-2 px-3"
                            type="text"
                            placeholder={`Search member`}
                        />
                    </Fade>
                    <div className="bg-[#F3F3F3] p-5 rounded-lg my-5">
                        <h3 className="border-b pb-2">TECHNOLOGY</h3>
                        <ul className="font-manjari space-y-2 my-5">
                            {technologies.map((technology) => {
                                return (
                                    <a href={technology}>
                                        <li className="hover:text-[#ED7423] transition duration-150 ease-in-out">
                                            {technology
                                                .charAt(0)
                                                .toUpperCase() +
                                                technology
                                                    .slice(1)
                                                    .replace(/-/g, " ")}
                                        </li>
                                    </a>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="bg-[#F3F3F3] p-5 rounded-lg my-5">
                        <h3 className="border-b pb-2">CATEGORY</h3>
                        <ul className="font-manjari space-y-2 my-5">
                            {categories.map((category) => {
                                return (
                                    <a href={category}>
                                        <li className="hover:text-[#ED7423] transition duration-150 ease-in-out">
                                            {category.charAt(0).toUpperCase() +
                                                category.slice(1)}
                                        </li>
                                    </a>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
