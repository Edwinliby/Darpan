import React from 'react'
import Link from 'next/link'
import Navlink from './Navlink'
import { FiArrowDownRight } from 'react-icons/fi';
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className='h-fit flex flex-col bg-footer text-white px-0 flex-wrap'>
            <div className='flex flex-wrap'>
                <div className='border-gray/70 border-b-[1.5px] w-full lg:w-[22rem] lg:border-b-0 lg:border-r-[1.5px] flex flex-col p-10 min-w-[18rem] min-h-[14rem] items-start md:items-center justify-center'>
                    <p className='font-ibm text-stone-500'>Get in Touch</p>
                    <Link href="mailto:darpan@cearanmula.ac.in" className='font-chakra font-semibold italic text-2xl'>darpan@cearanmula.ac.in</Link>
                </div>

                <div className='font-ibm border-gray/70 border-b-[1.5px] sm:border-b-[1.5px] md:border-r-[1.5px] md:border-b-0 min-w-[18rem] grow-[1] flex flex-col gap-5 p-10 justify-center'>
                    <p className=' font-semibold text-[25px]'>Quick Links</p>
                    <div className='flex gap-10 text-[16px] font-ibm'>
                        <div className='flex flex-col gap-2'>
                        <Navlink name={'Home'} link={'/'} />
                        <Navlink name={'Events'} link={'/'} />
                        <Navlink name={'Downloads'} link={'/'} />
                        </div>
                        <div className='flex flex-col gap-2'>
                        <Navlink name={'Team'} link={'/'} />                            {/* <Link className='hover:text-violet-600' href="">Newsletter</Link> */}
                        <Navlink name={'Contact'} link={'/'} />   
                        </div>
                    </div>
                </div>

                <div className='min-w-[18rem] grow-[2]'>
                    <div className='flex font-chakra italic justify-between border-gray/70 border-b-[1.5px] lg:border-t-[1.5px] xl:border-t-0 min-h-[7rem] items-center font-bold text-4xl pl-5 pr-4'>
                    <Navlink name={'#DARPAN2023'} link={'/'} />                           <Link href="#hero" className='hover:-rotate-90 transform transition duration-500 ease-in-out scroll-smooth'><FiArrowDownRight size="4rem" /></Link>
                    </div>
                    <div>
                        <div className='flex'>
                            <Link href="https://www.facebook.com/profile.php?id=100090947657195" className='social-links flex items-center justify-center grow-[1] min-w-[5rem] min-h-[12rem] hover:text-main_primary'><FaWhatsapp size="3rem" /></Link>
                            <Link href="https://instagram.com/darpan_2023?igshid=YmMyMTA2M2Y=" className='social-links flex items-center justify-center grow-[1] min-w-[5rem] min-h-[12rem] hover:text-main_primary'><FaInstagram size="3rem" /></Link>
                            <Link href="https://www.facebook.com/profile.php?id=100090947657195" className='social-links flex items-center justify-center grow-[1] min-w-[5rem] min-h-[12rem] hover:text-main_primary'><FaFacebookF size="3rem" /></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='font-clash flex justify-between py-2 text-[10px] md:text-xs px-4 border-t-[1.5px] border-gray/70'>
                <p>©2023 - DARPAN AEC </p>
                <span className='flex gap-4'>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </span>
            </div>
        </footer>
    )
}
