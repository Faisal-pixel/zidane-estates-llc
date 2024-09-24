import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import FirstCarouselImg from "@/images/one.jpg";
import SecondCarouselImg from "@/images/two.jpg";
import ThirdCarouselImg from "@/images/three.jpg";
import FourthCarouselImg from "@/images/four.jpg";
import FifthCarouselImg from "@/images/five.jpg";

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
]

type Props = {
  headingTextStyle?: string;
}

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

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
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center ">
                <div className="relative group w-full h-[36.75rem] overflow-hidden bg-cover bg-no-repeat" style={{
                  backgroundImage: `url(${_.imageUrl})`
                }}>
                
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
  )
}


const FeaturedListings = ({headingTextStyle}: Props) => {
  return (
    <section id='featured-listings'>
      <div className={headingTextStyle}>
            <h2>FEATURED LISTINGS</h2>
        </div>
      <div>
        <CarouselSize />
      </div>
    </section>
  )
}

export default FeaturedListings;