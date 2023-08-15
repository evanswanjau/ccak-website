import React, { useState, useEffect, useRef } from "react";
import { ButtonLoader } from "./btnLoader";
import { XCircleIcon } from "@heroicons/react/24/outline";

import { IKImage } from "imagekitio-react";
import { BsImage } from "react-icons/bs";
import { ImageUpload } from "./forms/uploadImage";
import { TextArea } from "./forms/text-area";
import { updateSocialPost } from "../api/api-calls"; // You need an update API function

export const UpdatePostModal = ({
  onClose,
  post: { id, post, likes, name, logo, image, comments },
}) => {
  const loadedImage = image.split("/");
  const lImage = loadedImage[loadedImage.length - 1];

  const [postData, setPostData] = useState({
    postText: post,
    image: lImage,
  });

  const [error, setError] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);

  const [updateImg, setUpdateImg] = useState(false);

  const updatePost = async () => {
    try {
      const newPostData = {
        post: postData.postText,
        image:
          postData.image &&
          process.env.REACT_APP_IMAGEKIT_URL + "socialpost/" + postData.image,
      };

      console.log(newPostData);

      await updateSocialPost(
        id,
        newPostData,
        (successMessage) => {
          console.log(successMessage);
        },
        (errorMessage) => console.error(errorMessage)
      );

      // Close the modal after successful update
      onClose();
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

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-10">
      <div className="modal-overlay fixed top-0 left-0 w-full h-full bg-gray-700 opacity-75"></div>
      <div
        ref={modalRef}
        className="modal-content relative bg-white p-6 md:w-6/12 mx-auto rounded-lg shadow-lg z-20"
      >
        <div className="mb-4 flex items-center flex-row">
          <h1 className="text-xl font-bold flex-1 flex items-center justify-center opacity-80">
            Update Post
          </h1>
          <button
            className="absolute top-2 right-5 flex items-center justify-center"
            onClick={onClose}
          >
            <XCircleIcon className="h-10 w-10 text-[#1f6e30]" />
          </button>
        </div>

        <div className="p-2 rounded-md">
          <TextArea
            type="text"
            name="postText"
            label="Write your post here"
            required={true}
            data={postData}
            updateData={setPostData}
          />

          <div className="flex flex-1 justify-center flex-col space-y-4 md:space-y-0 md:space-x-4 my-5 border">
            {/* {image && <img src={image} alt="" />} */}

            <div className="flex flex-1 justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 my-5 mx-3">
              <div className="w-2/12 flex justify-center items-center">
                {postData.image == "" ? (
                  <BsImage className="text-[8.5em] mx-auto -mt-1 text-gray-600" />
                ) : (
                  <>
                    <BsImage className="text-[8.5em] mx-auto -mt-1 text-gray-600" />
                    <IKImage
                      className="object-cover rounded-lg max-h-32"
                      urlEndpoint={process.env.REACT_APP_IMAGEKIT_URL}
                      path={"socialpost/" + postData.image}
                    />
                  </>
                )}
              </div>
              <div className="w-10/12">
                <ImageUpload
                  data={postData.image}
                  updateData={setPostData}
                  setError={setError}
                  folder="socialpost"
                />
              </div>
            </div>
          </div>

          <button
            type="button"
            disabled={false}
            className={`w-full mt-2 tracking-widest ${"bg-[#329E49] hover:bg-[#3ab554]"}  bg-[#EC7422] text-white pt-2 pb-2 px-6 hover:bg-[#ce621b] hover:text-white rounded-md transition duration-300 ease-in-out`}
            onClick={() => {
              updatePost();
            }}
          >
            {btnLoading ? <ButtonLoader /> : "UPDATE"}
          </button>
        </div>
      </div>
    </div>
  );
};
