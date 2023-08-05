import React, { useState, useEffect, useRef } from "react";
import { ButtonLoader } from "../../components/btnLoader";
import { SocialHubPost } from "../../components/navBar/socialHub/post";
import { SideMenu } from "../../components/navBar/socialHub/sideMenu";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { XCircleIcon, CloudArrowUpIcon } from "@heroicons/react/24/outline";
import {
  ChatBubbleLeftEllipsisIcon,
  HeartIcon as HeartIconOutline,
  ShareIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";

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

const fetchedComments = [
  {
    id: 1,
    text: "Great post!",
    date: "2023-08-04",
    likes: 15,
    replies: 3,
    username: "Burn User3",
  },
  {
    id: 2,
    text: "Thanks for sharing!",
    date: "2023-08-03",
    likes: 10,
    replies: 2,
    username: "Burn User2",
  },
];

const AddPostModal = ({ onClose }) => {
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
          <h1 className="text-xl font-bold flex-1 flex items-center justify-center opacity-80">
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
            className={`w-full tracking-widest ${
              disabled || btnLoading
                ? "bg-gray-200"
                : "bg-[#329E49] hover:bg-[#3ab554]"
            }  text-white flex justify-center font-medium rounded-lg text-sm px-5 py-3 my-5 transition duration-700 ease-in-out`}
            onClick={() => {
              submitPost();
            }}
          >
            {btnLoading ? <ButtonLoader /> : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};
const AddCommentModal = ({
  onClose,
  post: { post, likes, name, logo, image, comments },
}) => {
  const [favourite, setFavourite] = useState(true);
  const [disabled, setDisabled] = useState(true);
  const [btnLoading, setBtnLoading] = useState(false);

  const [newComment, setNewComment] = useState("");
  const [allcomments, setAllComments] = useState(fetchedComments);
  const handleInputChange = (e) => {
    setNewComment(e.target.value);

    if (e.target.value !== "") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const submitComment = () => {
    const newCommentData = {
      id: allcomments.length + 1,
      username: "John Doe",
      date: new Date().toLocaleDateString("en-US"),
      text: newComment,
      likes: 0,
    };

    setAllComments((prevComments) => [...prevComments, newCommentData]);
    setNewComment("");
    setDisabled(true);
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
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center px-5 z-10">
      <div className="modal-overlay fixed top-0 left-0 w-full h-full bg-gray-700 opacity-75"></div>
      <div
        ref={modalRef}
        className="relative modal-content flex flex-col justify-center items-center bg-white top-5 p-3 md:w-4/12 max-h-[80vh] overflow-scroll overflow-y-scroll rounded-lg shadow-lg z-20"
      >
        <div className="py-1 flex items-center w-full rounded-t-md mt-2">
          <div className="flex flex-1 w-full ml-2 ">
            <img
              src={`/logos/${logo}`}
              alt="member logo"
              className="w-10 h-10 rounded-sm"
              git
            />
            <h1 className="text-md font-bold ml-2 flex items-center justify-center opacity-80 capitalize">
              {name}
            </h1>
          </div>

          <button
            className="absolute top-2 right-5 flex items-center justify-center"
            onClick={onClose}
          >
            <XCircleIcon className="h-10 w-10 text-[#1f6e30]" />
          </button>
        </div>

        <p className="bg-gray-200 px-1 sticky top-5">{post}</p>

        <div className="flex justify-between w-full px-2 bg-gray-200 mb-5">
          <div className="flex flex-1 gap-1">
            <div className="flex w-full justify-left ">
              <ChatBubbleLeftEllipsisIcon className="w-6 -mt-1" />
              <p>{comments}</p>
            </div>
            <div className="flex w-full justify-center">
              {favourite ? (
                <HeartIconSolid
                  className="w-6 text-red-600 cursor-pointer"
                  onClick={() => {
                    setFavourite(false);
                  }}
                />
              ) : (
                <HeartIconOutline
                  className="w-6 text-black cursor-pointer"
                  onClick={() => {
                    setFavourite(true);
                  }}
                />
              )}
              <p>{likes}</p>
            </div>
          </div>

          <div className="flex w-full justify-end">
            <ShareIcon className="w-6 -mt-1" />
          </div>
        </div>

        <div className="flex w-full flex-col">
          {allcomments.map((comment) => (
            <div key={comment.id} className="flex gap-1 flex-col">
              <span className="flex justify-between">
                <span className="font-semibold">{comment.username}</span>
                <span>{comment.date}</span>
              </span>
              <span className="flex justify-between">
                <span className="flex-1"> {comment.text}</span>
                <span className="flex">
                  <HeartIconSolid className="w-6 text-gray-300 cursor-pointer" />
                  {comment.likes}
                </span>
              </span>

              <hr />
            </div>
          ))}
        </div>

        <div className="p-1 flex-1 w-full rounded-md flex items-center gap-1 bg-gray-200 relative bottom-0">
          <input
            type="text"
            value={newComment}
            onChange={handleInputChange}
            placeholder="Enter comment..."
            className="border rounded-md p-0.5 h-9 flex-1 border-gray-500 border-opacity-50 focus:outline-none"
            maxLength={150}
            aria-label="post-text-input"
          />

          <button
            type="button"
            disabled={disabled}
            className={`w-fit tracking-widest ${
              disabled || btnLoading
                ? "bg-gray-200"
                : "bg-[#329E49] hover:bg-[#3ab554]"
            }  text-white flex justify-center font-medium rounded-lg text-sm px-5 py-1 my-1 transition duration-700 ease-in-out`}
            onClick={() => {
              submitComment();
            }}
          >
            {btnLoading ? <ButtonLoader /> : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

const SharePostModal = ({ onClose, post: { post, name } }) => {
  const detailedPost = `${post} by ${name}`;

  const url = window.location.href;

  const twitterUrl = `https://twitter.com/intent/tweet?url=${url}&text=${detailedPost}`;

  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;

  const facebookUrl = `https://www.facebook.com/sharer.php?u=${url}&quote=${post}`;

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
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-10 px-5">
      <div className="modal-overlay fixed top-0 left-0 w-full h-full bg-gray-700 opacity-75"></div>
      <div
        ref={modalRef}
        className="modal-content relative flex flex-col items-center bg-white p-6 w-full md:w-6/12 mx-auto rounded-lg shadow-lg z-20 justify-center"
      >
        <div className="mb-4 flex items-center flex-row">
          <h1 className="text-xl font-bold flex-1 flex opacity-80">
            Share Post
          </h1>
          <button
            className="absolute top-2 right-5 flex items-center justify-center"
            onClick={onClose}
          >
            <XCircleIcon className="h-10 w-10 text-[#1f6e30]" />
          </button>
        </div>

        <div className="flex gap-4 w-fit border p-2 rounded-md">
          <a
            href={twitterUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-gray-300 hover:bg-gray-400 transition-colors duration-300 rounded-full p-1 flex justify-center items-center h-12 w-12"
          >
            <img src="/logos/twitter.png"></img>
          </a>

          <a
            href={linkedinUrl}
            target="_blank"
            title="Share on LinkedIn"
            className="bg-gray-300 hover:bg-gray-400 transition-colors duration-300 rounded-full p-1 flex justify-center items-center h-12 w-12"
          >
            <img src="/logos/linkedin.png"></img>
          </a>
          <a
            href={facebookUrl}
            target="_blank"
            rel="noreferrer"
            className=" bg-gray-300 hover:bg-gray-400 transition-colors duration-300 rounded-full p-1 flex justify-center items-center h-12 w-12"
          >
            <img src="/logos/facebook.png"></img>
          </a>
        </div>
      </div>
    </div>
  );
};

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
          <div
            className="absolute bottom-20 right-16 rounded-full cursor-pointer"
            onClick={handleOpenAddPostModal}
          >
            <PlusCircleIcon className="bg-[#EC7422] hover:bg-[#EC7422] rounded-full h-14 w-14 text-green-800 hover:text-[#288828] transition-colors duration-300" />
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
