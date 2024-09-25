import React from 'react';
import Image from 'next/image';
import HeroImg from "@/images/heros.jpg"
import { motion } from 'framer-motion';

type Props = {
  initial?: {
    opacity: number;
  };
  whileInView?: {
    opacity: number;
  };
  transition?: {
    duration: number;
  };
};

const Hero = ({...props}: Props) => {
  return (
    <div>
        <motion.div {...props} className='mx-4 md:mx-0'>
            <h1 className='mt-[62px] mb-2 text-5xl md:text-6xl'>REAL ESTATE MANAGER</h1>
            <p className="mb-[31px] text-2xl">Find or Build Your Dream Home</p>
        </motion.div>

        <div> 
            <Image  src={HeroImg} alt="hero" />
        </div>
    </div>
  )
}

export default Hero