import React, { useState, useEffect, useRef } from "react";
import { ButtonLoader } from "./btnLoader";
import { XCircleIcon, CloudArrowUpIcon } from "@heroicons/react/24/outline";

export const AddPostModal = ({ onClose }) => {
  const [postData, setPostData] = useState({
    postText: "",
    postImgUrl: "www.testurl.com/v2/123",
    postUserId: 1,
  });

  const [disabled, setDisabled] = useState(true);

  const [btnLoading, setBtnLoading] = useState(false);

  const handlePostTextChange = (e) => {
    setPostData((prevData) => ({
      ...prevData,
      postText: e.target.value,
    }));

    if (e.target.value !== "") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
  };

  const submitPost = () => {
    // console.log(postData);
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
        className="modal-content relative bg-white p-6 md:w-6/12 mx-auto rounded-lg shadow-lg z-20"
      >
        <div className="mb-4 flex items-center flex-row">
          <h1 className="text-2xl font-semibold flex-1 flex items-center justify-center opacity-80">
            Add Post
          </h1>
          <button
            className="absolute top-2 right-5 flex items-center justify-center"
            onClick={onClose}
          >
            <XCircleIcon className="h-10 w-10 text-[#1f6e30]" />
          </button>
        </div>

        <div className="p-2 rounded-md">
          <textarea
            type="text"
            value={postData.postText}
            onChange={handlePostTextChange}
            placeholder="Enter Post Text"
            className="border-2 rounded-md p-1 flex-1 w-full border-gray-500 border-opacity-50 focus:outline-none"
            maxLength={200}
            aria-label="post-text-input"
          />

          <div className="mt-2 flex justify-center items-center border-2 rounded-md p-1 flex-1 w-full min-h-[20vh] border-gray-500 border-opacity-50  focus:outline-none">
            <label
              htmlFor="uploadImage"
              className="mt-2 cursor-pointer flex items-center flex-col"
            >
              <CloudArrowUpIcon className="h-10 w-10 text-gray-500 mr-2" />
              Upload Image
            </label>
            <input
              id="uploadImage"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>
          <button
            type="button"
            disabled={disabled}
            className={`w-full mt-2 tracking-widest ${
              disabled || btnLoading
                ? "bg-gray-200"
                : "bg-[#329E49] hover:bg-[#3ab554]"
            }  bg-[#EC7422] text-white pt-2 pb-2 px-6 hover:bg-[#ce621b] hover:text-white rounded-md transition duration-300 ease-in-out`}
            onClick={() => {
              submitPost();
            }}
          >
            {btnLoading ? <ButtonLoader /> : "SUBMIT"}
          </button>
        </div>
      </div>
    </div>
  );
};
