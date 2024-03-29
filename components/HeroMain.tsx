import React from "react";
import logo from "@/public/assets/BitSpectronLogo.png";
import Image from "next/image";
import { Menu } from "lucide-react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { WavyBackground } from "./ui/wavy-background";

function HeroMain() {
  return (
    <>
      <div
        className="content h-full w-full bg-black relative overflow-clip"
        style={{ display: "none", opacity: 0 }}>
        <WavyBackground className="z-[-1] waves"></WavyBackground>
        <div className="absolute bottom-[-35%] right-[-30%] laptop:w-[60%] tablet:w-[90%] phone:w-[100%] laptop:h-[90%] tablet:h-[80%] phone:h-[80%] bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob z-[3]"></div>
        <div className="absolute laptop:block hidden bottom-[-55%] right-[30%] w-[40%] h-[90%] bg-sky-200 rounded-full mix-blend-multiply filter blur-2xl opacity-80 animate-blob animation-delay-2000 z-[3]"></div>
        <div className="absolute bottom-[-35%] left-[-30%] laptop:w-[60%] tablet:w-[90%] phone:w-[100%] laptop:h-[90%] tablet:h-[80%] phone:h-[80%] bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-80 animate-blob animation-delay-4000 z-[3]"></div>
        <div className="smLaptop:w-[90%] fixed top-0 z-[500] smTablet:w-[80%] tablet:w-[85% h-[10rem] text-white flex justify-between items-center tablet:px-10">
          <div className="logo  flex gap-10 justify-start phone:w-full smTablet:w-[50%] phone:pl-6 smTablet:pl-10 smLaptop:pl-10">
            <Image
              src={logo}
              alt={""}
              className="smTablet:w-[4.5rem] phone:w-[15%] h-auto"
            />
            <div className="logo-tagline phone:text-xs smTablet:text-md font-sans flex flex-col font-thin tracking-[0.2rem] uppercase leading-4 justify-center items-start">
              <p className="logo-line">Dream</p>
              <p className="logo-line">Design</p>
              <p className="logo-line">Deploy</p>
            </div>
          </div>
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="contact-btn bg-black border phone:hidden smTablet:flex border-white/20 text-white flex items-center space-x-2">
            <span className="font-sans font-extralight">Get in Touch</span>
          </HoverBorderGradient>
        </div>
        <div className="w-full h-[calc(100vh-10rem)] fixed bottom-0 smTablet:pl-10 tablet:pl-16 phone:pl-4 pt-[10rem]">
          <div className="hero-wrapper w-full h-full flex flex-col justify-end smTablet:bottom-10 tablet:bottom-20 phone:bottom-[10rem] relative  items-start smLaptop:text-[15vh] laptop:text-[17vh] xlLaptop:text-[9rem] tracking-wide smTablet:text-[11vh] tablet:text-[11vh] phone:text-[8vh] leading-tight font-black ">
            <div className="hero-line min-h-[7vw] relative flex tablet:gap-6 laptop:gap-8 flex-wrap">
              <div className="overflow-hidden smLaptop:space-y-[-2rem] relative">
                <div className="word relative text-white uppercase font-warsaw text-pretty">
                  out with the old.
                </div>
                <div className="word relative text-white uppercase font-warsaw text-pretty">
                  in with the bold.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroMain;
