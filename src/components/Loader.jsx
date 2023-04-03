import React from "react";

export default function Loader() {

  return (
    <div className="loader w-screen bg-black z-50 h-screen flex items-center justify-center">
      <video src="/preloader.mp4"
        autoPlay
        loop
        muted
        className='h-[20rem]'
      ></video>
    </div>
  )
}
