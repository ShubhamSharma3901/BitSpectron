import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function FAQ() {
  return (
    <div className="my-[10rem] flex flex-col gap-10 justify-center items-center smLaptop:w-[70vw] phone:w-[90vw]">
      <div className="w-full">
        <div className="text-white">
          <h1 className="font-warsaw phone:text-[min(14vh,14vw)] smTablet:text-[min(10vh,10vw)]">
            FAQs
          </h1>
          <p className="font-poppins phone:text-[min(3.6vh,3.6vw)] smTablet:text-[min(2.5vh,2.5vw)] font-light">
            Confused what to ask and where to start from?
            <span className="text-cyan-300 font-semibold">
              &nbsp; Reach out to us and we will get in touch with you.
            </span>
          </p>
        </div>
      </div>
      <div className="w-full">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className=" my-4 py-2">
            <AccordionTrigger className="text-white hover:no-underline text-start font-warsaw phone:text-[min(5vh,5vw)] smTablet:text-[min(3vh,4vw)] smLaptop:text-[min(5vh,5vw)] font-light tracking-wide">
              What &nbsp;&nbsp;is &nbsp;&nbsp;the &nbsp;&nbsp;Turnaround
              &nbsp;&nbsp;Time?
            </AccordionTrigger>
            <AccordionContent className="text-white/80 pb-6 pt-4 font-poppins font-light smLaptop:text-[min(2.5vh,2.5vw)] phone:text-md smTablet:text-lg leading-relaxed">
              We usually deliver our first draft within
              <span className="text-cyan-300">&nbsp;3-4 business days</span>.
              The final turnaround time depends upon the requirements of the
              project. Rest assured, Your Website is in safe hands and we are
              commited to complete the assignment within the deadline discussed
              with you.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="my-4 py-2">
            <AccordionTrigger className="text-white hover:no-underline text-start font-warsaw phone:text-[min(5vh,5vw)] smTablet:text-[min(3vh,4vw)] smLaptop:text-[min(5vh,5vw)] font-light tracking-wide">
              How &nbsp;&nbsp;do &nbsp;&nbsp;we &nbsp;&nbsp;Communicate?
            </AccordionTrigger>
            <AccordionContent className="text-white/80 pb-6 pt-4 font-poppins font-light smLaptop:text-[min(2.5vh,2.5vw)] phone:text-md smTablet:text-lg leading-relaxed">
              We believe that communication plays a very vital role. We
              communicate over calls, online meeting platforms and WhatsApp.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="my-4 py-2">
            <AccordionTrigger className="text-white text-start hover:no-underline font-warsaw phone:text-[min(5vh,5vw)] smTablet:text-[min(3vh,4vw)] smLaptop:text-[min(5vh,5vw)] font-light tracking-wide">
              What &nbsp;&nbsp;is &nbsp;&nbsp;the &nbsp;&nbsp;Process
              &nbsp;&nbsp;of &nbsp;&nbsp;Working &nbsp;&nbsp;with
              &nbsp;&nbsp;You?
            </AccordionTrigger>
            <AccordionContent className="text-white/80 pb-6 pt-4 font-poppins font-light smLaptop:text-[min(2.5vh,2.5vw)] phone:text-md smTablet:text-lg leading-relaxed">
              Our process typically begins with a communication channel setup,
              followed by a detailed discussion about your requirements,
              preferably over online meeting. We then engage in thorough
              research, ideation, and iterative development, closely
              collaborating with you to incorporate instant feedback throughout
              the project and deliver the website tailored to your needs.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="my-4 py-2">
            <AccordionTrigger className="text-white hover:no-underline font-warsaw phone:text-[min(5vh,5vw)] smTablet:text-[min(3vh,4vw)] smLaptop:text-[min(5vh,5vw)] text-start font-light tracking-wide">
              What &nbsp;&nbsp;happens &nbsp;&nbsp;if &nbsp;&nbsp;I
              &nbsp;&nbsp;don&apos;t &nbsp;&nbsp;like &nbsp;&nbsp;the
              &nbsp;&nbsp;design?
            </AccordionTrigger>
            <AccordionContent className="text-white/80 pb-6 pt-4 font-poppins font-light smLaptop:text-[min(2.5vh,2.5vw)] phone:text-md smTablet:text-lg leading-relaxed">
              We&apos;re committed to ensuring your complete satisfaction with
              the design by offering unlimited revisions. Your happiness with
              the final outcome is our priority, and we&apos;ll collaborate
              closely with you to make any necessary adjustments until
              you&apos;re delighted with the result.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="my-4 py-2">
            <AccordionTrigger className="text-white text-start hover:no-underline font-warsaw phone:text-[min(5vh,5vw)] smTablet:text-[min(3vh,4vw)] smLaptop:text-[min(5vh,5vw)] font-light tracking-wide">
              What &nbsp;&nbsp;is&nbsp;&nbsp; your &nbsp;&nbsp;Tech&nbsp;&nbsp;
              Stack?
            </AccordionTrigger>
            <AccordionContent className="text-white/80 pb-6 pt-4 font-poppins font-light smLaptop:text-[min(2.5vh,2.5vw)] phone:text-md smTablet:text-lg leading-relaxed">
              We mainly focus in using the best upto-date frameworks, tools and
              technologies, we mainly use NextJS, Tailwind CSS, Prisma ORM,
              Sanity.io CMS, NodeJS, MongoDB, AWS to provide with the smooth
              functionality of the website.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="my-4 py-2">
            <AccordionTrigger className="text-white hover:no-underline text-start font-warsaw phone:text-[min(5vh,5vw)] smTablet:text-[min(3vh,4vw)] smLaptop:text-[min(5vh,5vw)] font-light tracking-wide">
              Hiring &nbsp;&nbsp;anyone&nbsp;&nbsp; for&nbsp;&nbsp; management
              &nbsp;&nbsp;of &nbsp;&nbsp;the &nbsp;&nbsp;website &nbsp;&nbsp;is
              &nbsp;&nbsp;needed?
            </AccordionTrigger>
            <AccordionContent className="text-white/80 pb-6 pt-4 font-poppins font-light smLaptop:text-[min(2.5vh,2.5vw)] phone:text-md smTablet:text-lg leading-relaxed">
              Obvio not, we provide you with such dashboards wherein you can
              easily modify, upload, delete all the dynamic content which you
              wish at your own ease..
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default FAQ;
