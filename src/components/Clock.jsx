import React from 'react'
import Image from 'next/image'
import Countdown from "react-countdown";

function Clock() {
    return (
        <div className='w-screen flex'>
            <div className="mt-[8rem] pb-10 border w-[100%] xl:w-fit border-gray/60 flex flex-col justify-center items-center  text-white text-[3rem] md:text-[4rem] tracking-[1rem] font-clash">
                <Countdown date={new Date("2023-04-26T00:00:00")} className="text-[2rem] xl:text-[4rem]" />

                <div className="text-[.8rem] md:text-lg bottom-0 relative -tracking-tight">
                    <span className="absolute left-[-9.5rem] md:left-[-13.5rem]">DAY</span>
                    <span className="absolute left-[-4.5rem] md:left-[-7.5rem]">HOURS</span>
                    <span className="absolute left-[.8rem] md:left-[.3rem]">MINUTES</span>
                    <span className="absolute left-[6.5rem] md:left-[9rem]">SECONDS</span>
                </div>
            </div>
            <Image
                src="/QR.png"
                alt="barcode"
                width={100}
                height={100}
                className='hidden xl:block object-contain border-y px-2 border-gray/60 mt-[8rem]'
            />
        </div>
    )
}

export default Clock