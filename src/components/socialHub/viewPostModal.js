import React, { useState, useEffect, useRef } from "react";
import { ButtonLoader } from "../btnLoader";
import {
    ChatBubbleLeftEllipsisIcon,
    HeartIcon as HeartIconOutline,
} from "@heroicons/react/24/outline";
import {
    HeartIcon as HeartIconSolid,
    TrashIcon,
} from "@heroicons/react/24/solid";

import { simpleDate, simpleDateTime } from "../../helpers/date";
import {
    addSocialPostComment,
    deleteSocialPostComment,
    getCommentsForPost,
    getMemberProfile,
} from "../../api/api-calls";
import { Likes } from "./likes";
import { fetchComments, submitComment } from "../../api/member-api-calls";
import { TextArea } from "../forms/text-area";

export const ViewPostModal = ({
    onClose,
    post: { id, post, likes, image, created_at, userId, logo, author, company },
    member,
    setMember,
}) => {
    const [btnLoading, setBtnLoading] = useState(false);
    const [comments, setComments] = useState([]);
    const [newComment, updateNewComment] = useState({
        comment: "",
        socialpost: id,
    });

    // const handleDeleteComment = async (commentId) => {
    //     try {
    //         await deleteSocialPostComment(commentId, setSuccess, setError);

    //         const updatedComments = allcomments.filter(
    //             (comment) => comment.id !== commentId
    //         );
    //         setAllComments(updatedComments);
    //     } catch (error) {
    //         console.error("Error deleting comment:", error);
    //     }
    // };

    const handleSubmitComment = () => {
        submitComment(newComment).then(() => {
            updateNewComment({ comment: "", socialpost: id });
            fetchComments(id, setComments);
        });
    };

    useEffect(() => {
        fetchComments(id, setComments);
    }, []); //eslint-disable-line

    const modalRef = useRef();

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                onClose();
            }
        };
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [onClose]);

    useEffect(() => {
        const disableScroll = () => {
            document.body.style.overflow = "hidden";
        };
        const enableScroll = () => {
            document.body.style.overflow = "auto";
        };
        disableScroll();

        return () => {
            enableScroll();
        };
    }, []);

    let disabled = newComment.comment === "";

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
            <div className="modal-overlay fixed top-0 left-0 w-full h-full bg-gray-700 opacity-75"></div>
            <div
                ref={modalRef}
                className="modal-content relative bg-white px-6 py-2 md:w-5/12 mx-auto rounded-lg shadow-lg z-20"
            >
                <div className="flex items-start justify-end mt-0 absolute right-3">
                    <button
                        type="button"
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                        data-modal-hide="staticModal"
                        onClick={onClose}
                    >
                        <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </div>

                <div className="flex justify-between mt-7 pb-1">
                    <div className="flex items-end space-x-6">
                        <img
                            src={`${process.env.REACT_APP_IMAGEKIT_URL}members/${logo}`}
                            alt="member logo"
                            className="h-9 w-auto"
                        />
                        <p className="capitalize font-semibold">
                            {author}, {company}
                        </p>
                    </div>
                    <p className="pt-5">{simpleDate(created_at)}</p>
                </div>

                <div className="max-h-[60vh] overflow-y-auto">
                    <div className="m-3 border rounded-lg">
                        <p className="rounded-lg w-full p-3">{post}</p>
                        {image !== "" && (
                            <img
                                src={image}
                                alt="post"
                                className="rounded-lg my-3 w-full p-3"
                            />
                        )}

                        <div className="flex space-x-4 p-3">
                            <div className="flex space-x-1 w-fit justify-center items-center ">
                                <ChatBubbleLeftEllipsisIcon className="w-6 flex justify-center items-center cursor-pointer" />
                                <span className="flex items-center justify-center">
                                    {comments.length}
                                </span>
                            </div>
                            <Likes
                                id={id}
                                post={post}
                                likes={likes}
                                member={member}
                                setMember={setMember}
                            />
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
                                                className="flex gap-0 flex-col pr-2 bg-gray-100 my-2 rounded-lg p-3"
                                            >
                                                <span className="flex justify-between">
                                                    <p className="flex-1">
                                                        {" "}
                                                        {comment.comment}
                                                    </p>
                                                    {userId ===
                                                        comment.created_by && (
                                                        <span
                                                            className="flex text-sm justify-center items-center gap-1"
                                                            // onClick={() =>
                                                            //     handleDeleteComment(
                                                            //         comment.id
                                                            //     )
                                                            // }
                                                        >
                                                            <TrashIcon className="w-4 text-sm text-gray-700 cursor-pointer" />
                                                        </span>
                                                    )}
                                                </span>
                                                <span className="flex justify-between">
                                                    <span className="font-semibold">
                                                        <p className="font-normal capitalize text-sm text-gray-400">
                                                            by {author}
                                                        </p>
                                                    </span>
                                                    <p className="text-sm text-gray-400">
                                                        {simpleDateTime(
                                                            comment.created_at
                                                        )}
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
                {member.id !== "" && (
                    <div className="">
                        <div className="w-full">
                            <TextArea
                                type="text"
                                name="comment"
                                label="Write your comment here"
                                required={true}
                                data={newComment}
                                updateData={updateNewComment}
                            />
                        </div>

                        <button
                            type="button"
                            disabled={disabled}
                            className={`w-full mt-3 mb-2 tracking-widest ${
                                disabled || btnLoading
                                    ? "bg-gray-200"
                                    : "bg-[#329E49] hover:bg-[#3ab554]"
                            } text-white py-2 px-6 rounded-md transition duration-300 ease-in-out`}
                            onClick={() => {
                                handleSubmitComment();
                            }}
                        >
                            {btnLoading ? <ButtonLoader /> : "POST COMMENT"}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
