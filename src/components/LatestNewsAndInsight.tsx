'use client'
import React from "react";
import { LCard } from "@/types";
import LCards from "./lCards";
import { motion } from 'framer-motion';

type Props = {
  cards: LCard[];
  headingTextStyle?: string;
  initial?: {
    opacity: number;
  };
  whileInView?: {
    opacity: number;
  };
  transition?: {
    duration: number;
  };
};

const LatestNewsAndInsight = ({ cards, headingTextStyle, ...props }: Props) => {
  return (
    <section
      id="latest-news-and-insight"
      className="max-w-[90%] mx-auto md:max-w-full"
    >
      <motion.div {...props} className={headingTextStyle}>
        <h2 className="">LATEST NEWS & INSIGHTS</h2>
      </motion.div>

      <div className="flex flex-col space-y-6 md:space-y-0 md:gap-x-6 md:flex-row">
        {cards.map((card, index) => (
          <LCards key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default LatestNewsAndInsight;
