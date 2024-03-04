import { useState, useEffect } from "react";
import { useSnackbar } from "notistack";
import { Slide, Fade } from "react-reveal";
import { OurMember } from "../../components/ourMember";
import { search } from "../../api/api-calls";
import { InputForm } from "../../components/forms/input-form";
import { OurMemberModal } from "../../components/ourMemberModal";
import { Pagination } from "../../components/pagination";
import { Page } from "../../layouts/page";
import { SkeletonLoader } from "../../components/skeletonLoader";

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
    const [pageData, updatePageData] = useState([]);
    const [data, updateData] = useState([]);
    const [member, setMember] = useState({ modal: false, member: {} });
    const [paginationData, setPaginationData] = useState({});
    const [loading, setLoading] = useState(true);
    const [technology, setTechnology] = useState("");
    const [category, setCategory] = useState("");

    const { enqueueSnackbar } = useSnackbar();

    const [searchData, updateSearchData] = useState({
        keyword: "",
        technology: technology,
        registration_status: "",
        subscription_status: "",
        subscription_category: category,
        status: "",
        page: 1,
        limit: 12,
    });

    useEffect(() => {
        window.scrollTo(0, 350);

        search(
            "members",
            searchData,
            updateData,
            setPaginationData,
            enqueueSnackbar,
            setLoading
        );
    }, [searchData]); // eslint-disable-line

    return (
        <Page
            title="Our Members"
            description="Our members are committed to promoting adoption of clean cooking technologies, capacity building of the sector, and sector coordination, and work together towards an enabling environment at both national and county levels to catalyze the growth of the clean cooking sector."
            page="our-members"
            data={pageData}
            updateData={updatePageData}
        >
            <div className="pt-[3.8rem] lg:pt-[6.6rem]">
                {member.modal && (
                    <OurMemberModal member={member} setMember={setMember} />
                )}
                <section className="text-center py-12">
                    <Slide bottom>
                        <h1 className="text-5xl font-bold my-5">Members</h1>
                    </Slide>
                    <Slide bottom>
                        <p className="w-full text-gray-600 px-6 lg:w-6/12 mx-auto">
                            {pageData[0]?.content?.header}
                        </p>
                    </Slide>
                </section>
                <section className="flex flex-row p-6 lg:p-16">
                    <div className="flex flex-col w-full lg:w-9/12 md:pt-16">
                        <ul className="flex flex-wrap font-manjari bg-">
                            <li
                                className={`${
                                    technology === ""
                                        ? "bg-gray-800"
                                        : "bg-[#ED7423]"
                                } text-white rounded-[3em] px-3 pt-1 mb-1 mr-1 transition duration-150 ease-in-out capitalize cursor-pointer`}
                                onClick={() => {
                                    updateSearchData({
                                        ...searchData,
                                        technology: "",
                                        page: 1,
                                        limit: 12,
                                    });
                                    setTechnology("");
                                }}
                            >
                                All
                            </li>
                            {technologies.map((item) => {
                                console.log(item, technology);
                                return (
                                    <li
                                        className={`${
                                            technology === item
                                                ? "bg-gray-800"
                                                : "bg-[#ED7423]"
                                        } text-white rounded-[3em] px-3 pt-1 mb-1 mr-1 transition duration-150 ease-in-out capitalize cursor-pointer`}
                                        onClick={() => {
                                            updateSearchData({
                                                ...searchData,
                                                technology: item,
                                                page: 1,
                                                limit: 12,
                                            });
                                            setTechnology(item);
                                        }}
                                    >
                                        {item.replace(/-/g, " ")}
                                    </li>
                                );
                            })}
                        </ul>
                        {loading ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-y-6 sm:gap-6 pt-5 pb-10">
                                {Array.from({
                                    length: searchData.limit,
                                }).map((_, i) => {
                                    return (
                                        <SkeletonLoader key={i} type="events" />
                                    );
                                })}
                            </div>
                        ) : data.length < 1 ? (
                            <div className="text-center py-24">
                                <img
                                    src="/empty.png"
                                    alt="empty"
                                    className="w-52 mx-auto my-5 opacity-60"
                                />
                                <p className="text-xl text-gray-500">
                                    {searchData.keyword === "" ? (
                                        <>
                                            No members available with that
                                            request
                                        </>
                                    ) : (
                                        <>
                                            No members found with the keyword{" "}
                                            <b>{searchData.keyword}</b>
                                        </>
                                    )}
                                </p>
                            </div>
                        ) : (
                            <>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-y-6 sm:gap-6 pt-5 pb-10">
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
                                    <div className="my-5 text-center">
                                        <Pagination
                                            paginationData={paginationData}
                                            search={searchData}
                                            updateSearch={updateSearchData}
                                            setLoading={setLoading}
                                        />
                                    </div>
                                )}
                            </>
                        )}
                    </div>

                    <div className="hidden lg:block w-3/12 pt-10 pl-10">
                        <Fade>
                            <InputForm
                                type="text"
                                name="keyword"
                                label={`Search member`}
                                data={{ ...searchData, page: 1, limit: 12 }}
                                updateData={updateSearchData}
                            />
                        </Fade>

                        <div className="p-5 shadow-lg rounded-lg my-5">
                            <h3 className="border-b pb-2 text-xl font-bold">
                                CATEGORIES
                            </h3>
                            <ul className="font-manjari space-y-2 my-5">
                                <li
                                    className={`${
                                        category === ""
                                            ? "bg-gray-800"
                                            : "bg-[#ED7423]"
                                    } rounded-[3em] text-white w-fit px-3 pt-1 mb-1 mr-1 transition duration-150 ease-in-out capitalize cursor-pointer`}
                                    onClick={() => {
                                        updateSearchData({
                                            ...searchData,
                                            subscription_category: "",
                                            page: 1,
                                            limit: 12,
                                        });
                                        setCategory("");
                                    }}
                                >
                                    All
                                </li>
                                {categories.map((item) => {
                                    return (
                                        <li
                                            className={`${
                                                category === item
                                                    ? "bg-gray-800"
                                                    : "bg-[#ED7423]"
                                            } rounded-[3em] text-white w-fit px-3 pt-1 mb-1 mr-1 transition duration-150 ease-in-out capitalize cursor-pointer`}
                                            onClick={() => {
                                                updateSearchData({
                                                    ...searchData,
                                                    subscription_category: item,
                                                    page: 1,
                                                    limit: 12,
                                                });
                                                setCategory(item);
                                            }}
                                        >
                                            {item.replace(/-/g, " ")}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </Page>
    );
};
