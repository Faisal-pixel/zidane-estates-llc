import SignUpButton from "@/components/SignUpButton";
import WrapperContainer from "@/components/WrapperContainer";
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import NewsImg from "../../images/key.jpg";
import NewsImg2 from "../../images/lCard.jpg";
import NewsImg3 from "../../images/money.jpg";
import { BLOGS_COLLECTION_NAME, db } from "../../lib/firebase";
import { formatBlogDate } from "../utils/formatDate";
import BlogCardContainer from "./BlogCardContainer";
import { Blog } from "./types";

const blogContent: Blog[] = [
  {
    id: "1",
    title: "Creating Tomorrow's Business Solutions Today",
    introductory:
      "In today's fast-paced business landscape, staying ahead of the curve is crucial for success. NextGen",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim natus est accusantium unde deleniti autem, labore quo, doloremque itaque ad a sit amet reprehenderit. Eligendi molestiae necessitatibus tempora at doloremque officia pariatur corporis iste cum, ipsa consequuntur, aperiam obcaecati eius? Dolores explicabo laboriosam provident officiis debitis magnam, tempora aperiam odit ab ex magni iusto minus, atque architecto! Non ipsam quasi amet doloribus corrupti voluptatem neque id nesciunt ad eum. Consequatur temporibus dolore voluptas, delectus dolorem, qui quas fuga voluptate quod iste vel impedit. Dicta repellat aspernatur quasi ipsum doloribus blanditiis mollitia ab nisi, voluptatem nam, optio voluptatum veritatis, fugit ex?",
    image: NewsImg,
    timestamp: "2022-10-01T10:00:00Z",
    views: 1,
    likes: 1,
    comments: [],
  },
  {
    id: "2",
    title: "Unless the power of tech for business success",
    introductory:
      "In today's rapidly evolving business landscape, staying ahead of the competition requires a harmonious blend",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim natus est accusantium unde deleniti autem, labore quo, doloremque itaque ad a sit amet reprehenderit. Eligendi molestiae necessitatibus tempora at doloremque officia pariatur corporis iste cum, ipsa consequuntur, aperiam obcaecati eius? Dolores explicabo laboriosam provident officiis debitis magnam, tempora aperiam odit ab ex magni iusto minus, atque architecto! Non ipsam quasi amet doloribus corrupti voluptatem neque id nesciunt ad eum. Consequatur temporibus dolore voluptas, delectus dolorem, qui quas fuga voluptate quod iste vel impedit. Dicta repellat aspernatur quasi ipsum doloribus blanditiis mollitia ab nisi, voluptatem nam, optio voluptatum veritatis, fugit ex?",
    image: NewsImg2,
    timestamp: "2022-10-01T10:00:00Z",
    views: 1,
    likes: 1,
    comments: [],
  },
  {
    id: "1",
    title: "Revolutionize your business with cutting edge tech solutions",
    introductory:
      "In today's fast-paced business landscape, staying ahead of the curve is essential to success. Embracing",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim natus est accusantium unde deleniti autem, labore quo, doloremque itaque ad a sit amet reprehenderit. Eligendi molestiae necessitatibus tempora at doloremque officia pariatur corporis iste cum, ipsa consequuntur, aperiam obcaecati eius? Dolores explicabo laboriosam provident officiis debitis magnam, tempora aperiam odit ab ex magni iusto minus, atque architecto! Non ipsam quasi amet doloribus corrupti voluptatem neque id nesciunt ad eum. Consequatur temporibus dolore voluptas, delectus dolorem, qui quas fuga voluptate quod iste vel impedit. Dicta repellat aspernatur quasi ipsum doloribus blanditiis mollitia ab nisi, voluptatem nam, optio voluptatum veritatis, fugit ex?",
    image: NewsImg3,
    timestamp: "2022-10-01T10:00:00Z",
    views: 1,
    likes: 1,
    comments: [],
  },
];

async function Page() {
  const getBlogs = async () => {
    const blogsCollection = collection(db, BLOGS_COLLECTION_NAME);
    const querySnapshot = await getDocs(blogsCollection);
    const blogData: Blog[] = [];

    querySnapshot.forEach((doc) => {
      blogData.push({ ...doc.data(), id: doc.id } as Blog);
    });

    return blogData;
  };
  const items = await getBlogs();

  const blogs = items && items.length > 0 ? items : blogContent;

  return (
    <>
      <head>
        <title>Blog | Zidane Estates LLC</title>
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

          <div className="mt-8 flex flex-col gap-7">
            {blogs.map((content) => (
              <BlogCardContainer key={content.id} blog={content}>
                <div className="w-full md:w-[48%] h-1/2 md:h-full  ">
                  <Image
                    src={content.image}
                    alt="image"
                    height={100}
                    width={100}
                    className="w-full h-full object-cover max-h-[340px]"
                  />
                </div>

                <div className="md:w-1/2 py-5 px-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-9 p-2 bg-gray-500 text-gray-300 rounded-full"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div className="flex flex-col items-center p-0 gap-0 m-0">
                        <p className="self-start text-xs font-medium cursor-pointer">
                          techvanb
                        </p>
                        <span className="flex items-center gap-2 text-xs font-medium">
                          <p>
                            {formatBlogDate(content.timestamp).formattedDate}
                          </p>
                          <p>.</p>
                          <p>
                            {formatBlogDate(content.timestamp).timeAgoString}
                          </p>
                        </span>
                      </div>
                    </div>

                    <h1 className="text-[22px] md:text-[28px] leading-9 text-[#343434] font-light mb-3 font-syne group-hover:text-primary transition-all duration-150 ease-in-out ">
                      {content.title}
                    </h1>

                    <h5 className="text-[#343434] text-base w-[90%] transition-all duration-150 ease-in-out cursor-pointer group-hover:text-primary">
                      {content.introductory.length > 150
                        ? `${content.introductory.substring(0, 150)}...`
                        : content.introductory}
                    </h5>
                  </div>

                  <div className="flex items-center justify-between border-t border-t-gray-400 pt-5">
                    <div className="flex gap-3 text-xs">
                      <p className="cursor-pointer">{content.views} views</p>
                      <p className="cursor-pointer">
                        {content.comments.length ?? 0} comments
                      </p>
                    </div>
                    <div className="flex items-center gap-5">
                      <div className="flex item-center justify-center gap-1 text-gray-600 cursor-pointer">
                        <p className="text-sm text-white"> {content.likes} </p>
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
                </div>
              </BlogCardContainer>
            ))}
          </div>
        </div>
      </WrapperContainer>
    </>
  );
}

export default Page;
