import React, { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import {
    ChatBubbleLeftEllipsisIcon,
    ShareIcon,
} from "@heroicons/react/24/outline";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/20/solid";

import { BookMark } from "./bookmark";
import { Likes } from "./likes";
import { fetchComments } from "../../api/member-api-calls";

export const SocialHubPost = ({
    member,
    setMember,
    data,
    setIsSharePostModalOpen,
    setIsViewPostModalOpen,
    setSelectedPost,
}) => {
    const [error, setError] = useState(false);
    const [comments, setComments] = useState([]);

    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        fetchComments(data.id, setComments);
    }, []);

    const deletePost = () => {
        // TODO 1. POP POST FROM ARRAY
        enqueueSnackbar("Your post has been deleted", {
            variant: "error",
            anchorOrigin: {
                horizontal: "center",
                vertical: "bottom",
            },
            action: (
                <button
                    className="px-2 py-1 rounded bg-white text-black"
                    onClick={() => {
                        // TODO 2. RETURN OLD ARRAY
                    }}
                >
                    Undo
                </button>
            ),
        });
    };

    return (
        <div className="rounded-lg shadow-lg px-5 pt-5 pb-2 mb-2">
            <div className="flex justify-between">
                <div className="flex items-end space-x-6">
                    <img
                        src={`${process.env.REACT_APP_IMAGEKIT_URL}members/${data.logo}`}
                        alt="member logo"
                        className="h-9 w-auto"
                    />
                    <p className="capitalize text-xl font-semibold">
                        {data.author}, {data.company}
                    </p>
                </div>
                <div className="flex items-center space-x-4">
                    {member.id !== "" && (
                        <BookMark
                            member={member}
                            setMember={setMember}
                            id={data.id}
                        />
                    )}

                    {member.id === data.created_by && (
                        <>
                            {/* <PencilSquareIcon
                                className="h-6 w-5 text-black cursor-pointer hover:text-green-600 transition-all duration-300"
                                onClick={() =>
                                    onUpdateClick(
                                        logo,
                                        name,
                                        post,
                                        image,
                                        comments,
                                        likes
                                    )
                                }
                            /> */}
                            <TrashIcon
                                className="w-6 text-gray-600 hover:text-black cursor-pointer transition-all duration-300"
                                onClick={() => deletePost()}
                            />
                        </>
                    )}
                </div>
            </div>
            <div
                className="px-2 py-2 my-3 rounded-lg cursor-pointer"
                onClick={() => {
                    setSelectedPost(data);
                    setIsViewPostModalOpen(true);
                }}
            >
                <p className="rounded-lg w-full">{data.post}</p>
                {data.image !== "" && (
                    <img
                        src={data.image}
                        alt="post"
                        className="rounded-lg my-3 w-full"
                    />
                )}
            </div>
            <div className="flex justify-between">
                <div className="flex gap-2 justify-center items-center">
                    <div className="flex space-x-2 w-fit justify-center items-center">
                        <ChatBubbleLeftEllipsisIcon
                            className="w-6 text-black cursor-pointer"
                            onClick={() => {
                                if (member.id !== "") {
                                    setSelectedPost(data);
                                    setIsViewPostModalOpen(true);
                                }
                            }}
                        />
                        <span className="flex items-center justify-center">
                            {comments.length}
                        </span>
                    </div>
                    <Likes
                        id={data.id}
                        post={data.post}
                        likes={data.likes}
                        member={member}
                        setMember={setMember}
                    />
                </div>
                <div className="flex space-x-2 w-full justify-end">
                    <ShareIcon
                        className="w-6 -mt-1 cursor-pointer"
                        onClick={() => {
                            setSelectedPost(data);
                            setIsSharePostModalOpen(true);
                        }}
                    />
                </div>
            </div>
        </div>
    );
};
