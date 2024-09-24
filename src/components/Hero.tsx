import React from 'react';
import Image from 'next/image';
import HeroImg from "@/images/heros.jpg"

// type Props = {}

const Hero = () => {
  return (
    <div>
        <div className='mx-4 md:mx-0'>
            <h1 className='mt-[62px] mb-2 text-5xl md:text-6xl'>REAL ESTATE MANAGER</h1>
            <p className="mb-[31px] text-2xl">Find or Build Your Dream Home</p>
        </div>

        <div> 
            <Image  src={HeroImg} alt="hero" />
        </div>
    </div>
  )
}

export default Hero