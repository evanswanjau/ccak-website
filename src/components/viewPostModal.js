import React, { useState, useEffect, useRef } from "react";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { simpleDate } from "../helpers/date";
import {
  ChatBubbleLeftEllipsisIcon,
  HeartIcon as HeartIconOutline,
} from "@heroicons/react/24/outline";

const allcomments = [
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
  {
    id: 2,
    text: "Thanks for sharing!",
    date: "8/3/2023",
    likes: 10,
    replies: 2,
    username: "Burn User2",
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

export const ViewPostModal = ({
  onClose,
  post: {
    id,
    logo,
    name,
    post,
    image,
    comments,
    likes,
    created_by,
    created_at,
  },
}) => {
  const [favourite, setFavourite] = useState(true);

  const submitPost = async () => {
    console.log("first");
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
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <div className="flex justify-between mt-7">
          <div className="flex items-center space-x-2">
            <img
              src={logo || `/logos/profile.png`}
              alt="member logo"
              className="w-7 h-7 rounded-full"
              git
            />
            <h3 className="font-semibold text-xl text-black capitalize">
              {name || "user1"}
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
                className="rounded-lg my-2 w-full p-1 px-4 "
              />
            )}
            <p className="rounded-lg w-full px-4 ">{post}</p>

            <div className="flex gap-1 justify-start items-start bg-gray-200 w-full px-2">
              <div className="flex space-x-1 w-fit justify-center items-center ">
                <ChatBubbleLeftEllipsisIcon className="w-4 h-4 flex justify-center items-center cursor-pointer" />
                <span className="flex justify-center items-center">
                  {likes}
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
                {allcomments.map((comment) => (
                  <div key={comment.id} className="flex gap-1 flex-col pr-2">
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
            </div>

            {/*  */}
            {/*  */}
            <button
              type="button"
              disabled={false}
              className={`w-full mt-3 tracking-widest bg-[#EC7422] text-white pt-1 pb-1 px-6 hover:bg-[#ce621b] hover:text-white rounded-md transition duration-300 ease-in-out`}
              onClick={() => {
                submitPost();
              }}
            >
              Add Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
