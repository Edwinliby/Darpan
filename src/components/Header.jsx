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
            <header className='w-full h-[4.5rem] flex items-center py-2 fixed z-[25] border-b-[1.5px] bg-soothing_black/60 border-gray/40 backdrop-blur-md'>
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
                <motion.div className='fixed top-0 left-0 w-[65vh] h-screen md:ml-8 md:my-4 bg-black z-[26] backdrop-blur-sm rounded-xl' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                    <div className='relative flex flex-col'>
                        <div className='pl-4 z-[26] h-[4.5rem] flex items-center border-b-[1.5px] border-gray/40'>
                            <Hamburger color='white' label='Show menu' direction='right' size={50} rounded={true} toggle={setOpen} toggled={isOpen} />
                            <div className='ml-4 border-l-[1.5px] border-gray/40 h-full'></div>
                        </div>
                        <div className='text-5xl font-clash font-black flex flex-col mt-10 ml-8 gap-4 '>
                            <div className='relative bg-green-400 text-white w-fit text-left pl-2 pr-4 py-1 rounded-[4px]'>
                                <Navlink name={'HOME'} link={'/'} />
                                <Image src='/edgeTriangle.png' width={20} height={20} alt='edge' className='absolute bottom-[-1px] right-[-1px]' />
                                <p className='absolute right-[-2rem] top-[2px] text-[8px] font-bold text-green-400'>PAGE <br /> 01</p>
                            </div>
                            <div className='relative hackNav hover:bg-white hover:text-black text-white w-fit text-left pl-2 pr-4 py-1 rounded-[4px]'>
                                <Navlink name={'EVENTS'} link={'/events'} />
                                <Image src='/edgeTriangle.png' width={20} height={20} alt='edge' className='absolute bottom-[-1px] right-[-1px]' />
                                <p className='absolute right-[-2rem] top-[2px] text-[8px] font-bold text-transparent navPageNo'>PAGE <br /> 02</p>
                            </div>
                            <div className='relative hackNav hover:bg-white hover:text-black text-white w-fit text-left pl-2 pr-4 py-1 rounded-[4px]'>
                                <Navlink name={'ABOUT'} link={'#about'} />
                                <Image src='/edgeTriangle.png' width={20} height={20} alt='edge' className='absolute bottom-[-1px] right-[-1px]' />
                                <p className='absolute right-[-2rem] top-[2px] text-[8px] font-bold text-transparent navPageNo'>PAGE <br /> 03</p>
                            </div>
                            <div className='relative hackNav hover:bg-white hover:text-black text-white w-fit text-left pl-2 pr-4 py-1 rounded-[4px]'>
                                <Navlink name={'FAQ'} link={'#faq'} />
                                <Image src='/edgeTriangle.png' width={20} height={20} alt='edge' className='absolute bottom-[-1px] right-[-1px]' />
                                <p className='absolute right-[-2rem] top-[2px] text-[8px] font-bold text-transparent navPageNo'>PAGE <br /> 04</p>
                            </div>
                            <div className='relative hackNav hover:bg-white hover:text-black text-white w-fit text-left pl-2 pr-4 py-1 rounded-[4px]'>
                                <Navlink name={'DOWNLOAD'} link={'/downloads'} />
                                <Image src='/edgeTriangle.png' width={20} height={20} alt='edge' className='absolute bottom-[-1px] right-[-1px]' />
                                <p className='absolute right-[-2rem] top-[2px] text-[8px] font-bold text-transparent navPageNo'>PAGE <br /> 05</p>
                            </div>
                            <div className='relative hackNav hover:bg-white hover:text-black text-white w-fit text-left pl-2 pr-4 py-1 rounded-[4px]'>
                                <Navlink name={'TEAMS'} link={'/teams'} />
                                <Image src='/edgeTriangle.png' width={20} height={20} alt='edge' className='absolute bottom-[-1px] right-[-1px]' />
                                <p className='absolute right-[-2rem] top-[2px] text-[8px] font-bold text-transparent navPageNo'>PAGE <br /> 06</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )
            }
        </>
    )
}
