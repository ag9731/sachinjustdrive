import React from "react";
import "./Section2.css";
import logo from "../../../../../assets/sachin_just_drive_Logo.png";
import image2 from "../../../../../assets/homePage/sachinjustdrive2.webp";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";

const Section2 = () => {
  return (
    <>
      <section className="bg-[#F7F7F7] py-16">
        <div className="container flex width-[100%] justify-center items-center ">
          <div className="flex flex-col md:flex-row gap-10 ">
            {/* Left Section */}
            <section className="flex items-center justify-center w-[100%] md:w-[50%]">
              <img className="w-[100%] max-w-[500px]" src={image2} alt="" />
            </section>
            {/* Right Section */}
            <section className="flex flex-col gap-4 justify-center items-center md:items-start w-[100%] md:w-[50%]">
              <h1 className="font-bold text-secondary brd px-4">
                ABOUT OUR COMPANY
              </h1>
              <h1 className="text-4xl font-medium text-center md:text-start px-3 md:px-0">
                Feel the difference and Relaxation with{" "}
                <span className="text-primary">
                  Sachin Just Drive.
                </span>
              </h1>
              <p className="text-[#828282] text-[2vmax] md:text-[1vmax] text-center md:text-start px-3 md:px-0 ">
                Sachin Just Drive is a premier cab service provider operating in
                Bengaluru, Mangalore, and Mysore. With a commitment to offering
                reliable and comfortable transportation, we prioritize your
                safety and convenience on every journey. Our fleet of
                well-maintained vehicles and professional drivers ensure a
                smooth ride, whether for business or leisure. We pride ourselves
                on punctuality, exceptional customer service, and affordable
                rates. Experience the best of local travel with Sachin Just
                Drive, where your satisfaction is our top priority.
              </p>
              <div>
                <h1 className="text-[2vmax] text-center md:text-start md:text-[1.5vmax]  border-b-2 ">Call For Cab</h1>
                <h1 className="text-[3vmax] md:text-[2vmax]  text-center md:text-start text-secondary font-bold">
                  9880883454
                </h1>
                <div className="flex gap-6 md:gap-3 justify-center md:justify-start py-4">
                  <FaFacebook className="cursor-pointer fill-blue-700 text-1xl" />
                  <FaInstagram className="cursor-pointer fill-pink-800 text-1xl" />
                  <FaYoutube className="cursor-pointer fill-red-700 text-1xl" />
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section2;
