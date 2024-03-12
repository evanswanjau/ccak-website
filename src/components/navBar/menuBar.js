import React, { useState, useEffect } from "react";
import { searchPosts } from "../../api/api-calls";
import { HiOutlineSearch } from "react-icons/hi";

const links = [
    {
        link: "/",
        name: "HOME",
    },
    {
        link: "#",
        name: "WHO WE ARE",
    },
    {
        link: "#",
        name: "WHAT WE DO",
    },
    {
        link: "#",
        name: "GET INVOLVED",
    },
    {
        link: "#",
        name: "MEMBERSHIP",
    },
    {
        link: "#",
        name: "RESOURCE CENTRE",
    },
    {
        link: "#",
        name: "MEDIA CENTRE",
    },
];

export const MenuBar = ({ setDropDown }) => {
    const [data, updateData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchData, updateSearchData] = useState({
        keyword: "",
        table: "posts",
        category: "",
        technology: "",
        project_status: "",
        access: "public",
        status: "published",
        page: 1,
        limit: 10,
        ip_address: "",
        created_by: 0,
    });
    const [isFocused, setIsFocused] = useState(false);

    const getUrl = (data) => {
        let page = "";
        if (
            data.category === "careers" ||
            data.category === "consultancy" ||
            data.category === "funding-opportunities"
        )
            page = "get-involved";

        if (
            data.category === "press-release" ||
            data.category === "news" ||
            data.category === "events" ||
            data.category === "photo-gallery" ||
            data.category === "blog"
        )
            page = "media-centre";

        if (data.category === "projects") page = "what-we-do";

        if (data.category === "photo-gallery") page = "photo-gallery";

        return `/${page}/${data.category}/read-more/${data.id}/${data.title
            .replace(/ /g, "-")
            .replace("'", "")
            .toLowerCase()}`;
    };

    useEffect(() => {
        if (searchData.keyword.length > 0) {
            setLoading(true);
            searchPosts(searchData, updateData, setLoading).finally(() => {
                setLoading(false);
            });
        } else {
            updateData([]);
        }
    }, [searchData]); // eslint-disable-line

    return (
        <div className="flex flex-row pl-40 px-8 font-poppins font-semibold tracking-wider justify-between items-center w-100 text-gray-600 bg-[#329E49]">
            <div className="lg:w-10/12">
                <ul className="flex flex-row">
                    {links.map((link) =>
                        link.link === "#" ? (
                            <li
                                key={link.name}
                                className="pt-5 pb-4 px-5 cursor-pointer truncate text-gray-100 hover:text-white hover:bg-[#ED7423]"
                                onMouseEnter={() => {
                                    setDropDown({
                                        show: true,
                                        category: link.name,
                                    });
                                }}
                            >
                                {link.name}
                            </li>
                        ) : (
                            <a
                                href={link.link}
                                key={link.name}
                                className="pt-4 pb-3 px-5 font-poppins font-semibold tracking-wider cursor-pointer truncate text-gray-100 hover:text-white hover:bg-[#ED7423]"
                                onMouseEnter={() => {
                                    setDropDown({
                                        show: false,
                                        category: "",
                                    });
                                }}
                            >
                                {link.name}
                            </a>
                        )
                    )}
                </ul>
            </div>
            <div
                className="flex justify-end w-2/12"
                onMouseLeave={() => {
                    updateSearchData({ ...searchData, keyword: "" });
                }}
            >
                <div className="relative">
                    <input
                        className={`pl-10 w-${
                            isFocused ? "full" : "32"
                        } placeholder-gray-300 bg-[#2e8641] text-white font-manjari outline-none rounded-md pt-3 pb-1 px-3 focus:outline-none`}
                        type="text"
                        placeholder={`Search`}
                        value={searchData.keyword}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        onChange={(event) => {
                            updateSearchData({
                                ...searchData,
                                keyword: event.target.value,
                            });
                        }}
                    />
                    <HiOutlineSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white" />
                </div>

                <div className="absolute mt-12 right-[1em] bg-white shadow-lg  max-h-[calc(100vh-10rem)] lg:w-3/12 rounded-lg">
                    {loading ? (
                        <p className="p-3 text-sm text-gray-400">
                            Searching ...
                        </p>
                    ) : (
                        <>
                            {data.length > 0 && searchData.keyword !== "" && (
                                <>
                                    <p className="p-3 text-sm text-gray-400">
                                        Search results for{" "}
                                        <b className="text-black">
                                            {searchData.keyword}
                                        </b>
                                    </p>
                                    <div className="overflow-y-scroll max-h-[calc(100vh-13rem)]">
                                        {data.map((item, i) => {
                                            return (
                                                <a href={getUrl(item)}>
                                                    <div className="border-t p-2 cursor-pointer hover:bg-gray-100 transition duration-200 ease-in-out">
                                                        <h1 className="text-sm text-gray-800 font-semibold">
                                                            {item.title}
                                                        </h1>
                                                        <p className="text-xs line-clamp-1">
                                                            {item.excerpt}
                                                        </p>
                                                    </div>
                                                </a>
                                            );
                                        })}
                                    </div>
                                </>
                            )}

                            {data.length < 1 && searchData.keyword !== "" && (
                                <p className="p-3 text-sm text-gray-400">
                                    No results for{" "}
                                    <b className="text-black">
                                        {searchData.keyword}
                                    </b>
                                </p>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
