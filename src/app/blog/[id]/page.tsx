import { formatBlogDate } from "@/app/utils/formatDate";
import InViewWrapper from "@/app/utils/InViewWrapper";
import SignUpButton from "@/components/SignUpButton";
import WrapperContainer from "@/components/WrapperContainer";
import { BLOGS_COLLECTION_NAME, db } from "@/lib/firebase";
import { blogService } from "@/lib/firebase/blogService";
import { doc, getDoc } from "firebase/firestore";
import { NotFoundBoundary } from "next/dist/client/components/not-found-boundary";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import CopyBlogButton from "../CopyBlogButton";
import { Blog } from "../types";
import Comment from "./comments";
import LikeButton from "./likes";

export default async function BlogPage({ params }: { params: { id: string } }) {
  const id = params.id;
  if (!id) {
    return <div>Blog ID not found</div>;
  }

  const blogRef = doc(db, BLOGS_COLLECTION_NAME, id);
  const blogDoc = await getDoc(blogRef);

  if (!blogDoc.exists())
    return <NotFoundBoundary>Invalid Blog</NotFoundBoundary>;

  const { handleIncreaseView } = blogService();

  await handleIncreaseView(blogDoc.id);

  const blog = {
    ...blogDoc.data(),
    id: blogDoc.id,
  } as Blog;

  const headersList = headers();

  const header_url = headersList.get("x-url") || "";

  return (
    <>
      <head>
        <title>{blog.title}</title>
      </head>

      <WrapperContainer>
        <div className="mt-5 md:mt-9 md:w-[85%] lg:w-[62%] mx-auto md:pb-20 pb-10 animate-fadeIn">
          <div className="flex items-center justify-between">
            <Link
              href={"/blog"}
              className="hover:text-primary transition-all duration-200 ease-in-out text-sm"
            >
              All Posts
            </Link>

            <SignUpButton />
          </div>

          <div className="border border-[#FFEBFFBF] mt-10 mb-4 py-12 ">
            <div className="w-[80%] mx-auto">
              <div className="flex gap-2 items-center p-2 mb-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-7 p-1 bg-[#a0a09f] text-[#cccccc] rounded-full"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="flex items-center p-0 gap-2 m-0">
                  <p className="self-start text-base font-medium cursor-pointer">
                    techvanb
                  </p>
                  <span className="flex items-center gap-2 text-sm font-light text-[#343434] ">
                    <p>{formatBlogDate(blog.timestamp).formattedDate}</p>
                    <p>.</p>
                    <p>{formatBlogDate(blog.timestamp).timeAgoString}</p>
                  </span>
                </div>
              </div>

              <h1 className="text-[22px] md:text-[28px] leading-9 text-[#343434] font-light mb-5 font-syne group-hover:text-primary transition-all duration-150 ease-in-out ">
                {blog.title}
              </h1>
              <p className="mt-5 text-[#343434] font-light leading-7 text-lg">
                {blog.introductory}
              </p>

              <Image
                src={blog.image}
                width={600}
                height={600}
                alt="news"
                priority
                className="h-[300px] md:h-[500px] w-full object-cover my-5"
              />

              <p className="mt-5 md:mt-10 text-[#343434] font-light leading-7 text-lg">
                {blog.content}
              </p>

              <div className="flex items-center gap-8 mt-4 border-y border-y-gray-400 py-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  viewBox="0 0 19 19"
                  role="img"
                  fill="#343434"
                  className="cursor-pointer hover:fill-primary transition-all duration-300 ease-in-out"
                >
                  <path d="M8.08865986,17 L8.08865986,10.2073504 L5.7890625,10.2073504 L5.7890625,7.42194226 L8.08865986,7.42194226 L8.08865986,5.08269399 C8.08865986,3.38142605 9.46779813,2.00228778 11.1690661,2.00228778 L13.5731201,2.00228778 L13.5731201,4.50700008 L11.8528988,4.50700008 C11.3123209,4.50700008 10.874068,4.94525303 10.874068,5.48583089 L10.874068,7.42198102 L13.5299033,7.42198102 L13.1628515,10.2073892 L10.874068,10.2073892 L10.874068,17 L8.08865986,17 Z"></path>
                </svg>
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#343434"
                  className="cursor-pointer hover:fill-primary transition-all duration-300 ease-in-out"
                >
                  <path d="M13.303 10.7714L19.1223 4H17.7433L12.6904 9.87954L8.65471 4H4L10.1028 12.8909L4 19.9918H5.37906L10.715 13.7828L14.977 19.9918H19.6317L13.3027 10.7714H13.303ZM11.4142 12.9692L10.7958 12.0839L5.87595 5.03921H7.9941L11.9645 10.7245L12.5829 11.6098L17.7439 18.9998H15.6258L11.4142 12.9696V12.9692Z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  viewBox="0 0 19 19"
                  role="img"
                  fill="#343434"
                  className="cursor-pointer hover:fill-primary transition-all duration-300 ease-in-out"
                >
                  <path d="M17,17 L13.89343,17 L13.89343,12.1275733 C13.89343,10.9651251 13.87218,9.47069458 12.2781416,9.47069458 C10.660379,9.47069458 10.4126568,10.7365137 10.4126568,12.0434478 L10.4126568,17 L7.30623235,17 L7.30623235,6.98060885 L10.2883591,6.98060885 L10.2883591,8.3495072 L10.3296946,8.3495072 C10.7445056,7.56190587 11.7585364,6.7312941 13.2709225,6.7312941 C16.418828,6.7312941 17,8.80643844 17,11.5041407 L17,17 Z M3.80289931,5.61098151 C2.80647978,5.61098151 2,4.80165627 2,3.80498046 C2,2.80903365 2.80647978,2 3.80289931,2 C4.79669898,2 5.60434314,2.80903365 5.60434314,3.80498046 C5.60434314,4.80165627 4.79669898,5.61098151 3.80289931,5.61098151 Z M2.24786773,17 L2.24786773,6.98060885 L5.35662096,6.98060885 L5.35662096,17 L2.24786773,17 Z"></path>
                </svg>

                <CopyBlogButton url={header_url} />
              </div>

              {/* <InViewWrapper
                className={`border-animate border-top  mt-7`}
                style={{ "--border-color": "#6B7280" }}
              ></InViewWrapper> */}

              <InViewWrapper
                className={`border-animate border-top py-5`}
                style={{ "--border-color": "#6B7280" }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex gap-3 text-xs">
                    <p className="cursor-pointer">{blog.views} views</p>
                    <p className="cursor-pointer">
                      {blog.comments.length} comments
                    </p>
                  </div>
                  <div className="flex items-center gap-5">
                    <LikeButton blog={blog} />
                  </div>
                </div>
              </InViewWrapper>
            </div>
          </div>

          <Link
            href={"/blog"}
            className="hover:text-primary transition-all flex justify-end w-full duration-200 ease-in-out text-sm"
          >
            See all
          </Link>

          <div className="border border-[#FFEBFFBF] my-5 pt-5 pb-10 ">
            <div className="w-[80%] mx-auto">
              <Comment blog={blog} />
            </div>
          </div>
        </div>
      </WrapperContainer>
    </>
  );
}
