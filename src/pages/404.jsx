import React from 'react'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="flex flex-col bg-soothing_black items-center justify-center h-screen w-screen py-2 text-center">
      <Image
        src="/404_trump.gif"
        width={400}
        height={400}
        alt="logo"
      />
    </div>
  )
}
