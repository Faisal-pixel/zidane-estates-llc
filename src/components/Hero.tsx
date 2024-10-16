import HeroImg from "@/images/heros.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div className="lg:ml-3 flex flex-col gap-3 mb-4 font-syne">
        <h1 className="text-5xl md:text-[64px]">
          REAL ESTATE MANAGER
        </h1>

        <p className="text-2xl text-[#404040]">
          Find or Build Your Dream Home
        </p>
      </div>

      <div>
        <Image src={HeroImg} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
