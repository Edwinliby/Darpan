import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
    return (
        <header className='flex fixed top-0 z-10 border-b-[.1px] border-white/30 backdrop-blur-[12px] text-white bg-soothing_black/50 py-3 items-center justify-center w-full gap-12 text-[1.1rem] font-ibm uppercase'>
            {/* <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: .3
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1,
                }}
                className='hidden md:flex flex-row gap-12'>
                <Link className='hover:text-primary' href="/">Home</Link>
                <Link className='hover:text-primary' href="/">Events</Link>
                <Link className='hover:text-primary' href="/">Downloads</Link>
            </motion.div> */}

            <Link href="/">
                <Image
                    src="/Darpan.png"
                    width={40}
                    height={40}
                    alt="logo"
                    className='w-auto h-auto'
                />
            </Link>

            {/* <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: .3
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1,
                }}

                className='hidden md:flex flex-row gap-12 items-center '>
                <Link className='hover:text-primary' href="/">Gallery</Link>
                <Link className='hover:text-primary' href="/">Contact</Link>
                <Link className='text-primary' href="/">Register</Link>
            </motion.div> */}
        </header>
    )
}
