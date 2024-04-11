import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";
import SplitType from "split-type";

function WhoWeAre() {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  const containerRef = useRef(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".who-text-parent",
          scrub: 1,
          start: "top 20%",
          end: "80% center",
          //   markers: true,
        },
      });

      const whoText1 = SplitType.create(".who-text-line-1");
      const whoText2 = SplitType.create(".who-text-line-2");

      tl.fromTo(
        whoText1.chars,
        {
          opacity: 0,
          yPercent: 110,
        },
        {
          opacity: 1,
          yPercent: 0,
          stagger: { each: 0.04 },
          duration: 1,
        }
      )
        .to(whoText1.lines, {
          opacity: 0,
          yPercent: -110,
          stagger: { each: 0.04 },
          delay: 0.5,
          duration: 2,
        })
        .fromTo(
          whoText2.chars,
          {
            opacity: 0,
            yPercent: 110,
          },
          {
            opacity: 1,
            yPercent: 0,
            stagger: { each: 0.04 },
            duration: 1,
          }
        )
        .to(whoText2.lines, {
          opacity: 0,
          yPercent: -110,
          stagger: { each: 0.04 },
          delay: 0.5,
          duration: 2,
        });
    },
    { scope: containerRef, dependencies: [] }
  );
  return (
    <div
      ref={containerRef}
      className="who-text-container h-[200vh] flex justify-start items-start relative ">
      <div className="who-text-parent h-full w-full flex justify-start items-start relative">
        <div className="who-text-wrapper h-screen w-screen justify-start items-center flex relative">
          <div className="who-text-content h-full w-full relative  text-white font-warsaw flex flex-col justify-center items-center text-[min(10vw,6vh)] tracking-wide">
            <p className="who-text-line-1 absolute w-full text-center">
              Wondering Who We Are?
            </p>
            <p className="who-text-line-2 text-center absolute w-[90%] text-wrap  ">
              We&apos;re a strategic freelance web development agency for people
              trying to reach the (almost) impossible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
