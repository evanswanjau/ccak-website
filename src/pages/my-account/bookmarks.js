import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { AuthMember } from "../../helpers/auth";
import { getMember } from "../../api/member-api-calls";
import { SocialHubPost } from "../../components/socialHub/post";
import { SideMenu } from "../../components/navBar/socialHub/sideMenu";
import { getSocialPost } from "../../api/member-api-calls";

export const MyAccountBookmarksPage = () => {
    const [member, setMember] = useState({});
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        AuthMember(jwt_decode);
        getMember(setMember).then(async (data) => {
            let res = await Promise.all(
                data.bookmarks.map(async (postID) => {
                    return await getSocialPost(postID).then(({ data }) => {
                        return data;
                    });
                })
            );

            setPosts(res);
        });
    }, []); //eslint-disable-line

    return (
        <div className="pt-[3.8rem] lg:pt-[6.6rem]">
            <div className="flex flex-col md:flex-row px-6 lg:px-16 space-x-8">
                <div className="md:w-3/12 py-10">
                    <div className="fixed md:w-3/12">
                        <SideMenu />
                    </div>
                </div>
                <div className="md:w-6/12 pt-10 lg:px-10">
                    <div className="space-y-6 mb-5">
                        {member.first_name && member.bookmarks.length > 0 ? (
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
                </div>
            </div>
        </div>
    );
};
