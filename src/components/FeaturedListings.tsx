"use client";
import { Card, CardContent } from "@/components/ui/card";
import FifthCarouselImg from "@/images/five.jpg";
import FourthCarouselImg from "@/images/four.jpg";
import FirstCarouselImg from "@/images/one.jpg";
import ThirdCarouselImg from "@/images/three.jpg";
import SecondCarouselImg from "@/images/two.jpg";
import { motion } from "framer-motion";

import { fadeInAnimation } from "@/app/animation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import WrapperContainer from "./WrapperContainer";

const carouselImages = [
  {
    imageUrl: FirstCarouselImg.src,
    alt: "carouselImage",
  },
  {
    imageUrl: SecondCarouselImg.src,
    alt: "carouselImage",
  },
  {
    imageUrl: ThirdCarouselImg.src,
    alt: "carouselImage",
  },
  {
    imageUrl: FourthCarouselImg.src,
    alt: "carouselImage",
  },
  {
    imageUrl: FifthCarouselImg.src,
    alt: "carouselImage",
  },
];

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {carouselImages.map((_, index) => (
          <CarouselItem key={index} className="basis-1/2 md:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center ">
                  <div
                    className="relative group w-full h-[15rem] md:h-[25rem] lg:h-[36.75rem] overflow-hidden bg-cover bg-no-repeat"
                    style={{
                      backgroundImage: `url(${_.imageUrl})`,
                    }}
                  >
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition-opacity duration-500 ease-in-out"></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

const FeaturedListings = () => {
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
          FEATURED LISTINGS
        </h2>

        <CarouselSize />
      </WrapperContainer>
    </motion.section>
  );
};

export default FeaturedListings;
