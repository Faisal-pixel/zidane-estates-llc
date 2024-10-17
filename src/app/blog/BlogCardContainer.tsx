import Link from "next/link";
import { Blog } from "./types";

function BlogCardContainer({
  blog,
  children,
}: {
  blog: Blog;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={`/blog/${blog.id}`}
      className="flex border group border-[#FFEBFFBF] flex-col md:flex-row gap-3"
    >
      {children}
    </Link>
  );
}

export default BlogCardContainer;
