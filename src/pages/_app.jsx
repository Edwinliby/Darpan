import React from "react";
import { Chakra_Petch } from "next/font/google";
import { IBM_Plex_Mono } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import LocalFont from "next/font/local";
import Loader from "@/components/Loader";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import "../styles/global.css";
import "../styles/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import InitialLoader from "@/components/InitialLoader";
import Title from "@/components/Head";

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

const font_bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas",
});

const font_clash_display = LocalFont({
  src: "../fonts/ClashDisplay-Variable.ttf",
  variable: "--font-clash-display",
});

const font_akira = LocalFont({
  src: "../fonts/akira.otf",
  variable: "--font-akira"
})

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [initialLoading, setInitialLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setInitialLoading(false);
    }, 2700);

    const handleStart = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2700);
    };

    router.events.on(
      "routeChangeStart",
      (url) => url != router.asPath && handleStart()
    );

    return () => {
      router.events.off(
        "routeChangeStart",
        (url) => url != router.asPath && handleStart()
      );
    };
  }, [router.asPath, router.events]);

  if (initialLoading) {
    return <InitialLoader />;
  }

  return (
    <>
    <Head>
      <link rel="shortcut icon" href={`/favicon.ico`} type="image/png" />
    </Head>
    <Title meta={pageProps.meta} />
      {/* <Title title={"Yukthi '24"} description={'Solve. Create. Thrive'} /> */}
      {loading ? (
        <Loader />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <main
            className={`${font_chakra.variable} ${font_clash_display.variable} ${font_akira.variable} ${font_ibm.variable} ${font_bebas.variable}`}
          >
            <Component {...pageProps} />
            <Analytics />

            <AnimatedCursor
              innerSize={12}
              outerSize={20}
              trailingSpeed={15}
              color="202, 250, 25"
              outerAlpha={0.7}
              innerScale={1.5}
              outerScale={2}
              clickables={[
                "a",
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                "label[for]",
                "select",
                "textarea",
                "button",
                ".link",
              ]}
            />
          </main>
        </motion.div>
      )}
    </>
  );
}

export async function getStaticProps() {
  const title = 'Yukthi';
  const description = 'Solve. Create. Thrive';
  const domain = "https://yukthi.org";
  const url = `${domain}/`;

  return {
    props: {
      meta: {
        title,
        description,
        url,
        image: `${domain}/twitter.png`,
      },
    },
  };
}
