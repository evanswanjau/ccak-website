import React from "react";
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
} from "react-share";
import { BsTwitter, BsFacebook, BsLinkedin } from "react-icons/bs";

export const SharePostModal = ({
    setIsSharePostModalOpen,
    post: { post, id },
}) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-10 px-5">
            <div className="modal-overlay fixed top-0 left-0 w-full h-full bg-gray-700 opacity-75"></div>
            <div className="modal-content relative flex flex-col items-center bg-white p-6 w-full md:w-4/12 mx-auto rounded-lg shadow-lg z-20 justify-center">
                <div className="mb-4 flex items-center flex-row">
                    <h1 className="text-xl font-bold flex-1 flex opacity-80">
                        Share Post
                    </h1>
                    <div className="flex items-start justify-end mt-0 absolute right-3">
                        <button
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                            data-modal-hide="staticModal"
                            onClick={() => setIsSharePostModalOpen(false)}
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
                </div>

                <div className="flex space-x-8 my-6 w-fit">
                    <FacebookShareButton
                        children={
                            <BsFacebook className="text-2xl text-[#3b5998] hover:text-[#ce621b] transition-colors duration-300 p-1 flex justify-center items-center h-10 w-10" />
                        }
                        url={window.location.href + "/post-id/" + id}
                        hashtag="#ccak"
                    />
                    <TwitterShareButton
                        children={
                            <BsTwitter className="text-2xl text-[#1DA1F2]  hover:text-[#ce621b] transition-colors duration-300 p-1 flex justify-center items-center h-10 w-10" />
                        }
                        url={window.location.href + "/post-id/" + id}
                        title={post}
                        hashtag="#ccak"
                    />
                    <LinkedinShareButton
                        children={
                            <BsLinkedin className="text-2xl text-[#0E76A8]  hover:text-[#ce621b] transition-colors duration-300 p-1 flex justify-center items-center h-10 w-10" />
                        }
                        url={window.location.href + "/post-id/" + id}
                        title={post}
                    />
                </div>
            </div>
        </div>
    );
};
