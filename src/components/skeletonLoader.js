import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const SkeletonLoader = ({ type }) => {
    return (
        <>
            {type === "news" && (
                <div>
                    <Skeleton height={"150px"} />
                    <div className="my-1"></div>
                    <Skeleton width={"120px"} />
                    <div className="my-1"></div>
                    <Skeleton count={2} />
                </div>
            )}

            {type === "event" && (
                <div>
                    <Skeleton height={"220px"} />
                    <div className="my-1"></div>
                    <Skeleton width={"120px"} />
                </div>
            )}

            {type === "publications" && (
                <div className="flex space-x-4">
                    <div className="w-4/12">
                        <Skeleton width={"100%"} height="150px" />
                    </div>
                    <div className="w-8/12">
                        {" "}
                        <Skeleton width={"100%"} />
                        <Skeleton
                            width={"100%"}
                            height="55px"
                            className="mb-2"
                        />
                        <Skeleton width={"100%"} height="55px" />
                    </div>
                </div>
            )}

            {type === "careers" && (
                <div className="text-left">
                    <Skeleton />
                    <Skeleton width="150px" />
                    <div className="my-1"></div>
                    <Skeleton height={"120px"} />
                </div>
            )}
        </>
    );
};
