"use client";
import { motion } from "framer-motion";
import WrapperContainer from "./WrapperContainer";
export default function Footer() {
  return (
    <motion.footer
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 2,
        ease: "easeOut",
      }}
      className="bg-white py-16 md:py-32 "
    >
      <WrapperContainer className="flex flex-col  md:flex-row justify-between md:items-start md:mr-32">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl font-light mb-10 md:mb-4 font-syne">
            ZIDANE ESTATES LLC
          </h2>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-auto font-questrial">
          <div className="mb-20 md:mb-24 md:text-sm text-lg">
            <p className="">512-782-4534</p>
            <p className="mb-10">info@zidaneestates.com</p>
            <p className="">11801 Domain Blvd, 3rd Floor, Austin, TX 78758</p>
          </div>

          <h3 className="text-3xl md:text-4xl font-normal mb-5 md:mb-12 mt-5 font-syne">
            Stay Informed
          </h3>
          <p className="mb-10 md:mb-4 text-lg md:text-base">
            Enter your email here *
          </p>

          {/* Form */}
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <input
              type="email"
              className="border-b-2 border-blue-600 focus:outline-none w-full md:w-64 mr-4"
            />
            <button className="bg-[rgb(23,13,242)] text-lg md:text-base w-full md:w-[8.65rem] py-4 text-[rgb(175,172,251)] px-4 md:py-2  hover:text-[rgb(23,13,242)] hover:bg-[rgb(255,235,255)] transition-all duration-700">
              Subscribe
            </button>
          </div>
        </div>
      </WrapperContainer>
      {/* <div className="container mx-auto flex flex-col  md:flex-row justify-between md:items-start"></div> */}
    </motion.footer>
  );
}
