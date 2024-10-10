"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Crown, Dot, EllipsisVertical, Heart } from "lucide-react";
import { AvatarIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { getAllBlogDocuments } from "@/lib/firebase";
import { Blog as BlogType } from "./types";

// type Props = {};

const Blog = () => {
  const [heart, setHeart] = useState(false);
  const [blogs, setBlogs] = useState<BlogType[] | []>([]);

  useEffect(() => {
    const getBlogs = async () => {
      // fetch blogs
      const response = await getAllBlogDocuments();
      setBlogs(response);
    }

    getBlogs();
  }, [])
  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 2,
        ease: "easeOut",
      }}
      id="all-posts"
      className="md:mx-[8rem] xl:mx-[14rem]"
    >
      <div className="flex justify-between px-5 py-2 bg-[rgb(23,13,242)] md:bg-white">
        <div className="w-auto">
          <div className="h-full flex items-center">
            <span className="text-white md:hidden">Blog</span>
            <span className="hidden md:inline-block">All Posts</span>
          </div>
        </div>

        <div className="self-center">
          <Link
            href=""
            className="inline-block px-8 py-2 border border-[rgb(23,13,242)]"
          >
            <span className="text-white md:text-[rgb(23,13,242)]">
              Log in/ Sign Up
            </span>
          </Link>
        </div>
      </div>

      <div className="">
        <div className="flex flex-col gap-y-7 md:mt-5 md:w-[95%] md:mx-auto">
          {blogs.length > 0 && blogs.map((_, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row"
            >
              <div className="basis-1/2 ">
                <Image
                  src={_.blogImage as string}
                  layout="responsive"
                  width={443}
                  height={443}
                  alt="form-listings-to-key-img"
                  className="h-full"
                />
              </div>
              <div className="basis-1/2 px-9 py-6">
                <div className="flex justify-between pb-3">
                  <div className="mr-[2.43rem] flex justify-between">
                    <div className="self-center">
                      <AvatarIcon className="h-8 w-8" />
                    </div>

                    <div className="flex flex-col ml-1">
                      <div className="flex text-xs">
                        <span>{_.author}</span>
                        <span className="self-center ml-1">
                          <Crown className="h-3 w-3" />
                        </span>
                      </div>
                      <div className="flex text-xs">
                        <span className="self-center">May 25</span>
                        <span className="self-center">
                          <Dot />
                        </span>
                        <span className="self-center">{_.readingTime} min</span>
                      </div>
                    </div>
                  </div>
                  <div className="ml-auto cursor-pointer">
                    <EllipsisVertical />
                  </div>
                </div>
                <div className="group">
                  <div className="group-hover:text-[rgb(23,13,242)] transition-all">
                    <Link href={`blog/${_.id}`}>
                      <p className="text-[1.8rem] font-normal font-syne">
                        {_.blogTopic}
                      </p>
                    </Link>
                  </div>
                  <div className="line-clamp-3 mt-4 cursor-pointer group-hover:text-[rgb(23,13,242)]">
                    <p className="font-questrial">
                      {_.blogContents1}
                    </p>
                  </div>
                </div>
                <div className="pt-3 mt-11 text-xs">
                  <div className="mb-4 border-t-[2px] border-[rgb(161,156,161)]" />
                  <div className="flex justify-between">
                    <div className="flex gap-x-4 text-xs">
                      <span>{_.views} views</span>
                      <span className="cursor-pointer hover:text-[rgb(23,13,242)] transition-all">
                        {_.comments?.length} comments
                      </span>
                    </div>
                    <div className="flex items-center cursor-pointer">
                      <span className="ml-2">{_.likes}</span>
                      <Heart
                        onClick={() => setHeart((prevVal) => !prevVal)}
                        className={`w-4 h-4 ml-1 ${
                          heart && "text-red-600 fill-red-600"
                        } transition-all`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Blog;
