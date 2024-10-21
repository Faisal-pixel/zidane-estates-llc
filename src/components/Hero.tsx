import HeroImg from "@/images/heros2.webp";
import Image from "next/image";
import WrapperContainer from "./WrapperContainer";

const Hero = () => {
  return (
    <WrapperContainer>
      <div className="lg:ml-3 flex flex-col gap-3 mb-4 font-syne ">
        <h1 className="text-[38px] leading-[50px] md:leading-none md:text-[64px]">
          REAL ESTATE MANAGER
        </h1>

        <p className="text-[22px] md:text-2xl text-[#646464] tracking-wide font-light">
          Find or Build Your Dream Home
        </p>
      </div>

      <Image
        src={HeroImg}
        alt="hero"
        className="h-[250px] md:h-auto object-cover w-full"
      />
    </WrapperContainer>
  );
};

export default Hero;
