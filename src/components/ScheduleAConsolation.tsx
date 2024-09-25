'use client'
import React from 'react';
import DifferentTypes from './schedule_consulation/differentTypes';
import { motion } from 'framer-motion';

type Props = {
    headingTextStyle?: string;
    initial?: {
        opacity: number;
    };
    whileInView?: {
        opacity: number;
    };
    transition?: {
        duration: number;
    };
}

const differentTypes = [
    {
        type: 'Buyer Consulation',
        to: '',
        price: '$50'
    },
    {
        type: 'Rental Property Tour',
        to: '',
        price: '$50'
    },
    {
        type: 'New Construction Consult',
        to: '',
        price: '$100'
    },
    {
        type: 'Property Consultation',
        to: '',
        price: '$70'
    },
]

const ScheduleAConsolation = ({headingTextStyle, ...props}: Props) => {
  return (
    <section className="max-w-[90%] mx-auto md:max-w-full">
        <motion.div
        {...props}

        className={headingTextStyle}>
            <h2>SCHEDULE A CONSULATION</h2>
        </motion.div>

        <div className=' md:p-5'>
            {
                differentTypes.map((type, index) => (
                    <DifferentTypes key={index} {...type} />

                ))
            }
        </div>
    </section>
  )
}

export default ScheduleAConsolation