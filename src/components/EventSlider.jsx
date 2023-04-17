import React, { useEffect, useRef } from 'react'

import gsap from 'gsap'
import Image from 'next/image';

export default function EventSlider() {

    const stagger = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            stagger.current,
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, duration: 1.5 }
        );
    }, []);

    // mouse enter card 3d effect 


    return (
        <div ref={stagger} className='flex flex-col items-center justify-center p-10'>
            <div className='w-fit relative'>
                <div className="card flex items-center justify-center w-[17rem] h-[25rem] bg-white/70 backdrop:blur-xl hover:-skew-x-6 skew-y-3 transition-all duration-300 ease-in-out">
                    <div className='card w-[17rem] h-[25rem]  bg-gray hover:skew-x-6 hover:scale-105 transition-all duration-300 ease-in-out'>
                        <span className='text-3xl font-clash font-semibold text-black px-4 py-2 absolute left-[-2rem] top-4 bg-white'>TALK SHOW</span>
                        <Image src="/talk-1.jpg"
                            alt="talk show"
                            width={500}
                            height={500}
                            className='w-full h-full object-cover'
                        />
                    </div>
                </div>
                <div className="flex relative bottom-[-1rem] pb-2 text-white font-clash text-3xl hover:-skew-x-0 skew-y-0">
                    <div className="w-8 h-7 bg-white rounded-full border-[2px] border-white/70"></div>
                    <div className="absolute left-4 w-8 h-7 rounded-full border-[2px] border-white/70"></div>
                </div>
            </div>
        </div>
    )
}

