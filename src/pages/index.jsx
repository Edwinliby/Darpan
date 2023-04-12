import React, { useRef } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Video from "@/components/Video";
import About from "@/components/About";
import Marque from "@/components/Marque";
import Marque2 from "@/components/Marque2";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import Clock from "@/components/Clock";
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

  const stagger = useRef(null);
  gsap.fromTo(
    stagger.current,
    { opacity: 0, y: 100 },
    { opacity: 1, y: 0, duration: 1.5, delay: 0.5 }
  );

  return (
    <div className="bg-black h-fit">
      <Head>
        <title>Darpan</title>
      </Head>

      <Header id="navbar" />
      <progress max="100" value="0"></progress>

      <section id="hero">
        <p
          ref={stagger}
          className="hidden xl:block text-white relative pl-[1.5rem] top-[6rem] uppercase font-clash font-bold text-[2.5rem] tracking-wide"
        >
          College of engineering aranmula{" "}
          <span className="pl-2 text-[1.5rem]">presents</span>
        </p>
        <div id="hero">
          <Hero />
          <Video />
        </div>
      </section>

      {isLoaded && <Clock />}

      <Marque />

      <section id="about">
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
