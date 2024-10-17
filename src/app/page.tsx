"use client";
import Hero from "@/components/Hero";
import LatestNewsAndInsight from "@/components/LatestNewsAndInsight";
import ScheduleAConsolation from "@/components/ScheduleAConsolation";

export default function Home() {
  return (
    <>
      <head>
        <title>Home | Zidane Estates LLC</title>
      </head>

      <div className=" my-16">
        <Hero />
        <LatestNewsAndInsight />
        <ScheduleAConsolation />
        {/* <FeaturedListings /> */}
      </div>
    </>
  );
}
