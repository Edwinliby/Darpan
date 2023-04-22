import { useRef, useEffect, useState } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Video from "@/components/Video";
import About from "@/components/About";
import Marque2 from "@/components/Marque2";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import Clock from "@/components/Clock";
import Map from "@/components/Map";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/all";
import fsPromises from "fs/promises";
import path from "path";
// import SliderThree from "@/components/SliderThree";
import RitModel from "@/components/RitModel";
// import EventSlider from "@/components/EventSlider";
// import Slider from "react-slick";
// import Image from "next/image";
// import Link from "next/link";

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

  // const posts = props.posts;

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

      <div className=" h-fit py-5 w-[40vh] sm:w-[55vh] md:w-[100vh] lg:w-[130vh] xl:w-[170vh]  mx-auto">
        {/* <h1 className="text-[2.7rem] md:text-[4rem] text-white font-clash font-bold tracking-wider uppercase">
          Events
        </h1> */}
        {/* <Slider {...settings}>
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex justify-center border-0 hover:scale-110 transition-all duration-300 ease-in-out"
            >
              <Link href={`/events/${post.id}`}>
              <Image
                src={post.img}
                alt={post.title}
                width={500}
                height={500}
                className="object-cover p-2"
              />
              </Link>
            </div>
          ))}
        </Slider> */}
      </div>

      <div className="bg-gradient-to-b from-primary to-transparent rounded-t-[0px]">
        {/* <SliderThree /> */}
        {/* <RitModel /> */}
        {/* <EventSlider /> */}

        <section id="about">
          <About />
        </section>
      </div>

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

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "/data.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData,
  };
}
