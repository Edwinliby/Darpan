import React from "react";
import Image from "next/image";
import { gsap } from "gsap";

function Hero() {
  const title = React.useRef(null);
  const subtitle = React.useRef(null);
  const subtitle2 = React.useRef(null);
  const date = React.useRef(null);

  React.useEffect(() => {
    gsap.fromTo(
      title.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.5, delay: 0.5 }
    );
    gsap.fromTo(
      subtitle.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.5, delay: 1 }
    );
    gsap.fromTo(
      subtitle2.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.5, delay: 2.5 }
    );
    gsap.fromTo(
      date.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.5, delay: 3 }
    );
  }, []);

  return (
    <div className="hero xl:hidden py-8 h-fit flex flex-col uppercase justify-center">
      <div className="text-white flex flex-col pt-[8rem] uppercase font-extrabold md:ml-[1rem] lg:ml-[2rem] px-5 ">
        <h1 ref={title} className="font-chakra sm:text-2xl opacity-0">
          College of Engineering Aranmula Presents
        </h1>
        <div ref={subtitle} className="font-clash flex flex-wrap opacity-0">
          <span className="text-[4.5rem] sm:text-[6.5rem] md:text-[9rem] lg:text-[9rem]">
            DARPAN
          </span>
          <span className="text-main_primary relative top-[-3rem] font-chakra text-stroke-black text-[7rem] md:text-[9rem]">
            2023
          </span>
        </div>
        <span
          ref={subtitle2}
          className="opacity-0 relative top-[-5rem] text-[3.5rem] sm:text-[5rem] md:text-[7rem] font-clash"
        >
          TECH FEST
        </span>
      </div>

      <div
        ref={date}
        className="relative md:ml-10 opacity-0 flex flex-col font-bold bg-white w-fit text-xl rounded-md text-black p-2 pr-8 ml-[1.5rem] md:text-3xl  z-10"
      >
        <span className="font-chakra">
          2023 <span className="font-clash">April</span>
        </span>
        <span className="flex gap-2 text-[2rem] font-chakra font-bold">
          26
          <b className="text-[16px]">TH</b>
          27
          <b className="text-[16px]">TH</b>
        </span>
        <Image
          src="/edgeTriangle.png"
          width={30}
          height={30}
          alt="edgetriangle"
          className="absolute bottom-[-1px] right-[-1px]"
        />
      </div>
    </div>
  );
}

export default Hero;
