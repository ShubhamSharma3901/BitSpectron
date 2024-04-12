import React from "react";
import Marquee from "react-fast-marquee";

const Marque = () => {
  return (
    <div className=" w-full h-[40vh] flex flex-col justify-center items-center overflow-hidden">
      <section className="bg-red-400 -rotate-3 w-full py-4">
        <Marquee speed={60} autoFill={true}>
          <div className="font-warsaw smLaptop:text-5xl smTablet:text-3xl  phone:text-2xl mx-8">
            The&nbsp;&nbsp; Rumors&nbsp;&nbsp; are&nbsp;&nbsp; all&nbsp;&nbsp;
            true..
          </div>
        </Marquee>
      </section>
    </div>
  );
};

export default Marque;
