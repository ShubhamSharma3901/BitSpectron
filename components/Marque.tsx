import React from "react";
import Marquee from "react-fast-marquee";

const Marque = () => {
  return (
    <div className=" w-full h-[40vh] flex flex-col justify-center items-center overflow-hidden">
      <section className="bg-red-400 -rotate-3 w-full py-4">
        <Marquee speed={60}>
          <div className="flex gap-10 justify-evenly">
            <div className="font-warsaw text-5xl">
              The Rumors are all true...
            </div>
            <div className="font-warsaw text-5xl">
              The Rumors are all true...
            </div>
            <div className="font-warsaw text-5xl">
              The Rumors are all true...
            </div>
            <div className="font-warsaw text-5xl">
              The Rumors are all true...
            </div>
            <div className="font-warsaw text-5xl">
              The Rumors are all true...
            </div>
          </div>
        </Marquee>
      </section>
    </div>
  );
};

export default Marque;
