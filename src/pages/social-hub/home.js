import React, { useEffect, useState } from "react";
import { SocialHubPost } from "../../components/navBar/socialHub/post";
import { SideMenu } from "../../components/navBar/socialHub/sideMenu";
import { AddPostModal } from "../../components/addPostModal";
import { SharePostModal } from "../../components/sharePostModal";
import { AddCommentModal } from "../../components/addCommentModal";
import { UpdatePostModal } from "../../components/updatePostModal";
import { DeletePostModal } from "../../components/deletePostModal";

import { HiPlus } from "react-icons/hi2";
import { fetchSocialPosts, deletePost } from "../../api/api-calls";

import jwt from "jwt-decode";
import LoadingButton from "../../helpers/loaders";

export const SocialHubHomePage = () => {
  const [posts, setPosts] = useState([]);
  const [userId, setUserId] = useState(null);

  const [isAddPostModalOpen, setIsAddPostModalOpen] = useState(false);
  const [isDeletePostModalOpen, setIsDeletePostModalOpen] = useState(false);
  const [isUpdatePostModalOpen, setIsUpdatePostModalOpen] = useState(false);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const [isSharePostModalOpen, setIsSharePostModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const handleOpenAddPostModal = () => {
    setIsAddPostModalOpen(true);
  };

  const handleDeletePostModal = (post) => {
    setSelectedPost(post);
    setIsDeletePostModalOpen(true);
  };

  const handleOpenUpdatePostModal = (post) => {
    setSelectedPost(post);
    setIsUpdatePostModalOpen(true);
  };

  const handleOpenCommentModal = (post) => {
    setSelectedPost(post);
    setIsCommentModalOpen(true);
  };

  const handleOpenSharePostModal = (post) => {
    setSelectedPost(post);
    setIsSharePostModalOpen(true);
  };

  const handleCloseModal = () => {
    // setSelectedPost(null);
    setIsDeletePostModalOpen(false);
    setIsAddPostModalOpen(false);
    setIsUpdatePostModalOpen(false);
    setIsCommentModalOpen(false);
    setIsSharePostModalOpen(false);
  };

  useEffect(() => {
    fetchSocialPosts()
      .then((fetchedPosts) => {
        setPosts(fetchedPosts);
        // setError(null);
      })
      .catch((error) => {
        // setError(error.message);
      });
  }, []);

  // check if token is present

  useEffect(() => {
    let userToken = localStorage.getItem("token");

    if (userToken) {
      let decodedToken = jwt(localStorage.getItem("token"));
      setUserId(decodedToken.user_id);
    }
  }, []);

  return (
    <div className="pt-[3.8rem] lg:pt-[6.6rem]">
      <div className="flex flex-col md:flex-row px-6 lg:px-16 ">
        <div className="md:w-3/12 py-10">
          <div className="fixed md:w-3/12">
            <SideMenu />
          </div>
        </div>

        <div className="md:w-6/12 pt-10 lg:px-10 overflow-hidden relative h-[89vh] rounded-md">
          <div className="space-y-6 mb-0 overflow-y-auto max-h-[88vh]">
            {posts < 1 ? (
              <div className="flex justify-center items-center h-[80vh] border">
                <LoadingButton />
              </div>
            ) : (
              posts.map((post) => {
                return (
                  <SocialHubPost
                    data={post}
                    user_id={userId}
                    key={post.id}
                    onCommentClick={() => handleOpenCommentModal(post)}
                    onShareButtonClick={() => handleOpenSharePostModal(post)}
                    onUpdateClick={() => handleOpenUpdatePostModal(post)}
                    onDeleteButtonClick={() => handleDeletePostModal(post)}
                  />
                );
              })
            )}
          </div>

          <div className="absolute bottom-20 right-16 rounded-full cursor-pointer">
            <button
              className="bg-[#ED7423] rounded-full p-3 shadow-lg"
              onClick={handleOpenAddPostModal}
            >
              <HiPlus className="text-3xl text-white" />
            </button>
          </div>
        </div>

        {isAddPostModalOpen && <AddPostModal onClose={handleCloseModal} />}
        {isSharePostModalOpen && (
          <SharePostModal onClose={handleCloseModal} post={selectedPost} />
        )}
        {isUpdatePostModalOpen && (
          <UpdatePostModal onClose={handleCloseModal} post={selectedPost} />
        )}
        {isCommentModalOpen && (
          <AddCommentModal onClose={handleCloseModal} post={selectedPost} />
        )}
        {isDeletePostModalOpen && (
          <DeletePostModal onClose={handleCloseModal} post={selectedPost} />
        )}
      </div>
    </div>
  );
};
