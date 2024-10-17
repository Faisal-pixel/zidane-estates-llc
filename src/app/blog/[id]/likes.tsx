"use client";
import { blogService } from "@/lib/firebase/blogService";
import { useMemo, useState } from "react";
import { Blog } from "../types";

export default function LikeButton({ blog }: { blog: Blog }) {
  const [likes, setLikes] = useState(blog.likes);

  const { handleLikeBlog, handleUnLikeBlog } = blogService();

  const onLikeBlog = async (blogId: string) => {
    const storage = localStorage.getItem("nextgen-liked-blogs");

    let likedBlogs: string[] = storage ? JSON.parse(storage) : [];

    if (likedBlogs.includes(blogId)) {
      likedBlogs = likedBlogs.filter((item) => item !== blogId);

      localStorage.setItem("nextgen-liked-blogs", JSON.stringify(likedBlogs));

      setLikes(likes - 1);

      return await handleUnLikeBlog(blogId);
    }

    if (!likedBlogs.includes(blogId)) {
      likedBlogs.push(blogId);

      localStorage.setItem("nextgen-liked-blogs", JSON.stringify(likedBlogs));

      setLikes(likes + 1);

      return await handleLikeBlog(blogId);
    }
  };

  const isBlogLiked = useMemo(() => {
    let likedBlogs = localStorage.getItem("nextgen-liked-blogs");

    if (!likedBlogs) return false;

    likedBlogs = JSON.parse(likedBlogs);

    if (!likedBlogs || likedBlogs?.length <= 0) return false;

    if (!likedBlogs.includes(blog.id)) return false;

    return true;
  }, [likes]);

  return (
    <button
      onClick={() => onLikeBlog(blog.id)}
      className="flex item-center justify-center gap-1 text-gray-600 cursor-pointer"
    >
      <span className="text-white">{likes}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={isBlogLiked ? "#ef4444" : "none"}
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-5 text-red-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>
    </button>
  );
}
