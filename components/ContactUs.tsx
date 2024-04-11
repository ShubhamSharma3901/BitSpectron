import React from "react";

const ContactUs = () => {
  return (
    <div className="w-full">
      <section className="bg-black dark:bg-gray-900 relative h-screen flex justify-center items-center">
        <div className="py-8 lg:py-16 px-4  smLaptop:w-[60%] phone:w-[95%]">
          <h2 className="mb-4 text-[min(10vh,10vw)] tracking-wide font-extrabold text-center text-white font-warsaw">
            Convinced &nbsp;&nbsp;Enough?
          </h2>
          <p className="mb-8 smLaptop:mb-16 font-light font-poppins text-center text-white/70 dark:text-gray-400 phone:text-sm smTablet:text-lg smLaptop:text-[min(2.2vh,2.2vw)]">
            Connect with BitSpectron for a detailed analysis of your needs
            within 24 working hours. Partner with us for online success and let
            your business thrive with our expertise. Our top Website Developers,
            WebApp Developers, and UI/UX Designers are ready to bring your
            vision to life.
          </p>
          <form action="#" className="space-y-8 font-poppins w-full">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white ">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gradient-to-b from-black/90 to-black border border-white/20 text-sm rounded-[0.75rem] text-white focus:ring-cyan-500 focus:border-cyan-500 block w-full p-4"
                placeholder="name@bitspectron.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-white">
                Type of Service
              </label>
              <input
                type="text"
                id="subject"
                className="shadow-sm bg-gradient-to-b from-black/90 to-black border border-white/20 text-sm rounded-[0.75rem] text-white focus:ring-cyan-500 focus:border-cyan-500 block w-full p-4"
                placeholder="Component/Page/Multi-Page Website"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-white">
                Your message
              </label>
              <input
                id="message"
                type="text"
                className="shadow-sm bg-gradient-to-b from-black/90 to-black border border-white/20 text-sm rounded-[0.75rem] text-white focus:ring-cyan-500 focus:border-cyan-500 block w-full p-4"
                placeholder="Leave a comment..."></input>
            </div>
            <button
              type="submit"
              className="p-4 w-full text-sm font-medium text-center text-black bg-cyan-300 transition outline rounded-[0.75rem] ">
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
