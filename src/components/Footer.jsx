import React from 'react'
import Link from 'next/link'
import {FiArrowDownRight} from 'react-icons/fi';
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className='h-fit flex bg-footer text-white px-0 flex-wrap'>
        <div className='border-gray/70 border-b-[1.5px] w-full lg:w-[22rem] lg:border-b-0 lg:border-r-[1.5px] flex flex-col p-10 min-w-[18rem] min-h-[14rem] items-start md:items-center justify-center'>
            <p className='font-ibm text-stone-500'>Get in Touch</p>
            <span className='font-chakra font-semibold italic text-3xl'>darpan@aec.ac.in</span>
        </div>
        
        <div className='font-ibm border-gray/70 border-b-[1.5px] sm:border-b-[1.5px] md:border-r-[1.5px] md:border-b-0 min-w-[18rem] grow-[1] flex flex-col gap-5 p-10 justify-center'>
            <p className=' font-semibold text-[25px]'>Quick Links</p>
            <div className='flex gap-10 text-[16px]'>
                <div className='flex flex-col gap-2'>
                    <Link className='hover:text-violet-600' href="">Home</Link>
                    <Link className='hover:text-violet-600' href="">Events</Link>
                    <Link className='hover:text-violet-600' href="">Downloads</Link>
                </div>
                <div className='flex flex-col gap-2'>
                    <Link className='hover:text-violet-600' href="">Team</Link>
                    {/* <Link className='hover:text-violet-600' href="">Newsletter</Link> */}
                    <Link className='hover:text-violet-600' href="">Contact</Link>
                </div>
            </div>
        </div>

        <div className='min-w-[18rem] grow-[2]'>
            <div className='flex justify-between border-gray/70 border-b-[1.5px] lg:border-t-[1.5px] xl:border-t-0 min-h-[7rem] items-center font-bold text-4xl pl-5 pr-4'>
                <span className='font-chakra italic'>#DARPAN2023</span>
                <Link href="#hero" className='hover:-rotate-90 transform transition duration-500 ease-in-out scroll-smooth'><FiArrowDownRight size="4rem"/></Link>
            </div>
            <div>
                <div className='flex'>
                    <Link href="https://www.facebook.com/profile.php?id=100090947657195" className='social-links flex items-center justify-center grow-[1] min-w-[5rem] min-h-[12rem]'><FaWhatsapp size="3rem"/></Link>
                    <Link href="https://instagram.com/darpan_2023?igshid=YmMyMTA2M2Y=" className='social-links flex items-center justify-center grow-[1] min-w-[5rem] min-h-[12rem]'><FaInstagram size="3rem"/></Link>
                    <Link href="https://www.facebook.com/profile.php?id=100090947657195" className='social-links flex items-center justify-center grow-[1] min-w-[5rem] min-h-[12rem]'><FaFacebookF size="3rem"/></Link>  
                </div>
            </div>
        </div>
    </footer>
  )
}
