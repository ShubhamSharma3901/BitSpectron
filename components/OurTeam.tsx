import Image from "next/image";
import Unknown from "@/public/assets/Shubham.jpeg";
import Unknown1 from "@/public/assets/Tanisha.jpeg";

const OurTeam = () => {
  return (
    <div className="flex justify-center items-center w-screen h-fit">
      <div className="flex phone:flex-col smLaptop:flex-row justify-center items-center bg-black text-white w-[90%] h-full">
        {/* left */}
        <div className="flex w-full font-warsaw">
          <div className="flex flex-col justify-center items-start gap-11 p-8">
            <h1 className="text-[min(10vh,10vw)]">Our Team</h1>
            <h1 className="text-[min(5vh,5vw)] font-poppins">
              Meet the Innovators
            </h1>
            <p className="text-[min(2.5vh,2.5vw)] font-poppins">
              At the core of BitSpectron lies the talent, dedication, and shared
              vision of our two founding members, Shubham Sharma and Tanisha
              Seth. As a dynamic duo, they wear multiple hats, combining their
              expertise in web development, design, project management, and
              client relations to deliver exceptional results.
            </p>
          </div>
        </div>

        {/* right */}
        <div className="flex flex-col justify-center  items-center gap-3 w-fit ">
          <div className=" rounded-2xl flex gap-5 p-5 bg-[#343434]  w-full">
            <div className="flex flex-col w-[30%] ">
              <Image
                src={Unknown}
                alt=""
                className="h-auto w-[100%] rounded-2xl"
              />
              <p className="text-[min(1.75vh,1.75vw)] pt-6">Shubham Sharma</p>
              <p className="text-[min(1.75vh,1.75vw)] ">
                Co-Founder/Lead Developer
              </p>
            </div>
            <div className="w-[70%] flex justify-center items-start">
              <p className="">
                With a passion for cutting-edge technologies and a keen eye for
                detail, Shubham spearheads the development process at
                BitSpectron. His deep understanding of modern web development
                frameworks and tools, coupled with a relentless pursuit of
                excellence, ensures that every project is executed with
                precision and innovation.
              </p>
            </div>
          </div>

          <div className=" rounded-2xl flex gap-5 p-5 bg-[#343434]  w-full">
            <div className="flex flex-col w-[30%] ">
              <Image
                src={Unknown1}
                alt=""
                className="h-auto w-[100%] rounded-2xl"
              />
              <p className="text-[min(1.75vh,1.75vw)] pt-6">Tanisha Seth</p>
              <p className="text-[min(1.75vh,1.75vw)] ">
                Co-Founder/Creative Director/ Developer
              </p>
            </div>
            <div className="w-[70%] flex justify-center items-start">
              <p className="">
                Tanisha&apos;s creative vision and user-centric approach are the
                driving forces behind BitSpectron&apos;s visually stunning and
                intuitive web experiences. Her unique ability to translate
                complex concepts into captivating designs, combined with her
                strategic thinking, guarantees that our solutions resonate with
                target audiences and deliver meaningful impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
