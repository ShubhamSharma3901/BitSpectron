import { resend } from "@/lib/resend";
import React, { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ContactUs = () => {
  const recaptcha = useRef<ReCAPTCHA>(null);
  return (
    <div className="w-full h-full">
      <section className="bg-black dark:bg-gray-900 relative h-full flex justify-center items-center">
        <div
          id="contact-form-div"
          className="py-8 lg:py-16 px-4  smLaptop:w-[70%] phone:w-[95%] flex flex-col justify-center items-center">
          <h2 className="mb-4 text-[min(10vh,10vw)] tracking-wide font-extrabold text-center text-white font-warsaw">
            Convinced &nbsp;&nbsp;Enough?
          </h2>
          <p className="mb-8 smLaptop:mb-16 font-light font-poppins text-center text-white/70 dark:text-gray-400 phone:text-sm smTablet:text-lg smLaptop:text-[min(2.2vh,2.2vw)]">
            Connect with us for a detailed analysis of your needs and we will
            get back to you within{" "}
            <span className="text-cyan-300">24 working hours</span>.
          </p>
          <div className="w-[90%] flex justify-center items-center">
            <form
              action="POST"
              id="contact-form"
              onSubmit={async (e) => {
                e.preventDefault();
                const form: HTMLFormElement = document.getElementById(
                  "contact-form"
                ) as HTMLFormElement;

                const captchaValue = recaptcha?.current?.getValue();
                if (!captchaValue) {
                  alert("Please verify the reCAPTCHA!");
                } else {
                  const res = await fetch("/api/verify", {
                    method: "POST",
                    body: JSON.stringify(captchaValue),
                    headers: {
                      "content-type": "application/json",
                    },
                  });
                  const data = await res.json();
                  if (data.success) {
                    // make form submission
                    const response = await fetch("/api/resend-email", {
                      method: "POST",
                    });

                    form.reset();
                    recaptcha.current?.reset();
                    alert("Form submission successful!");
                  } else {
                    alert("reCAPTCHA validation failed!");
                  }
                }
              }}
              className="space-y-8 font-poppins w-full">
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
                <textarea
                  id="message"
                  className="shadow-sm bg-gradient-to-b from-black/90 to-black border border-white/20 text-sm rounded-[0.75rem] text-white focus:ring-cyan-500 focus:border-cyan-500 block w-full p-4"
                  placeholder="Leave a comment..."></textarea>
              </div>
              <ReCAPTCHA
                ref={recaptcha}
                sitekey={process.env.NEXT_PUBLIC_SITE_KEY as string}
              />
              <button
                type="submit"
                className="p-4 w-full text-sm font-medium text-center text-black bg-cyan-300 transition outline rounded-[0.75rem] ">
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
