"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Testimonials() {
  return (
    <div
      id={"testimonials"}
      className="h-fit w-full  rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h1 className="text-white w-full text-pretty text-center font-warsaw phone:text-[min(12vh,12vw)] smTablet:text-[5rem] ">
        Do &nbsp;&nbsp;not &nbsp;&nbsp;Believe &nbsp;&nbsp;Us?
      </h1>
      <h3 className="text-white font-poppins phone:text-[min(3.2vh,3.5vw)] smTablet:text-[min(2.3vh,2.3vw)] smLaptop:text-[min(2.7vh,3.2vw)]">
        Hear what our clients have to say
      </h3>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
        className="mt-[4.5rem] font-poppins"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "We're thrilled with the outstanding work done by Bitspectron on our ethnic wear ecommerce site. From the sleek design to seamless user experience, every detail reflects their expertise and understanding of our brand. Their proactive approach, timely communication, and innovative solutions made the process smooth and enjoyable. Highly recommend them for any business looking to enhance their online presence. Thanks for exceeding our expectations! ",
    name: "Neelesh Chandani",
    title: "Founder - kurtiveda.com",
  },
  {
    quote:
      "Impressed with the website developed by Bitspectron for our SaaS solution FlashAI. It's very sleek, user-friendly, and perfectly captures our brand essence. Highly recommend their services for top-notch website development. Thanks, Bitspectron!",
    name: "Team at FlashAI",
    title: "",
  },
  // {
  //   quote: "All that we see or seem is but a dream within a dream.",
  //   name: "Edgar Allan Poe",
  //   title: "A Dream Within a Dream",
  // },
  // {
  //   quote:
  //     "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
  //   name: "Jane Austen",
  //   title: "Pride and Prejudice",
  // },
  // {
  //   quote:
  //     "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
  //   name: "Herman Melville",
  //   title: "Moby-Dick",
  // },
];
