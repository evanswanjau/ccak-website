import React, { useState, useEffect, useRef } from "react";
import { ButtonLoader } from "./btnLoader";
import {
  ChatBubbleLeftEllipsisIcon,
  HeartIcon as HeartIconOutline,
} from "@heroicons/react/24/outline";
import {
  HeartIcon as HeartIconSolid,
  TrashIcon,
} from "@heroicons/react/24/solid";

import { simpleDate, simpleDateTime } from "../helpers/date";
import {
  addSocialPostComment,
  deleteSocialPostComment,
  getCommentsForPost,
  getMemberProfile,
} from "../api/api-calls";

export const AddCommentModal = ({
  onClose,
  post: { id, post, likes, image, comments, created_at, userId, author },
}) => {
  const [favourite, setFavourite] = useState(true);
  const [disabled, setDisabled] = useState(true);
  const [btnLoading, setBtnLoading] = useState(false);

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const [newComment, setNewComment] = useState("");
  const [allcomments, setAllComments] = useState([]);
  const [memberData, setMemberData] = useState(null);

  const handleDeleteComment = async (commentId) => {
    try {
      await deleteSocialPostComment(commentId, setSuccess, setError);

      const updatedComments = allcomments.filter(
        (comment) => comment.id !== commentId
      );
      setAllComments(updatedComments);
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  useEffect(() => {
    const fetchMemberProfile = async () => {
      try {
        const data = await getMemberProfile();
        setMemberData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMemberProfile();
  }, []);

  const handleInputChange = (e) => {
    setNewComment(e.target.value);

    if (e.target.value !== "") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const submitComment = () => {
    const newCommentData = {
      comment: newComment,
      created_by: userId,
      socialpost: id,
      likes: 0,
      author: `${memberData?.first_name} ${memberData?.last_name}`,
      status: memberData?.status,
      company: memberData?.company,
    };

    addSocialPostComment(newCommentData, setSuccess, setError)
      .then((res) => {
        if (res && res.data) {
          const addedComment = res.data;
          const updatedComments = [addedComment, ...allcomments];
          setAllComments(updatedComments);
          setNewComment("");
          setDisabled(true);
        } else {
          console.error("Invalid response format:", res);
        }
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const commentsData = await getCommentsForPost(id);
        setAllComments(commentsData);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

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

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-10">
      <div className="modal-overlay fixed top-0 left-0 w-full h-full bg-gray-700 opacity-75"></div>
      <div
        ref={modalRef}
        className="modal-content relative bg-white px-6 py-2 md:w-6/12 mx-auto rounded-lg shadow-lg z-20"
      >
        <div class="flex items-start justify-end mt-0 absolute right-3">
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            data-modal-hide="staticModal"
            onClick={onClose}
          >
            <svg
              class="w-5 h-5"
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
          <div className="flex items-center space-x-2">
            <img
              src={`/logos/profile.png`}
              alt="member logo"
              className="w-7 h-7 rounded-full"
              git
            />
            <h3 className="font-nromal capitalize text-xl text-gray-700">
              {author}
            </h3>
          </div>
          <div className="flex items-center gap-1">
            {simpleDate(created_at)}
          </div>
        </div>

        <div className="max-h-[66vh] overflow-y-scroll pr-1">
          <div className="my-3 border rounded-lg">
            {image !== "" && (
              <img
                src={image}
                alt="post"
                className="rounded-lg my-2 w-full p-1 px-2 "
              />
            )}
            <p className="rounded-lg w-full px-4 ">{post}</p>

            <div className="flex gap-1 justify-start items-start bg-gray-200 w-full px-2">
              <div className="flex space-x-1 w-fit justify-center items-center ">
                <ChatBubbleLeftEllipsisIcon className="w-4 h-4 flex justify-center items-center cursor-pointer" />
                <span className="flex items-center justify-center">
                  {allcomments?.length < 1 ? 0 : allcomments?.length}
                </span>
              </div>
              <div className="flex space-x-1 w-fit justify-center items-center">
                {favourite ? (
                  <HeartIconSolid
                    className="w-4 h-4 text-red-600 cursor-pointer"
                    onClick={() => {
                      setFavourite(false);
                    }}
                  />
                ) : (
                  <HeartIconOutline
                    className="w-4 h-4 text-black cursor-pointer"
                    onClick={() => {
                      setFavourite(true);
                    }}
                  />
                )}
                <span className="flex justify-center items-center">
                  {likes}
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-md border bg-gray-000">
            <div className="flex flex-1 justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 my-5 mx-3">
              <div className="flex w-full flex-col ">
                {allcomments < 1 ? (
                  <span className="px-1">No comments yet!</span>
                ) : (
                  allcomments.map((comment) => {
                    return (
                      <div
                        key={comment.id}
                        className="flex gap-0 flex-col pr-2"
                      >
                        <span className="flex justify-between">
                          <span className="font-semibold">
                            <span className="font-normal capitalize text-sm">
                              by {author}
                            </span>
                          </span>
                          <span className="text-sm text-gray-600">
                            {simpleDateTime(comment.created_at)}
                          </span>
                        </span>
                        <span className="flex justify-between">
                          <span className="flex-1"> {comment.comment}</span>
                          {userId === comment.created_by && (
                            <span
                              className="flex text-sm justify-center items-center gap-1"
                              onClick={() => handleDeleteComment(comment.id)}
                            >
                              <TrashIcon className="w-4 text-sm text-gray-700 cursor-pointer" />
                            </span>
                          )}
                        </span>

                        <hr />
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            {/*  */}
            {/*  */}

            <div className="p-1 flex-1 w-full rounded-md flex items-center gap-1 bg-gray-200 bottom-0 sticky">
              <input
                type="text"
                value={newComment}
                onChange={handleInputChange}
                placeholder="Enter comment..."
                className="border rounded-md p-0.5 h-9 flex-1 border-gray-500 border-opacity-50 focus:outline-none"
                maxLength={150}
                aria-label="post-text-input"
              />

              <button
                type="button"
                disabled={disabled}
                className={`w-fit tracking-widest ${
                  disabled || btnLoading
                    ? "bg-gray-200"
                    : "bg-[#329E49] hover:bg-[#3ab554]"
                } bg-[#EC7422] text-white py-2 px-6 hover:bg-[#ce621b] hover:text-white rounded-md transition duration-300 ease-in-out`}
                onClick={() => {
                  submitComment();
                }}
              >
                {btnLoading ? <ButtonLoader /> : "Submit"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
