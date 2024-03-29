"use client";
import Image from "next/image";
import { useRef } from "react";
import gsap, { CSSPlugin, Expo } from "gsap";
import { useGSAP } from "@gsap/react";
import Hero from "@/components/Hero";
import HeroMain from "@/components/HeroMain";
import logo from "@/public/assets/BitSpectronLogo.png";
import { Menu, Shuffle } from "lucide-react";

gsap.registerPlugin(useGSAP);
export default function Home() {
  const conatinerMain = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP(
    () => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap
            .timeline({ repeat: -1, repeatDelay: 3, yoyo: true })
            .fromTo(
              ".work-div",
              {
                rotation: 0,
                scale: 1,
              },
              {
                rotation: 15,
                scale: 1.05,
                ease: "circ.inOut",
                duration: 0.4,
              }
            )
            .to(".work-div", {
              rotation: 0,
              scale: 1,
              duration: 0.4,
              ease: "circ.inOut",
            });
        },
      });
      tl.to(".loader-element", {
        display: "block",
        opacity: 1,
        ease: Expo.easeIn,
        delay: 0.5,
        duration: 1,
      })
        .fromTo(
          ".loader-element .logo .logo-tagline .logo-line",
          {
            opacity: 0,
            stagger: 0.5,
          },
          {
            opacity: 1,
            display: "inline",
            stagger: 0.5,
            ease: "back.inOut",
          }
        )
        .to(".loader-element", {
          display: "none",
          opacity: 0,
          ease: Expo.easeOut,
          delay: 0.5,
          duration: 1,
        })

        .to(".content-container", {
          width: "100%",
          ease: Expo.easeInOut,
          duration: 1.5,
        })
        .to(".content", {
          display: "block",
          opacity: 1,
          duration: 0.5,
        })
        .from(
          ".content div .hero-wrapper .hero-line div .word",
          {
            translateY: 150,
            stagger: 0.1,
            duration: 1,
            ease: "back.out",
          },
          "<"
        )
        .to(".content div .hero-wrapper .hero-line div .word", {
          translateY: 0,
        })
        .fromTo(
          ".work-div",
          {
            scale: 0,
            opacity: 0,
            display: "none",
          },
          {
            opacity: 1,
            scale: 1,
            display: "block",
            ease: "elastic.inOut",
            duration: 3,
          },
          "-=2.5"
        )
        .fromTo(
          [".content div .logo"],
          {
            opacity: 0,
            display: "none",
          },
          {
            opacity: 1,
            display: "flex",
          },
          "-=1"
        )
        .fromTo(
          ".content div .logo .logo-tagline .logo-line",
          {
            opacity: 0,
            stagger: 0.5,
          },
          {
            opacity: 1,
            display: "inline",
            stagger: 0.5,
            ease: "back.inOut",
          },
          "-=1"
        )
        .fromTo(
          ".contact-btn",
          {
            opacity: 0,
            display: "none",
            scale: 0,
          },
          { opacity: 1, display: "flex", scale: 1 }
        )
        .fromTo(
          ".menu-btn",
          {
            opacity: 0,
            display: "none",
            scale: 0,
          },
          {
            opacity: 1,
            display: "block",
            scale: 1,
            ease: "elastic.inOut",
            duration: 2,
          },
          "-=1"
        );
    },
    { scope: conatinerMain }
  );

  const onMenuClick = contextSafe(() => {
    const tl = gsap.timeline();

    tl.to([".menu-icon-1", ".menu-close-1"], {
      rotation: 45,
      translate: "0rem 0.2rem",
    })
      .to(
        [".menu-icon-2", ".menu-close-2"],
        {
          rotation: -45,
          translate: "0rem -0.5rem",
        },
        "<"
      )
      .to(".menu-container", { opacity: 1, display: "block" });
  });

  const onMenuClose = contextSafe(() => {
    const tl = gsap.timeline();
    tl.to([".menu-icon-1", ".menu-close-1"], {
      rotation: 0,
      translate: "0rem 0rem",
    })
      .to(
        [".menu-icon-2", ".menu-close-2"],
        {
          rotation: 0,
          translate: "0rem 0rem",
        },
        "<"
      )
      .to(".menu-container", { opacity: 0, display: "none" });
  });

  return (
    <div
      className="main-container h-screen w-screen relative"
      ref={conatinerMain}>
      <div className="loader-conatiner text-white relative bg-black h-full w-screen flex justify-center text-center items-center z-[2]">
        <div
          className="loader-element w-[10%] h-auto"
          style={{ display: "none", opacity: 0 }}>
          <div className="logo flex gap-6 justify-start w-full">
            <Image src={logo} alt={""} className="w-[4.5rem] h-auto" />

            <div className="logo-tagline text-md font-sans flex flex-col font-thin tracking-[0.2rem] uppercase leading-4 justify-center items-start">
              <p className="logo-line">Dream</p>
              <p className="logo-line">Design</p>
              <p className="logo-line">Deploy</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="content-container bg-white h-full flex flex-col justify-center items-center z-[3] translate-y-[-50%] top-[50%] absolute"
        style={{ width: "0" }}>
        <HeroMain />
      </div>
      <div
        className="menu-btn fixed top-12 phone:right-6 smTablet:right-20 z-[5] px-3 py-6 space-y-2 bg-black rounded-full cursor-pointer"
        onClick={() => {
          onMenuClick();
        }}>
        <div className="menu-icon-1 w-[2.5rem] bg-white rounded-xl h-1"></div>
        <div className="menu-icon-2 w-[2.5rem] bg-white rounded-xl h-1"></div>
      </div>
      <div
        className="menu-container fixed top-0 h-full w-full bg-purple-300 z-[10]"
        style={{ opacity: 0, display: "none" }}>
        <div className="w-full h-full flex justify-center items-center">
          Hello
        </div>
        <div
          className="fixed top-12 phone:right-6 smTablet:right-20 z-[5] px-3 py-6 space-y-2 cursor-pointer"
          onClick={() => {
            onMenuClose();
          }}>
          <div className="menu-close-1 w-[2.5rem] bg-black rounded-xl h-1"></div>
          <div className="menu-close-2 w-[2.5rem] bg-black rounded-xl h-1"></div>
        </div>
      </div>
      <div className="relative">
        <Hero />
      </div>
      <div
        style={{
          opacity: 0,
          display: "none",
          scale: 0,
        }}
        className="work-div cursor-pointer rounded-full fixed uppercase font-warsaw text-center tracking-normal text-[2rem] leading-8 px-4 py-12 font-black text-wrap bg-[#3CFFC3] z-[5] phone:bottom-6 tablet:bottom-10 phone:right-6 smLaptop:right-16">
        Work <br /> With &nbsp; Us ?
      </div>
    </div>
  );
}

