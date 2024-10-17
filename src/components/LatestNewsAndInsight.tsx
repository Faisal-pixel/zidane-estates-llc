"use client";
import { fadeInAnimation } from "@/app/animation";
import LCardImg from "@/images/lCard.jpg";
import { LCard } from "@/types";
import { motion } from "framer-motion";
import LCards from "./lCards";
import WrapperContainer from "./WrapperContainer";

const LatestNewsAndInsight = () => {
  const { inView, initial, transition } = fadeInAnimation;

  const cards: LCard[] = [
    {
      imageUrl: LCardImg,
      cardTopic: "From listings to Keys: Your path to Homeownership",
      cardDescription:
        "Are you dreaming of holding the keys to your own home one day? The journey from perusing listings to unlocking the door to your new home...",
      numberOfViews: 4,
      alt: "lCard",
    },
    {
      imageUrl: LCardImg,
      cardTopic: "Maximizing Your Rental Property Income: Expert Tips",
      cardDescription:
        "Investing in rental properties can be a lucrative business venture, but maximizing your rental property income ",
      numberOfViews: 2,
      alt: "lCard",
    },
    {
      imageUrl: LCardImg,
      cardTopic: "Unlocking the Secrets of Real Estate Investment Success",
      cardDescription:
        "Are you looking to unlock the secrets of real estate investment success? Whether you are a seasoned ",
      numberOfViews: 2,
      alt: "lCard",
    },
  ];

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
          {cards.map((card, index) => (
            <LCards key={index} {...card} />
          ))}
        </div>
      </WrapperContainer>
    </motion.section>
  );
};

export default LatestNewsAndInsight;
