"use client";
import { Card, CardContent } from "@/components/ui/card";
import FifthCarouselImg from "@/images/apartment5.webp";
import FourthCarouselImg from "@/images/apartment4.webp";
import FirstCarouselImg from "@/images/apartment1.jpg";
import ThirdCarouselImg from "@/images/apartment3.webp";
import SecondCarouselImg from "@/images/apartment2.webp";
import { motion } from "framer-motion";

import { fadeInAnimation } from "@/app/animation";
import WrapperContainer from "./WrapperContainer";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useResponsive } from "@/hooks/useResponsive";

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
  const divRef = useRef<HTMLDivElement | null>(null);
  const [trans, setTrans] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const { isXs, isSm, isMd, isLg } = useResponsive();
  const totalItems = carouselImages.length;

  useEffect(() => {
    const getItemsPerView = () => {
      setTrans(0);
      setCurrentIndex(0);
      if (isLg) {
        setItemsPerView(3);
      } else if (isMd) {
        setItemsPerView(2);
      } else if (isSm || isXs) {
        setItemsPerView(2);
      } else {
        setItemsPerView(4);
      }
    };
    getItemsPerView();

    window.addEventListener("resize", getItemsPerView);

    return () => window.removeEventListener("resize", getItemsPerView);
  }, [isXs, isSm, isMd, isLg]);

  const handlePrev = () => {
    if (currentIndex > 0 && divRef.current) {
      const cardWidth = divRef.current?.offsetWidth;
      setCurrentIndex((prev) => prev - 1);
      setTrans((prev) => prev + cardWidth / itemsPerView);
    }
  };

  const handleNext = () => {
    if (currentIndex < totalItems - itemsPerView && divRef.current) {
      const cardWidth = divRef.current?.offsetWidth;
      setCurrentIndex((prev) => prev + 1);
      setTrans((prev) => prev - cardWidth / itemsPerView);
    }
  };
  return (
    <>
      <div className="relative">
        <div className="w-full overflow-x-scroll scrollbar-hide">
          <div
            className="flex"
            ref={divRef}
            style={{
              transform: `translateX(${trans}px)`,
              transition:
                "transform 0.2s cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            }}
          >
            {carouselImages.map((_, index) => (
              <div
                className="p-1 ml-[8px] lg:ml-[18px] xl:ml-7 first-of-type:ml-0 shrink-0 grow-0 basis-[calc(50%-8px)] lg:basis-[calc(33.3333%-18px)] xl:basis-[calc(25%-28px)]"
                key={index}
              >
                <Card>
                  <CardContent className="flex items-center justify-center ">
                    <div
                      className="relative group w-full h-[15rem] md:h-[25rem] lg:h-[36.75rem] overflow-hidden bg-cover bg-no-repeat bg-center"
                      style={{
                        backgroundImage: `url(${_.imageUrl})`,
                      }}
                    >
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition-opacity duration-500 ease-in-out"></div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        {currentIndex > 0 && (
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-3 -translate-y-1/2"
          >
            <ChevronLeft size={46} strokeWidth={1} color="white" />
          </button>
        )}

        {currentIndex < totalItems - itemsPerView && (
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-3 -translate-y-1/2"
          >
            <ChevronRight size={46} strokeWidth={1} color="white" />
          </button>
        )}
      </div>
    </>
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
