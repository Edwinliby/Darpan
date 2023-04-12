import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import fsPromises from 'fs/promises'
import path from 'path'

function EventsDetails(props) {

  return (
    <>
      <Head>
        <title>Event Details</title>
      </Head>
      <section >
        <Header />
        <div className="h-fit pt-24 p-6 bg-black text-white">
          <div className="flex flex-col items-center ">
            <p className="text-xl font-medium font-clash text-center">Darpan presents</p>
            <h1 className="text-[3rem] xl:text-[4rem] font-clash font-semibold text-center">{props.title}</h1>

            <div className="flex flex-col mt-[2rem] md:flex-row rounded-xl justify-between w-full md:w-[90%] font-clash bg-gray/25">
              <Image
                src={props.image}
                alt={props.title}
                width={500}
                height={500}
                className=''
              />
              <div className='relative flex flex-col justify-between w-full px-2 md:p-8 gap-16'>
                <div className='flex flex-col gap-1'>
                  <div className='flex relative mt-6 md:mt-0 pb-2'>
                    <div className='w-8 h-8 bg-white rounded-full border-[2px] border-white/70'></div>
                    <div className='absolute left-4 w-8 h-8 rounded-full border-[2px] border-white/70'></div>
                  </div>

                  <h3 className='font-medium text-[1.5rem] md:text-8 pb-2'>{props.content}</h3>
                  <p>{props.description}</p>

                  <div className='flex flex-col font-chakra font-semibold gap-4 pt-6'>
                    <div className='flex flex-col'>
                      <span>Price pool : <span className='font-medium'>{props.pricepool}</span></span>
                      <span>Reg fee : <span className='font-medium'>{props.regfee}</span></span>
                      <span>End date : <span className='font-medium'>{props.enddate}</span></span>
                    </div>
                    <div className='flex flex-col'>
                      <span className='text-main_primary text-[1.5rem]'>Co-ordinators</span>
                      <Link href="tel:">{props.c1name} : <span className='font-medium hover:text-main_primary transition duration-300 ease-in-out'>{props.c1number}</span></Link>
                      <Link href="tel:">{props.c2name} : <span className='font-medium hover:text-main_primary transition duration-300 ease-in-out'>{props.c2number}</span></Link>
                    </div>
                  </div>
                </div>

                <Link href={props.link} className='relative bottom-5 text-center bg-white text-black w-full rounded-full p-2 font-medium hover:bg-gray hover:text-white transition duration-300 ease-in-out'>{props.register}</Link>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </>
  )
}

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), '/events.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  const paths = [];
  objectData.posts.forEach((post) => {
    post.forEach((post) => {
      paths.push({ params: { id: post.id.toString() } });
    });
  });


  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const filePath = path.join(process.cwd(), '/events.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  const id = context.params.id;

  const post = objectData.posts.flat().find((post) => post.id == id);

  return {
    props:
    {
      title: post.title,
      image: post.img,
      content: post.content,
      description: post.description,
      c1name: post.c1name,
      c1number: post.c1no,
      c2name: post.c2name,
      c2number: post.c2no,
      regfee: post.regfee,
      pricepool: post.pricepool,
      enddate: post.enddate,
      register: post.reg,
      link: post.link
    },
  };

}

export default EventsDetails