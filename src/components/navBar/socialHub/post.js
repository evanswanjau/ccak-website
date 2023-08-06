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

export const SocialHubPost = ({
  data: { logo, name, post, image, comments, likes },
  onCommentClick,
  onShareButtonClick,
}) => {
  const [bookmark, setBookmark] = useState(false);
  const [favourite, setFavourite] = useState(true);

  return (
    <div className="rounded-lg shadow-md px-5 pt-5 pb-2 text-gray-600 border border-grey-500 ">
      <div className="flex justify-between">
        <div className="flex items-center space-x-6">
          <img
            src={`/logos/${logo}`}
            alt="member logo"
            className="w-12 h-12 rounded-full"
            git
          />
          <h3 className="font-semibold text-2xl text-black capitalize">
            {name}
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
        <p>{post}</p>
        {image !== "" && (
          <img
            src={`${process.env.REACT_APP_IMAGEKIT_URL + image}`}
            alt="post"
            className="rounded-lg my-5"
          />
        )}
      </div>
      <div className="flex justify-between">
        <div className="flex space-x-2 w-full justify-left ">
          <ChatBubbleLeftEllipsisIcon
            className="w-6 -mt-1 cursor-pointer"
            onClick={() =>
              onCommentClick(logo, name, post, image, comments, likes)
            }
          />
          <p>{comments}</p>
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
          <p>{likes}</p>
        </div>
        <div className="flex space-x-2 w-full justify-end">
          <ShareIcon
            className="w-6 -mt-1"
            onClick={() =>
              onShareButtonClick(logo, name, post, image, comments, likes)
            }
          />
        </div>
      </div>
    </div>
  );
};
