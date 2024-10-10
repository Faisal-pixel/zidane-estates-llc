import { AvatarIcon } from "@radix-ui/react-icons";
import { Crown, Dot, EllipsisVertical } from "lucide-react";
import React from "react";

const BlogHeaderInfo = () => {
  return (
    <div className="flex justify-between pb-3">
      <div className="mr-[2.43rem] flex justify-between">
        <div className="self-center">
          <AvatarIcon className="h-8 w-8" />
        </div>

        <div className="flex flex-col ml-1">
          <div className="flex text-xs">
            <span>techvanb</span>
            <span className="self-center ml-1">
              <Crown className="h-3 w-3" />
            </span>
          </div>
          <div className="flex text-xs">
            <span className="self-center">May 25</span>
            <span className="self-center">
              <Dot />
            </span>
            <span className="self-center">2 min</span>
          </div>
        </div>
      </div>
      <div className="ml-auto cursor-pointer">
        <EllipsisVertical />
      </div>
    </div>
  );
};

export default BlogHeaderInfo;
