import React from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
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


  console.log(posts[index]);


  return (
    <div className='h-fit w-screen bg-soothing_black'>
      <Head>
        <title>Darpan</title>
        <link rel="shortcut icon" href="/Darpan.png" type="image/png" />
      </Head>
      <Header />
      <progress max="100" value="0"></progress>

      <main>
        <div className='text-[4rem] text-white font-clash tracking-wide font-bold relative flex items-center justify-center'>
          <Image src="/Event_banner.png"
            width={1920}
            height={1080}
            alt="Event Banner"
          />
          <span className='absolute'>EVENTS</span>
        </div>
        <div className='text-[1.5rem] font-semibold font-chakra flex flex-row gap-12 p-8 items-center justify-center text-white'>
          <span className='' style={
            { borderBottom: index === 0 ? '2px solid #FFD700' : 'none' }
          } onClick={() => setIndex(0)}>Arts</span>

          <span className='' style={
            { borderBottom: index === 1 ? '2px solid #FFD700' : 'none' }
          } onClick={() => setIndex(1)}>Sports</span>

          <span className='' style={
            { borderBottom: index === 2 ? '2px solid #FFD700' : 'none' }
          } onClick={() => setIndex(2)}>Literary</span>

        </div>

        <div className='flex flex-wrap justify-center gap-8 p-6'>
          {
            posts[index].map(post =>
              <div className='relative w-[21rem] h-[20rem] rounded-md overflow-hidden'
                key={post.id}>
                <Image src={post.img}
                  width={500}
                  height={500}
                  alt="Event Banner"
                  className='hover:scale-110 transition-all duration-500 ease-in-out'
                  
                />
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
