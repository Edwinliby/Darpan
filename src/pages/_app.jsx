/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Chakra_Petch } from "next/font/google";
import LocalFont from "next/font/local";
import "../styles/global.css";

const font_chakra = Chakra_Petch({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-chakra",
});

const font_clash_display = LocalFont({
  src: "../fonts/ClashDisplay-Variable.ttf",
  variable: "--font-clash-display",
});
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={`${font_chakra.variable} ${font_clash_display.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
