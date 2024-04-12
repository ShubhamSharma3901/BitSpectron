import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { ArrowUpRight, Globe, Globe2 } from "lucide-react";
import { LuSparkle } from "react-icons/lu";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  return (
    <>
      <div
        ref={containerRefHor}
        id={"our-work"}
        className="hor-container w-full h-fit text-white relative overflow-hidden py-10">
        <div className="hor-container-wrap w-fit h-fit smTablet:gap-10 phone:gap-6 border-white flex relative">
          <div className="hor-div-work w-[100vw] h-full  bg-black border-red-800 ">
            <p className="absolute bottom-0 h-fit anim-work text-white font-warsaw phone:text-[min(20vh,20vw)] smTablet:text-[10rem] ">
              Our Work
            </p>
          </div>

          {/* kurtiveda */}

          {/* <div className="hor-div smTablet:px-16 phone:px-10 pt-6 flex flex-col justify-start items-center phone:w-[100vw] smTablet:w-[80vw] smTablet:max-w-[50rem] smLaptop:max-w-[40rem] smTablet:h-[75vh] smTablet:max-h-[40rem] smLaptop:max-h-[37rem] phone:h-[60vh] rounded-xl bg-[#EBFBD9] bg-clip-padding  border border-gray-100/20">
            <div className="w-full flex justify-between items-center">
              <p className="anim text-black font-warsaw text-[min(10vh,10vw)] ">
                KurtiVeda
              </p>
              <ArrowUpRight className="text-black smTablet:w-[7rem] phone:w-[2rem] h-auto" />
            </div>
          </div> */}

          <div className="hor-div  smTablet:px-16 phone:px-10 pt-6 pb-10 flex flex-col justify-start items-center phone:w-[100vw] smTablet:w-[80vw] smTablet:max-w-[50rem] smLaptop:max-w-[40rem] smTablet:h-fit smLaptop:max-h-fit smLaptop:h-fit phone:h-full rounded-xl bg-[#EBFBD9] bg-clip-padding  border border-gray-100/20">
            <div
              onClick={() => {
                router.push("https://www.kurtiveda.com");
              }}
              className="cursor-pointer">
              <div className="w-full flex justify-between items-center">
                <p className="anim text-black font-warsaw text-[min(10vh,10vw)] ">
                  KurtiVeda
                </p>
                <ArrowUpRight className="text-black smTablet:w-[7rem] phone:w-[2rem] h-auto" />
              </div>
              <div className="flex flex-col gap-12">
                <div className="flex w-full justify-items-center gap-3 ">
                  <div className="flex justify-items-center h-full">
                    <LuSparkle className="bg-transparent text-black w-6 h-auto" />
                  </div>
                  <p className="text-black font-poppins font-bold text-xl">
                    E-commerce
                  </p>
                </div>
                <p className="text-black font-poppins">
                  Our agency took the reins in crafting Kurtiveda.com, the
                  ultimate destination for heritage ethnic wear aficionados.
                  From weaving intricate designs to deploying the site, we
                  handled every stitch with care, ensuring a seamless experience
                  from click to chic. With a dash of flair and a commitment to
                  client smiles, we spun a web of satisfaction, making shopping
                  as delightful as slipping into a beautifully tailored kurti.
                </p>
                <Link href={"https://www.kurtiveda.com"}>
                  <button className="text-black border hover:bg-black hover:text-[#EBFBD9] transition group border-black rounded-full p-4 font-semibold smTablet:text-[min(2.5vh,2.5vw)] phone:text-sm font-poppins tracking-wider flex justify-start items-center">
                    <Globe className="text-black group-hover:text-[#EBFBD9] mr-4" />{" "}
                    www.kurtiveda.com
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* flashai */}
          <div className="hor-div smTablet:px-16 phone:px-10 pt-6 pb-10 flex flex-col justify-start items-center phone:w-[100vw] smTablet:w-[80vw] smTablet:max-w-[50rem] smLaptop:max-w-[40rem] smTablet:h-fit smLaptop:max-h-fit smLaptop:h-fit phone:h-full rounded-xl bg-[#EBFBD9] bg-clip-padding  border border-gray-100/20">
            <div
              onClick={() => {
                router.push("https://www.flash-ai.online");
              }}
              className="cursor-pointer">
              <div className="w-full flex justify-between items-center">
                <p className="anim text-black font-warsaw text-[min(10vh,10vw)] ">
                  FlashAI
                </p>
                <ArrowUpRight className="text-black smTablet:w-[7rem] phone:w-[2rem] h-auto" />
              </div>
              <div className="flex flex-col gap-12">
                <div className="flex w-full justify-items-center gap-3 ">
                  <div className="flex justify-items-center h-full">
                    <LuSparkle className="bg-transparent text-black w-6 h-auto" />
                  </div>
                  <p className="text-black font-poppins font-bold text-xl">
                    Saas Solution
                  </p>
                </div>
                <p className="text-black font-poppins">
                  We crafted an AI-powered SaaS web app to streamline
                  developer&apos;s programming tasks, we ensured precise
                  responses and token management. Integrated with Stripe
                  Payments Gateway, our subscription model offers seamless
                  access to premium features. We implemented an API Rate Limiter
                  for fairness. Features include Code Interpreter, Debugger,
                  Git/Bash command finder, and Code Generation.
                </p>
                <div
                  onClick={() => {
                    router.push("https://www.flash-ai.online");
                  }}>
                  <button className="text-black border border-black rounded-full p-4 font-semibold smTablet:text-[min(2.5vh,2.5vw)] phone:text-sm  font-poppins tracking-wider flex justify-start items-center">
                    <Globe className="text-black mr-4" /> www.flash-ai.online
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* bloodf */}
          <div
            onClick={() => {
              router.push("/bloodfinder");
            }}
            className="hor-div smTablet:px-16 phone:px-10 pt-6 pb-10 flex flex-col justify-start items-center phone:w-[100vw] smTablet:w-[80vw] smTablet:max-w-[50rem] smLaptop:max-w-[40rem] smTablet:h-fit smLaptop:max-h-fit smLaptop:h-fit laptop:max-h-full phone:h-full rounded-xl bg-[#EBFBD9] bg-clip-padding  border border-gray-100/20">
            <div className="cursor-pointer">
              <div className="w-full flex justify-between items-center">
                <p className="anim text-black font-warsaw smLaptop:text-[min(10vh,10vw)] laptop:whitespace-nowrap">
                  Blood Finder
                </p>
                <ArrowUpRight className="text-black smTablet:w-[7rem] phone:w-[2rem] h-auto" />
              </div>
              <div className="flex flex-col gap-12">
                <div className="flex w-full justify-items-center gap-3 ">
                  <div className="flex justify-items-center h-full">
                    <LuSparkle className="bg-transparent text-black w-6 h-auto" />
                  </div>
                  <p className="text-black font-poppins font-bold text-xl">
                    WebApp
                  </p>
                </div>
                <p className="text-black font-poppins">
                  Our agency streamlined blood procurement in India with a
                  user-friendly app and robust backend. Leveraging Google Maps
                  API, we located nearby blood banks. Secure transactions were
                  ensured via Stripe Payment Gateway. Authentication was
                  enhanced with OAuth social login and Email Magic Link login
                  using Auth.JS. Our goal: making blood procurement efficient
                  and accessible through innovation.
                </p>
                <div
                  onClick={() => {
                    router.push("/bloodfinder");
                  }}>
                  <button className="text-black border border-black rounded-full p-4 font-semibold smTablet:text-[min(2.5vh,2.5vw)] phone:text-sm  font-poppins tracking-wider flex justify-start items-center">
                    <Globe className="text-black mr-4" /> Will be Live soon..
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurWork;
