import React, { useState } from "react";
import { useSnackbar } from "notistack";
import { IKImage } from "imagekitio-react";
import { ImageUpload } from "../forms/uploadImage";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ButtonLoader } from "../../components/btnLoader";
import { ErrorMessage } from "../forms/error";
import { submitData } from "../../api/member-api-calls";

export const AddPostModal = ({
    isPostModalOpen,
    setIsAddPostModalOpen,
    getSocialPosts,
}) => {
    const [data, setData] = useState({
        post: "",
        image: "",
    });
    const [error, setError] = useState(false);
    const [btnLoading, setBtnLoading] = useState(false);
    const modalClasses = isPostModalOpen ? "block" : "hidden";

    const { enqueueSnackbar } = useSnackbar();

    const createPost = () => {
        setBtnLoading(true);
        submitData(
            "socialpost",
            data,
            setData,
            setError,
            enqueueSnackbar,
            null,
            setBtnLoading,
            "Post created successfully!"
        ).finally(() => {
            getSocialPosts();
            setIsAddPostModalOpen(false);
        });
    };

    const disabled = data.postText === "";

    return (
        <div className={`fixed inset-0 overflow-y-auto ${modalClasses} z-50`}>
            <div className="flex items-center justify-center min-h-screen">
                <div className="fixed inset-0 bg-black opacity-50"></div>
                <div className="relative bg-white rounded-lg w-full md:6/12 lg:w-5/12 m-5">
                    <div className="flex flex-row p-4 justify-between items-center shadow-sm">
                        <h2 className="text-xl font-semibold">
                            Create social post
                        </h2>
                        <button
                            onClick={() => setIsAddPostModalOpen(false)}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            <XMarkIcon className="w-6" />
                        </button>
                    </div>
                    <div className="p-8">
                        {error && (
                            <ErrorMessage error={error} setError={setError} />
                        )}
                        <textarea
                            rows="3"
                            placeholder="Start writing your post..."
                            className="border-2 font-manjari text-gray-900 rounded-lg focus:outline-none focus:ring-teal-900 focus:border-teal-900 block w-full p-2 pt-3"
                            value={data.postText}
                            maxLength="480"
                            onChange={(event) => {
                                setData({
                                    ...data,
                                    post: event.target.value,
                                });
                            }}
                        ></textarea>
                        <div className="flex flex-col-reverse md:flex-row space-y-4 md:space-x-4">
                            <div className="md:w-3/12 flex justify-center mt-5 md:mt-0 items-center">
                                {data.image === "" ? (
                                    <img
                                        src="/social-post-placeholder.png"
                                        alt="social post"
                                        className="rounded-lg"
                                    />
                                ) : (
                                    <IKImage
                                        className="object-cover rounded-lg max-h-40"
                                        urlEndpoint={
                                            process.env.REACT_APP_IMAGEKIT_URL
                                        }
                                        path={"socialpost/" + data.image}
                                    />
                                )}
                            </div>
                            <div className="md:w-9/12">
                                <ImageUpload
                                    data={data}
                                    updateData={setData}
                                    setError={setError}
                                    folder="socialpost"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end p-4 shadow-sm space-x-2">
                        <button
                            className="bg-gray-400 p-2 px-4 hover:bg-gray-600 tracking-wide text-white rounded-lg transition duration-300 ease-in-out"
                            onClick={() => setIsAddPostModalOpen(false)}
                        >
                            CANCEL
                        </button>
                        <button
                            className={`${
                                disabled
                                    ? "bg-gray-200"
                                    : "bg-teal-800 hover:bg-teal-900"
                            } flex p-2 px-4  tracking-wide text-white rounded-lg transition duration-300 ease-in-out`}
                            onClick={() => {
                                createPost();
                            }}
                        >
                            {btnLoading ? <ButtonLoader /> : "CREATE POST"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
