import React from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import fsPromises from 'fs/promises'
import path from 'path'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/all";

export default function Events({ posts }) {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("progress", {
      value: 100,
      scrollTrigger: {
        scrub: 0.5,
      },
    });
  }, []);


  const animate = React.useRef(null);
  gsap.fromTo(animate.current, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1.5, delay: 1 });


  return (
    <div className='h-fit w-screen bg-soothing_black'>
      <Head>
        <title>Events</title>
        <link rel="shortcut icon" href="/Darpan.png" type="image/png" />
      </Head>
      <Header id="navbar" />
      <progress max="100" value="0"></progress>

      <main>
        <div className='relative top-[4.5rem] py-4 bg-[url("/banner.png")] object-fill text-white font-clash tracking-wide font-black flex flex-col items-center justify-center'>
          <span className='text-[1rem] md:text-[4rem]'>DARPAN 2023</span>
          <span className='text-[2.5rem] tracking-wider'>EVENTS</span>
        </div>

        <div className='relative top-[3rem] text-[1.3rem] font-semibold font-chakra flex flex-row gap-4 md:gap-12 p-8 items-center justify-center text-white'>
          <span className='rounded-full px-4 py-[.2rem] hover:bg-white/20  transition-all duration-500 ease-in-out' style={
            { border: index === 0 ? '1.5px solid gray' : 'none' }
          } onClick={() => setIndex(0)}>Games</span>

          <span className='rounded-full px-4 py-[.2rem] hover:bg-white/20 transition-all duration-500 ease-in-out' style={
            { border: index === 1 ? '1.5px solid gray' : 'none' }
          } onClick={() => setIndex(1)}>Cultural</span>

          <span className='rounded-full px-4 py-[.2rem] hover:bg-white/20 transition-all duration-500 ease-in-out' style={
            { border: index === 2 ? '1.5px solid gray' : 'none' }
          } onClick={() => setIndex(2)}>Workshop</span>

        </div>

        <div className='flex flex-wrap justify-center gap-8 p-6 pt-14'>
          {
            posts[index].map(post =>
              <div ref={animate}
                className='relative w-[21rem] h-[20rem] hover:scale-105 rounded-md overflow-hidden hover:shadow-lg hover:shadow-main_primary/80 transition-all duration-500 ease-in-out'
                key={post.id}>
                <Link href={`/events/${post.id}`}>
                  <Image src={post.img}
                    width={500}
                    height={500}
                    alt="Event's Image"
                    className='cursor-pointer object-cover transform transition-all duration-500 ease-in-out'
                  />
                </Link>
              </div>
            )}
        </div>

      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), '/events.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: {
      posts: objectData.posts
    },
  }
}
