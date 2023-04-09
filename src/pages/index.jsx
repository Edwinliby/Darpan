import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Marque from "@/components/Marque"
import Marque2 from "@/components/Marque2"
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import Countdown from "react-countdown";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/all";

const Home = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("progress", {
      value: 100,
      scrollTrigger: {
        scrub: 0.5,
      },
    });
    setIsLoaded(true);
  }, []);

  return (
    <div className="bg-soothing_black h-fit">
      <Head>
        <title>Darpan</title>
        <link rel="shortcut icon" href="/Darpan.png" type="image/png" />
      </Head>

      <Header id="navbar"/>
      <progress max="100" value="0"></progress>

      <section id="hero">
        <Hero />
      </section>

      <div className="relative p-4 md:p-8 flex flex-col items-center justify-center text-white text-[3rem] md:text-[4rem] tracking-[.5rem] font-chakra font-semibold">
        <span className="italic text-[1.1rem] md:text-[1.5rem] tracking-wide font-chakra font-semibold">Get ready to witness the future at the ultimate tech
          <span className="text-main_primary"> extravaganza!</span></span>

        {isLoaded && <Countdown date={new Date("2023-04-26T00:00:00")} />

        }
        <div className="text-[.8rem] md:text-lg bottom-0 relative -tracking-tight">
          <span className="absolute left-[-9.5rem] md:left-[-11.5rem]">DAY</span>
          <span className="absolute left-[-4.5rem] md:left-[-5.5rem]">HOURS</span>
          <span className="absolute left-[.8rem] md:left-[1.2rem]">MINUTES</span>
          <span className="absolute left-[6.5rem] md:left-[8rem]">SECONDS</span>
        </div>
      </div>

      <Marque />

      {/* <Events /> */}

      <section id="about"
        className="about">
        <About />
      </section>

      <Marque2 />

      <section id="faq">
        <Faq />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
