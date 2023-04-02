import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
    return (
        <header className='w-full h-[4.5rem] flex item-center justify-center py-2 fixed z-30 border-b-[1.5px] bg-soothing_black/60 border-gray/40 backdrop-blur-md'>
            <Link href="/">
                <Image
                    src="/Darpan.png"
                    width={40}
                    height={40}
                    alt="logo"
                   
                />
            </Link>
        </header>
    )
}
