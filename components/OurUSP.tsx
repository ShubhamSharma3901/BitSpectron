import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";
import Welcome from "./Welcome";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function OurUSP() {
  return (
    <>
      <div className="card-container  text-white w-screen flex flex-col justify-center items-center h-full relative">
        <div className="heading-wrapper py-6  flex flex-col justify-center items-center gap-2">
          <p
            className="usp-heading font-warsaw text-center"
            style={{ fontSize: "min(10vh,9vw)" }}>
            Our Superpower Toolbox
          </p>
          {/* <p className="usp-desc font-poppins phone:text-[min(3.5vh,3vw)]  font-extralight tracking-wider smTablet:w-[90%] phone:w-[90%] text-center text-pretty">
            At BitSpectron, we&apos;re here to solve your problems and develop
            websites that helps you stand out.
          </p> */}
        </div>
        <div className="card-wrapper w-full h-full">
          <div className="card gap-4 smLaptop:px-[7rem] smTablet:px-[3rem] phone:px-6 rounded-tl-3xl rounded-tr-3xl rounded-bl-xl rounded-br-xl bg-[#e0c9ee] smTablet:h-[80vh] phone:h-fit xlPhone:h-[80vh] flex flex-col justify-start items-start">
            <div className="w-full text-start flex phone:flex-col smTablet:flex-row justify-between items-center">
              <p
                className="font-warsaw text-start text-black font-black uppercase pt-10"
                style={{ fontSize: "min(16vh,15vw)" }}>
                Dream.
              </p>
              <div className="flex justify-center items-center smTablet:pt-10 phone:pt-2">
                <button className="border hover:bg-black hover:text-[#e0c9ee] transition text-black border-black rounded-full font-poppins smTablet:p-4 smLaptop:p-6 phone:p-4 smLaptop:text-3xl phone:text-md  flex justify-center items-center">
                  Tell Me More{" "}
                  <ArrowUpRight className="ml-2 h-auto smLaptop:w-10 smTablet:w-8 phone:w-6" />
                </button>
              </div>
            </div>
            <div className="flex flex-col w-full justify-center items-center">
              <div className="w-full space-y-6 flex phone:flex-col smTablet:flex-row phone:pt-8 smLaptop:pt-0">
                <div className="flex flex-col justify-start items-start smTablet:w-[60%] phone:w-full phone:gap-8 smTablet:gap-10">
                  <p className="smTablet:text-[min(5vh,5vw)] phone:text-2xl text-black font-warsaw">
                    From &nbsp;&nbsp; Dream &nbsp;&nbsp;to&nbsp;&nbsp; Screen
                  </p>
                  <div className="flex justify-center items-center">
                    <div className="">
                      <p className="text-md phone:mb-20 smTablet:mb-0 smLaptop:w-[65%] smTablet:w-[80%] phone:w-full text-justify font-poppins text-black">
                        We specialize in bringing your dream website to life,
                        offering expertise in design, development, and
                        optimization. We understand your vision and translate it
                        into a visually stunning, user-friendly interface. We
                        embody your brand identity, captivate your audience, and
                        drive results, making your dream website a reality.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-[40%] phone:hidden smTablet:block">
                  <ul className="text-black font-poppins text-md space-y-2 pt-4">
                    <li> DREAM MANIFESTATION</li>
                    <li>VISION REALIZATION</li>
                    <li>BRAND ACTIVATION</li>
                    <li>WEBSITE SUCCESS</li>
                    <li>DREAM FULFILLMENT</li>
                    <li>BRAND GOAL FULFILLMENT</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="card gap-4 smLaptop:px-[7rem] smTablet:px-[3rem] phone:px-6   flex flex-col justify-start items-start rounded-tl-3xl rounded-tr-3xl rounded-bl-xl rounded-br-xl bg-[#A8F0D1] smTablet:h-[80vh] phone:h-fit xlPhone:h-[80vh] w-full">
            <div className="w-full text-start flex phone:flex-col smTablet:flex-row justify-between items-center">
              <p
                className="font-warsaw text-start text-black font-black uppercase pt-10"
                style={{ fontSize: "min(16vh,15vw)" }}>
                Design.
              </p>
              <div className="flex justify-center items-center smTablet:pt-10 phone:pt-2">
                <button className="border hover:bg-black hover:text-[#e0c9ee] transition text-black border-black rounded-full font-poppins smTablet:p-4 smLaptop:p-6 phone:p-4 smLaptop:text-3xl phone:text-md  flex justify-center items-center">
                  Tell Me More{" "}
                  <ArrowUpRight className="ml-2 h-auto smLaptop:w-10 smTablet:w-8 phone:w-6" />
                </button>
              </div>
            </div>
            <div className="flex flex-col w-full justify-center items-center">
              <div className="w-full space-y-6 flex phone:flex-col smTablet:flex-row phone:pt-8 smLaptop:pt-0">
                <div className="flex flex-col justify-start items-start smTablet:w-[60%] phone:w-full phone:gap-8 smTablet:gap-10">
                  <p className="smTablet:text-[min(5vh,5vw)] text-wrap phone:text-2xl text-black font-warsaw">
                    Your &nbsp;&nbsp;Vision, &nbsp;&nbsp;Our&nbsp;&nbsp;
                    Expertise.
                  </p>
                  <div className="flex justify-center items-center w-full">
                    <div className="">
                      <p className="text-md phone:mb-20 smTablet:mb-0 text-justify font-poppins text-black smLaptop:w-[65%] smTablet:w-[80%] phone:w-full ">
                        We specialize in bringing your dream website to life,
                        offering expertise in design, development, and
                        optimization. We understand your vision and translate it
                        into a visually stunning, user-friendly interface. We
                        embody your brand identity, captivate your audience, and
                        drive results, making your dream website a reality.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-[40%] phone:hidden smTablet:block">
                  <ul className="text-black font-poppins text-md space-y-2 pt-4">
                    <li> DREAM DESIGN</li>

                    <li>VISIONARY AESTHETICS</li>

                    <li>ASPIRED LOOK</li>

                    <li>IDEAL APPEARANCE</li>

                    <li>ENVISIONED CONCEPT</li>

                    <li>BRAND IMAGINED INTERFACE</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="card gap-4 smLaptop:px-[7rem] smTablet:px-[3rem] phone:px-6   flex flex-col justify-start items-start rounded-tl-3xl rounded-tr-3xl rounded-bl-xl rounded-br-xl bg-[#ACE7FF] smTablet:h-[80vh] phone:h-fit xlPhone:h-[80vh] w-full">
            <div className="w-full text-start flex phone:flex-col smTablet:flex-row justify-between items-center">
              <p
                className="font-warsaw text-start text-black font-black uppercase pt-10"
                style={{ fontSize: "min(16vh,15vw)" }}>
                Develop.
              </p>
              <div className="flex justify-center items-center smTablet:pt-10 phone:pt-2">
                <button className="border hover:bg-black hover:text-[#e0c9ee] transition text-black border-black rounded-full font-poppins smTablet:p-4 smLaptop:p-6 phone:p-4 smLaptop:text-3xl phone:text-md  flex justify-center items-center">
                  Tell Me More{" "}
                  <ArrowUpRight className="ml-2 h-auto smLaptop:w-10 smTablet:w-8 phone:w-6" />
                </button>
              </div>
            </div>
            <div className="flex flex-col w-full justify-center items-center">
              <div className="w-[100%] space-y-6 flex phone:flex-col smTablet:flex-row phone:pt-8 smLaptop:pt-0">
                <div className="flex flex-col justify-start items-start w-[60%] phone:gap-8 smTablet:gap-10 smTablet:w-[60%] phone:w-full ">
                  <p className="smTablet:text-[min(5vh,5vw)] phone:text-2xl text-black font-warsaw">
                    &nbsp;&nbsp;Ideas&nbsp;&nbsp; Into&nbsp;&nbsp; Reality.
                  </p>
                  <div className="flex justify-center items-center w-full">
                    <div className="">
                      <p className="text-md phone:mb-20 smTablet:mb-0 text-justify font-poppins text-black smLaptop:w-[65%] smTablet:w-[80%] phone:w-full ">
                        We specialize in bringing your dream website to life,
                        offering expertise in design, development, and
                        optimization. We understand your vision and translate it
                        into a visually stunning, user-friendly interface. We
                        embody your brand identity, captivate your audience, and
                        drive results, making your dream website a reality.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-[40%] phone:hidden smTablet:block">
                  <ul className="text-black font-poppins text-md space-y-2 pt-4">
                    <li>IDEAL IMPLEMENTATION</li>

                    <li>ASPIRED GROWTH</li>

                    <li>ENVISIONED EVOLUTION</li>

                    <li>FULFILLED DESIGN</li>

                    <li>CONCEPTUALIZED EXPANSION</li>

                    <li>CONTENT MANAGEMENT SYSTEM</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="card gap-4 smLaptop:px-[7rem] smTablet:px-[3rem] phone:px-6   flex flex-col justify-start items-start rounded-tl-3xl rounded-tr-3xl rounded-bl-xl rounded-br-xl bg-[#edbdca] smTablet:h-[80vh] phone:h-fit xlPhone:h-[80vh] w-full">
            <div className="w-full text-start flex phone:flex-col smTablet:flex-row justify-between items-center">
              <p
                className="font-warsaw text-start text-black font-black uppercase pt-10"
                style={{ fontSize: "min(16vh,15vw)" }}>
                Deploy.
              </p>
              <div className="flex justify-center items-center smTablet:pt-10 phone:pt-2">
                <button className="border hover:bg-black hover:text-[#e0c9ee] transition text-black border-black rounded-full font-poppins smTablet:p-4 smLaptop:p-6 phone:p-4 smLaptop:text-3xl phone:text-md  flex justify-center items-center">
                  Tell Me More{" "}
                  <ArrowUpRight className="ml-2 h-auto smLaptop:w-10 smTablet:w-8 phone:w-6" />
                </button>
              </div>
            </div>
            <div className="flex flex-col w-full justify-center items-center">
              <div className="w-[100%] space-y-6 flex phone:flex-col smTablet:flex-row phone:pt-8 smLaptop:pt-0">
                <div className="flex flex-col justify-start items-start w-[60%] phone:gap-8 smTablet:gap-10 smTablet:w-[60%] phone:w-full ">
                  <p className="smTablet:text-[min(5vh,5vw)] phone:text-2xl text-black font-warsaw">
                    From &nbsp;&nbsp; Dream &nbsp;&nbsp;to&nbsp;&nbsp; Screen
                  </p>
                  <div className="flex justify-center items-center w-full">
                    <div className="">
                      <p className="text-md phone:mb-20 smTablet:mb-0 text-justify font-poppins text-black smLaptop:w-[65%] smTablet:w-[80%] phone:w-full ">
                        We specialize in bringing your dream website to life,
                        offering expertise in design, development, and
                        optimization. We understand your vision and translate it
                        into a visually stunning, user-friendly interface. We
                        embody your brand identity, captivate your audience, and
                        drive results, making your dream website a reality.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-[40%] phone:hidden smTablet:block">
                  <ul className="text-black font-poppins text-md space-y-2 pt-4">
                    <li> DEPLOYMENT STRATEGY</li>

                    <li>LAUNCH PLAN</li>

                    <li>ROLLOUT STRATEGY</li>

                    <li>LAUNCH MANAGEMENT</li>

                    <li>DEPLOYMENT TIMELINE</li>

                    <li>GO-LIVE STRATEGY</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="smTablet:h-[80vh] phone:h-fit xlPhone:h-[80vh] gap-4 smLaptop:px-[7rem] smTablet:px-[3rem] phone:px-6   flex flex-col justify-start items-start w-full bg-indigo-200 rounded-tl-3xl rounded-tr-3xl rounded-bl-xl rounded-br-xl relative z-[10]">
            <div className="w-full text-start flex phone:flex-col smTablet:flex-row justify-between items-center">
              <p
                className="font-warsaw text-start text-black font-black uppercase pt-10"
                style={{ fontSize: "min(16vh,15vw)" }}>
                Grow.
              </p>
              <div className="flex justify-center items-center smTablet:pt-10 phone:pt-2">
                <button className="border hover:bg-black hover:text-[#e0c9ee] transition text-black border-black rounded-full font-poppins smTablet:p-4 smLaptop:p-6 phone:p-4 smLaptop:text-3xl phone:text-md  flex justify-center items-center">
                  Tell Me More{" "}
                  <ArrowUpRight className="ml-2 h-auto smLaptop:w-10 smTablet:w-8 phone:w-6" />
                </button>
              </div>
            </div>
            <div className="flex flex-col w-full justify-center items-center">
              <div className="w-[100%] space-y-6 flex phone:flex-col smTablet:flex-row phone:pt-8 smLaptop:pt-0">
                <div className="flex flex-col justify-start items-start w-[60%] phone:gap-8 smTablet:gap-10 smTablet:w-[60%] phone:w-full ">
                  <p className="smTablet:text-[min(5vh,5vw)] phone:text-2xl text-black font-warsaw">
                    &nbsp;&nbsp;Your&nbsp;&nbsp; Online&nbsp;&nbsp; Presence
                  </p>
                  <div className="flex justify-center items-center w-full">
                    <div className="">
                      <p className="text-md phone:mb-20 smTablet:mb-0 text-justify font-poppins text-black smLaptop:w-[65%] smTablet:w-[80%] phone:w-full ">
                        We specialize in bringing your dream website to life,
                        offering expertise in design, development, and
                        optimization. We understand your vision and translate it
                        into a visually stunning, user-friendly interface. We
                        embody your brand identity, captivate your audience, and
                        drive results, making your dream website a reality.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-[40%] phone:hidden smTablet:block">
                  <ul className="text-black font-poppins text-md space-y-2 pt-4">
                    <li>MUTUAL GROWTH</li>

                    <li>COLLABORATIVE PROGRESS</li>

                    <li>COLLECTIVE ADVANCEMENT</li>

                    <li>CONJOINT ADVANCEMENT</li>

                    <li>TEAM GROWTH</li>

                    <li>CO-GROWTH STRATEGY</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurUSP;
