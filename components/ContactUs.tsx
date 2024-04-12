import React, { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Confetti from "react-confetti";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

const ContactUs = () => {
  const recaptcha = useRef<ReCAPTCHA>(null);
  const [confetti, showConfetti] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const serviceRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  console.log("recaptcha===", recaptcha.current?.getValue());
  useEffect(() => {
    showConfetti(false);
    setIsSubmitting(false);
  }, []);
  return (
    <div className="w-full h-full">
      <section className="bg-black dark:bg-gray-900 relative h-full flex justify-center items-center">
        <div
          id="contact-form-div"
          className="py-8 lg:py-16 px-4  smLaptop:w-[80%] phone:w-[95%] flex flex-col justify-center items-center">
          {confetti && (
            <Confetti
              width={window.innerWidth}
              height={window.innerHeight}
              className="relative"
              recycle={false}
            />
          )}
          <h2 className="mb-4 text-[min(10vh,10vw)] tracking-wide font-extrabold text-center text-white font-warsaw">
            Convinced &nbsp;&nbsp;Enough?
          </h2>
          <p className="mb-8 smLaptop:mb-16 font-light font-poppins text-center text-white/70 dark:text-gray-400 phone:text-[min(3.2vh,3.5vw)] smTablet:text-[min(2.3vh,2.3vw)] smLaptop:text-[min(2.7vh,3.2vw)]">
            Connect with us for a detailed analysis of your needs and we will
            get back to you within{" "}
            <span className="text-cyan-300">24 working hours</span>.
          </p>
          <div className="tablet:w-[80%] phone:w-[95%] flex justify-center items-center">
            <form
              action="POST"
              id="contact-form"
              onSubmit={async (e) => {
                e.preventDefault();
                const form: HTMLFormElement = document.getElementById(
                  "contact-form"
                ) as HTMLFormElement;

                setIsSubmitting(true);

                const captchaValue = recaptcha?.current?.getValue();
                if (!captchaValue) {
                  alert("Please verify the reCAPTCHA!");
                  setIsSubmitting(false);
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
                      body: JSON.stringify({
                        email: emailRef.current?.value,
                        service: serviceRef.current?.value,
                        message: messageRef.current?.value,
                        phone: phoneRef.current?.value,
                      }),
                    });
                    const status = await response.json();

                    form.reset();
                    recaptcha.current?.reset();
                    // alert("Form submission successful!");

                    setIsSubmitting(false);
                    if (status.success === true) {
                      toast.success(
                        "Thank you for reaching out. We'll get back to you shortly"
                      );
                      showConfetti(true);
                      setIsSubmitting(false);
                    } else {
                      toast.error(
                        "Something went wrong. Please try again later"
                      );
                      setIsSubmitting(false);
                    }
                  } else {
                    alert("reCAPTCHA validation failed!");
                    setIsSubmitting(false);
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
                  ref={emailRef}
                  type="email"
                  id="email"
                  className="shadow-sm bg-gradient-to-b from-black/90 to-black border border-white/20 text-sm rounded-[0.75rem] text-white focus:ring-cyan-500 focus:border-cyan-500 block w-full p-4"
                  placeholder="name@bitspectron.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-white ">
                  Contact Number
                </label>
                <input
                  ref={phoneRef}
                  type="tel"
                  id="phone"
                  className="shadow-sm bg-gradient-to-b from-black/90 to-black border border-white/20 text-sm rounded-[0.75rem] text-white focus:ring-cyan-500 focus:border-cyan-500 block w-full p-4"
                  placeholder="+91 XXXXXXXXXX"
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
                  ref={serviceRef}
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
                  ref={messageRef}
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
                onClick={() => {
                  showConfetti(false);
                }}
                className="p-4 w-full flex justify-center items-center text-sm font-medium text-center text-black bg-cyan-300 transition outline rounded-[0.75rem] ">
                {isSubmitting ? (
                  <Loader2 className="animate-spin w-8 h-auto" />
                ) : (
                  <span>Send message</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
