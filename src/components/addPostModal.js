import React, { useState, useEffect, useRef } from "react";
import { IKImage } from "imagekitio-react";
import { BsImage } from "react-icons/bs";
import { ImageUpload } from "./forms/uploadImage";
import { TextArea } from "./forms/text-area";

import { addSocialPost } from "../api/api-calls";

export const AddPostModal = ({ onClose }) => {
  const [postData, setPostData] = useState({
    postText: "",
    image: "",
  });
  const [error, setError] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [btnLoading, setBtnLoading] = useState(false);

  const submitPost = async () => {
    try {
      const newPostData = {
        post: postData.postText,
        image:
          postData.image == ""
            ? ""
            : process.env.REACT_APP_IMAGEKIT_URL +
              "socialpost/" +
              postData.image,
      };

      await addSocialPost(
        newPostData,
        (successMessage) => {
          window.location.reload();
          console.log(successMessage);
          onClose();
        },
        (errorMessage) => {
          console.error(errorMessage);
        }
      );

      setPostData({
        postText: "",
        image: "",
      });
    } catch (error) {
      console.error("An error occurred:", error);
    }
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
          <h1 className="font-semibold text-lg flex-1 flex items-center justify-center">
            Add Post
          </h1>

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
        </div>

        <div className="p-2 rounded-md">
          <TextArea
            type="text"
            name="postText"
            label="Enter post text here"
            required={true}
            data={postData}
            updateData={setPostData}
          />

          <div className="flex flex-1 justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 my-5 mx-3">
            <div className="w-2/12 flex justify-center items-center">
              {postData.image === "" ? (
                <BsImage className="text-[8.5em] mx-auto -mt-1 text-gray-600" />
              ) : (
                <IKImage
                  className="object-cover rounded-lg max-h-40"
                  urlEndpoint={process.env.REACT_APP_IMAGEKIT_URL}
                  path={"socialpost/" + postData.image}
                />
              )}
            </div>
            <div className="w-10/12">
              <ImageUpload
                data={postData}
                updateData={setPostData}
                setError={setError}
                folder="socialpost"
              />
            </div>
          </div>

          {/*  */}
          {/*  */}
          <button
            type="button"
            disabled={false}
            className={`w-full mt-2 tracking-widest bg-[#EC7422] text-white pt-2 pb-2 px-6 hover:bg-[#ce621b] hover:text-white rounded-md transition duration-300 ease-in-out`}
            onClick={() => {
              submitPost();
            }}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};
