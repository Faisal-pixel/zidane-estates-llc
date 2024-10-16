"use client";
import Link from "next/link";
import React from "react";
import CustomBlueButton from "../ui/CustomBlueButton";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useResponsive } from "@/hooks/useResponsive";

type Props = {
  type: string;
  to: string;
  price: string;
};

const DifferentTypesSmall = ({ type, to, price }: Props) => {
  return (
    <>
      <Card className="sm:hidden mb-4 rounded-none border-2 border-[#170DF2]">
        <CardHeader>
          <CardTitle>
            <Link
              href={to}
              className="hover:text-gray-500 transition-colors duration-500 text-xl font-normal"
            >
              <p className="text-inherit basis-[70%]">{type}</p>
            </Link>
            <div className="mt-5 border-t border-gray-400" />
          </CardTitle>
          <CardDescription>
            <p className="font-normal text-lg">{price}</p>
          </CardDescription>
        </CardHeader>
        {/* <CardContent>
          <p>Card Content</p>
        </CardContent> */}
        <CardFooter className="flex items-center justify-center">
          <Button
            className="w-full font-questrial text-base bg-[rgb(23,13,242)] duration-500 hover:bg-[rgb(255,235,255)] hover:text-[rgb(23,13,242)] rounded-none"
            asChild
          >
            <Link href="/login">Book Now</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

const DifferentTypes = ({ type, to, price }: Props) => {
  const { isXs } = useResponsive();
  return (
    <>
      <div className="hidden py-8 justify-between border-t last-of-type:border-b border-[#170DF2] sm:flex">
        <div className="flex justify-between basis-[calc(60%-16px)] flex-1 text-2xl">
          <Link
            href={to}
            className="hover:text-gray-500 transition-colors duration-500"
          >
            <p className="text-inherit basis-[70%]">{type}</p>
          </Link>
          <p className="font-normal text-[16px] leading-[32px] basis-[27%]">
            {price}
          </p>
        </div>
        <div className="">
          <CustomBlueButton to={to}>Book Now</CustomBlueButton>
        </div>
      </div>

      {isXs && <DifferentTypesSmall type={type} to={to} price={price} />}
    </>
  );
};

export default DifferentTypes;
