import React from "react";
import Image from "next/image";
import { gsap, Power4 } from "gsap";
function Hero() {
  //use Gsap to animate the hero section
  const title1 = React.useRef(null);
  const title2 = React.useRef(null);
  const title3 = React.useRef(null);

  React.useEffect(() => {
    gsap.fromTo(
      title1.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: Power4.easeOut, delay: 0.5 }
    );
    gsap.fromTo(
      title2.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: Power4.easeOut, delay: 0.8 }
    );
    gsap.fromTo(
      title3.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: Power4.easeOut, delay: 1.1 }
    );
  }, []);

  return (
    <div className="hero h-[100vh] uppercase flex flex-col justify-between md:gap-10 md:h-fit">
      <Image
        src="/line_spinner.svg"
        width={110}
        height={110}
        alt="spinner"
        className="relative left-10 top-5 animate-spin"
      />
      <div className="hero-content">
        <h1 className="hero-text-1 font-clash opacity-0" ref={title1}>
          College of Engineering Aranmula Presents
        </h1>
        <div
          className="hero-text-2 font-chakra flex flex-row gap-5 opacity-0 "
          ref={title2}
        >
          <span>DARPAN</span>
          <span className="text-primary text-stroke-black ">2023</span>
        </div>
        <span className="hero-text-3 font-clash opacity-0" ref={title3}>
          TECH FEST
        </span>
      </div>

      <div className="date flex justify-between relative">
        <div className="flex flex-col text-2xl absolute left-5 top-10 md:text-3xl md:left-8 md:top-8 text-white z-10">
          <span className="font-chakra font-medium">
            2023 <span className="font-clash font-semibold">April</span>
          </span>
          <span className="flex gap-2 font-semibold">
            17
            <b className="text-base font-medium">TH</b>
            18
            <b className="text-base font-medium">TH</b>
          </span>
        </div>
        <Image
          src="/Event date.png"
          width={250}
          height={250}
          alt="Event-Date"
          className="relative w-48 h-24 md:w-56 left-[-2px] bottom-[-30px] md:left-[-2px] md:bottom-[-15px] z-0"
        />
        <Image
          src="/line_spinner.svg"
          width={110}
          height={110}
          alt="spinner"
          className="relative right-10 bottom-10 animate-spin"
        />
      </div>
    </div>
  );
}

export default Hero;
