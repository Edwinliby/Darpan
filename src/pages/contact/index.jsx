import Head from "next/head";
import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/all";

export default function Contact(props) {
  const posts = props.posts;

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("progress", {
      value: 100,
      scrollTrigger: {
        scrub: 0.5,
      },
    });
  }, []);

  return (
    <div className="h-fit w-screen bg-black">
      <Head>
        <title>Yukthi - Contact</title>
      </Head>
      <Header id="Navbar" />
      {/* <progress max="100" value="0"></progress> */}
      <main className='pt-[5.5rem] bg-[url("/signup.jpg")] h-full'>
        <div className="flex flex-col text-center items-center justify-center h-full gap-2">
          <h1 className="text-5xl text-white font-clash font-semibold">
            Yukthi '24&nbsp; Contact
          </h1>
          <p className="text-2xl text-white font-clash">
            Feel free to contact us
          </p>
        </div>
        <div className="text-white flex flex-wrap p-4 lg:p-10 gap-8 justify-center">
          {posts.map((post) => (
            <div
              key={post.id}
              className="w-[28rem] flex flex-col gap-2 bg-white/10 border-[.5px] border-gray/60 rounded-2xl hover:scale-105 hover:shadow-main_primary hover:shadow-md transition-all duration-500 ease-in-out p-5"
            >
              <h1 className="text-[1.8rem] lg:text-[2rem] font-clash font-medium">
                {post.title}
              </h1>
              <p className="font-clash text-[1.2rem] lg:text-xl">{post.sub}</p>
              <h2 className="text-[1.5rem] lg:text-3xl font-chakra">
                {post.name}
              </h2>
              <span className="text-2xl font-chakra">
                Ph no :{" "}
                <Link href="tel:9447789825" className="hover:text-main_primary">
                  {post.ph}
                </Link>
              </span>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

import fsPromises from "fs/promises";
import path from "path";
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "contact.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData,
  };
}
