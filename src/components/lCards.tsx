"use client";
import { Blog } from "@/app/blog/types";
import Link from "next/link";

type Props = {
  blog: Blog;
};

const LCards = ({ blog }: Props) => {
  return (
    <>
      <Link
        href={`/blog/${blog.id}`}
        className="border cursor-pointer border-primary w-full group md:w-1/3 lg:min-h-[750px]"
        key={blog.id}
      >
        <picture id="multi_picture_348fbbaf-a794-48a2-8509-236acfe9944b">
          <source srcSet={blog.image as string} type="image/webp" />
          <img
            alt={blog.title}
            id="348fbbaf-a794-48a2-8509-236acfe9944b"
            className="lg:h-[65%] min-h-64 w-full"
            data-hook="gallery-item-image-img"
            data-idx="1"
            src={blog.image as string}
            loading="eager"
          />
        </picture>

        <div className="mt-8 px-6 pb-3 text-black">
          <h5 className="text-[#343434] font-light text-xs ">techvanb</h5>

          <h1 className="capitalize mt-5 lg:leading-8 tracking-wide font-light group-hover:text-primary text-[#343434] min-h-12 text-base lg:text-[23px]">
            {blog.title}
          </h1>

          <p
            className="lg:mt-4 mt-3 text-sm lg:text-[15px] lg:leading-6  group-hover:text-primary text-[#343434]"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {blog.introductory}
          </p>

          <div className="flex items-center justify-between border-t border-t-[#94A3B8] pt-5 mt-2">
            <div className="flex item-center justify-center gap-1 text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              <p className="text-sm ">{blog.views}</p>
            </div>
            <div className="flex item-center justify-center gap-1 text-gray-600">
              <p className="text-sm"> {blog.likes} </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
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
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default LCards;
