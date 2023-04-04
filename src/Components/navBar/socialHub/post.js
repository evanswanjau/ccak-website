import React, { useState } from "react";
import {
    BookmarkIcon as BookmarkIconOutline,
    ChatBubbleLeftEllipsisIcon,
    HeartIcon as HeartIconOutline,
    ShareIcon,
} from "@heroicons/react/24/outline";

import {
    BookmarkIcon as BookmarkIconSolid,
    HeartIcon as HeartIconSolid,
} from "@heroicons/react/24/solid";

export const SocialHubPost = () => {
    const [bookmark, setBookmark] = useState(false);
    const [favourite, setFavourite] = useState(true);
    return (
        <div className="w-8/12 rounded-lg shadow-md px-5 pt-5 pb-2 text-gray-600">
            <div className="flex justify-between">
                <div className="flex items-center space-x-6">
                    <img
                        src="/ccak_side_logo.png"
                        alt="member logo"
                        className="w-12 h-12 rounded-full"git
                    />
                    <h3 className="font-semibold text-2xl text-black">
                        Burn Manufactures
                    </h3>
                </div>
                <div>
                    {bookmark ? (
                        <BookmarkIconSolid
                            className="w-6 text-black cursor-pointer"
                            onClick={() => {
                                setBookmark(false);
                            }}
                        />
                    ) : (
                        <BookmarkIconOutline
                            className="w-6 text-black cursor-pointer"
                            onClick={() => {
                                setBookmark(true);
                            }}
                        />
                    )}
                </div>
            </div>
            <div className="my-5">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
                <img
                    src={`${
                        process.env.REACT_APP_IMAGEKIT + "home_hero_section.jpg"
                    }`}
                    alt="post"
                    className="rounded-lg my-5"
                />
            </div>
            <div className="flex justify-between">
                <div className="flex space-x-2 w-full justify-left cursor-pointer">
                    <ChatBubbleLeftEllipsisIcon className="w-6 -mt-1" />
                    <p>12</p>
                </div>
                <div className="flex space-x-2 w-full justify-center">
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
                    <p>2000</p>
                </div>
                <div className="flex space-x-2 w-full justify-end">
                    <ShareIcon className="w-6 -mt-1" />
                </div>
            </div>
        </div>
    );
};