{
  /* <svg
            id="logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 79.12 45.55">
            <rect
              id="line1"
              x="19.37"
              y="6.78"
              width="6.78"
              height="32"
              stroke-width="0"
              style={{
                transformOrigin: "0px 0px",
                translate: "none",
                rotate: "none ",
                scale: "none;",
                fill: "white",
              }}
              data-svg-origin="22.760000944137573 6.78000020980835"
              transform="matrix(1,0,0,1,0,0)"></rect>
            <polygon
              id="angle1"
              points="7.06 38.78 13.84 38.78 19.37 6.78 12.59 6.78 7.06 38.78"
              stroke-width="0"
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                visibility: "visible",
                transformOrigin: "0px 0px",
                fill: "white",
              }}
              data-svg-origin="13.215000629425049 6.779999732971191"
              transform="matrix(1,0,0,1,0,0)"></polygon>
            <rect
              id="line2"
              x="32.93"
              y="6.78"
              width="6.78"
              height="32"
              stroke-width="0"
              style={{
                transformOrigin: "0px 0px",
                translate: "none",
                rotate: "none ",
                scale: "none;",
                fill: "white",
              }}
              data-svg-origin="36.320000410079956 6.78000020980835"
              transform="matrix(1,0,0,1,0,0)"></rect>
            <polygon
              id="angle2"
              points="39.72 38.78 46.5 38.78 52.03 6.78 45.25 6.78 39.72 38.78"
              stroke-width="0"
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                visibility: "visible",
                transformOrigin: "0px 0px",
                fill: "white",
              }}
              data-svg-origin="45.875 38.77999973297119"
              transform="matrix(1,0,0,1,0.33808,0)"></polygon>
            <rect
              id="line3"
              x="52.03"
              y="6.78"
              width="6.78"
              height="32"
              stroke-width="0"
              style={{
                transformOrigin: "0px 0px",
                translate: "none",
                rotate: "none ",
                scale: "none;",
                fill: "white",
              }}
              data-svg-origin="55.41999888420105 6.78000020980835"
              transform="matrix(1,0,0,1,0,0)"></rect>
            <polygon
              id="angle3"
              points="64.34 6.78 58.81 38.78 65.59 38.78 71.12 6.78 64.34 6.78"
              stroke-width="0"
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                visibility: "visible",
                transformOrigin: "0px 0px",
                fill: "white",
              }}
              data-svg-origin="64.96500205993652 38.77999973297119"
              transform="matrix(1,0,0,1,0.33808,0)"></polygon>
          </svg> */
}
{
  /* <svg
            id="logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64.06 32">
            <rect
              id="line1"
              x="12.31"
              width="6.78"
              height="32"
              stroke-width="0"
              style={{ fill: "white" }}></rect>
            <polygon
              id="angle1"
              points="0 32 6.78 32 12.31 0 5.53 0 0 32"
              stroke-width="0"></polygon>
            <rect
              id="line2"
              x="25.88"
              width="6.78"
              height="32"
              stroke-width="0"></rect>
            <polygon
              id="angle2"
              points="32.66 32 39.44 32 44.97 0 38.19 0 32.66 32"
              stroke-width="0"></polygon>
            <rect
              id="line3"
              x="44.97"
              width="6.78"
              height="32"
              stroke-width="0"></rect>
            <polygon
              id="angle3"
              points="57.28 0 51.75 32 58.53 32 64.06 0 57.28 0"
              stroke-width="0"></polygon>
          </svg> */
}
