import React from 'react'
import Link from 'next/link'
import {FiArrowDownRight} from 'react-icons/fi';
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className='h-fit flex bg-footer text-white px-0 md:px-4 flex-wrap'>
        <div className='footer-mail flex flex-col p-10 min-w-[18rem] min-h-[14rem] items-start md:items-center justify-center'>
            <p className='font-ibm text-stone-500'>Get in Touch</p>
            <span className='font-chakra font-semibold italic text-3xl'>darpan@aec.ac.in</span>
        </div>
        
        <div className='quick-links font-ibm border-x-0 md:border-x-[1.5px] border-gray min-w-[18rem] grow-[1] flex flex-col gap-5 p-10 justify-center md:justify-center'>
            <p className=' font-semibold text-[25px]'>Quick Links</p>
            <div className='flex gap-10 text-[16px]'>
                <div className='flex flex-col gap-2'>
                    <Link className='hover:text-violet-600' href="">Home</Link>
                    <Link className='hover:text-violet-600' href="">Events</Link>
                    <Link className='hover:text-violet-600' href="">Downloads</Link>
                </div>
                <div className='flex flex-col gap-2'>
                    <Link className='hover:text-violet-600' href="">Team</Link>
                    <Link className='hover:text-violet-600' href="">Newsletter</Link>
                    <Link className='hover:text-violet-600' href="">Contact</Link>
                </div>
            </div>
        </div>

        <div className='footer-tag min-w-[18rem] grow-[2]'>
            <div className='flex justify-between border-b-[1.5px] min-h-[7rem] items-center font-bold text-4xl pl-5 pr-2 border-gray'>
                <span className='font-chakra italic'>#DARPAN2023</span>
                <Link href="#hero" className='hover:-rotate-90 ease-in-out duration-300'><FiArrowDownRight size="4rem"/></Link>
            </div>
            <div>
                <div className='flex'>
                    <Link className='social-links flex items-center justify-center grow-[1] min-w-[5rem] min-h-[12rem]' href=''><FaWhatsapp size="3rem"/></Link>
                    <Link className='social-links flex items-center justify-center grow-[1] min-w-[5rem] min-h-[12rem]' href=''><FaInstagram size="3rem"/></Link>
                    <Link className='social-links flex items-center justify-center grow-[1] min-w-[5rem] min-h-[12rem]' href=''><FaFacebookF size="3rem"/></Link>  
                </div>
            </div>
        </div>
    </footer>
  )
}
