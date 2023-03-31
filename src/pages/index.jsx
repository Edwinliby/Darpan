import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Marque from "@/components/Marque"
import Marque2 from "@/components/Marque2"
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import Image from "next/image";
import Link from "next/link";

// import Events from "@/components/Event/Events";


const Home = (props) => {
  const posts = props.posts;
  return (
    <div className="bg-soothing_black h-fit">
      <Head>
        <title>Darpan</title>
        <link rel="shortcut icon" href="/Darpan.png" type="image/png" />
      </Head>

      <Header id="nav" />

      <section id="hero">
        <Hero />
      </section>

      <Marque />

      <section id="about"
        className="about">
        <About />
      </section>

      {/*events*/}

      <section className="text-white pt-4" id='events'>
        <div className="relative">
          <div className='relative top-[-1rem] px-2 xl:px-8 flex justify-end w-full font-clash font-bold'>
            <span className='text-[3.5rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[5rem] xl:text-[5.5rem] z-10'>EVENTS</span>
            <span className='absolute text-white/10 text-[4rem] sm:text-[4.5rem] md:text-[5rem] lg:text-[5.5rem] xl:text-[7rem] right-5 xl:right-11 xl:top-5 top-4'>EVENTS</span>
          </div>

          <Marque2/>

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
      </section>

      {/* <Events/> */}

      <section id="faq">
        <Faq />
      </section>

      <Footer />
    </div>
  );
};

export default Home;


// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path'
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), '/data/data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData
  }
}