import React from "react";
import gsap from "gsap";

export default function SliderThree() {
  React.useEffect(() => {
    const $menu = document.querySelector(".menuu");
    const $items = document.querySelectorAll(".menu--item");
    let itemWidth = $items[0].clientWidth;
    let wrapWidth = $items.length * itemWidth;

    let scrollSpeed = 0;
    let oldScrollY = 0;
    let scrollY = 0;
    let y = 0;

    /*--------------------
        Lerp
        --------------------*/
    const lerp = (v0, v1, t) => {
      return v0 * (1 - t) + v1 * t;
    };

    /*--------------------
        Dispose
        --------------------*/
    const dispose = (scroll) => {
      gsap.set($items, {
        x: (i) => {
          return i * itemWidth + scroll;
        },
        modifiers: {
          x: (x) => {
            const s = gsap.utils.wrap(
              -itemWidth,
              wrapWidth - itemWidth,
              parseInt(x)
            );
            return `${s}px`;
          },
        },
      });
    };
    dispose(0);

    /*--------------------
        Wheel
        --------------------*/
    const handleMouseWheel = (e) => {
      scrollY -= e.deltaY * 0.9;
    };

    /*--------------------
        Touch
        --------------------*/
    let touchStart = 0;
    let touchX = 0;
    let isDragging = false;
    const handleTouchStart = (e) => {
      touchStart = e.clientX || e.touches[0].clientX;
      isDragging = true;
    };
    const handleTouchMove = (e) => {
      if (!isDragging) return;
      touchX = e.clientX || e.touches[0].clientX;
      scrollY += (touchX - touchStart) * 2.5;
      touchStart = touchX;
    };
    const handleTouchEnd = () => {
      isDragging = false;
    };

    $menu.addEventListener("mousewheel", handleMouseWheel);

    $menu.addEventListener("touchstart", handleTouchStart);
    $menu.addEventListener("touchmove", handleTouchMove);
    $menu.addEventListener("touchend", handleTouchEnd);

    $menu.addEventListener("mousedown", handleTouchStart);
    $menu.addEventListener("mousemove", handleTouchMove);
    $menu.addEventListener("mouseleave", handleTouchEnd);
    $menu.addEventListener("mouseup", handleTouchEnd);

    $menu.addEventListener("selectstart", () => {
      return false;
    });
    window.addEventListener("resize", () => {
      itemWidth = $items[0].clientWidth;
      wrapWidth = $items.length * itemWidth;
    });

    const render = () => {
      requestAnimationFrame(render);
      y = lerp(y, scrollY, 0.1);
      dispose(y);

      scrollSpeed = y - oldScrollY;
      oldScrollY = y;

      gsap.to($items, {
        skewX: -scrollSpeed * 0.2,
        rotate: scrollSpeed * 0.01,
        scale: 1 - Math.min(100, Math.abs(scrollSpeed)) * 0.003,
      });
    };
    render();

    //auto Scroll to center
    gsap.to($menu, {
      duration: 1,
      scrollTo: {
        y: ".menu--item:nth-child(3)",
        offsetY: 100,
      },
      ease: "power2.out",
    });
  }, []);

  return (
    <div
      className="w-full h-screen flex flex-col items-center"
      style={{
        backgroundImage: "url(/bg_events.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-[2.7rem] md:text-[3rem]  font-clash font-bold tracking-wider uppercase my-10 text-white">
        THE COLORS
      </h1>

      <div className="menuu">
        <div className="menu--wrapper">
          <div className="menu--item">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1595265677860-9a3168007dc0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                alt=""
              />
            </figure>
          </div>

          <div className="menu--item">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1594786118579-95ba90c801ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                alt=""
              />
            </figure>
          </div>

          <div className="menu--item">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1509339022327-1e1e25360a41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                alt=""
              />
            </figure>
          </div>

          <div className="menu--item">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1525417071002-5ee4e6bb44f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                alt=""
              />
            </figure>
          </div>

          <div className="menu--item">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1594072702031-f0e2a602dd2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                alt=""
              />
            </figure>
          </div>

          <div className="menu--item">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1592989819277-a3aafa40c66a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                alt=""
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
