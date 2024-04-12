import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import SplitType from "split-type";
import Link from "next/link";

function Welcome() {
  const containerRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".line-1",
        { translateY: 100, opacity: 0 },
        {
          translateY: 0,
          opacity: 1,
          ease: "expo.in",
          scrollTrigger: {
            trigger: ".text-container-wrap",
            start: "top center",
            end: "top center",
            scrub: 1,
          },
        }
      ).fromTo(
        ".text-overlay",
        { width: 0 },
        {
          width: "100%",
          delay: 1,
          ease: "expo.in",
          scrollTrigger: {
            trigger: ".text-container-wrap",
            start: "30% center",
            end: "center center",
            scrub: 3,
          },
        },
        "+=1"
      );
    },
    { scope: containerRef }
  );
  return (
    <div
      ref={containerRef}
      className="text-container w-screen h-[90vh] bg-black text-white flex justify-center items-center relative overflow-clip">
      <div className="text-container-wrap  w-fit h-full  flex flex-col gap-8 justify-center items-center overflow-clip">
        <div className="text-container-inner w-fit h-fit flex  justify-start items-end">
          <div
            className="text-original relative w-fit overflow-hidden h-fit flex justify-center items-center phone:text-[min(10vh,9vw)] text-wrap font-warsaw "
            style={{
              opacity: 0.1,
            }}>
            <p className="line-1">
              Welcome&nbsp;&nbsp; to&nbsp;&nbsp; BitSpectron
            </p>
          </div>
          <div
            className="text-overlay overflow-hidden h-fit flex justify-start items-center phone:text-[min(10vh,9vw)] whitespace-nowrap font-warsaw absolute "
            style={{
              opacity: 1,
              width: 0,
            }}>
            <p className="line-1">
              Welcome&nbsp;&nbsp; to&nbsp;&nbsp;
              <span className=" text-[#3de7fe]"> BitSpectron</span>
            </p>
          </div>
        </div>
        <div className="text-desc text-white/80 text-center smTablet:w-[90%] smLaptop:w-[75%] phone:w-[95%] font-poppins font-extralight tracking-widest phone:text-[min(3.2vh,3.5vw)] smTablet:text-[min(2.3vh,2.3vw)] smLaptop:text-[min(2.7vh,3.2vw)] text-wrap">
          We curate the brand and strategy mix that makes change happen. We
          bring creativity, knowledge and momentum to your table, crafting
          captivating designs and compelling stories, to help you build a
          stronger brand through authentic and powerful modern websites.
        </div>
        <div className="font-poppins text-[min(3.2vh,3.5vw)]">
          <span className="font-light">No Bluff,</span>{" "}
          <span className="font-light">No Nonsense,</span>{" "}
          <span className="font-semibold relative w-full">
            <span className="font-semibold text-[#3de7fe]">Just Results</span>
          </span>
        </div>
        <div className="text-center w-full flex justify-center items-center font-sans font-extralight tracking-widest text-xl">
          <Link href="#contact-form-div">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="contact-btn bg-black border phone:hidden smTablet:flex border-white/20 text-white flex items-center space-x-2">
              <span className="font-poppins font-extralight">Get in Touch</span>
            </HoverBorderGradient>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
