import React, { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { formatDistanceToNow } from "date-fns";
import {
    ChatBubbleLeftEllipsisIcon,
    ShareIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/20/solid";
import { ButtonLoader } from "../../components/btnLoader";
import { ErrorMessage } from "../forms/error";
import { apiRequest, submitData } from "../../api/member-api-calls";

export const ViewPostModal = ({
    post,
    isViewPostModalOpen,
    setIsViewPostModalOpen,
    getSocialPosts,
    member,
}) => {
    const [data, setData] = useState({
        comment: "",
    });
    const [error, setError] = useState(false);
    const [btnLoading, setBtnLoading] = useState(false);
    const [comments, setComments] = useState([]);

    const modalClasses = isViewPostModalOpen ? "block" : "hidden";

    const { enqueueSnackbar } = useSnackbar();

    const getComments = () => {
        apiRequest(
            "get",
            "comments/socialpost/" + post.id,
            null,
            null,
            setComments
        );
    };

    const createComment = () => {
        setBtnLoading(true);
        submitData(
            "comment",
            {
                comment: data.comment,
                socialpost: post.id,
            },
            null,
            setError,
            enqueueSnackbar,
            null,
            setBtnLoading,
            "Comment created successfully!"
        ).finally(() => {
            setData({ ...data, comment: "" });
            getComments();
            getSocialPosts();
        });
    };

    const deleteComment = (id) => {
        apiRequest(
            "post",
            "comment/delete/" + id,
            enqueueSnackbar,
            "Comment deleted successfully!"
        ).finally(() => {
            getComments();
        });
    };

    useEffect(() => {
        getComments();
    }, []); // eslint-disable-line

    const disabled = data.comment === "";

    return (
        <div className={`fixed inset-0 overflow-y-auto ${modalClasses} z-50`}>
            <div className="flex items-center justify-center min-h-screen">
                <div className="fixed inset-0 bg-black opacity-50"></div>
                <div className="relative bg-white rounded-lg w-full md:6/12 lg:w-5/12 m-5">
                    <div className="flex flex-row p-4 justify-between items-center shadow-sm">
                        <h2 className="text-xl font-semibold">Post</h2>
                        <button
                            onClick={() => setIsViewPostModalOpen(false)}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            <XMarkIcon className="w-6" />
                        </button>
                    </div>
                    <div className="p-4">
                        {error && (
                            <ErrorMessage error={error} setError={setError} />
                        )}

                        <div className="flex items-center space-x-4 ">
                            <img
                                src={`${process.env.REACT_APP_IMAGEKIT_URL}members/${post.logo}`}
                                alt="member logo"
                                className="h-12 w-auto"
                            />
                            <div>
                                <p className="capitalize text-lg font-semibold">
                                    {post.author}
                                    <br />
                                    <span className="capitalize text-sm text-gray-600 font-semibold">
                                        {post.company}
                                    </span>
                                </p>{" "}
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <p className="text-xs text-gray-600">
                                Posted {formatDistanceToNow(post.created_at)}{" "}
                                ago
                            </p>
                        </div>

                        <div className="max-h-[60vh] overflow-y-auto">
                            <div className="m-3 rounded-lg">
                                <p className="rounded-lg w-full">{post.post}</p>
                                {post.image !== "" && (
                                    <img
                                        src={post.image}
                                        alt="post"
                                        className="rounded-lg my-3 w-full"
                                    />
                                )}
                                <div className="flex justify-between">
                                    <div className="flex gap-2 justify-center items-center">
                                        <div className="flex space-x-2 w-fit justify-center items-center">
                                            <ChatBubbleLeftEllipsisIcon className="w-6 text-black cursor-pointer" />
                                            <span className="flex items-center justify-center">
                                                {comments.length}
                                            </span>
                                        </div>
                                        {/* <Likes
                                    id={data.id}
                                    post={data.post}
                                    likes={data.likes}
                                    member={member}
                                    setMember={setMember}
                                /> */}
                                    </div>
                                    <div className="flex space-x-2 w-full justify-end">
                                        <ShareIcon
                                            className="w-6 -mt-1 cursor-pointer"
                                            onClick={() => {
                                                // setSelectedPost(data);
                                                // setIsSharePostModalOpen(true);
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="my-10">
                                <div className="flex flex-1 justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 my-5 mx-3">
                                    <div className="flex w-full flex-col ">
                                        {comments < 1 ? (
                                            <p className="text-gray-400">
                                                No new comments at the moment.
                                            </p>
                                        ) : (
                                            comments.map((comment) => {
                                                return (
                                                    <div
                                                        key={comment.id}
                                                        className="bg-gray-200 my-1 rounded-lg p-3"
                                                    >
                                                        <span className="flex justify-between items-start">
                                                            <p className="flex-1">
                                                                {
                                                                    comment.comment
                                                                }
                                                            </p>
                                                            {member.id ===
                                                                comment.created_by && (
                                                                <span
                                                                    className="flex text-sm"
                                                                    onClick={() =>
                                                                        deleteComment(
                                                                            comment.id
                                                                        )
                                                                    }
                                                                >
                                                                    <TrashIcon className="w-4 text-xs text-red-600 cursor-pointer" />
                                                                </span>
                                                            )}
                                                        </span>
                                                        <span className="flex justify-between">
                                                            <p className="font-normal capitalize text-xs text-gray-400">
                                                                by{" "}
                                                                {comment.author}
                                                            </p>
                                                            <p className="text-xs text-gray-400">
                                                                Posted{" "}
                                                                {formatDistanceToNow(
                                                                    comment.created_at
                                                                )}{" "}
                                                                ago
                                                            </p>
                                                        </span>
                                                    </div>
                                                );
                                            })
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {member.id && (
                        <div className="p-4">
                            <div className="w-full">
                                <textarea
                                    rows="2"
                                    placeholder="Start writing your comment..."
                                    className="border-2 font-manjari text-gray-900 rounded-lg focus:outline-none focus:ring-teal-900 focus:border-teal-900 block w-full p-2 pt-3"
                                    value={data.comment}
                                    maxLength="480"
                                    onChange={(event) => {
                                        setData({
                                            ...data,
                                            comment: event.target.value,
                                        });
                                    }}
                                ></textarea>
                            </div>
                            <button
                                type="button"
                                disabled={disabled}
                                className={`mt-3 mb-2 ${
                                    disabled || btnLoading
                                        ? "bg-gray-200"
                                        : "bg-teal-800 hover:bg-teal-900"
                                } text-white py-2 px-6 rounded-md transition duration-300 ease-in-out`}
                                onClick={() => {
                                    createComment();
                                }}
                            >
                                {btnLoading ? <ButtonLoader /> : "POST COMMENT"}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
