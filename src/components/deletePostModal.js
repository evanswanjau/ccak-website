import React, { useState, useEffect, useRef } from "react";
import { deletePost } from "../api/api-calls";

export const DeletePostModal = ({ onClose, post: { id } }) => {
  const [error, setError] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);

  const onDelete = async () => {
    try {
      setBtnLoading(true);
      await deletePost(id, setBtnLoading, setError);
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("An error occurred:", error);
      setBtnLoading(false);
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
        <div className="p-2 rounded-md">
          <p className="mb-4 text-red-600">
            Are you sure you want to delete this post?
          </p>

          <div className="flex justify-end mt-4">
            <button
              type="button"
              className="mr-2 px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 transition duration-300"
              onClick={() => onDelete(id)}
            >
              Delete
            </button>
            <button
              type="button"
              className="px-4 py-2 text-gray-600 bg-gray-300 rounded-md hover:bg-gray-400 transition duration-300"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
