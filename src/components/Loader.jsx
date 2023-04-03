import React from "react";
import Image from "next/image";

export default function Loader() {

  return (
    <div className="loader w-screen bg-black z-50 h-screen flex items-center justify-center">
      <Image
        src="/preloader.gif"
        width={500}
        height={500}
        alt="logo"
      ></Image>
    </div>
  )
}
