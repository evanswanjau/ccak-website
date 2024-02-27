import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { AuthMember } from "../../helpers/auth";
import { getMember } from "../../api/member-api-calls";
import { SocialHubPost } from "../../components/socialHub/post";
import { SideMenu } from "../../components/navBar/socialHub/sideMenu";
import { getSocialPost } from "../../api/member-api-calls";
import { Loader } from "../../components/loader";

export const MyAccountBookmarksPage = () => {
    const [member, setMember] = useState({});
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AuthMember(jwt_decode);
        setLoading(true);
        getMember(setMember).then(async (data) => {
            let res = (
                await Promise.all(
                    data.bookmarks.map(async (postID) => {
                        try {
                            return await getSocialPost(postID).then(
                                ({ data }) => {
                                    console.log("data", data);
                                    if (data) return data;
                                }
                            );
                        } catch (error) {
                            console.error(
                                `Failed to get social post with ID ${postID}:`,
                                error
                            );
                        }
                    })
                )
            ).filter((item) => item !== undefined);

            setPosts(res);
            setLoading(false);
        });
    }, []); //eslint-disable-line

    return (
        <div className="pt-[3.8rem] md:pt-[6.8rem]">
            <div className="flex flex-col md:flex-row md:space-x-8 px-6 lg:px-16 bg-slate-100">
                <div className="md:w-3/12 py-10">
                    <SideMenu />
                </div>
                <div className="w-full md:w-8/12 lg:w-5/12 mb-10 md:my-10 overflow-hidden rounded-lg">
                    <div className="space-y-8 md:pb-32 md:overflow-y-auto md:max-h-[88vh]">
                        {loading ? (
                            <div className="flex justify-center items-center h-[60vh]">
                                <Loader />
                            </div>
                        ) : (
                            <div className="space-y-6 mb-5">
                                {member.first_name && posts.length > 0 ? (
                                    <>
                                        {posts.map((post) => {
                                            return (
                                                <SocialHubPost
                                                    data={post}
                                                    member={member}
                                                    setMember={setMember}
                                                    key={post.id}
                                                />
                                            );
                                        })}
                                    </>
                                ) : (
                                    <div>
                                        <p>No bookmarks at the moment </p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
