import Link from 'next/link';
import React from 'react'
import CustomBlueButton from './ui/CustomBlueButton';
import DifferentTypes from './schedule_consulation/differentTypes';

type Props = {
    headingTextStyle?: string;
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

const ScheduleAConsolation = ({headingTextStyle}: Props) => {
  return (
    <section>
        <div className={headingTextStyle}>
            <h2>SCHEDULE A CONSULATION</h2>
        </div>

        <div className='p-5'>
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