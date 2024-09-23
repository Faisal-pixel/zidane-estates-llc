import Link from "next/link";
import React from "react";
import CustomBlueButton from "../ui/CustomBlueButton";

type Props = {
    type: string;
    to: string;
    price: string;
};

const DifferentTypes = ({type, to, price}: Props) => {
  return (
    <div className="py-8 flex justify-between border-t border-b border-blue-400">
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
        <CustomBlueButton to={to} children="Book Now" />
      </div>
    </div>
  );
};

export default DifferentTypes;
