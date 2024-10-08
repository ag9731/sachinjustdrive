import React, { useRef, useState } from "react";
import {
  FaLocationDot,
  FaMobileScreenButton,
  FaEnvelope,
} from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import "./Section7.css"

const Section7 = () => {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_rkrjywj", "template_zjiqfsl", form.current, {
        publicKey: "NEWhVls3FiGiDBlBk",
      })
      .then(
        () => {
          setMessage("Your message was sent successfully!");
          form.current.reset(); // Optional: Clear the form after successful submission
        },
        (error) => {
          setMessage(`Failed to send message: ${error.text}`);
        }
      );
  };

  return (
    <>
      <div className="bg-[#f3eee8] py-8 flex flex-col gap-14">
        {/* top section */}
        <section className="flex flex-col gap-4">
          <h1 className="text-5xl font-marcellus text-center">Contact Us</h1>
          <p className="text-secondary text-center">Send Us Your Queries</p>
        </section>

        {/* Bottom Section */}
        <section>
          {/* Left Section */}
          <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start">
            <div className="flex flex-col flex-1 gap-5 items-center md:items-start">
              <div>
                <h1 className="text-4xl text-secondary text-decoration-underline">
                  Sachin Just Drive
                </h1>
              </div>

              <div className="flex items-center justify-start gap-5">
                <div className="flex flex-col gap-6 px-5 md:px-0">
                  <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-5">
                    <FaLocationDot />
                    <h1 className="text-center md:text-start">
                      SAS Road, #6/2, 35th Main, Sarakki Main Rd, JP Nagar 6th
                      Phase, J. P. Nagar, Bengaluru, Karnataka 560587
                    </h1>
                  </div>
                  {/* <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-5">
                    <FaEnvelope />
                    <h1 className="text-center md:text-start">
                      E-mail: sachin@gmail.com
                    </h1>
                  </div> */}

                  <div className="flex items-center space-x-3">
                    <FaEnvelope className="text-lg" />
                    <p className="text-sm md:text-base">
                      <span className="text-secondary font-bold">
                        Sachin Just Drive
                      </span>
                      : <a href="mailto:sachin@gmail.com">sachin@gmail.com</a>
                    </p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <FaEnvelope className="text-lg" />
                    <p className="text-sm md:text-base">
                      <span className="text-secondary font-bold">
                        Sachin Manpower
                      </span>
                      :{" "}
                      <a href="mailto:sachinmanpowers@gmail.com">
                        sachinmanpowers@gmail.com
                      </a>
                    </p>
                  </div>
                  <div className="flex md:flex-row items-center justify-center md:justify-start gap-5">
                    <FaMobileScreenButton />
                    <h1 className="text-center md:text-start">
                      <a href="tel:9620000811">9620000811</a>
                    </h1>
                  </div>
                  <div className="flex md:flex-row items-center justify-center md:justify-start gap-5">
                    <FaMobileScreenButton />
                    <h1 className="text-center md:text-start">
                      <a href="tel:9880883454">9880883454</a>
                    </h1>
                  </div>
                  <div className="flex md:flex-row items-center justify-center md:justify-start gap-5">
                    <FaMobileScreenButton />
                    <h1 className="text-center md:text-start">
                      <a href="tel:919620277177"></a>919620277177
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-1 shadow-lg py-3 px-5 bg-slate-300 mt-10 md:mt-0">
              <form ref={form} onSubmit={sendEmail}>
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <label>Name</label>
                    <input
                      type="text"
                      name="user_name"
                      required
                      className="input-field"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label>Email</label>
                    <input
                      type="email"
                      name="user_email"
                      required
                      className="input-field"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label>Message</label>
                    <textarea name="message" required className="input-field" />
                  </div>
                  <div>
                    <input
                      className="py-2 px-6 bg-primary text-white hover:bg-white hover:text-black cursor-pointer"
                      type="submit"
                      value="Send"
                    />
                  </div>
                </div>
                {message && (
                  <div
                    className={`mt-4 ${
                      message.includes("Failed")
                        ? "text-red-500"
                        : "text-green-500"
                    }`}
                  >
                    {message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Section7;
