import { useState } from "react";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { updateMember, updateSocialPost } from "../../api/member-api-calls";

export const Likes = ({ id, post, likes, member, setMember }) => {
    const [likeCount, setLikeCount] = useState(likes);

    const updateLikes = (action) => {
        let newLikes = [...member.likes];
        let newCount = likeCount;

        if (action === "add") {
            newLikes.push(id);
            newCount += 1;
        }

        if (action === "remove") {
            newLikes = newLikes.filter((likeId) => likeId !== id);
            newCount -= 1;
        }

        setLikeCount(newCount)
        setMember({ ...member, likes: newLikes });

        if (member.id !== "") {
            updateMember({ ...member, likes: newLikes }, setMember);
            updateSocialPost({ id: id, likes: newCount, post: post });
        }
    };

    return (
        <div className="flex space-x-2 w-fit justify-center items-center">
            {member.likes.includes(id) ? (
                <HeartIconSolid
                    className="w-6 text-red-600 cursor-pointer"
                    onClick={() => {
                        updateLikes("remove");
                    }}
                />
            ) : (
                <HeartIconOutline
                    className="w-6 text-black cursor-pointer"
                    onClick={() => {
                        updateLikes("add");
                    }}
                />
            )}
            <span className="flex items-center justify-center">
                {likeCount}
            </span>
        </div>
    );
};
