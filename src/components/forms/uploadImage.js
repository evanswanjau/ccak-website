import { useState } from "react";
import { IKContext, IKUpload } from "imagekitio-react";

export const ImageUpload = ({ data, updateData, setError, folder }) => {
    const [loading, setLoading] = useState(false);

    const onError = ({ message }) => {
        setError(message);
        setLoading(false);
    };

    const onSuccess = (response) => {
        updateData({
            ...data,
            [folder === "members" ? "logo" : "image"]: response.name,
        });
        setLoading(false);
    };

    return (
        <div className="flex items-center justify-center w-full">
            <label
                htmlhtmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 "
            >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    {loading ? (
                        <p className="text-gray-400">uploading ...</p>
                    ) : (
                        <>
                            <svg
                                aria-hidden="true"
                                className="w-10 h-10 mb-3 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                ></path>
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                <span className="font-semibold">
                                    Click to upload logo
                                </span>{" "}
                                or drag and drop
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                SVG, PNG, JPG or GIF (MAX. 800x400px)
                            </p>
                        </>
                    )}
                </div>
                <IKContext
                    publicKey={process.env.REACT_APP_IMAGEKIT_PUBLIC_KEY}
                    urlEndpoint={process.env.REACT_APP_IMAGEKIT_URL}
                    authenticationEndpoint={process.env.REACT_APP_IMAGEKIT_AUTH}
                >
                    <IKUpload
                        id="image"
                        className="bg-red-400 opacity-0 h-32 -mt-[9em] w-[54em]"
                        useUniqueFileName={true}
                        folder={folder}
                        onChange={() => {
                            setLoading(true);
                        }}
                        onError={(error) => {
                            onError(error);
                        }}
                        onSuccess={(response) => {
                            onSuccess(response);
                        }}
                    />
                </IKContext>
            </label>
        </div>
    );
};
