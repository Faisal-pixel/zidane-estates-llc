// This is basically the cards in the Latest News And Insights section
'use client'
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Eye, Heart } from "lucide-react";

type Props = {
  imageUrl: string | StaticImageData;
  cardTopic: string;
  cardDescription: string;
  numberOfViews: number;
  alt: string;
};

const LCards = ({
  imageUrl,
  cardTopic,
  cardDescription,
  numberOfViews,
  alt,
}: Props) => {
    const [heart, setHeart] = useState(false);
  return (
    <div className="border basis-1/3 border-blue-500 sm:mx-24 md:mx-0">
      <div className="flex gap-x-6">
        <Image src={imageUrl} className="w-full" alt={alt} width={443} height={443} />
      </div>

      <div className="flex flex-col px-6 pt-7 pb-6">
        <div className="flex mr-11 pb-3">
          <span className="text-xs">techvanb</span>
        </div>

        <div className="hover:text-blue-600 hover:cursor-pointer line-clamp-4 mb-3">
          <p className=" text-[22px] mb-2">{cardTopic}</p>
          <div className="text-base">
            <span>{cardDescription}</span>
          </div>
        </div>

        <div className="flex justify-between border-t border-t-black pt-3 ">
          <div className="flex">
            <Eye className="mr-[0.5rem] w-5 h-5" />
            <span className="text-sm self-center">{numberOfViews}</span>
          </div>
          <div className="flex items-center">
            <span className="ml-2"></span>
            <Heart onClick={() => setHeart((prevVal) => !prevVal)} className={`w-4 h-4 ${heart && "text-red-600 fill-red-600"} transition-all`}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LCards;
