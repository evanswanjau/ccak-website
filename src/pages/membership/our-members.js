import { useState, useEffect } from "react";
import { Slide, Fade } from "react-reveal";
import { OurMember } from "../../components/ourMember";
import { CallToAction } from "../../components/callToAction";
import { search } from "../../api/api-calls";
import { InputForm } from "../../components/forms/input-form";
import { OurMemberModal } from "../../components/ourMemberModal";
import { Pagination } from "../../components/pagination";
import { Page } from "../../layouts/page";

let technologies = [
    "cook stoves providers",
    "ethanol",
    "biogas",
    "non-carbonized briquettes",
    "carbon briquettes",
    "research and consultancy",
    "LPG",
    "partners",
    "membership associations",
    "solar",
    "journalists",
    "IMC",
];

let categories = [
    "corporate-large",
    "corporate-medium",
    "corporate-small",
    "corporate-micro",
    "ngo-international",
    "ngo-local",
    "donor-large",
    "association-membership",
    "CSO",
    "intitution-research,technology",
    "individual",
    "student",
];

export const OurMembersPage = () => {
    const [data, updateData] = useState([]);
    const [member, setMember] = useState({ modal: false, member: {} });
    const [paginationData, setPaginationData] = useState({});

    const [searchData, updateSearchData] = useState({
        keyword: "",
        technology: "",
        registration_status: "",
        subscription_status: "",
        subscription_category: "",
        status: "",
        page: 1,
        limit: 9,
    });

    useEffect(() => {
        search("members", searchData, updateData, setPaginationData);
    }, [searchData]); // eslint-disable-line

    return (
        <Page
            title="Our Members"
            description="Our members are committed to promoting adoption of clean cooking technologies, capacity building of the sector, and sector coordination, and work together towards an enabling environment at both national and county levels to catalyze the growth of the clean cooking sector."
        >
            <div className="pt-[3.8rem] lg:pt-[6.6rem]">
                {member.modal && (
                    <OurMemberModal member={member} setMember={setMember} />
                )}
                <section className="text-center py-12">
                    <Slide bottom>
                        <h1 className="text-4xl font-semibold my-5">Members</h1>
                    </Slide>
                    <Slide bottom>
                        <p className="w-full text-gray-600 px-6 lg:w-6/12 mx-auto">
                            Our members are committed to promoting adoption of
                            clean cooking technologies, capacity building of the
                            sector, and sector coordination, and work together
                            towards an enabling environment at both national and
                            county levels to catalyze the growth of the clean
                            cooking sector.
                        </p>
                    </Slide>
                </section>
                <section className="flex flex-row px-6 lg:px-16">
                    <div className="flex flex-col w-full lg:w-9/12">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-y-6 sm:gap-6 py-10">
                            {data.map((item, i) => {
                                return (
                                    <OurMember
                                        key={i}
                                        data={item}
                                        setMember={setMember}
                                    />
                                );
                            })}
                        </div>
                        {paginationData.count > searchData.limit && (
                            <div className="my-5 text-center ">
                                <Pagination
                                    paginationData={paginationData}
                                    search={searchData}
                                    updateSearch={updateSearchData}
                                />
                            </div>
                        )}
                    </div>

                    <div className="hidden lg:block w-4/12 pt-10 pl-10">
                        <Fade>
                            <InputForm
                                type="text"
                                name="keyword"
                                label={`Search member`}
                                data={searchData}
                                updateData={updateSearchData}
                            />
                        </Fade>
                        <div className="bg-[#F3F3F3] p-5 rounded-lg my-5">
                            <h3 className="border-b pb-2">MEMBERSHIP TYPES</h3>
                            <ul className="font-manjari space-y-2 my-5">
                                {categories.map((category) => {
                                    return (
                                        <li
                                            className="hover:text-[#ED7423] transition duration-150 ease-in-out capitalize cursor-pointer"
                                            onClick={() => {
                                                updateSearchData({
                                                    ...searchData,
                                                    member_type: category,
                                                });
                                            }}
                                        >
                                            {category.replace(/-/g, " ")}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="bg-[#F3F3F3] p-5 rounded-lg my-5">
                            <h3 className="border-b pb-2">CATEGORIES</h3>
                            <ul className="font-manjari space-y-2 my-5">
                                {technologies.map((technology) => {
                                    return (
                                        <li
                                            className="hover:text-[#ED7423] transition duration-150 ease-in-out capitalize cursor-pointer"
                                            onClick={() => {
                                                updateSearchData({
                                                    ...searchData,
                                                    technology: technology,
                                                });
                                            }}
                                        >
                                            {technology.replace(/-/g, " ")}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="my-10">
                    <CallToAction />
                </section>
            </div>
        </Page>
    );
};
