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

type Props = {
  type: string;
  to: string;
  price: string;
};

const DifferentTypesSmall = ({ type, to, price }: Props) => {
  return (
    <>
      <Card className="sm:hidden mb-4 rounded-none border-2 border-blue-400">
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
          <Button className="w-full bg-blue-600 text-white rounded-none" asChild>
            <Link href="/login">Book Now</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

const DifferentTypes = ({ type, to, price }: Props) => {
  return (
    <>
      <div className="hidden py-8 justify-between border-t border-b border-blue-400 sm:flex">
        <div className="flex justify-between basis-[90%] text-2xl">
          <Link
            href={to}
            className="hover:text-gray-500 transition-colors duration-500"
          >
            <p className="text-inherit basis-[70%]">{type}</p>
          </Link>
          <p className="font-light basis-[27%]">{price}</p>
        </div>
        <div className="">
          <CustomBlueButton to={to} >Book Now</CustomBlueButton>
        </div>
      </div>

      <DifferentTypesSmall type={type} to={to} price={price} />
    </>
  );
};

export default DifferentTypes;
