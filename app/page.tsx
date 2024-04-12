"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap, { CSSPlugin, Expo } from "gsap";
import { useGSAP } from "@gsap/react";
import Hero from "@/components/Hero";
import HeroMain from "@/components/HeroMain";
import logo from "@/public/assets/BitSpectronLogo.png";
import Welcome from "@/components/Welcome";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OurUSP from "@/components/OurUSP";
import OurWork from "@/components/OurWork";
import Marque from "@/components/Marque";
import WhoWeAre from "@/components/WhoWeAre";
import { Testimonials } from "@/components/Testimonials";
import SplitType from "split-type";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import { BentoGridThirdDemo } from "@/components/BentoGrid";
import Lenis from "@studio-freight/lenis";
import Link from "next/link";
import { useRouter } from "next/navigation";

gsap.registerPlugin(useGSAP, ScrollTrigger);
export default function Home() {
  const conatinerMain = useRef<HTMLDivElement>(null);

  const router = useRouter();

  const { contextSafe } = useGSAP(
    () => {
      const tl = gsap.timeline({
        //onComplete animation timeline
        onComplete: () => {
          //Smooth Scrolling
          (async () => {
            const LocomotiveScroll = (await import("locomotive-scroll"))
              .default;
            const locomotiveScroll = new LocomotiveScroll({
              smooth: true,
              smartphone: {
                smooth: true,
              },
            });
          })();
          //Who we are pinning animation
          const tl2 = gsap.to(".who-text-wrapper", {
            scrollTrigger: {
              trigger: ".who-text-wrapper",
              scrub: 2,
              pin: true,
              start: "top top",
              end: () =>
                `${document.querySelector(".who-text-parent")
                  ?.scrollHeight!} bottom`,
              // markers: true,
            },
          });

          //Work Div Animation
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

          //Card Stack on Scroll Animation Timeline
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".card-container",
              pin: true,
              start: "top top",
              end: "bottom bottom",
              scrub: 1,
            },
          });
          tl.fromTo(
            ".heading-wrapper",
            {
              paddingTop: "2rem",
              paddingBottom: "2rem",
            },
            {
              paddingTop: "1rem",
              paddingBottom: "1rem",
              scrollTrigger: {
                trigger: ".heading-wrapper",
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
              },
            }
          )
            .fromTo(
              ".usp-heading",
              {
                fontSize: "min(10vh,9vw)",
              },
              {
                fontSize: "min(8vh,7vw)",
                scrollTrigger: {
                  trigger: ".heading-wrapper",
                  start: "top top",
                  end: "bottom bottom",
                  scrub: 1,
                },
              }
            )
            .fromTo(
              ".usp-desc",
              {
                fontSize: "min(3.2vh,3.2vw)",
              },
              {
                opacity: 0,
                height: 0,
                display: "none",
                ease: "power1.inOut",
                scrollTrigger: {
                  trigger: ".heading-wrapper",
                  start: "top top",
                  end: "bottom bottom",
                  scrub: 1,
                },
              },
              "<"
            )
            .to(".card", {
              height: "0",
              width: "100%",
              opacity: 0,
              scale: 0.9,
              stagger: 0.5,
              paddingBottom: 0,
              translateY: 20,
              ease: "power1.out",
            });

          // gsap.fromTo(
          //   [".hor-container", ".hor-div-work"],
          //   {
          //     backgroundColor: "black",
          //   },
          //   {
          //     backgroundColor: "white",
          //     scrollTrigger: {
          //       trigger: ".hor-container",
          //       start: "top center",
          //       end: "10% center",
          //       scrub: 1,
          //     },
          //   }
          // );
        },
      });

      //Main animation timeline
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
            translateY: 250,
            stagger: 0.1,
            duration: 0.6,
            ease: "back.out",
          },
          "<"
        )
        .to(".content div .hero-wrapper .hero-line div .word", {
          translateY: 0,
        })
        .fromTo(
          ".scroll-content",
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
            stagger: 0.2,
          },
          {
            opacity: 1,
            display: "inline",
            stagger: 0.2,
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
          { opacity: 1, display: "flex", scale: 1 },
          "-=1"
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
          "-=2"
        );
    },
    { scope: conatinerMain }
  );

  const onMenuClick = contextSafe(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        //Menu Items animation

        const menuItemsArray = gsap.utils.toArray(".menu-item");

        gsap
          .timeline({
            onStart: () => {},
          })
          .fromTo(
            menuItemsArray,
            {
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
            }
          )
          .fromTo(
            SplitType.create(".menu-text").chars,
            {
              y: 100,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              stagger: { each: 0.03 },
            },
            "<"
          );
      },
    });

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
    const menuItemsArray = gsap.utils.toArray(".menu-item");
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
      .fromTo(
        menuItemsArray,
        {
          opacity: 1,
        },
        {
          y: 0,
          opacity: 0,
        }
      )
      .fromTo(
        SplitType.create(".menu-text").chars,
        {
          y: 0,
          opacity: 1,
        },
        {
          y: -100,
          opacity: 0,

          stagger: { each: 0.03 },
        },
        "<"
      )
      .to(".menu-container", { opacity: 0, display: "none" }, "-=0.2");
  });

  return (
    //Main Container
    <div
      className="main-container h-screen w-screen relative"
      ref={conatinerMain}>
      {/* Loader */}
      <div className="loader-conatiner text-white relative bg-black h-screen w-screen flex justify-center text-center items-center z-[2]">
        <div
          className="loader-element w-fit justify-center items-center h-auto"
          style={{ display: "none", opacity: 0 }}>
          <div className="logo flex gap-6 justify-start w-full">
            <Image src={logo} alt={""} className="w-[4.5rem] h-auto" />

            <div className="logo-tagline text-md font-sans flex flex-col font-light tracking-[0.2rem] uppercase leading-4 justify-center items-start">
              <p className="logo-line">Dream</p>
              <p className="logo-line">Design</p>
              <p className="logo-line">Deploy</p>
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section */}
      <div
        className="content-container bg-white h-full flex flex-col justify-center items-center z-[3] translate-y-[-50%] top-[50%] absolute"
        style={{ width: "0" }}>
        <HeroMain />
      </div>
      {/* Menu Buttons */}
      <div
        className="menu-btn fixed top-12 phone:right-6 smTablet:right-20 z-[5] px-3 py-6 space-y-2 bg-black/30 rounded-full cursor-pointer"
        onClick={() => {
          onMenuClick();
        }}>
        <div className="menu-icon-1 w-[2.5rem] bg-white rounded-xl h-1"></div>
        <div className="menu-icon-2 w-[2.5rem] bg-white rounded-xl h-1"></div>
      </div>
      {/* Menu Container */}
      <div
        id={"menu-container"}
        className="menu-container fixed top-0 h-full w-full bg-transparent backdrop-blur-xl text-white z-[100]"
        style={{ opacity: 0, display: "none" }}>
        <div className="menu-wrapper w-full h-full flex justify-center items-center">
          <div className="menu-content text-center flex flex-col font-warsaw justify-items-center text-[min(10vh,10vw)]">
            <Link
              href={"#home"}
              onClick={() => {
                onMenuClose();
              }}
              className="menu-item  relative overflow-hidden "
              style={{
                opacity: 0,
              }}>
              <span className="menu-text">Home</span>
            </Link>
            <Link
              href={"#who-we-are"}
              onClick={() => {
                onMenuClose();
              }}
              className="menu-item  relative overflow-hidden"
              style={{
                opacity: 0,
              }}>
              <span className="menu-text">About</span>
            </Link>
            <Link
              href={"#contact-form-div"}
              onClick={() => {
                onMenuClose();
              }}
              className="menu-item  relative overflow-hidden"
              style={{
                opacity: 0,
              }}>
              <span className="menu-text">Contact</span>
            </Link>
            <Link
              href={"#our-work"}
              onClick={() => {
                onMenuClose();
              }}
              className="menu-item  relative overflow-hidden"
              style={{
                opacity: 0,
              }}>
              <span className="menu-text">Work</span>
            </Link>
          </div>
        </div>
        {/* Menu Close Button */}
        <div
          className="fixed top-12 phone:right-6 smTablet:right-20 z-[5] px-3 py-6 space-y-2 cursor-pointer"
          onClick={() => {
            onMenuClose();
          }}>
          <div className="menu-close-1 w-[2.5rem] bg-white rounded-xl h-1"></div>
          <div className="menu-close-2 w-[2.5rem] bg-white rounded-xl h-1"></div>
        </div>
      </div>
      <div className="scroll-content w-full bg-black h-fit relative flex flex-col justify-center items-center">
        <Welcome />
        <WhoWeAre />
        {/* <Hero /> */}
        <OurUSP />
        <OurWork />
        <Marque />
        <Testimonials />
        <Pricing />
        <FAQ />
        {/* <BentoGridThirdDemo /> */}
        <ContactUs />
        <Footer />
      </div>
      {/* Work With Us */}
      <div
        style={{
          opacity: 0,
          display: "none",
          scale: 0,
        }}
        className="work-div cursor-pointer rounded-full fixed uppercase font-warsaw text-center tracking-normal smTablet:text-[min(2rem,4vw)] phone:text-[1.2rem] smTablet:leading-8 phone:leading-tight  font-black text-wrap bg-[#3CFFC3] z-[10] phone:bottom-6 tablet:bottom-10 phone:right-6 smLaptop:right-16">
        <Link href={"#contact-form-div"}>
          <div className="relative smLaptop:w-[10rem] smLaptop:h-[10rem] phone:w-[6rem] phone:h-[6rem] smTablet:w-[9rem] smTablet:h-[9rem]">
            <p className="absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] w-full">
              Work <br /> With &nbsp; Us ?
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
