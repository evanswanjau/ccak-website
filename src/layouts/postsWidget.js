import React, { useState, useEffect } from "react";
import { useSnackbar } from "notistack";
import { search } from "../api/api-calls";
import { SkeletonLoader } from "../components/skeletonLoader";
import { News } from "../components/news";
import { Event } from "../components/event";
import { Gallery } from "../components/gallery";
import { Career } from "../components/career";
import { Pagination } from "../components/pagination";

export const PostsWidget = ({
    category,
    searchData,
    updateSearchData,
    pagination = true,
}) => {
    const [loading, setLoading] = useState(true);
    const [data, updateData] = useState([]);
    const [paginationData, setPaginationData] = useState({});

    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        window.scrollTo(0, 0);
        search(
            "posts",
            searchData,
            updateData,
            setPaginationData,
            enqueueSnackbar,
            setLoading
        );
    }, [searchData]); // eslint-disable-line

    const getEmpty = () => {
        return (
            <div className="text-center py-24">
                <img
                    src="/empty.png"
                    alt="empty"
                    className="w-52 mx-auto my-5 opacity-60"
                />
                <p className="text-xl text-gray-500">
                    {searchData.keyword === "" ? (
                        <>No new posts at the moment</>
                    ) : (
                        <>
                            No results found with the keyword{" "}
                            <b>{searchData.keyword}</b>
                        </>
                    )}
                </p>
            </div>
        );
    };

    const getContent = (item) => {
        if (category === "events") return <Event key={item.id} data={item} />;
        if (
            category === "news" ||
            category === "blog" ||
            category === "press-release"
        )
            return <News key={item.id} data={item} />;
        if (category === "photo-gallery")
            return <Gallery key={item.id} data={item} />;

        if (
            category === "careers" ||
            category === "consultancy" ||
            category === "funding-opportunities"
        )
            return <Career key={item.id} data={item} />;
    };

    return (
        <div className="w-full">
            {loading ? (
                <div
                    className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${
                        searchData.limit === 4 ? 4 : 3
                    } gap-y-6 sm:gap-6 py-10`}
                >
                    {Array.from({ length: searchData.limit }).map((_, i) => {
                        return <SkeletonLoader key={i} type={category} />;
                    })}
                </div>
            ) : data.length < 1 ? (
                getEmpty()
            ) : (
                <>
                    <div
                        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${
                            searchData.limit === 4 ? 4 : 3
                        } gap-y-6 sm:gap-4 py-10`}
                    >
                        {data.map((item) => {
                            return getContent(item);
                        })}
                    </div>{" "}
                    {pagination && paginationData.count > searchData.limit && (
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
    );
};
