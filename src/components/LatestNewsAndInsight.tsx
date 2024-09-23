import React from "react";
import { LCard } from "@/types";
import LCards from "./lCards";

type Props = {
  cards: LCard[];
  headingTextStyle?: string;
};

const LatestNewsAndInsight = ({ cards, headingTextStyle }: Props) => {
  return (
    <section id="latest-news-and-insight">
      <div className={headingTextStyle}>
        <h2 className="">LATEST NEWS & INSIGHTS</h2>
      </div>

      <div className="flex gap-x-6">
        {cards.map((card, index) => (
          <LCards key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default LatestNewsAndInsight;
