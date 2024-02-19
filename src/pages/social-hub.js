import React, { useEffect, useState } from "react";
import jwt from "jwt-decode";
import { useSnackbar } from "notistack";
import { SocialHubPost } from "../components/socialHub/post";
import { SideMenu } from "../components/navBar/socialHub/sideMenu";
import { AddPostModal } from "../components/socialHub/addPostModal";
import { SharePostModal } from "../components/socialHub/sharePostModal";
import { UpdatePostModal } from "../components/updatePostModal";
import { ViewPostModal } from "../components/socialHub/viewPostModal.js";
import { fetchSocialPosts } from "../api/api-calls";
import { submitData, getMember } from "../api/member-api-calls";
import { HiPlus } from "react-icons/hi2";
import { Loader } from "../components/loader";

export const SocialHubHomePage = () => {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState({
        keyword: "",
        status: "",
        page: 1,
        limit: 15,
    });
    const [member, setMember] = useState({ id: "", bookmarks: [], likes: [] });
    const [userId, setUserId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isAddPostModalOpen, setIsAddPostModalOpen] = useState(false);
    const [isUpdatePostModalOpen, setIsUpdatePostModalOpen] = useState(false);
    const [isSharePostModalOpen, setIsSharePostModalOpen] = useState(false);
    const [isViewPostModalOpen, setIsViewPostModalOpen] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);

    const { enqueueSnackbar } = useSnackbar();

    const handleOpenUpdatePostModal = (post) => {
        setSelectedPost(post);
        setIsUpdatePostModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedPost(null);
        setIsUpdatePostModalOpen(false);
        setIsSharePostModalOpen(false);
        setIsViewPostModalOpen(false);
    };

    const getSocialPosts = () => {
        submitData(
            "socialposts/search",
            search,
            setPosts,
            null,
            enqueueSnackbar,
            setLoading
        );
    };

    useEffect(() => {
        getMember(setMember);
        getSocialPosts();
    }, []); //eslint-disable-line

    // check if token is present
    useEffect(() => {
        let userToken = localStorage.getItem("token");

        if (userToken) {
            let decodedToken = jwt(localStorage.getItem("token"));
            setUserId(decodedToken.user_id);
        }
    }, []);

    return (
        <div className="pt-[3.8rem] lg:pt-[6.8rem]">
            <div className="flex flex-col md:flex-row px-6 lg:px-16">
                <div className="w-3/12 py-10">
                    {member.id !== "" && (
                        <div className="fixed md:w-3/12">
                            <SideMenu />
                        </div>
                    )}
                </div>
                <div className="w-5/12 mx-16 my-4 overflow-hidden relative h-[80vh] rounded-md">
                    <div className="space-y-8 px-6 pb-32 overflow-y-auto max-h-[88vh]">
                        {loading ? (
                            <div className="flex justify-center items-center h-[60vh]">
                                <Loader />
                            </div>
                        ) : posts.length < 1 ? (
                            <div className="flex justify-center items-center h-[60vh]">
                                <p className="text-gray-400">
                                    No social posts at the moment
                                </p>
                            </div>
                        ) : (
                            posts.map((post) => {
                                return (
                                    <SocialHubPost
                                        data={post}
                                        member={member}
                                        setMember={setMember}
                                        key={post.id}
                                        setIsViewPostModalOpen={
                                            setIsViewPostModalOpen
                                        }
                                        setIsSharePostModalOpen={
                                            setIsSharePostModalOpen
                                        }
                                        setSelectedPost={setSelectedPost}
                                        onUpdateClick={() =>
                                            handleOpenUpdatePostModal(post)
                                        }
                                        postId={post.id}
                                        posts={posts}
                                        setPosts={setPosts}
                                        getSocialPosts={getSocialPosts}
                                        setLoading={setLoading}
                                    />
                                );
                            })
                        )}
                    </div>
                    {member.subscription_status === "active" && (
                        <div className="absolute bottom-5 right-5 rounded-full cursor-pointer">
                            <button
                                className="bg-[#ED7423] rounded-full p-3 shadow-lg"
                                onClick={() => setIsAddPostModalOpen(true)}
                            >
                                <HiPlus className="text-3xl text-white" />
                            </button>
                        </div>
                    )}
                </div>
                {isAddPostModalOpen && (
                    <AddPostModal
                        isPostModalOpen={isAddPostModalOpen}
                        setIsAddPostModalOpen={setIsAddPostModalOpen}
                        getSocialPosts={getSocialPosts}
                    />
                )}
                {isSharePostModalOpen && (
                    <SharePostModal
                        setIsSharePostModalOpen={setIsSharePostModalOpen}
                        post={selectedPost}
                    />
                )}
                {isUpdatePostModalOpen && (
                    <UpdatePostModal
                        onClose={handleCloseModal}
                        post={selectedPost}
                    />
                )}
                {isViewPostModalOpen && (
                    <ViewPostModal
                        post={selectedPost}
                        isViewPostModalOpen={isViewPostModalOpen}
                        setIsViewPostModalOpen={setIsViewPostModalOpen}
                        getSocialPosts={getSocialPosts}
                        member={member}
                    />
                )}
            </div>
        </div>
    );
};
