import React from 'react'

export default function Marque2() {
    const shortText = 'µLearn'
    const longText = 'FOSS United'
    return (
        <section className='flex flex-col relative h-[12rem] pt-6 overflow-hidden'>
            <div className='marquee2 font-clash tracking-widest text-main_primary/50'>
                {Array.from({ length: 3 }).map((_, index) => {
                    return <h4 key={index} className="text font-black">SOLVE.CREATE.THRIVE</h4>
                })}
            </div>

            <div className='marquee3 font-chakra tracking-widest text-main_primary/50'>
            {Array.from({ length: 5 }).map((_, index) => {
                return <>
                    <h1 key={index} className="text font-black textStroke text-transparent">{shortText}{String.fromCharCode(160).repeat(longText.length - shortText.length)}</h1>
                    <h1 className="text font-black">{longText}</h1>
                </>
            })}
            </div>
        </section>
    )
}
