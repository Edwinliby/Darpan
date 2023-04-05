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

// import Image from "next/image";
// import Link from "next/link";

const Home = (props) => {
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

      <Header />
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

      {/* <section className="text-white pt-4" id='events'>
        <div className="relative">
          <div className='relative top-[-1rem] px-2 xl:px-8 flex justify-center w-full font-clash font-bold'>
            <span className='text-[3.5rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[5rem] xl:text-[5.5rem] z-10'>EVENTS</span>
            <span className='absolute text-white/10 text-[4rem] sm:text-[4.5rem] md:text-[5rem] lg:text-[5.5rem] xl:text-[7rem]  xl:top-2 top-3'>EVENTS</span>
          </div>

          <div className="flex flex-wrap relative py-8 xl:py-10 items-center justify-center gap-8">
            {posts.map(post =>
              <div className="relative"
                key={post.id}>
                <div className="bg-slate-200 w-21rem h-[20rem] flex items-center justify-center rounded-2xl hover:scale-100 hover:shadow-3xl hover:shadow-primary transform transition duration-500 ease-in-out">
                  <Image
                    src={post.img}
                    width={500}
                    height={500}
                    alt="logo"
                    className='w-[21rem] h-[20rem] rounded-xl'
                  />
                  <Link
                    href={`/events/${post.id}`}
                    className="absolute top-0 left-0 w-full h-full z-10"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section> */}

      <Marque2 />

      <section id="faq">
        <Faq />
      </section>

      <Footer />
    </div>
  );
};

export default Home;

// Fetching data from the JSON file
// import fsPromises from 'fs/promises';
// import path from 'path'
// export async function getStaticProps() {
//   const filePath = path.join(process.cwd(), '/data.json');
//   const jsonData = await fsPromises.readFile(filePath);
//   const objectData = JSON.parse(jsonData);

//   return {
//     props: objectData
//   }
// }