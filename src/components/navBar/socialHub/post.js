import React, { useEffect, useState } from "react";
import {
  BookmarkIcon as BookmarkIconOutline,
  ChatBubbleLeftEllipsisIcon,
  HeartIcon as HeartIconOutline,
  ShareIcon,
} from "@heroicons/react/24/outline";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/20/solid";
import {
  BookmarkIcon as BookmarkIconSolid,
  HeartIcon as HeartIconSolid,
} from "@heroicons/react/24/solid";

export const SocialHubPost = ({
  data: { id, logo, name, post, image, comments, likes, created_by },
  user_id,
  creator,
  onCommentClick,
  onUpdateClick,
  onDeleteButtonClick,
  onShareButtonClick,
  onViewPostClick,
}) => {
  const [bookmark, setBookmark] = useState(false);
  const [favourite, setFavourite] = useState(true);

  return (
    <div className="rounded-lg shadow-md px-5 pt-5 pb-2 text-gray-600 border border-grey-500 ">
      <div className="flex justify-between">
        <div className="flex items-center space-x-2">
          <img
            src={logo || `/logos/profile.png`}
            alt="member logo"
            className="w-10 h-10 rounded-full"
            git
          />
          <h3 className="text-1xl text-gray-800 capitalize">{creator}</h3>
        </div>
        <div className="flex items-center gap-1">
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
          {user_id === created_by && (
            <>
              <PencilSquareIcon
                className="h-6 w-6 text-black cursor-pointer hover:text-green-600 transition-all duration-300"
                onClick={() =>
                  onUpdateClick(logo, name, post, image, comments, likes)
                }
              />
              <TrashIcon
                className="h-6 w-6 text-black cursor-pointer opacity-80 hover:text-red-600 transition-all duration-300"
                onClick={() => onDeleteButtonClick(id)}
              />
            </>
          )}
        </div>
      </div>
      <div
        className="px-4 py-2 my-3 border rounded-lg cursor-pointer"
        onClick={() => onViewPostClick(id)}
      >
        {image !== "" && (
          <img src={image} alt="post" className="rounded-lg my-2 w-full p-1 " />
        )}
        <p className="rounded-lg w-full">{post}</p>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-3 justify-center items-center">
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
        </div>
        <div className="flex space-x-2 w-full justify-end">
          <ShareIcon
            className="w-6 -mt-1 cursor-pointer"
            onClick={() =>
              onShareButtonClick(logo, name, post, image, comments, likes)
            }
          />
        </div>
      </div>
    </div>
  );
};
