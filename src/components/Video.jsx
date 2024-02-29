import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function Video() {
  gsap.registerPlugin(ScrollTrigger);

  const videoRef = useRef(null);
  const textRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    videoRef.current.addEventListener("ended", () => {
      videoRef.current.currentTime = 10;
      videoRef.current.play();
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        start: "top center",
        end: "bottom top",
      },
    });
    tl.to(
      textRef.current,
      {
        translateY: -300,
      },
      0
    );
    tl.to(
      videoRef.current,
      {
        filter: "sepla(50%)",
      },
      0
    );
  }, []);

  return (
    <div ref={triggerRef} className="video-section hidden xl:block">
      <video ref={videoRef} src="/desktop.mp4" autoPlay loop muted></video>
      <div className="video-copy">
        <h1 ref={textRef} className="vidYukthi font-bebas">
          YUKTHI
        </h1>
      </div>
    </div>
  );
}

export default Video;
