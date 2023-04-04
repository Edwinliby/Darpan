import React from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import fsPromises from 'fs/promises'
import path from 'path'

export default function Events({posts}) {
  posts.map(post => console.log(`post i: ${post}`))
  const [index, setIndex] = React.useState(0)

  return (
    <div className='h-screen w-screen bg-soothing_black'>
      <Head>
        <title>Darpan</title>
        <link rel="shortcut icon" href="/Darpan.png" type="image/png" />
      </Head>
      <Header />

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
         <span className='' onClick={setIndex(0)}>Arts</span>
         <span onClick={setIndex(1)}>Tech</span>
         <span onClick={setIndex(2)}>Cultural</span>
        </div>

        <div className='flex flex-wrap justify-center gap-8'>
          {posts[index].map(post =>
            <div className='relative w-[21rem] h-[20rem] rounded-2xl overflow-hidden'
              key={post.id}>
              <Image src={post.img}
                width={500}
                height={500}
                alt="Event Banner"
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
