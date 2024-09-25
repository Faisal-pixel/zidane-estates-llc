'use client'
import Hero from "@/components/Hero";
import LatestNewsAndInsight from "@/components/LatestNewsAndInsight";
import { LCard } from "@/types";
import LCardImg from "@/images/lCard.jpg";
import ScheduleAConsolation from "@/components/ScheduleAConsolation";
import FeaturedListings from "@/components/FeaturedListings";
import { easeOut } from "framer-motion";

const cards: LCard[] = [
  {
    imageUrl: LCardImg,
    cardTopic: "From listings to Keys: Your path to Homeownership",
    cardDescription: "Are you dreaming of holding the keys to your own home one day? The journey from perusing listings to unlocking the door to your new home...",
    numberOfViews: 4,
    alt: "lCard",
  },
  {
    imageUrl: LCardImg,
    cardTopic: "Maximizing Your Rental Property Income: Expert Tips",
    cardDescription: "Investing in rental properties can be a lucrative business venture, but maximizing your rental property income ",
    numberOfViews: 2,
    alt: "lCard",
  },
  {
    imageUrl: LCardImg,
    cardTopic: "Unlocking the Secrets of Real Estate Investment Success",
    cardDescription: "Are you looking to unlock the secrets of real estate investment success? Whether you are a seasoned ",
    numberOfViews: 2,
    alt: "lCard",
  },
];

const headingTextStyle = "text-[30px] sm:text-[40px] md:pl-[0.7rem] mt-16 mb-5 md:mb-14 md:text-[64px] text-left font-syne";
const initial = {
  opacity: 0
}

const whileInView={
  opacity: 1
}

const transition={
  duration: 2.5,
  easeOut
}

export default function Home() {
  return (
    <div className="">
      <Hero initial={initial} whileInView={whileInView} transition={transition} />
      <LatestNewsAndInsight initial={initial} whileInView={whileInView} transition={transition} cards={cards} headingTextStyle={headingTextStyle} />
      <ScheduleAConsolation initial={initial} whileInView={whileInView} transition={transition} headingTextStyle={headingTextStyle}/>
      <FeaturedListings initial={initial} whileInView={whileInView} transition={transition} headingTextStyle={headingTextStyle}/>
    </div>
  );
}
