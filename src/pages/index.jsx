import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Marque from "@/components/Marque"
import Footer from "@/components/Footer";
import CoverflowEffect from "@/components/CoverflowEffect";

import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <div className="bg-soothing_black h-fit">
      <Head>
        <title>Darpan</title>
        <link rel="shortcut icon" href="/Darpan.png" type="image/png" />
      </Head>
      {/* <Header id="nav" /> */}

      <Navbar/>

      <section id="hero">
        <Hero />
      </section>

      <Marque />

      <section id="about"
        className="about">
        <About />
      </section>

      {/*events*/}
      <CoverflowEffect />

      {/*faq*/}

      {/*footer*/}
      <Footer />
    </div>
  );
};

export default Home;
