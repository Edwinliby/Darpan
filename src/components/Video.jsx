import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function Video() {
    gsap.registerPlugin(ScrollTrigger);

    const videoRef = useRef(null)
    const textRef = useRef(null)
    const triggerRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline(
            {
                scrollTrigger: {
                    trigger: triggerRef.current,
                    scrub: true,
                    start: "top center",
                    end: "bottom top",
                },
            }
        );
        tl.to(
            textRef.current,
            {
                translateY: -300
            },
            0
        );
        tl.to(
            videoRef.current,
            {
                filter: "grayscale(80%)"
            },
            0
        );
    }, [])

    return (
        <div ref={triggerRef} className="video-section hidden xl:block">
            <video ref={videoRef} src="/test.mp4" loop autoPlay muted />
            <div className='video-copy'>
                <h1 ref={textRef} className="vidDarpan font-bebas">DARPAN</h1>
            </div>
        </div>
    )
}

export default Video