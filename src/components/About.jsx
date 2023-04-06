import { useEffect, useRef } from 'react';
import Image from 'next/image'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Navlink from './Navlink';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const trigger = useRef(null);

  useEffect(() => {
    gsap.fromTo(trigger.current, {
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
          ease: "power4.eae-InOut"
        },
      });
  }, []);

  const aboutdarpan = useRef(null);
  const aboutaec = useRef(null);

  useEffect(() => {
    gsap.fromTo(aboutdarpan.current, { opacity: 0, y: 100 }, { opacity: 1, y: 0, scrollTrigger: { trigger: aboutdarpan.current, start: "top 80%", end: "bottom 80%", scrub: true, ease: "expo.eae-InOut" } });
    gsap.fromTo(aboutaec.current, { opacity: 0, y: 100 }, { opacity: 1, y: 0, scrollTrigger: { trigger: aboutaec.current, start: "top 80%", end: "bottom 80%", scrub: true, ease: "expo.eae-InOut" } });
  }, []);


  return (
    <div className='h-fit relative bg-gradient-to-b from-primary to-transparent pt-4 px-2 xl:px-20'>
      <div className='about flex flex-wrap text-white tracking-wide xl:tracking-[.5rem] uppercase text-[2.9rem] sm:text-[4.5rem] md:text-[6.3rem] lg:text-[5.5rem] xl:text-[7rem]  leading-[4rem] md:leading-[5.5rem] font-clash font-bold'>
        <span>You might be</span>
        <span>thinking what is</span>
        <span ref={trigger} className='text-[4rem] sm:text-[5.5rem] md:text-[7.5rem] lg:text-[9.5rem] xl:text-[12.5rem] md:mt-4 lg:mt-8'>
          <span className='text-main_primary'>DARPAN</span>
        </span>
        <span className='text-[4rem] sm:text-[5.5rem] md:text-[7.5rem] lg:text-[9.5rem] xl:text-[12.5rem] md:mt-4 lg:mt-8'>?</span>

      </div>
      <div className='font-chakra text-base py-8 leading-[5px] xl:mt-4'>
        <span ref={aboutdarpan} className='text-base font-medium text-white xl:text-2xl'>
          <b>DARPAN'23</b> the annual techno - cultural fest organised by College of Engineering Aranmula, is an exsting event that celebrates the technical expertise and artistic talents of aspiring engineers.
          The event brings together participants from across the state, making it one of the most prestigious event of it's kind. The <b>two-day</b> mega event is a visual treat for attendies, transporting them to another world with a varity of captiving perforamances by aspiring engineers and artists.
          From technical competitions to cultural events <b>DARPAN'23</b> offers a diverse range of activities that cater to everyone's interests.
        </span>
      </div>
      <div className='absolute font-clash font-bold text-white'>
        <span className='flex gap-6 text-[3.5rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[5rem] xl:text-[5.5rem]'>ABOUT <Navlink name={'AEC'} link={"/#about"} /> </span>
        {/* <span className='absolute text-white/30 text-[4rem] sm:text-[4.5rem] md:text-[5rem] lg:text-[5.5rem] xl:text-[6rem] left-5 xl:left-9 xl:top-5 top-4'>ABOUT AEC</span> */}
      </div>
      <div ref={aboutaec} className='flex flex-col mt-8 lg:flex-row items-center gap-8 py-8'>
        <p className='text-white grow-[2] text-base xl:text-2xl font-chakra font-medium'>
          The College of Engineering Aranmula established in 2014 is the 8th Engineering College under the Co-operative Academy of Professional Educaation. <b>CAPE</b> was formed to establish educational institutions to provide education and trianing,
          research and development and consultancy. The society is promoted by the Co-operative Department of the government of Kerala and is an autonomous society.
        </p>
        <Image
          src='/VideoFrame.png'
          width={500}
          height={500}
          alt='Video Frame'
          className='grow-[1] w-[21.5rem] h-auto lg:w-[22rem] xl:w-[26rem]'
        />
      </div>
    </div>
  )
}

