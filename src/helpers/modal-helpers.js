import { useState } from "react";
import { deletePost, fetchSocialPosts } from "../api/api-calls";

export const useDeletePost = () => {
  const [error, setError] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);

  const onDelete = async (id, onClose) => {
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

  return { error, btnLoading, onDelete };
};

export const fetchDataAndProcess = async (setPosts, setLoading, setError) => {
  try {
    const [fetchedPosts] = await Promise.all([fetchSocialPosts()]);

    setPosts(fetchedPosts);
    setLoading(false);
  } catch (err) {
    setError(err.message);
  }
};
