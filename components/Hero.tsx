"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger, useGSAP);
  // translate3d(0px, 0px, 0px) scale(1.2359, 1.23586)
  useGSAP(
    () => {
      const textAnim = gsap.utils.toArray(".text-anim");
      const tl = gsap.timeline();
      tl.fromTo(
        textAnim,
        {
          stagger: 1.5,
          transformOrigin: "left",
          transform:
            "translate3d(0px, 0px, 0px) rotateY(-70deg) skew(0deg, 2deg)",
          duration: 0.5,
          ease: "none",
          fontSize: "10vw",
        },
        {
          transform: "rotateY(60deg) skew(0deg, 2deg)",
          fontSize: "6vw",
          scrollTrigger: {
            trigger: triggerRef.current,
            scrub: 2,

            start: "top 60%",
            end: "30% 60%",
          },
        }
      )
        .fromTo(
          ".anim-wrap",
          {
            transform: "translate3d(0px, 0px, 0px) scale(1.8, 1.8)",
            opacity: 1,
            translateX: "35%",
            stagger: 1.5,
          },
          {
            opacity: 1,
            translateX: 0,

            transform: "translate3d(0px, 0px, 0px) scale(1, 1)",
            perspective: "800px",
            marginLeft: "0",
            scrollTrigger: {
              trigger: triggerRef.current,
              scrub: 3,

              start: "top 60%",
              end: "30% 60%",
            },
          },
          "<"
        )
        .fromTo(
          ".text-anim-2",
          {
            stagger: 1.5,
            delay: 1,
            transformOrigin: "left",
            transform:
              "translate3d(0px, 0px, 0px) rotateY(-70deg) skew(0deg, 2deg)",
            duration: 0.5,
            ease: "none",
            fontSize: "10vw",
          },
          {
            transform: "rotateY(60deg) skew(0deg, 2deg)",
            fontSize: "6vw",
            delay: 1,
            scrollTrigger: {
              trigger: triggerRef.current,
              scrub: 2,

              start: "top 60%",
              end: "30% 60%",
            },
          },
          "+=2"
        )
        .fromTo(
          ".anim-wrap-2",
          {
            transform: "translate3d(0px, 0px, 0px) scale(1.8, 1.8)",
            opacity: 1,
            translateX: "35%",
            stagger: 1.5,
            delay: 1,
          },
          {
            opacity: 1,
            translateX: 0,

            transform: "translate3d(0px, 0px, 0px) scale(1, 1)",
            perspective: "800px",
            marginLeft: "0",
            scrollTrigger: {
              trigger: triggerRef.current,
              scrub: 3,

              start: "top 60%",
              end: "30% 60%",
            },
          },
          "+=1"
        );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="section-outer w-full h-full relative pl-6">
      {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

      {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}
      <div
        ref={triggerRef}
        className="w-screen flex flex-col justify-start items-start h-screen relative left-0">
        <div
          className="anim-wrap w-screen h-fit  text-white flex flex-col justify-start items-start z-[200]"
          style={{
            perspective: "800px",
          }}>
          <div className="text-anim-2 text-white w-full font-warsaw">
            <p className="text-white ">
              Change &nbsp; &nbsp; &nbsp; &nbsp;isnt
            </p>
          </div>
        </div>
        <div
          className="anim-wrap-2 w-screen h-fit  text-white flex flex-col justify-start items-start z-[200]"
          style={{
            perspective: "800px",
          }}>
          <div className="text-anim-2 text-white w-full font-warsaw">
            <p className="text-white ">
              Change &nbsp; &nbsp; &nbsp; &nbsp;isnt
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
