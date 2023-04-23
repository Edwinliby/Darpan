import React from "react";
import Link from "next/link";

export default function RitModel() {
  const itemList = [
    {
      id: 1,
      title: "Cultural",
      image: "/slider/cultural.jpg",
    },
    {
      id: 2,
      title: "Events",
      image: "/slider/events.jpg",
    },
    {
      id: 3,
      title: "Games",
      image: "/slider/games.jpg",
    },
    {
      id: 4,
      title: "Workshops",
      image: "/slider/workshop.avif",
    },
    {
      id: 5,
      title: "Proshows",
      image: "/slider/proshow.jpeg",
    },
  ];

  React.useEffect(() => {
    const ACTIVECLASS = "active";
    const IMAGES = document.querySelectorAll(".flex-card-container");

    IMAGES[0].classList.add(ACTIVECLASS);

    function removeActiveClass() {
      const elm = document.querySelector(`.${ACTIVECLASS}`);
      if (elm) {
        elm.classList.remove(ACTIVECLASS);
      }
    }

    const t1 = setInterval(() => {
      const current = document.querySelector(`.${ACTIVECLASS}`);
      const next = current.nextElementSibling;
      removeActiveClass();
      if (next) {
        next.classList.add(ACTIVECLASS);
      } else {
        IMAGES[0].classList.add(ACTIVECLASS);
      }
    }, 3000);

    return () => {
      clearInterval(t1);
    };
  }, []);

  return (
    <div className="flex justify-center items-center flex-col lg:pt-12">
      <h1 className="text-4xl md:text-6xl font-bold text-center text-white font-clash tracking-wider p-2 md:px-4">
        Explore Your Interests
      </h1>

      <section class="flex flex-col items-center lg:flex-row lg:items-stretch justify-between w-[90%] max-w-[70rem] lg:h-[70vh] h-[100vh] mt-12">
        {itemList.map((item) => (
          <article
            key={item.id}
            class="flex-card-container bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          >
            <div className="bg-gradient-to-t from-black/20 to-transparent  w-full h-full">
              <h1 className=" text-xl lg:text-4xl font-bold text-center uppercase text-white mt-2 font-clash absolute bottom-0 left-0 rotate-180 w-full py-4 px-2 ">
                {item.title}
              </h1>
            </div>
            <Link href={`/events`} className="absolute inset-0">
              <div className="h-full w-full"></div>
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
