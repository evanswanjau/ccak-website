import React from "react";
import { PhotoIcon } from "@heroicons/react/24/outline";

const LoadingButton = () => (
  <div class="container w-fit relative flex justify-center items-center h-fit">
    <div class="flex flex-col justify-center items-center">
      <div class="flex flex-row space-x-4">
        <div
          class="w-12 h-12 rounded-full animate-spin
          border-4 border-solid border-green-500 border-t-transparent shadow-md"
        ></div>
      </div>
      <h4 class="mb-2">Fetching Posts</h4>
    </div>
  </div>
);

export const NoPosts = () => (
  <div class="container w-fit relative flex justify-center items-center h-fit">
    <div class="flex flex-col justify-center items-center">
      <div class="flex flex-row space-x-4 border rounded-full p-2 border-gray-400">
        <PhotoIcon class="h-10 w-10 text-gray-500" />
      </div>
      <h4 class="mb-2 text-gray-500 font-semibold">No posts at the moment</h4>
    </div>
  </div>
);

export default LoadingButton;
