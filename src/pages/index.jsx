import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Marque from "@/components/Marque"
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="bg-soothing_black h-fit">
      <Head>
        <title>Darpan</title>
        <link rel="shortcut icon" href="/Darpan.png" type="image/png" />
      </Head>
      <Header />

      <motion.section id="hero"
        initial={{
          margin: 0,
        }}
        animate={{
          margin: 10,
        }}
        transition={{
          delay: 1.5,
          duration: 1,
        }}>
        <Hero />
      </motion.section>

      <Marque />

      <section id="about"
        className="about">
        <About />
      </section>

      {/*events*/}

      {/*faq*/}

      {/*footer*/}
      <Footer/>
    </div>
  );
};

export default Home;
