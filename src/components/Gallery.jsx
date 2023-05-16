import React from 'react'
import Image from 'next/image' 

export default function Gallery() {
  return (
    <div className='flex flex-wrap px-2'>
      <div className='max-w-[25%] px-2 flex-[25%]'>
      <Image
        src='/images/1.jpg'
        alt='Picture of the author'
        width={500}
        height={500}
        className='mt-4 w-[100%] align-middle'
      />
      </div>
    </div>
  )
}
