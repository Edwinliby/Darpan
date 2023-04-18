import React, { useEffect } from 'react'
import Image from 'next/image';

export default function EventSlider() {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.8.0/vanilla-tilt.min.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div className='flex flex-col items-center justify-center h-fit mb-[80px]'>
            <h1 className='text-[2.7rem] md:text-[4rem] text-white font-clash font-bold tracking-wider uppercase'>Highlights</h1>
            <div className='flex flex-wrap gap-16 pt-10 items-center justify-center px-10'>

                <div data-tilt className='w-fit relative scale-105'>
                    <div className="card flex items-center justify-center w-full h-[22rem] xl:h-[30rem] rounded-sm bg-main_primary/50 backdrop:blur-xl hover:-skew-x-6 skew-y-3 transition-all duration-300 ease-in-out">
                        <div className='card w-full h-[22rem] xl:h-[30rem] rounded-sm bg-gray hover:skew-x-6 hover:scale-105 transition-all duration-300 ease-in-out'>
                            <span className='text-3xl font-clash font-semibold px-4 py-2 absolute left-[-2rem] top-4 bg-main_primary text-white'>UPDATING SOON</span>
                            <Image src="/coming.png"
                                alt="talk show"
                                width={500}
                                height={500}
                                className='w-full h-full object-cover'
                            />
                        </div>
                    </div>
                </div>

                <div data-tilt className='w-fit relative scale-105'>
                    <div className="card flex items-center justify-center w-full h-[22rem] xl:h-[30rem] rounded-sm bg-main_primary/50 backdrop:blur-xl hover:-skew-x-6 skew-y-3 transition-all duration-300 ease-in-out">
                        <div className='card w-full h-[22rem] xl:h-[30rem] rounded-sm bg-gray hover:skew-x-6 hover:scale-105 transition-all duration-300 ease-in-out'>
                            <span className='text-3xl font-clash font-semibold px-4 py-2 absolute left-[-2rem] top-4 bg-main_primary text-white'>UPDATING SOON</span>
                            <Image src="/coming.png"
                                alt="UPDATING SOON"
                                width={500}
                                height={500}
                                className='w-full h-full object-cover'
                            />
                        </div>
                    </div>
                </div>

                <div data-tilt className='w-fit relative scale-105'>
                    <div className="card flex items-center justify-center w-full h-[22rem] xl:h-[30rem] rounded-sm bg-main_primary/50 backdrop:blur-xl hover:-skew-x-6 skew-y-3 transition-all duration-300 ease-in-out">
                        <div className='card w-full h-[22rem] xl:h-[30rem] rounded-sm  bg-gray hover:skew-x-6 hover:scale-105 transition-all duration-300 ease-in-out'>
                            <span className='text-3xl font-clash font-semibold px-4 py-2 absolute left-[-2rem] top-4 bg-main_primary text-white'>UPDATING SOON</span>
                            <Image src="/coming.png"
                                alt="talk show"
                                width={500}
                                height={500}
                                className='w-full h-full object-cover'
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

