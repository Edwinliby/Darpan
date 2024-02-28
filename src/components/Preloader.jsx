//This is the preloader component to show in the beginning of the website
//show preloader_loading.mp4 until the preloader.mp4 is loaded and then show preloader.mp4

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export default function Preloader() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-300px",
  });
  const controls = useAnimation();
  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50">
      <div className="w-full h-full bg-black">
        <video
          ref={ref}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        >
          <source src="/marvel.mp4" type="video/mp4" />
        </video>
      </div>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 0 },
          hidden: { opacity: 1 },
        }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 w-full h-full z-50"
      >
        <div className="w-full h-full bg-black">
          <video autoPlay loop muted className="w-full h-full object-cover">
            <source src="/preloader.mp4" type="video/mp4" />
          </video>
        </div>
      </motion.div>
    </div>
  );
}
