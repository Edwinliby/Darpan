import React from "react";

export default function Loader() {

  return (
    <div className="loader w-screen h-screen bg-black z-[28]  flex items-center justify-center">
      <video src="/newpreloader.mp4" autoPlay loop muted className="w-[40rem] h-[40rem]"></video>
    </div>
  )
}
