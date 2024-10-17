"use client";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useResponsive } from "@/hooks/useResponsive";

type Props = {
  type: string;
  to: string;
  price: string;
};

const DifferentTypesSmall = ({ type, price }: Props) => {
  return (
    <>
      <Card className="sm:hidden mb-4 rounded-none border border-[#170DF2]">
        <CardHeader>
          <CardTitle>
            <h1 className="font-light text-2xl tracking-wide hover:text-gray-500 text-[#414141] transition-all duration-300 ease-in-out">
              {type}
            </h1>

            <div className="mt-5 border-t border-gray-400" />
          </CardTitle>
          <CardDescription>
            <p className="font-normal text-lg mt-4 mb-2">1hr 30mins</p>
            <p className="font-normal text-lg">{price}</p>
          </CardDescription>
        </CardHeader>

        <CardFooter className="flex items-center justify-center">
          <button className="w-full font-questrial inline-block bg-[#170DF2] hover:text-[#170DF2] hover:bg-pink-200 cursor-pointer transition-all duration-300 ease-in-out text-white py-3 text-lg px-7">
            Book Now
          </button>
        </CardFooter>
      </Card>
    </>
  );
};

const DifferentTypes = ({ type, to, price }: Props) => {
  const { isXs } = useResponsive();

  return (
    <>
      <div className="hidden font-wix-display py-8 justify-between border-t last-of-type:border-b border-[#170DF2] sm:flex">
        <div className="flex justify-between basis-[calc(60%-16px)] flex-1 text-2xl">
          <h1 className="font-light text-2xl tracking-wide hover:text-gray-500 text-[#414141] transition-all duration-300 ease-in-out">
            {type}
          </h1>

          <p className="font-normal text-[16px] leading-[32px] basis-[27%]">
            {price}
          </p>
        </div>

        <button className="inline-block bg-[#170DF2] hover:text-[#170DF2] hover:bg-pink-200 cursor-pointer transition-all duration-300 ease-in-out text-white py-2 w-auto px-7">
          Book Now
        </button>
      </div>

      {isXs && <DifferentTypesSmall type={type} to={to} price={price} />}
    </>
  );
};

export default DifferentTypes;
