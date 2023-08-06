import React, { useEffect, useRef } from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

import { BsTwitter, BsFacebook, BsLinkedin } from "react-icons/bs";

export const SharePostModal = ({ onClose, post: { post, name } }) => {
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
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-10 px-5">
      <div className="modal-overlay fixed top-0 left-0 w-full h-full bg-gray-700 opacity-75"></div>
      <div
        ref={modalRef}
        className="modal-content relative flex flex-col items-center bg-white p-6 w-full md:w-6/12 mx-auto rounded-lg shadow-lg z-20 justify-center"
      >
        <div className="mb-4 flex items-center flex-row">
          <h1 className="text-xl font-bold flex-1 flex opacity-80">
            Share Post
          </h1>
          <button
            className="absolute top-2 right-5 flex items-center justify-center"
            onClick={onClose}
          >
            <XCircleIcon className="h-10 w-10 text-[#1f6e30]" />
          </button>
        </div>

        <div className="flex gap-4 w-fit border p-2 rounded-md">
          <FacebookShareButton
            children={
              <BsFacebook className="text-2xl text-[#3b5998] bg-gray-300 hover:bg-gray-400 transition-colors duration-300 rounded-full p-1 flex justify-center items-center h-12 w-12" />
            }
            url={window.location.href}
            hashtag="#ccak"
          />
          <TwitterShareButton
            children={
              <BsTwitter className="text-2xl text-[#1DA1F2]  bg-gray-300 hover:bg-gray-400 transition-colors duration-300 rounded-full p-1 flex justify-center items-center h-12 w-12" />
            }
            url={window.location.href}
            title={post}
            hashtag="#ccak"
          />
          <LinkedinShareButton
            children={
              <BsLinkedin className="text-2xl text-[#0E76A8]  bg-gray-300 hover:bg-gray-400 transition-colors duration-300 rounded-full p-1 flex justify-center items-center h-12 w-12" />
            }
            url={window.location.href}
            title={post}
          />
        </div>
      </div>
    </div>
  );
};
