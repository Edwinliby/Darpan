import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="flex gap-11 pt-1 pb-1 items-center text-lg justify-center uppercase font-ibm bg-black border-b border-gray-50 text-white">
            <Link href="/">Home</Link>
            <Link href="#">Downloads</Link>
            <Link href="/events">Events</Link>
            <Image src="/Darpan.png" alt="My Image" width={60} height={90} />
            <Link href="/gallery">Gallery</Link>
            <Link href="#">Contact</Link>
            <Link className="text-violot " href="#">Register</Link>
        </nav>
    )
}