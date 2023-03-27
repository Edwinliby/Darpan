import React from 'react'
import Image from 'next/image'
import { gsap } from 'gsap';

function Hero() {

    const title = React.useRef(null);
    const subtitle = React.useRef(null);
    const subtitle2 = React.useRef(null);
    const date = React.useRef(null);

    React.useEffect(() => {
        gsap.fromTo(title.current, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1.5, delay: 0.5 });
        gsap.fromTo(subtitle.current, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1.5, delay: 1 });
        gsap.fromTo(subtitle2.current, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1.5, delay: 2.5 });
        gsap.fromTo(date.current, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1.5, delay: 1.5 });

    }, []);

    return (
        <div className='hero relative h-[100vh] uppercase flex flex-col justify-between md:gap-10'>
            <Image
                src="/line_spinner.svg"
                width={110}
                height={110}
                alt="spinner"
                className="relative left-10 top-[5rem] animate-spin"
            />
            <div className='text-white uppercase font-extrabold relative top-[1rem] sm:top-[-2rem] md:top-[3rem] md:ml-[2rem] lg:ml-[3rem] px-5'>
                <h1 ref={title} className='relative font-chakra top-[1rem] sm:top-[1.5rem]'>College of Engineering Aranmula Presents</h1>
                <div ref={subtitle} className='font-clash flex flex-wrap items-center'>
                    <span className='text-[4.5rem] sm:text-[6.5rem] md:text-[9rem] lg:text-[10.1rem]'>DARPAN</span>
                    <span className='text-primary relative font-chakra text-stroke-black text-[7rem] md:text-[9rem] top-[-3rem] lg:top-[0rem]'>2023</span>
                </div>
                <span ref={subtitle2} className='relative bottom-[5.5rem] md:bottom-[5.5rem] text-[3.5rem] sm:text-[5rem] md:text-[7rem] font-clash'>TECH FEST</span>
            </div>

            <div ref={date} className='date flex justify-between relative'>
                <div className='flex flex-col text-soothing_black text-2xl absolute left-8 md:left-5 lg:left-8 top-[-2rem] md:text-3xl md:ml-[4rem] md:top-[-2.5rem] lg:top-[-2rem] z-10'>
                    <span className='font-chakra text-soothing_black font-semibold'>2023 <span className='font-clash font-semibold'>April</span></span>
                    <span className='flex gap-1 font-bold'>17
                        <b className='text-bold text-[16px]'>TH</b>
                        18
                        <b className='text-bold text-[16px]'>TH</b>
                    </span>
                </div>
                <Image
                    src="/Eventdate2.png"
                    width={250}
                    height={250}
                    alt="Event-Date"
                    className="relative top-[-2.5rem] ml-5 md:ml-[4rem] lg:ml-[5rem] w-44 h-[5rem] md:w-56 z-0"
                />
            </div>
            <Image
                src="/line_spinner.svg"
                width={110}
                height={110}
                alt="spinner"
                className="absolute right-12 bottom-14 animate-spin"
            />
        </div>
    )
}

export default Hero