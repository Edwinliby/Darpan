import React from 'react'
import Image from 'next/image'

function Hero() {

    return (
        <div className='hero h-[100vh] uppercase flex flex-col justify-between md:gap-10 md:h-fit'>
            {/* <Image
                src="/line_spinner.svg"
                width={110}
                height={110}
                alt="spinner"
                className="relative left-10 top-[5rem] animate-spin"
            /> */}
            <div className='hero-content'>
                <h1 className='hero-text-1 font-chakra'>College of Engineering Aranmula Presents</h1>
                <div className='hero-text-2 font-clash flex flex-row gap-6'>
                    <span>DARPAN</span>
                    <span className='text-primary text-stroke-black '>2023</span>
                </div>
                <span className='hero-text-3 font-clash'>TECH FEST</span>
            </div>

            <div className='date flex justify-between relative'>
                <div className='flex flex-col text-2xl absolute left-5 top-1 md:text-3xl md:ml-[4rem] md:top-[-3rem] text-white z-10'>
                    <span className='font-chakra font-medium'>2023 <span className='font-clash font-semibold'>April</span></span>
                    <span className='flex gap-2 font-semibold'>17
                        <b className='text-base font-medium'>TH</b>
                        18
                        <b className='text-base font-medium'>TH</b>
                    </span>
                </div>
                <Image
                    src="/Event date.png"
                    width={250}
                    height={250}
                    alt="Event-Date"
                    className="relative top-[-3.5rem] md:ml-[4rem] w-48 h-24 md:w-56 z-0"
                />
                {/* <Image
                    src="/line_spinner.svg"
                    width={110}
                    height={110}
                    alt="spinner"
                    className="relative right-16 bottom-16 animate-spin"
                /> */}
            </div>
        </div>
    )
}

export default Hero