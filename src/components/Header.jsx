import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { Slant as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
import Navlink from "@/components/Navlink";

export default function Header() {
  const [isVisible, setIsVisible] = React.useState(true);
  const [isOpen, setOpen] = React.useState(false);

  const router = useRouter();

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    //on  scroll down direction
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > window.innerHeight) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const routes = [
    {
      label: 'Home',
      action: '/'
    },
    {
      label: 'Events',
      action: '/events'
    },
    {
      label: 'About',
      action: '/#about'
    },
    {
      label: 'FAQ',
      action: '/#faq'
    },
    {
      label: 'Brochure',
      action: '/brochure.pdf'
    },
    {
      label: 'Teams',
      action: '/teams'
    },
    {
      label: 'Contact',
      action: '/contact'
    }
  ]

  return (
    <>
      <header
        className="w-full h-[4.5rem] flex items-center py-2 fixed z-[25] border-b-[1.5px] bg-soothing_black/60 border-gray/40 backdrop-blur-md transition-all duration-300 ease-in-out"
        style={{ transform: isVisible ? "translateY(0)" : "translateY(-100%)" }}
      >
        <div
          className="ml:2 md:ml-4 z-[26]"
          style={{ opacity: isOpen ? 0 : 1 }}
        >
          <Hamburger
            color="white"
            label="Show menu"
            direction="right"
            size={25}
            rounded={true}
            toggle={setOpen}
            toggled={isOpen}
          />
        </div>

        <Link
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 hover:scale-110 z-50 transition duration-300  ease-in-out"
          href="/"
        >
          <Image
            src="/logo.png"
            width={40}
            height={40}
            alt="logo"
            className="opacity-80"
          />
        </Link>
        <progress max="100" value="0"></progress>
      </header>

      {isOpen && (
        <motion.div
          className="fixed top-0 menuPop left-0 w-[65vh] h-screen md:h-[95vh] md:ml-8 md:my-4 bg-black z-[26] backdrop-blur-sm rounded-xl border-[2px] border-gray/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative flex flex-col">
            <div className="pl-4 z-[26] h-[4.5rem] flex items-center border-[1.5px] rounded-t-xl bg-black border-gray/40">
              <Hamburger
                color="white"
                label="Show menu"
                direction="right"
                size={50}
                rounded={true}
                toggle={setOpen}
                toggled={isOpen}
              />
              <div className="ml-4 border-l-[1.5px] border-gray/40 h-full"></div>
            </div>
            <div className="text-5xl font-clash font-black flex flex-col mt-14 ml-8 md:mt-12 gap-4 ">
              {routes.map((item, index) => {
                return <div key={index} className={`relative ${item.action === router.pathname ? 'bg-white text-black' : 'hackNav text-white hover:bg-white hover:text-black'} w-fit text-left pl-2 pr-4 py-1 rounded-[4px]`}>
                  <Navlink name={item.label.toUpperCase()} link={item.action} setToggle={setOpen} />
                  <Image
                    src="/edgeTriangle.png"
                    width={20}
                    height={20}
                    alt="edge"
                    className="absolute bottom-[-1px] right-[-1px]"
                  />
                  <p className="absolute right-[-2rem] top-[2px] text-[8px] font-bold text-transparent navPageNo">
                    PAGE <br /> 0{index+1}
                  </p>
                </div>
              })}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
