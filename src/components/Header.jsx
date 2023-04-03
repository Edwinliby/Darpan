import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Slant as Hamburger } from 'hamburger-react'
import { motion } from 'framer-motion'
import Navlink from './Navlink'


export default function Header() {
    const [isOpen, setOpen] = React.useState(false)

    return (
        <>
            <header className='w-full h-[4.5rem] flex items-center py-2 fixed z-[24] border-b-[1.5px] bg-soothing_black/60 border-gray/40 backdrop-blur-md'>
                <div className='ml-4 z-[26] ' style={{ opacity: isOpen ? 0 : 1 }}>
                    <Hamburger color='white' label='Show menu' direction='right' size={30} rounded={true} toggle={setOpen} toggled={isOpen} />
                </div>

                <Link className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2' href="/">
                    <Image
                        src="/Darpan.png"
                        width={40}
                        height={40}
                        alt="logo"
                    />
                </Link>
            </header>
            {isOpen && (
                <motion.div className='fixed top-0 left-0 w-[50vh] h-full bg-soothing_black z-[25]' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                    <div className='flex flex-col  h-full'>
                        <div className='ml-4 z-[26] h-[4.5rem] flex items-center'>
                            <Hamburger color='white' label='Show menu' direction='right' size={30} rounded={true} toggle={setOpen} toggled={isOpen} />
                        </div>
                        <Navlink name={'Home'} link={'/'} />
                        <Navlink name={'Events'} link={'/events'} />
                        <Navlink name={'About'} link={'/about'} />
                    </div>
                </motion.div>
            )
            }
        </>
    )
}
