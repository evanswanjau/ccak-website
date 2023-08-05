import React, { useState, useEffect, useRef } from "react";
import { ButtonLoader } from "./btnLoader";
import { XCircleIcon } from "@heroicons/react/24/outline";
import {
  ChatBubbleLeftEllipsisIcon,
  HeartIcon as HeartIconOutline,
  ShareIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";

const fetchedComments = [
  {
    id: 1,
    text: "Great post!",
    date: "8/4/2023",
    likes: 15,
    replies: 3,
    username: "Burn User3",
  },
  {
    id: 2,
    text: "Thanks for sharing!",
    date: "8/3/2023",
    likes: 10,
    replies: 2,
    username: "Burn User2",
  },
];

export const AddCommentModal = ({
  onClose,
  post: { post, likes, name, logo, image, comments },
}) => {
  const [favourite, setFavourite] = useState(true);
  const [disabled, setDisabled] = useState(true);
  const [btnLoading, setBtnLoading] = useState(false);

  console.log({ fetchedComments });

  const [newComment, setNewComment] = useState("");
  const [allcomments, setAllComments] = useState(fetchedComments);
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
      id: allcomments.length + 1,
      username: "John Doe",
      date: new Date().toLocaleDateString("en-US"),
      text: newComment,
      likes: 0,
    };

    setAllComments((prevComments) => [...prevComments, newCommentData]);
    setNewComment("");
    setDisabled(true);
  };

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
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center px-5 z-10">
      <div className="modal-overlay fixed top-0 left-0 w-full h-full bg-gray-700 opacity-75"></div>
      <div
        ref={modalRef}
        className="relative modal-content flex flex-col justify-center items-center bg-white top-5 p-3 md:w-6/12 max-h-[80vh] overflow-hidden rounded-lg shadow-lg z-20"
      >
        <div className="py-1 flex items-center w-full rounded-t-md mt-2">
          <div className="flex flex-1 w-full ml-2 ">
            <img
              src={`/logos/${logo}`}
              alt="member logo"
              className="w-10 h-10 rounded-sm"
              git
            />
            <h1 className="text-md font-bold ml-2 flex items-center justify-center opacity-80 capitalize">
              {name}
            </h1>
          </div>

          <button
            className="absolute top-2 right-5 flex items-center justify-center"
            onClick={onClose}
          >
            <XCircleIcon className="h-10 w-10 text-[#1f6e30]" />
          </button>
        </div>

        <p className="bg-gray-200 px-1 sticky rounded-t-md p-2 top-5">{post}</p>

        <div className="flex justify-between w-full px-2 bg-gray-200 mb-5">
          <div className="flex flex-1 gap-1">
            <div className="flex w-full justify-left ">
              <ChatBubbleLeftEllipsisIcon className="w-6 -mt-1" />
              <p>{comments}</p>
            </div>
            <div className="flex w-full justify-center">
              {favourite ? (
                <HeartIconSolid
                  className="w-6 text-red-600 cursor-pointer"
                  onClick={() => {
                    setFavourite(false);
                  }}
                />
              ) : (
                <HeartIconOutline
                  className="w-6 text-black cursor-pointer"
                  onClick={() => {
                    setFavourite(true);
                  }}
                />
              )}
              <p>{likes}</p>
            </div>
          </div>

          <div className="flex w-full justify-end">
            <ShareIcon className="w-6 -mt-1" />
          </div>
        </div>

        <div className="flex w-full flex-col max-h-[66vh] overflow-y-scroll">
          {allcomments.map((comment) => (
            <div key={comment.id} className="flex gap-1 flex-col">
              <span className="flex justify-between">
                <span className="font-semibold">{comment.username}</span>
                <span className="text-sm">{comment.date}</span>
              </span>
              <span className="flex justify-between">
                <span className="flex-1"> {comment.text}</span>
                <span className="flex text-sm justify-center items-center gap-1">
                  <HeartIconSolid className="w-4 text-sm text-gray-300 cursor-pointer" />
                  {comment.likes}
                </span>
              </span>

              <hr />
            </div>
          ))}
        </div>

        <div className="p-1 flex-1 w-full rounded-md flex items-center gap-1 bg-gray-200 relative bottom-0">
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
            }  text-white flex justify-center font-medium rounded-lg text-sm px-5 py-1 my-1 transition duration-700 ease-in-out`}
            onClick={() => {
              submitComment();
            }}
          >
            {btnLoading ? <ButtonLoader /> : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};
