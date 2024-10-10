"use client";
import { getBlogFromFirestore, getUserFromFirestore } from "@/lib/firebase";
import React, { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Blog } from "../types";
import { TUser } from "@/types";
import { EllipsisVertical, Facebook, Heart, Linkedin, LinkIcon } from "lucide-react";
import { AvatarIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import KeyImg from "@/images/key.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import BlogHeaderInfo from "@/components/blog_page/BlogHeaderInfo";

const paddingSet60px = "sm:px-[60px]";

const BlogPage = ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const [blogDetails, setBlogDetails] = useState<Blog | null>(null);
  const [userDetails, setUserDetails] = useState<TUser | null>(null);
  const [heart, setHeart] = useState(false);

  useEffect(() => {
    if (!id) return;
    const getBlog = async () => {
      const blog = await getBlogFromFirestore(id);
      console.log(blog);
      const user = await getUserFromFirestore(blog?.userId as string);
      setBlogDetails(blog as Blog);
      setUserDetails(user ?? null);
    };
    getBlog();
  }, [id]);

  //   if (!id || !blogDetails) return <div>We could not find the this page</div>;

  return (
    <>
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
        className="md:mx-[8rem] xl:mx-[10rem]"
      >
        <div className="flex justify-between px-5 md:px-0 py-2 bg-[rgb(23,13,242)] md:bg-white">
          <div className="w-auto">
            <div className="h-full flex items-center">
              <span className="text-white md:hidden">Post</span>
              <span className="hidden md:inline-block">All Posts</span>
            </div>
          </div>

          <div className="self-center">
            <Link
              href=""
              className="inline-block px-8 py-2 border border-[rgb(23,13,242)]"
            >
              <span className="text-white font-semibold font-questrial md:text-[rgb(23,13,242)]">
                Sign Up
              </span>
            </Link>
          </div>
        </div>

        {!id || !blogDetails ? (
          <div>We could not find the this page</div>
        ) : (
          <div className="border py-[60px] border-[rgb(255,235,255)]">
            {/* USER INFORMATION AND BLOG TOPIC */}
            <div className={paddingSet60px}>
              <div className="w-[90%] mx-auto">
                <div className="block md:hidden">
                    <BlogHeaderInfo />
                </div>

                {/* BLOG HEADER INFO ON LARGE SCREEN BELOW */}
                <div className="hidden md:flex">
                  <div className="flex">
                    {/* AVATAR ICON and USERNAME */}
                    <span className="flex self-center">
                      <span>
                        <AvatarIcon className="h-8 w-8" />
                      </span>
                      <span className="self-center pl-[12px] text-sm font-syne">
                        {userDetails?.name}
                      </span>
                    </span>

                    <span className="self-center mx-2 h-[3px] w-[3px] bg-black rounded-full"></span>

                    <span className="self-center text-sm font-questrial">
                      May 25
                    </span>

                    <span className="self-center mx-2 h-[3px] w-[3px] bg-black rounded-full"></span>

                    <span className="self-center text-sm font-questrial">
                      {blogDetails.readingTime} min read
                    </span>
                  </div>
                  {/* VERTICAL ELIPSES */}
                  <div className="ml-auto self-center cursor-pointer">
                    <EllipsisVertical />
                  </div>
                </div>
                <div className="mt-[27px]">
                  <h1 className="text-[28px] font-syne">
                    {blogDetails.blogTopic}
                  </h1>
                </div>
              </div>
            </div>

            {/* BLOG CONTENT */}
            <div className={paddingSet60px}>
              <div className="w-[90%] mx-auto">
                <div className="mt-[27px]">
                  <p className="text-[18px] font-syne">
                    {blogDetails.blogContents1}
                  </p>
                </div>
              </div>
            </div>
            {/* BLOG IMAGE */}
            {/* Later on we can check if there is an image, if there is reder the below, if not dont render */}
            <div className={`${paddingSet60px} my-3`}>
              <div className="w-[90%] mx-auto">
                <figure>
                  <Image
                    src={KeyImg}
                    alt="form-listings-to-key-img"
                    className="h-full"
                  />
                </figure>
              </div>
            </div>

            <div className={paddingSet60px}>
              <div className="w-[90%] mx-auto">
                <p className="text-[18px] font-syne">
                  {blogDetails.blogContents2}
                </p>
              </div>
            </div>
            {/* FOOTER */}
            <div className={paddingSet60px}>
              <div className="w-[90%] mx-auto">
                <div className="mt-[50px]">
                  <span className="h-[1px] bg-[rgb(255,235,255)] block"></span>
                  <div className="h-[60px] flex flex-col justify-center">
                    <div className="flex gap-x-[30px]">
                      <Link href={blogDetails.blogUrls.facebook}>
                        <Facebook
                          strokeWidth="0.5px"
                          className="h-[19px] w-[19px] text-sm font-light fill-black"
                        />
                      </Link>
                      <Link href={blogDetails.blogUrls.facebook}>
                        <FontAwesomeIcon
                          size="xs"
                          icon={faXTwitter}
                          className="h-[19px] w-[19px]"
                        />
                      </Link>
                      <Link href={blogDetails.blogUrls.facebook}>
                        <Linkedin
                          strokeWidth="0.5px"
                          className="h-[19px] w-[19px] text-sm font-light fill-black"
                        />
                      </Link>
                      <Link href={blogDetails.blogUrls.facebook}>
                        <LinkIcon
                          strokeWidth="2px"
                          className="h-[19px] w-[19px] "
                        />
                      </Link>
                    </div>
                  </div>
                  <span className="h-[1px] bg-[rgb(255,235,255)] block"></span>
                  <div className="flex pt-[18px] text-sm">
                    <div className="flex">
                    <span>{blogDetails.views} views</span>
                    <span className="ml-[22px]">{blogDetails.comments.length} comments</span>
                    </div>
                    <div className="ml-auto flex items-center cursor-pointer">
                      <span className="ml-2"></span>
                      <Heart
                        onClick={() => setHeart((prevVal) => !prevVal)}
                        className={`w-4 h-4 ${
                          heart && "text-red-600 fill-red-600"
                        } transition-all`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </motion.section>
    </>
  );
};

export default BlogPage;
