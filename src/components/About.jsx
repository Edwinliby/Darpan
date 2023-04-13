import { useEffect as useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Navlink from "./Navlink";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const trigger = useRef(null);

  useLayoutEffect(() => {
    gsap.fromTo(
      trigger.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          // markers: true,
          trigger: trigger.current,
          start: "top 80%",
          end: "bottom 80%",
          scrub: true,
          ease: "power4.eae-InOut",
        },
      }
    );
  }, []);

  const aboutdarpan = useRef(null);
  const aboutaec = useRef(null);

  useLayoutEffect(() => {
    gsap.fromTo(
      aboutdarpan.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: aboutdarpan.current,
          start: "top 80%",
          end: "bottom 80%",
          scrub: true,
          ease: "expo.eae-InOut",
        },
      }
    );
    gsap.fromTo(
      aboutaec.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: aboutaec.current,
          start: "top 80%",
          end: "bottom 80%",
          scrub: true,
          ease: "expo.eae-InOut",
        },
      }
    );
  }, []);

  return (
    <div className="h-fit relative bg-gradient-to-b from-primary to-transparent pt-4 px-2 xl:px-20">
      <div className="about flex flex-wrap text-white tracking-wide xl:tracking-[.5rem] uppercase text-[2.7rem] sm:text-[4.3rem] md:text-[6rem] lg:text-[5.5rem] xl:text-[6.7rem]  leading-[3rem] md:leading-[5rem] font-clash font-bold">
        <span>You might be</span>
        <span>thinking what is</span>
        <span
          ref={trigger}
          className="text-[4rem] sm:text-[5.5rem] md:text-[7.5rem] lg:text-[9.5rem] xl:text-[12.5rem] md:mt-4 lg:mt-8"
        >
          <span className="text-main_primary">DARPAN</span>
        </span>
        <span className="text-[3.7rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] xl:text-[12rem] md:mt-4 lg:mt-8">
          ?
        </span>
      </div>
      <div className='font-chakra text-base py-8 leading-[5px] xl:mt-4'>
        <span ref={aboutdarpan} className='text-base font-medium text-white xl:text-xl'>
          <b>DARPAN'23</b> the annual techno - cultural fest organized by College of Engineering Aranmula, is an exiting event that celebrates the technical expertise and artistic talents of aspiring engineers.
          The event brings together participants from across the state, making it one of the most prestigious event of it's kind. The <b>two-day</b> mega event is a visual treat for attendees, transporting them to another world with a variety of captivity performances by aspiring engineers and artists.
          From technical competitions to cultural events <b>DARPAN'23</b> offers a diverse range of activities that cater to everyone's interests.
        </span>
      </div>
      <div className="absolute font-clash font-bold text-white">
        <span className="flex gap-6 text-[3.3rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[5rem] xl:text-[5.5rem]">
          ABOUT <Navlink name={"AEC"} link={"/#about"} />{" "}
        </span>
      </div>
      <div ref={aboutaec} className='flex flex-col mt-8 lg:flex-row items-center gap-8 py-8'>
        <p className='text-white text-base xl:text-xl font-chakra font-medium'>
          The College of Engineering Aranmula established in 2014 is the 8th Engineering College under the Co-operative Academy of Professional Education. <b>CAPE</b> was formed to establish educational institutions to provide education and training,
          research and development and consultancy. The society is promoted by the Co-operative Department of the government of Kerala and is an autonomous society.
        </p>

        <video
          src="/About.mp4"
          autoPlay
          loop
          muted
          className="abvideo w-[22rem] h-[20rem] md:w-[24rem] xl:w-[28rem] xl:h-[18rem] object-cover rounded-2xl border border-gray/20"
        ></video>
      </div>
    </div>
  );
}
