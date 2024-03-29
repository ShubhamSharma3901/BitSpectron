"use client";
import React from "react";
import { useRef } from "react";
import gsap, { CSSPlugin, Expo } from "gsap";
import { useGSAP } from "@gsap/react";
import logo from "@/public/assets/BitSpectronLogo.png";
import Image from "next/image";
gsap.registerPlugin(useGSAP);
function Hero() {
  const container = useRef<HTMLDivElement>(null);

  return (
    <div
      className="content h-full border w-full relative overflow-clip"
      style={{ display: "none", opacity: 0 }}>
      <div className="absolute bottom-[-35%] right-[-30%] laptop:w-[60%] tablet:w-[90%] phone:w-[100%] laptop:h-[90%] tablet:h-[80%] phone:h-[80%] bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob z-[3]"></div>
      <div className="absolute laptop:block hidden bottom-[-55%] right-[30%] w-[40%] h-[90%] bg-teal-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-2000 z-[3]"></div>
      <div className="absolute bottom-[-35%] left-[-30%] border laptop:w-[60%] tablet:w-[90%] phone:w-[100%] laptop:h-[90%] tablet:h-[80%] phone:h-[80%] bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-4000 z-[3]"></div>
      <div className="w-full h-[5rem]">
        <p>BitSpectron</p>
      </div>
      <div className="w-full h-[calc(100vh-5rem)] pt-[10rem]">
        <div className="hero-wrapper w-full flex flex-col justify-center items-center laptop:text-[7rem] tablet:text-[5rem] phone:text-[2rem] leading-tight font-900 ">
          <div
            className="hero-line min-h-[7vw] relative flex gap-6"
            ref={container}>
            <div className="overflow-hidden  relative">
              <div className="word relative">Crafting</div>
            </div>
            <div>
              <div className="overflow-hidden  relative">
                <div className="word relative">Digital</div>
              </div>
            </div>
          </div>
          <div className="hero-line min-h-[5vw]">
            <div className="overflow-hidden  relative">
              <div className="word relative">Experiences.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
