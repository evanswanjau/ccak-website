import React, { useEffect, useState } from "react";
// import { SocialHubPost } from "../../components/socialHub/post";
// import { SideMenu } from "../../components/navBar/socialHub/sideMenu";
// import {
//     PhoneIcon,
//     EnvelopeIcon,
//     MapPinIcon,
//     LinkIcon,
//     InboxIcon,
// } from "@heroicons/react/24/outline";
// import { fetchDataAndProcess } from "../../helpers/modal-helpers";
// import jwt from "jwt-decode";
// import LoadingButton from "../../helpers/loaders";

// import { SharePostModal } from "../../components/socialHub/sharePostModal";
// import { AddCommentModal } from "../../components/addCommentModal";
// import { UpdatePostModal } from "../../components/updatePostModal";
// import { DeletePostModal } from "../../components/deletePostModal";
// import { ViewPostModal } from "../../components/viewPostModal.js";

// import { getMemberProfile } from "../../api/api-calls";

export const MyAccountProfilePage = () => {
    // const [userId, setUserId] = useState(null);
    // const [userData, setUserData] = useState({});

    // const [isDeletePostModalOpen, setIsDeletePostModalOpen] = useState(false);
    // const [selectedPost, setSelectedPost] = useState(null);

    // const [members, setMembers] = useState([]);
    // const [posts, setPosts] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // const [isUpdatePostModalOpen, setIsUpdatePostModalOpen] = useState(false);
    // const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
    // const [isSharePostModalOpen, setIsSharePostModalOpen] = useState(false);
    // const [isViewPostModalOpen, setIsViewPostModalOpen] = useState(false);

    // const handleOpenUpdatePostModal = (post) => {
    //     setSelectedPost(post);
    //     setIsUpdatePostModalOpen(true);
    // };

    // const handleOpenCommentModal = (post) => {
    //     setSelectedPost(post);
    //     setIsCommentModalOpen(true);
    // };
    // const handleViewPostModal = (post) => {
    //     setSelectedPost(post);
    //     setIsViewPostModalOpen(true);
    // };

    // const handleOpenSharePostModal = (post) => {
    //     setSelectedPost(post);
    //     setIsSharePostModalOpen(true);
    // };

    // const handleCloseModal = () => {
    //     setSelectedPost(null);
    //     setIsDeletePostModalOpen(false);

    //     setIsUpdatePostModalOpen(false);
    //     setIsCommentModalOpen(false);
    //     setIsSharePostModalOpen(false);
    //     setIsViewPostModalOpen(false);
    // };

    // useEffect(() => {
    //     fetchDataAndProcess(setPosts, setLoading, setError);
    // }, []);

    // const handleDeletePostModal = (post) => {
    //     setSelectedPost(post);
    //     setIsDeletePostModalOpen(true);
    // };

    // useEffect(() => {
    //     let userToken = localStorage.getItem("token");

    //     if (userToken !== null) {
    //         let decodedToken = jwt(localStorage.getItem("token"));
    //         setUserId(decodedToken.user_id);
    //     } else {
    //         setUserId(null);
    //     }
    // }, []);

    // useEffect(() => {
    //     getMemberProfile()
    //         .then((data) => {
    //             setUserData(data);
    //         })
    //         .catch((error) => {
    //             console.error("Error fetching member profile:", error);
    //         });
    // }, []);

    return (
        <div>"red</div>
        // <div className="pt-[3.8rem] lg:pt-[6.6rem]">
        //     <div className="flex flex-col md:flex-row px-6 lg:px-16 space-x-6">
        //         <div className="md:w-3/12 py-10">
        //             <div className="fixed md:w-3/12">
        //                 <SideMenu />
        //             </div>
        //         </div>

        //         <div className="md:w-6/12 pt-10 lg:px-10">
        //             {userId == null ? (
        //                 <div className="flex border flex-col rounded-lg min-h-[65vh] font-semibold justify-center items-center text-lg md:text-2xl">
        //                     Login to view profile
        //                     <svg
        //                         xmlns="http://www.w3.org/2000/svg"
        //                         fill="none"
        //                         viewBox="0 0 24 24"
        //                         strokeWidth={1.5}
        //                         stroke="currentColor"
        //                         className="w-16 h-16"
        //                     >
        //                         <path
        //                             strokeLinecap="round"
        //                             strokeLinejoin="round"
        //                             d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
        //                         />
        //                     </svg>
        //                 </div>
        //             ) : (
        //                 <div className="space-y-6">
        //                     <div className="flex rounded-lg shadow-md p-5 space-x-6 text-gray-600">
        //                         <div className="w-2/12">
        //                             <img
        //                                 src="/logos/burn.jpeg"
        //                                 alt="member logo"
        //                                 className="w-12 h-12 rounded-full"
        //                                 git
        //                             />
        //                         </div>
        //                         <div className="w-10/12">
        //                             <h3 className="font-semibold text-2xl text-black mb-2">
        //                                 Burn Manufactures
        //                             </h3>
        //                             <p>
        //                                 Technolgy:{" "}
        //                                 <b className="font-bold text-black">
        //                                     {userData?.technology ||
        //                                         "Burn Manufactures"}
        //                                 </b>
        //                             </p>
        //                             <p>
        //                                 {userData?.bio ||
        //                                     "Impacting lives and the environment through efficient cooking appliance"}
        //                             </p>
        //                             <div className="my-2 space-y-4">
        //                                 <a
        //                                     href="tel:0700667788"
        //                                     target="_blank"
        //                                     rel="noreferrer"
        //                                     className="flex space-x-2 hover:text-[#ED7423] transition duration-300 ease-in-out"
        //                                 >
        //                                     <PhoneIcon className="w-5" />
        //                                     <p>
        //                                         {userData?.phone_number ||
        //                                             "0700667788"}
        //                                     </p>
        //                                 </a>
        //                                 <a
        //                                     href="mail:kenya@burnmfg.com"
        //                                     target="_blank"
        //                                     rel="noreferrer"
        //                                     className="flex space-x-2 hover:text-[#ED7423] transition duration-300 ease-in-out"
        //                                 >
        //                                     <EnvelopeIcon className="w-5" />
        //                                     <p>
        //                                         {userData?.website_link ||
        //                                             "kenya@burnmfg.com"}{" "}
        //                                     </p>
        //                                 </a>
        //                                 <div className="flex space-x-2">
        //                                     <MapPinIcon className="w-5" />
        //                                     <p>
        //                                         {userData?.location ||
        //                                             "New Horizons Industrial Park, Ruiru, Kenya"}
        //                                     </p>
        //                                 </div>
        //                                 <a
        //                                     href="https://burnstoves.com"
        //                                     target="_blank"
        //                                     rel="noreferrer"
        //                                     className="flex space-x-2 hover:text-[#ED7423] transition duration-300 ease-in-out"
        //                                 >
        //                                     <LinkIcon className="w-5" />
        //                                     <p>
        //                                         {userData?.company_email ||
        //                                             "https://burnstoves.com"}
        //                                     </p>
        //                                 </a>
        //                                 <div className="flex space-x-2 items-center">
        //                                     <InboxIcon className="w-5" />
        //                                     <p>
        //                                         {userData?.postal_address ||
        //                                             "00100 Nairobi"}
        //                                     </p>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div>
        //                         <div className="space-y-6 mb-5">
        //                             {posts < 1 ? (
        //                                 <div className="border flex justify-center items-center">
        //                                     <LoadingButton />
        //                                 </div>
        //                             ) : (
        //                                 posts.map((post) => {
        //                                     return (
        //                                         <SocialHubPost
        //                                             data={post}
        //                                             user_id={userId}
        //                                             key={post.id}
        //                                             onCommentClick={() =>
        //                                                 handleOpenCommentModal({
        //                                                     ...post,
        //                                                     userId:
        //                                                         userId &&
        //                                                         userId,
        //                                                 })
        //                                             }
        //                                             onShareButtonClick={() =>
        //                                                 handleOpenSharePostModal(
        //                                                     post
        //                                                 )
        //                                             }
        //                                             onUpdateClick={() =>
        //                                                 handleOpenUpdatePostModal(
        //                                                     post
        //                                                 )
        //                                             }
        //                                             onDeleteButtonClick={() =>
        //                                                 handleDeletePostModal(
        //                                                     post
        //                                                 )
        //                                             }
        //                                             onViewPostClick={() =>
        //                                                 handleViewPostModal({
        //                                                     ...post,
        //                                                     userId:
        //                                                         userId &&
        //                                                         userId,
        //                                                 })
        //                                             }
        //                                         />
        //                                     );
        //                                 })
        //                             )}
        //                         </div>
        //                     </div>
        //                 </div>
        //             )}
        //         </div>
        //     </div>
        //     {isDeletePostModalOpen && (
        //         <DeletePostModal
        //             onClose={handleCloseModal}
        //             post={selectedPost}
        //         />
        //     )}
        //     {isSharePostModalOpen && (
        //         <SharePostModal
        //             onClose={handleCloseModal}
        //             post={selectedPost}
        //         />
        //     )}
        //     {isUpdatePostModalOpen && (
        //         <UpdatePostModal
        //             onClose={handleCloseModal}
        //             post={selectedPost}
        //         />
        //     )}
        //     {isCommentModalOpen && (
        //         <AddCommentModal
        //             onClose={handleCloseModal}
        //             post={selectedPost}
        //         />
        //     )}
        //     {isViewPostModalOpen && (
        //         <ViewPostModal onClose={handleCloseModal} post={selectedPost} />
        //     )}
        //     {isDeletePostModalOpen && (
        //         <DeletePostModal
        //             onClose={handleCloseModal}
        //             post={selectedPost}
        //         />
        //     )}
        // </div>
    );
};
