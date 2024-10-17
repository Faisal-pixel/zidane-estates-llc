"use client";
import { fadeInAnimation } from "@/app/animation";
import { Blog } from "@/app/blog/types";
import { motion } from "framer-motion";
import LCards from "./lCards";
import WrapperContainer from "./WrapperContainer";

const LatestNewsAndInsight = ({ blogs }: { blogs: Blog[] }) => {
  const { inView, initial, transition } = fadeInAnimation;

  return (
    <motion.section
      id="latest-news-and-insight"
      initial={initial}
      whileInView={inView}
      transition={transition}
    >
      <WrapperContainer>
        <h2 className="text-[27px] md:text-[64px]  my-5 md:my-10 font-syne">
          LATEST NEWS & INSIGHTS
        </h2>

        <div className="flex flex-col space-y-6 md:space-y-0 md:gap-x-6 md:flex-row">
          {blogs.map((blog, index) => (
            <LCards key={index} blog={blog} />
          ))}
        </div>
      </WrapperContainer>
    </motion.section>
  );
};

export default LatestNewsAndInsight;
