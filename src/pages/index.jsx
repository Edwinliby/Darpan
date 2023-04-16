import { useRef, useEffect, useState } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Video from "@/components/Video";
import About from "@/components/About";
// import Marque from "@/components/Marque";
import Marque2 from "@/components/Marque2";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import Clock from "@/components/Clock";
import Map from "@/components/Map";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/all";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("progress", {
      value: 100,
      scrollTrigger: {
        scrub: 0.5,
      },
    });
    gsap.fromTo(
      stagger.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.5 }
    );
  }, []);

  const stagger = useRef(null);

  return (
    <div className="bg-black h-fit">
      <Head>
        <title>Darpan</title>
      </Head>

      <Header id="navbar" />
      <progress max="100" value="0"></progress>

      <section id="hero">
        <div
          ref={stagger}
          className="hidden xl:block italic relative w-full text-center top-[7rem] z-[10]"
        >
          <p className="text-white pl-[1.5rem] top-[6rem] uppercase font-clash font-bold text-[2.5rem] tracking-wide">
            COLLEGE OF ENGINEERING ARANMULA
          </p>
          <p className="text-white font-clash text-xl">PRESENTS</p>
        </div>

        <div>
          <Hero />
          <Video />
        </div>
      </section>

      {isLoaded && <Clock />}

      {/* <Marque /> */}

      <section id="about">
        <About />
      </section>

      <Marque2 />

      <section id="faq">
        <Faq />
      </section>
      <Map />

      <Footer />
    </div>
  );
};

export default Home;
