import Hero from "@/components/Hero";
import LatestNewsAndInsight from "@/components/LatestNewsAndInsight";
import { LCard } from "@/types";
import LCardImg from "@/images/lCard.jpg";
import ScheduleAConsolation from "@/components/ScheduleAConsolation";
import BookOnline from "./book-online/page";
import FeaturedListings from "@/components/FeaturedListings";

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

const headingTextStyle = "text-[40px] text-center pl-[0.7rem] mt-16 mb-14 md:text-[64px] md:text-left";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <LatestNewsAndInsight cards={cards} headingTextStyle={headingTextStyle} />
      <ScheduleAConsolation headingTextStyle={headingTextStyle}/>
      <FeaturedListings headingTextStyle={headingTextStyle}/>
    </div>
  );
}
