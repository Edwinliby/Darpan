import React from 'react'
import gsap from 'gsap';

export default function Navbar() {

    const title1 = React.useRef(null);
    const title2 = React.useRef(null);
    const title3 = React.useRef(null);
    const tl = gsap.timeline({ paused: true });

    React.useEffect(() => {

        tl.to(".menu-left", {
            duration: 1,
            left: 0,
            ease: "expo.inOut",
        });

        tl.to(
            ".menu-right",
            {
                duration: 1,
                right: 0,
                ease: "expo.inOut",
            },
            "-=1"
        );

        tl.staggerFrom(
            ".menu-links > div",
            0.8,
            {
                y: 100,
                opacity: 0,
                ease: "expo.out",
                stagger: 0.1,
            },
            "-=0.4"
        );

        tl.staggerFrom(
            ".mail > div, .socials > div",
            0.8,
            {
                y: 100,
                opacity: 0,
                ease: "expo.out",
                stagger: 0.1,
            },
            "-=1"
        );

        tl.from(
            ".menu-close",
            {
                duration: 1,
                scale: 0,
                opacity: 1,
                ease: "expo.inOut",
            },
            "-=1"
        );

        tl.to(
            ".hr",
            {
                duration: 0.4,
                scaleY: 1,
                transformOrigin: "0% 50%",
                ease: "power2.in",
            },
            "-=2"
        );

        tl.reverse();

        const menuOpen = document.querySelector('.menu-open');
        menuOpen.addEventListener('click', function () {
            tl.reversed(!tl.reversed());
        });

        const menuClose = document.querySelector('.menu-close');
        menuClose.addEventListener('click', function () {
            tl.reversed(!tl.reversed());
        });

    }, []);

    return (
        <div>
            <div class="container">
                <div class="menu-close">
                    <div class="menu-close-img"><img src="/public/Darpan.png" alt="" /></div>
                </div>
                <div class="hr"></div>
                <div class="menu">
                    <div class="menu-left">
                        <div class="menu-links">
                            <div class="menu-link">
                                <a href="#">Home <span>01</span></a>
                            </div>
                            <div class="menu-link">
                                <a href="#">Shop <span>02</span></a>
                            </div>
                            <div class="menu-link">
                                <a href="#">The Book <span>03</span></a>
                            </div>
                            <div class="menu-link">
                                <a href="#">Contact <span>04</span></a>
                            </div>
                        </div>
                    </div>
                    <div class="menu-right">
                        <div class="contact">
                            <div class="mail">
                                <div><span class="title">Contact</span><br /><br /></div>
                                <div><span class="info">codegridweb@gmail.com</span><br /></div>
                            </div>
                            <div class="socials">
                                <div><span class="title">Follow Us</span><br /><br /></div>
                                <div><span class="info">Instagram</span><br /><br /></div>
                                <div><span class="info">Facebook</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="menu-open">menu</div>
        </div>
    )
}
