import React from "react";
import { Chakra_Petch } from "next/font/google";
import { IBM_Plex_Mono } from "next/font/google";
import LocalFont from "next/font/local";
import "../styles/global.css";
import "../styles/styles.css";
import Loader from "@/components/Loader";
import dynamic from 'next/dynamic'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/all";

const font_chakra = Chakra_Petch({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-chakra",
});

const font_ibm = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm",
});

const font_clash_display = LocalFont({
  src: "../fonts/ClashDisplay-Variable.ttf",
  variable: "--font-clash-display",
});

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});

export default function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

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
    <main className={`${font_chakra.variable} ${font_clash_display.variable} ${font_ibm.variable}`}>
      {loading ? <Loader /> : <Component {...pageProps} />}
      <progress max="100" value="0"></progress>
      <AnimatedCursor
        innerSize={12}
        outerSize={20}
        trailingSpeed={15}
        color='151, 71, 255'
        outerAlpha={0.7}
        innerScale={1.5}
        outerScale={2}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />
    </main>
  );
}
