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
        gsap.fromTo(date.current, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1.5, delay: 3 });

    }, []);

    return (
        <div className='hero xl:hidden h-[100vh] flex flex-col uppercase justify-center'>

            <div className='text-white uppercase font-extrabold relative top-[5rem] md:top-[8rem] md:ml-[1rem] lg:ml-[2rem] px-5 '>
                <h1 ref={title} className='relative font-chakra top-[1rem] sm:top-[1.5rem] sm:text-2xl opacity-0'>College of Engineering Aranmula Presents</h1>
                <div ref={subtitle} className='font-clash flex flex-wrap opacity-0'>
                    <span className='text-[4.5rem] sm:text-[6.5rem] md:text-[9rem] lg:text-[10rem]'>DARPAN</span>
                    <span className='text-main_primary relative font-chakra text-stroke-black text-[7rem] md:text-[9rem] top-[-3rem] md:top-[-6rem] xl:top-[.8rem] xl:left-4'>2023</span>
                </div>
                <span ref={subtitle2} className='relative opacity-0 bottom-[5.5rem] sm:bottom-[6.5rem] md:bottom-[10.5rem] xl:bottom-[5rem] text-[3.5rem] sm:text-[5rem] md:text-[7rem] font-clash'>TECH FEST</span>
            </div>

            <div ref={date} className='relative top-12 md:top-6 xl:top-8 md:ml-4 opacity-0'>
                <div className='flex flex-col font-bold text-2xl absolute left-8 lg:ml-[1.5rem] top-0 md:text-3xl  z-10'>
                    <span className='font-chakra'>2023 <span className='font-clash'>April</span></span>
                    <span className='flex gap-2 text-[2rem] font-chakra font-bold'>26
                        <b className='text-[16px]'>TH</b>
                        27
                        <b className='text-[16px]'>TH</b>
                    </span>
                </div>
                <Image
                    src="/Eventdate2.png"
                    width={250}
                    height={250}
                    alt="Event-Date"
                    className=" top-[-2.5rem] ml-5 lg:ml-[2.5rem] w-44 h-[5rem] md:w-56 z-0"
                />
            </div>

        </div>
    )
}

export default Hero