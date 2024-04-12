"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import React from "react";

function notFound() {
  return (
    <div className="relative">
      <div className="bg-black/95 h-screen w-screen text-white relative">
        <BackgroundBeams className="w-full h-full relative" />
      </div>
      <div className="absolute z-[10] w-full translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] flex gap-4 flex-col justify-items-center">
        <p className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-black/10 font-warsaw w-full text-center tracking-wider text-[min(10vh,10vw)] ">
          Coming Soon
          <br />
        </p>
        <span className="smTablet:text-[min(2.5vh,2.5vw)] phone:text-[min(3.2vh,3.2vw)] w-full text-center font-light font-poppins text-white/80">
          At BitSpectron, we are actively working hard to bring this page live
          soon.
        </span>
      </div>
    </div>
  );
}

export default notFound;
