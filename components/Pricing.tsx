import { CheckCircle2Icon, IndianRupee } from "lucide-react";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

function Pricing() {
  return (
    <div className="text-white h-fit w-screen relative flex flex-col justify-center items-center mb-10 mt-0 py-[10vh] gap-20">
      <div className="smLaptop:h-[27rem] smLaptop:w-[27rem] smTablet:w-[18rem] smTablet:h-[18rem] rounded-[95%] bg-cyan-600 absolute blur-[300px] translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%]"></div>
      <div className="font-warsaw phone:text-[min(12vh,12vw)] smTablet:text-[5rem] h-[30%] flex justify-center items-center">
        Pricing
      </div>
      <div className="grid smLaptop:grid-cols-3 phone:grid-cols-1 smTablet:grid-cols-2 w-full gap-10 h-[60%] phone:px-2 smTablet:px-10 relative z-[10]">
        <div className="h-full bg-gradient-to-b from-neutral-500 to-neutral-900 w-full rounded-xl relative">
          <div className="absolute bg-black rounded-xl translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] h-[99.5%] w-[99.5%]"></div>
          <div className="relative space-y-8 p-6 bg-transparent rounded-xl h-[99.5%] w-[99.5%] flex flex-col justify-between items-start">
            <div className="space-y-8">
              <div className="font-poppins text-cyan-200 text-lg">
                Components
              </div>
              <div className="font-poppins font-light text-white/70 tracking-wide text-sm">
                Tailored components, perfect for your website&apos;s needs.
                Easily integrated for seamless enhancement of different
                sections.
              </div>
              <div className="font-warsaw font-bold flex justify-start items-center flex-wrap text-wrap smTablet:text-[min(6vh,6vw)] smLaptop:text-5xl phone:text-[min(10vh,10vw)] tracking-wider">
                <IndianRupee className="mr-2 smTablet:w-10 phone:w-8 h-auto" />
                5000/mo
              </div>
              <div className="font-poppins py-2 w-full text-white/80">
                <ul className="space-y-5 w-full">
                  <li className="flex text-sm text-pretty justify-start items-start w-full">
                    <CheckCircle2Icon className="fill-cyan-200 text-black mr-2 w-6 h-auto" />{" "}
                    One Component Request at a time
                  </li>
                  <li className="flex text-sm text-wrap justify-start items-start w-full">
                    <CheckCircle2Icon className="fill-cyan-200 text-black mr-2 w-6 h-auto" />{" "}
                    Customized React/Next.js/Tailwind CSS code
                  </li>
                  <li className="flex text-sm text-wrap justify-start items-start w-full ">
                    <CheckCircle2Icon className="fill-cyan-200 text-black mr-2 w-6 h-auto" />{" "}
                    Design + Development
                  </li>
                  <li className="flex text-sm text-pretty justify-start items-start w-full">
                    <CheckCircle2Icon className="fill-cyan-200 text-black mr-2 w-6 h-auto" />{" "}
                    Unlimited revisions for your satisfaction
                  </li>
                  <li className="flex text-sm text-pretty justify-start items-start w-full">
                    <CheckCircle2Icon className="fill-cyan-200 text-black mr-2 w-6 h-auto" />{" "}
                    Guaranteed 24-hour support response time
                  </li>
                  <li className="flex text-sm text-pretty justify-start items-start w-full">
                    <CheckCircle2Icon className="fill-cyan-200 text-black mr-2 w-6 h-auto" />{" "}
                    Private communication channel
                  </li>
                  <li className="flex text-sm text-pretty justify-start items-start w-full">
                    <CheckCircle2Icon className="fill-cyan-200 text-black mr-2 w-6 h-auto" />{" "}
                    Fast turnaround time of 7-10 days
                  </li>
                </ul>
              </div>
            </div>
            <div className="font-poppins w-full">
              <button className="border w-full p-3 rounded-xl">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="h-full bg-gradient-to-b from-neutral-500 to-neutral-900 w-full rounded-xl relative">
          <div className="absolute p-6 bg-black rounded-xl translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] h-[99.5%] w-[99.5%]"></div>
          <div className="relative space-y-8 p-6 bg-transparent rounded-xl h-[99.5%] w-[99.5%] flex flex-col justify-between items-start">
            <div className="space-y-8">
              <div className="font-poppins text-cyan-200 text-lg">Pages</div>
              <div className="font-poppins font-light text-white/70 tracking-wide text-wrap text-sm">
                Ideal for fledgling startups + businesses requiring technical
                support and continuous development assistance.
              </div>
              <div className="font-warsaw font-bold flex justify-start items-center flex-wrap text-wrap smTablet:text-[min(6vh,6vw)] smLaptop:text-5xl phone:text-[min(10vh,10vw)] tracking-wider">
                <IndianRupee className="mr-2 smTablet:w-10 phone:w-8 h-auto" />
                10,000/mo
              </div>
              <div className="font-poppins py-2 font-light text-white/80">
                <ul className="space-y-5">
                  <li className="flex text-sm text-wrap justify-start items-start ">
                    <CheckCircle2Icon className="fill-cyan-200 text-black mr-2 w-6 h-auto" />{" "}
                    One Page Request at a time
                  </li>
                  <li className="flex text-sm text-wrap justify-start items-start ">
                    <CheckCircle2Icon className="fill-cyan-200 text-black mr-2 w-6 h-auto" />{" "}
                    Seamless CMS Integration
                  </li>
                  <li className="flex text-sm text-wrap justify-start items-start ">
                    <CheckCircle2Icon className="fill-cyan-200 text-black mr-2 w-6 h-auto" />{" "}
                    Comprehensive SEO strategies
                  </li>
                  <li className="flex text-sm text-wrap justify-start items-start ">
                    <CheckCircle2Icon className="fill-cyan-200 text-black mr-2 w-6 h-auto" />{" "}
                    Customized React/Next.js/Tailwind CSS code
                  </li>
                  <li className="flex text-sm text-pretty justify-start items-start ">
                    <CheckCircle2Icon className="fill-cyan-200 text-black mr-2 w-6 h-auto" />{" "}
                    Design + Development
                  </li>
                  <li className="flex text-sm text-pretty justify-start items-start">
                    <CheckCircle2Icon className="fill-cyan-200 text-black mr-2 w-6 h-auto" />{" "}
                    Unlimited revisions for your satisfaction
                  </li>
                  <li className="flex text-sm text-pretty justify-start items-start">
                    <CheckCircle2Icon className="fill-cyan-200 text-black mr-2 w-6 h-auto" />{" "}
                    Guaranteed 24-hour support response time
                  </li>
                  <li className="flex text-sm text-pretty justify-start items-start">
                    <CheckCircle2Icon className="fill-cyan-200 text-black mr-2 w-6 h-auto" />{" "}
                    Private communication channel
                  </li>
                  <li className="flex text-sm text-pretty justify-start items-start">
                    <CheckCircle2Icon className="fill-cyan-200 text-black mr-2 w-6 h-auto" />{" "}
                    Fast turnaround time of 10-12 days
                  </li>
                </ul>
              </div>
            </div>
            <div className="font-poppins w-full">
              <button className="border w-full p-3 rounded-xl">Buy Now</button>
            </div>
          </div>
        </div>
        {/* <div className="h-full bg-gradient-to-br from-neutral-800 to-neutral-900 w-full rounded-xl  backdrop-blur-2xl">
          Hello
        </div> */}
        <div className="h-full bg-green-200 w-full rounded-xl relative">
          <div className="absolute p-6 bg-black rounded-xl translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] h-[98%] w-[97%]"></div>

          <div className="relative space-y-8 p-6 bg-transparent rounded-xl h-[99.5%] w-[99.5%] flex flex-col justify-between items-start">
            <div className="space-y-8">
              <div className="font-poppins text-green-200 text-lg">
                Multi Page Website
              </div>
              <div className="font-poppins font-light text-white/70 tracking-wide text-sm">
                Perfect for ambitious businesses and startups seeking a
                high-performing website that not only dazzles with its
                aesthetics but also excels in converting visitors into loyal
                customers.
              </div>
              <div className="font-warsaw font-bold flex justify-start items-start phone:items-center flex-wrap text-wrap smLaptop:text-5xl smTablet:text-[min(6vh,6vw)] phone:text-[min(10vh,10vw)] tracking-wider">
                <IndianRupee className="mr-2  smTablet:w-11 phone:w-10 h-full" />
                <span className="">30,000</span>
                <span className="font-poppins text-sm phone:text-xs font-light tracking-wide ml-2">
                  (*starts at)
                </span>
              </div>
              <div className="font-poppins py-2 w-full text-white/80">
                <ul className="space-y-5 w-full">
                  <li className="flex text-sm text-pretty justify-start items-start w-full">
                    <CheckCircle2Icon className="fill-cyan-200 text-black mr-2 w-6 h-auto" />{" "}
                    Multi-page website tailored to your brand
                  </li>
                  <li className="flex text-sm text-pretty justify-start items-start w-full">
                    <CheckCircle2Icon className="fill-cyan-200 text-black mr-2 w-6 h-auto" />{" "}
                    Web Apps and SaaS solutions
                  </li>

                  <li className="flex text-sm text-wrap justify-start items-start w-full ">
                    <CheckCircle2Icon className="fill-cyan-200 text-black mr-2 w-6 h-auto" />{" "}
                    Design + Development + Deployment
                  </li>
                  <li className="flex text-sm text-pretty justify-start items-start w-full">
                    <CheckCircle2Icon className="fill-cyan-200 text-black mr-2 w-6 h-auto" />{" "}
                    Unlimited revisions for your satisfaction
                  </li>
                  <li className="flex text-sm text-pretty justify-start items-start w-full">
                    <CheckCircle2Icon className="fill-cyan-200 text-black mr-2 w-6 h-auto" />{" "}
                    Guaranteed 24-hour support response time
                  </li>
                  <li className="flex text-sm text-pretty justify-start items-start w-full">
                    <CheckCircle2Icon className="fill-cyan-200 text-black mr-2 w-6 h-auto" />{" "}
                    Private communication channel
                  </li>
                  <li className="flex text-sm text-pretty justify-start items-start w-full">
                    <CheckCircle2Icon className="fill-cyan-200 text-black mr-2 w-6 h-auto" />{" "}
                    Negotiable delivery time
                  </li>
                </ul>
              </div>
            </div>
            <div className="font-poppins w-full">
              <button className=" w-full p-3 rounded-xl bg-green-200 text-black font-semibold">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
