import React, { useState } from "react";
import { SocialHubPost } from "../../components/navBar/socialHub/post";
import { SideMenu } from "../../components/navBar/socialHub/sideMenu";
import { AddPostModal } from "../../components/addPostModal";
import { SharePostModal } from "../../components/sharePostModal";
import { AddCommentModal } from "../../components/addCommentModal";

import { HiPlus } from "react-icons/hi2";

const posts = [
  {
    id: 1,
    name: "burn manufactures",
    logo: "burn.jpeg",
    post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "home_hero_section.jpg",
    comments: 12,
    likes: 24,
  },
  {
    id: 2,
    name: "burn manufactures",
    logo: "burn.jpeg",
    post: " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "",
    comments: 5,
    likes: 67,
  },
  {
    id: 3,
    name: "burn manufactures",
    logo: "burn.jpeg",
    post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "home_hero_section.jpg",
    comments: 4,
    likes: 23,
  },
  {
    id: 4,
    name: "burn manufactures",
    logo: "burn.jpeg",
    post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "home_hero_section.jpg",
    comments: 15,
    likes: 100,
  },
  {
    id: 5,
    name: "burn manufactures",
    logo: "burn.jpeg",
    post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "",
    comments: 11,
    likes: 120,
  },
];

export default SharePostModal;

export const SocialHubHomePage = () => {
  const [isAddPostModalOpen, setIsAddPostModalOpen] = useState(false);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const [isSharePostModalOpen, setIsSharePostModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const handleOpenAddPostModal = () => {
    setIsAddPostModalOpen(true);
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
    setIsAddPostModalOpen(false);
    setIsCommentModalOpen(false);
    setIsSharePostModalOpen(false);
  };
  return (
    <div className="pt-[3.8rem] lg:pt-[6.6rem]">
      <div className="flex flex-col md:flex-row px-6 lg:px-16 ">
        <div className="md:w-3/12 py-10">
          <div className="fixed md:w-3/12">
            <SideMenu />
          </div>
        </div>

        <div className="md:w-6/12 pt-10 lg:px-10 overflow-hidden relative h-[89vh] border border-grey-500 rounded-md">
          <div className="space-y-6 mb-0 overflow-y-auto max-h-[88vh]">
            {posts.map((post) => {
              return (
                <SocialHubPost
                  data={post}
                  key={post.id}
                  onCommentClick={() => handleOpenCommentModal(post)}
                  onShareButtonClick={() => handleOpenSharePostModal(post)}
                />
              );
            })}
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
        {isCommentModalOpen && (
          <AddCommentModal onClose={handleCloseModal} post={selectedPost} />
        )}
      </div>
    </div>
  );
};
