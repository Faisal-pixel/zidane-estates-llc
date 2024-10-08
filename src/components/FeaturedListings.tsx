'use client'
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import FirstCarouselImg from "@/images/one.jpg";
import SecondCarouselImg from "@/images/two.jpg";
import ThirdCarouselImg from "@/images/three.jpg";
import FourthCarouselImg from "@/images/four.jpg";
import FifthCarouselImg from "@/images/five.jpg";
import { motion } from 'framer-motion';

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

type Props = {
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

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

const FeaturedListings = ({ headingTextStyle, ...props }: Props) => {
  return (
    <section id="featured-listings" className="mx-4 md:mx-0">
      <motion.div {...props} className={headingTextStyle}>
        <h2>FEATURED LISTINGS</h2>
      </motion.div>
      <div>
        <CarouselSize />
      </div>
    </section>
  );
};

export default FeaturedListings;
