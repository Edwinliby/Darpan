import React, { useState, useEffect } from 'react';
import Image from 'next/image'

export default function About() {
  return (
    <div className='h-fit relative bg-primary pt-4 px-2 xl:px-8'>
      <div className='flex flex-wrap uppercase text-[3.3rem] sm:text-[4.5rem] md:text-[6.3rem] lg:text-[5.5rem] xl:text-[7rem]  leading-[4rem] md:leading-[5.5rem] font-clash font-bold'>
        <span>You will be</span>
        <span>thinking what is</span>
        <span className='text-white text-[4rem] sm:text-[5.5rem] md:text-[7.5rem] lg:text-[9.5rem] xl:text-[12.5rem] md:mt-4 lg:mt-8 '>DARPAN <span>?</span></span>
      </div>
      <div className='font-chakra text-base py-8 leading-[5px] xl:mt-4'>
        <span className='text-center font-bold text-white text-[2rem] xl:text-[4rem]'>⁕⁕⁕
          <span className='text-base font-medium text-soothing_black xl:text-2xl'> Mirror countable noun. A mirror is an object made of glass in which you can see your
            reflection. Borrowed from Sanskrit (darpaṇa), and some more description about the name.</span>
        </span>
      </div>
      <div className='relative font-clash text-[3.5rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[5rem] xl:text-[5.5rem] font-bold text-white'>
        <span>ABOUT</span>
        <span className='absolute text-white/30 text-[4rem] sm:text-[4.5rem] md:text-[5rem] lg:text-[5.5rem] xl:text-[6rem] left-5 xl:left-11 xl:top-6 top-4'>ABOUT</span>
      </div>
      <div className='flex flex-col lg:flex-row items-center gap-8 py-8'>
        <p className='text-white  flex grow-[2] text-base xl:text-2xl font-chakra font-medium'>
          College of Engineering Aranmula presents DARPAN 2023, the annual techno-cultural fest.
          It is hosted every year to recognize fledging engineers who have a flair of technical expertise and artistry.
          It is one of the most eminent fests with more than 900 entrants from across the nation.
          This extravaganza unfolds a two-day mega event that transports you into a new realm.</p>
        <Image
          src='/VideoFrame.png'
          width={500}
          height={500}
          alt='Video Frame'
          className='grow-[1] w-auto h-auto lg:w-[22rem] xl:w-[26rem]'
        />
      </div>
    </div>
  )
}

