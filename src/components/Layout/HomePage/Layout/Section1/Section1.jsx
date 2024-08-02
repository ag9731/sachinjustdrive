import React, { useRef } from "react";
import "./Section1.css";
import emailjs from "@emailjs/browser";

const Section1 = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };


  return (
    <div>
      <section className="bgImg w-[100%] justify-center">
        <div className="container gap-5 md:gap-0 mx-auto flex flex-col md:flex-row items-center">
          {/* Left Section */}
          <section className="w-[100%] md:w-[50%] flex flex-col md:flex-col items-center md:items-start gap-7">
            <h1 className="text-white text-center md:text-start text-4xl md:text-7xl font-medium md:font-bold z-10 head capitalize">
              Welcome to <br />
              Sachin Just <br />
              Drive
            </h1>
            <p className="text-white font-semibold tracking-wider">
              We Ultimately Travel
              <span className="bg-primary font-thin ml-2"> For You.</span>
            </p>
            <div className="flex gap-5">
              <button className="bg-secondary border-none px-10 py-3 transition-all hover:bg-[#fff] hover:text-black hover:border-black text-white rounded-full">
                CONTACT
              </button>
              <button className="bg-white border-none px-10 py-3 transition-all hover:bg-primary hover:text-white hover:border-black text-black rounded-full">
                ABOUT
              </button>
            </div>
          </section>
          {/* Right Section */}
          {/* <section className="font-bold w-[50%] flex-col">
            <h1 className="text-white">Form</h1>
          </section> */}

          <div className="container mx-auto w-[100%] justify-center md:justify-start flex flex-1 shadow-lg py-3 px-5 bg-black bg-opacity-30">
            <form ref={form} onSubmit={sendEmail}>
              <div className="flex flex-col gap-5 ">
                <div className="flex flex-col gap-2">
                  <label className="text-white">Name</label>
                  <input type="text" name="user_name" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white">Email</label>
                  <input type="email" className="" name="user_email" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white">Message</label>
                  <textarea name="message" />
                </div>
                <div>
                  <input
                    className="py-2 px-6 bg-primary text-white hover:bg-white hover:text-black cursor-pointer"
                    type="submit"
                    value="Send"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section1;
