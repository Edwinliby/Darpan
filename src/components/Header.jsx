import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
    return (
        <header className='w-full flex item-center justify-center py-2 fixed z-50 border-b-[1.5px] bg-soothing_black/60 border-gray/40 backdrop-blur-md'>
            <Link href="/">
                <Image
                    src="/Darpan.png"
                    width={40}
                    height={40}
                    alt="logo"
                    className='w-auto h-auto'
                />
            </Link>
        </header>
    )
}
