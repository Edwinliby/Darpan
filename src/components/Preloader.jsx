import { data } from "@/data/data"
import Link from "next/link"
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function Preloader() {
    const perspectiveRef = useRef(null);
    const triggerRef = useRef(null);
    const refs = data.map(() => useRef([]));

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const firstAnim = refs[0].current;
        const secondAnim = refs[1].current;
        let ctx = gsap.context(() => {
            gsap.timeline({
                defaults: {
                    ease: "none"
                },
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "2000 bottom",
                    scrub: 1,
                    pin: true,
                    snap: 1 / (refs.length),
                }
            })
                .to(perspectiveRef.current, {
                    transform: "translate3d(0px, 0px, 35rem)",
                })
                .set(firstAnim, {
                    opacity: 0,
                }, 0.250)
                .set(secondAnim, {
                    opacity: 0,
                }, 0.400);
        })
        return () => ctx.revert();
    }, []);

    return (
        <div>
            <div className='spacer'></div>
            <div ref={triggerRef} className="perspective">
                <div ref={perspectiveRef} className="perspective-inner">
                    {data.map((project, index) => (
                        <div ref={refs[index]} key={index} className={project.class}>
                            <img src={project.image} alt={project.text} />
                            <div className="perspective-desc">
                                <h2>{project.text}</h2>
                                <Link href="/">
                                    <span>Discover it</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='spacer'></div>
        </div>
    )
}

export default Preloader