import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function OurWork() {
  const containerRefHor = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const horDiv = gsap.utils.toArray(".hor-div");
      const container = document.querySelector(".hor-container");
      const horDivContent = document.querySelector(".hor-div");

      console.log(container?.scrollWidth);

      const text = new SplitType(".anim-work");

      function getScroll() {
        console.log(window.innerWidth);
        if (window.innerWidth >= 1010) return -100 * (horDiv.length + 0.4);
        return -100 * (horDiv.length + 0.2);
      }

      const horScrollTween = gsap.to(horDiv, {
        xPercent: () => getScroll(),
        ease: "none",
        scrollTrigger: {
          trigger: ".hor-container-wrap",
          start: "top 20%",
          end: () => `+=${container?.scrollWidth!}`,
          pin: true,
          scrub: 1,
          // snap: 1 / (horDiv.length - 1),
          // markers: true,
          invalidateOnRefresh: true,
        },
        delay: 0.8,
      });

      const tl = gsap.timeline();
      tl.from(text.chars, {
        y: "100%",
        opacity: 0,
        kerning: 2,
        stagger: { each: 0.06 },
        duration: 0.5,
        transformOrigin: "left top",
        rotationZ: 8,
        scrollTrigger: {
          trigger: ".hor-div-work",
          start: "top center",
          end: "bottom center",
          scrub: 1,
          // markers: true,
        },
      }).fromTo(
        ".anim-work",
        {
          fontSize: "min(22vh,22vw)",
        },
        {
          fontSize: "min(18vh,18vw)",
          ease: "power1.inOut",
          duration: 0.5,
          scrollTrigger: {
            trigger: ".hor-div-work",
            // start: "300% 20%",
            // end: "500% 20%",
            start: "center center",
            end: "200% center",
            // markers: true,
            scrub: 1,
            // snap: 1 / (horDiv.length - 1),
            // markers: true,
            invalidateOnRefresh: true,
          },
        }
      );

      horDiv.forEach((section: any) => {
        let text = section.querySelector(".anim");

        // gsap
        //   .timeline({
        //     scrollTrigger: {
        //       trigger: section,
        //       containerAnimation: horScrollTween,
        //       start: "left right",
        //       scrub: 1,
        //       end: "10% right",
        //       markers: true,
        //     },
        //   })
        //   .from(section, {
        //     scale: 1,
        //     duration: 3,
        //     ease: "none",
        //   })
        //   .to(section, {
        //     scale: 0.9,
        //     duration: 3,
        //     ease: "none",
        //   })
        //   .to(section, {
        //     ease: "none",
        //     scale: 1,
        //   });

        gsap.from(text, {
          y: -130,
          opacity: 0,
          duration: 3,
          ease: "elastic",
          scrollTrigger: {
            trigger: section,
            containerAnimation: horScrollTween,
            start: "left center",
            // end: "center center",
            // markers: true,
          },
        });
      });
    },

    { scope: containerRefHor }
  );
  return (
    <>
      <div
        ref={containerRefHor}
        className="hor-container w-full h-fit text-white relative overflow-hidden py-10">
        <div className="hor-container-wrap w-fit h-fit smTablet:gap-10 phone:gap-6 border-white flex relative">
          <div className="hor-div-work w-[100vw] h-full  bg-black border-red-800 ">
            <p className="absolute bottom-0 h-fit anim-work text-white font-warsaw phone:text-[min(20vh,20vw)] smTablet:text-[10rem] ">
              Our Work
            </p>
          </div>
          <div className="hor-div smTablet:px-16 phone:px-10 pt-6 flex flex-col justify-start items-center phone:w-[100vw] smTablet:w-[80vw] smTablet:max-w-[50rem] smLaptop:max-w-[40rem] smTablet:h-[75vh] smTablet:max-h-[40rem] smLaptop:max-h-[37rem] phone:h-[60vh] rounded-xl bg-[#EBFBD9] bg-clip-padding  border border-gray-100/20">
            <div className="w-full flex justify-between items-center">
              <p className="anim text-black font-warsaw text-[min(10vh,10vw)] ">
                KurtiVeda
              </p>
              <ArrowUpRight className="text-black smTablet:w-[7rem] phone:w-[2rem] h-auto" />
            </div>
          </div>
          <div className="hor-div smTablet:px-16 phone:px-10 pt-6 flex flex-col justify-start items-center phone:w-[100vw] smTablet:w-[80vw] smTablet:max-w-[50rem] smLaptop:max-w-[40rem] smTablet:h-[75vh] smTablet:max-h-[40rem] smLaptop:max-h-[37rem] phone:h-[60vh] rounded-xl bg-[#EBFBD9] bg-clip-padding  border border-gray-100/20">
            <div className="w-full flex justify-between items-center">
              <p className="anim text-black font-warsaw text-[min(10vh,10vw)] ">
                FlashAI
              </p>
              <ArrowUpRight className="text-black smTablet:w-[7rem] phone:w-[2rem] h-auto" />
            </div>
          </div>
          <div className="hor-div smTablet:px-16 phone:px-10 pt-6 flex flex-col justify-start items-center phone:w-[100vw] smTablet:w-[80vw] smTablet:max-w-[50rem] smLaptop:max-w-[40rem] smTablet:h-[75vh] smTablet:max-h-[40rem] smLaptop:max-h-[37rem] phone:h-[60vh] rounded-xl bg-[#EBFBD9] bg-clip-padding  border border-gray-100/20">
            <div className="w-full flex justify-between items-center">
              <p className="anim text-black font-warsaw text-[min(10vh,10vw)] ">
                BloodFinder
              </p>
              <ArrowUpRight className="text-black smTablet:w-[7rem] phone:w-[2rem] h-auto" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurWork;
