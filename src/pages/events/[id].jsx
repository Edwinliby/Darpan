import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import fsPromises from 'fs/promises'
import path from 'path'

function EventsDetails(props) {

  return (
    <setion >
      <Header />
      <div className="h-fit pt-24 p-6 bg-soothing_black text-white">
        <div className="flex flex-col items-center ">
          <p className="text-xl font-medium font-clash text-center">Darpan presents</p>
          <h1 className="text-[3rem] xl:text-[4rem] font-clash font-semibold text-center">{props.title}</h1>

          <div className="flex flex-col mt-[2rem] md:flex-row rounded-xl justify-center w-[100%] md:w-[90%] font-clash bg-gray/25">
            <Image
              src={props.image}
              alt={props.title}
              width={500}
              height={500}
              className=''
            />
            <div className='relative flex flex-col justify-between px-2 md:p-8 gap-16'>
              <div>
                <div className='flex relative'>
                  <div className='w-8 h-8 bg-white rounded-full border-[2px] border-white/70'></div>
                  <div className='absolute left-4 w-8 h-8 rounded-full border-[2px] border-white/70'></div>
                </div>

                <h3 className='font-semibold text-[2rem] pb-2'>About event</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia animi nobis similique veritatis,
                  omnis dolor aut maxime eveniet ex ratione pariatur. Consectetur reiciendis distinctio saepe
                  pariatur doloribus non possimus assumenda.
                  dolor aut maxime eveniet ex ratione pariatur. Consectetur reiciendis distinctio saepe
                  pariatur doloribus non possimus assumenda.
                </p>
              </div>

              <button className='relative bottom-5 bg-white text-black w-full rounded-full p-2 font-medium hover:bg-gray hover:text-white transition duration-300 ease-in-out'>Register Now</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </setion>
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
      description: post.content
    },
  };

}

export default EventsDetails