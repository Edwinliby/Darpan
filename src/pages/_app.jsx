/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Chakra_Petch } from "next/font/google";
import { IBM_Plex_Mono } from "next/font/google";
import LocalFont from "next/font/local";
import "../styles/global.css";
import "../styles/styles.css";
import Loader from "@/components/Loader";

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

export default function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <main className={`${font_chakra.variable} ${font_clash_display.variable} ${font_ibm.variable}`}>
      {/* {loading ? <Loader /> : motion.div(<Component {...pageProps} />, { initial: "pageInitial", animate: "pageAnimate", variants: { pageInitial: { opacity: 0 }, pageAnimate: { opacity: 1 } } })} */}
      {loading ? <Loader /> : <Component {...pageProps} />}
    </main>
  );
}
