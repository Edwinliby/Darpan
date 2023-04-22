import React from "react";

export default function RitModel() {
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

    function addClass($event) {
      $event.stopPropagation();
      removeActiveClass();
      const target = $event.currentTarget;
      target.classList.add(ACTIVECLASS);
    }

    IMAGES.forEach((image) => {
      image.addEventListener("click", addClass);
    });
  }, []);

  return (
    <div className="flex justify-center items-center flex-col py-8">
      <h1 className="text-6xl font-bold text-center uppercase text-white mt-2 font-clash">
        Events
      </h1>

      <section class="flex items-stretch justify-between w-[90%] max-w-[60rem] h-[65vh]  my-20">
        <article class="flex-card-container bg-[url('/slider/cultural.jpg')] bg-cover bg-no-repeat">
          <div class="overlay"></div>
        </article>

        <article class="flex-card-container bg-[url('/slider/events.jpg')] bg-cover bg-no-repeat">
          <div class="overlay"></div>
        </article>

        <article class="flex-card-container bg-[url('/slider/games.jpg')] bg-cover bg-no-repeat">
          <div class="overlay"></div>
        </article>

        <article class="flex-card-container bg-[url('/slider/workshop.avif')] bg-cover bg-no-repeat">
          <div class="overlay"></div>
        </article>
      </section>
    </div>
  );
}
