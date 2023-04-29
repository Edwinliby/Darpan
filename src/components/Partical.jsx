import Confetti from "react-confetti";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function Partical() {
    const [height, setHeight] = useState(null);
    const [width, setWidth] = useState(null);
    const confetiRef = useRef(null);

    return (
        <div className="bg-primary flex flex-col gap-4 items-center justify-center relative p-6" ref={confetiRef}>
            <h1 className="text-center text-[2.7rem] lg:text-[4rem] text-white font-clash font-semibold">Lucky Draw Winners</h1>
            <Image
                src="/winners.jpg"
                alt="Picture of the author"
                width={500}
                height={500}
                className="rounded-xl hover:shadow-xl hover:shadow-main_primary transition duration-500 ease-in-out"
            />
            <Confetti numberOfPieces={150} width={2000} height={1000} className="w-full h-full" />
        </div>
    );
}