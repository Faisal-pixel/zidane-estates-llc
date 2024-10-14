"use client";
import {
  getAllBlogDocuments,
  getBlogFromFirestore,
  getUserFromFirestore,
} from "@/lib/firebase";
import React, { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Blog } from "../types";
import { TUser } from "@/types";
import {
  Camera,
  EllipsisVertical,
  Eye,
  Facebook,
  Heart,
  Linkedin,
  LinkIcon,
  MessageSquare,
  Smile,
  Video,
} from "lucide-react";
import { AvatarIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import BlogHeaderInfo from "@/components/blog_page/BlogHeaderInfo";
import { Gif } from "react-flaticons";

const paddingSet60px = "sm:px-[60px]";

const BlogPage = ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const [blogDetails, setBlogDetails] = useState<Blog | null>(null);
  const [userDetails, setUserDetails] = useState<TUser | null>(null);
  const [heart, setHeart] = useState(false);
  const [blogs, setBlogs] = useState<Blog[] | []>([]);
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [commentText, setCommentText] = useState("");

  useEffect(() => {
    if (!id) return;
    const getBlog = async () => {
      const blog = await getBlogFromFirestore(id);
      console.log(blog);
      const user = await getUserFromFirestore(blog?.authorId as string);
      setBlogDetails(blog as Blog);
      setUserDetails(user ?? null);
    };
    getBlog();
  }, [id]);

  useEffect(() => {
    const getBlogs = async () => {
      // fetch blogs
      const response = await getAllBlogDocuments();
      setBlogs(response);
    };

    getBlogs();
  }, []);

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
          <>
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
                      src={blogDetails.blogImage as string}
                      alt="form-listings-to-key-img"
                      width={443}
                      height={443}
                      className="w-full"
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
                        <Link
                          href={
                            (blogDetails.blogUrls?.facebook as string) || ""
                          }
                        >
                          <Facebook
                            strokeWidth="0.5px"
                            className="h-[19px] w-[19px] text-sm font-light fill-black"
                          />
                        </Link>
                        <Link
                          href={
                            (blogDetails.blogUrls?.facebook as string) || ""
                          }
                        >
                          <FontAwesomeIcon
                            size="xs"
                            icon={faXTwitter}
                            className="h-[19px] w-[19px]"
                          />
                        </Link>
                        <Link
                          href={
                            (blogDetails.blogUrls?.facebook as string) || ""
                          }
                        >
                          <Linkedin
                            strokeWidth="0.5px"
                            className="h-[19px] w-[19px] text-sm font-light fill-black"
                          />
                        </Link>
                        <Link
                          href={
                            (blogDetails.blogUrls?.facebook as string) || ""
                          }
                        >
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
                        <span className="ml-[22px]">
                          {blogDetails.comments?.length} comments
                        </span>
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
            <div className="w-[90%] mx-auto">
              <div className="pt-[23px]">
                <div className="flex justify-between text-lg font-syne">
                  <h2>Recent Posts</h2>
                  <Link href="/blog">
                    <span className="cursor-pointer"> See All</span>
                  </Link>
                </div>
              </div>

              <div className="py-5">
                <div className="flex space-x-[34px]">
                  {blogs.map((_) => (
                    <div
                      key={_.id}
                      className={`${_.id === blogDetails.id && "hidden"}`}
                    >
                      <div className="max-w-[290px] border border-[rgb(255,235,255)]">
                        <div>
                          <Image
                            src={_.blogImage as string}
                            alt="blog-image"
                            width={443}
                            height={443}
                          />
                        </div>

                        <div className="p-[24px]">
                          <div>
                            <Link href={`${_.id}`}>
                              <p className="text-[18px] hover:text-[rgb(23,13,242)] font-syne">
                                {_.blogTopic}
                              </p>
                            </Link>
                          </div>

                          <div className="mt-3">
                            <span className="block h-[1px] bg-[hsl(0,0,0)] opacity-20"></span>
                            <div className="pt-[15px]">
                              <div className="flex text-xs">
                                <span className="flex">
                                  <Eye className="w-4 h-4" />
                                  <span className="ml-[6px]">{_.views}</span>
                                </span>
                                <span className="flex ml-[16px]">
                                  <MessageSquare className="w-4 h-4" />
                                  <span className="ml-[6px]">
                                    {_.comments?.length}
                                  </span>
                                </span>

                                <span className="ml-auto">
                                  <Heart className={`w-4 h-4 transition-all`} />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* COMMENT SECTION */}
            <div className="w-[90%] mx-auto">
              <div className="max-w-[740px] mx-auto mt-10 pt-5 pb-[50px] px-[30px]">
                <div className=" mb-4">
                  <h2 className="font-syne text-base">
                    {blogDetails.comments?.length + " Comments"}
                  </h2>
                </div>

                <div>
                  <hr className="max-w-full border border-[rgba(0,0,0,0.2)] mb-[36px]" />
                  <div className="pb-2 flex flex-col h-full w-full">
                    <div className="bg-clip-content bg-transparent border relative w-full">
                      {setShowCommentInput && (
                        <>
                          <div className="border border-black border-transparent bg-clip-content relative w-full focus:border-[rgba(0,0,0,0.3)]">
                            <div className="px-4 pt-4">
                              <div className="flex flex-col overflow-hidden">
                                <div className="contain-inline-size flex flex-1 flex-col h-full relative">
                                  <div className="flex flex-1 flex-col text-black text-base h-full w-full">
                                    <p
                                      className="text-black font font-questrial text-base"
                                      data-placeholder="Write a comment..."
                                    ></p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="py-3 px-4 justify-between w-full flex items-center">
                              <div className="min-h-[25px] min-w-6 flex grow items-center">
                                <div className="flex items-center gap-5">
                                  <div className="block text-center relative">
                                    <Smile />
                                  </div>
                                  <div className="block text-center relative">
                                    <Camera />
                                  </div>
                                  <div className="block text-center relative">
                                    <Gif />
                                  </div>
                                  <div className="block text-center relative">
                                    <Video />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="items-start flex justify-between mt-4">
                            <div className="flex items-center text-black text-sm gap-[6px] overflow-hidden"/>
                            <div className="flex max-w-[740px]">
                              <div className="flex gap-3 justify-end w-full">
                                <button
                                  onClick={() => setShowCommentInput(false)}
                                    className="border-none text-[rgb(23,13,242)] cursor-pointer font-questrial text-sm overflow-hidden px-4 py-[6px]"
                                >
                                  Cancel
                                </button>
                                <button></button>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                      {/* SHOW COMMENT BUTTON BELOW WILL SHOW WHEN IT IS FALSE */}
                      {showCommentInput === false && (
                        <button
                          data-hook="comment-box-placeholder"
                          className="flex cursor-pointer p-4 w-full h-[56px]"
                          onClick={() => setShowCommentInput(true)}
                        >
                          <div className="overflow-hidden w-full">
                            <div className="text-black font-questrial text-base text-ellipsis whitespace-nowrap">
                              <span className=""> Write a comment... </span>
                            </div>
                          </div>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </motion.section>
    </>
  );
};

export default BlogPage;
