import Link from 'next/link'
import React from 'react'

type Props = {
  children: React.ReactNode;
  to?: string;
}

const CustomBlueButton = ({children, to}: Props) => {
  return (
    <div>
        <Link href={to || ""} className='inline-block bg-blue-600 text-white py-2 w-auto px-7'><span>{children}</span></Link>
    </div>
  )
}

export default CustomBlueButton