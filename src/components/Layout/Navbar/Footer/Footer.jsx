import React from "react";
import {
  FaFacebook,
  FaLocationDot,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaMobileScreenButton,
} from "react-icons/fa6";
import logo from "../../../../assets/sachin_just_drive_Logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="bg-[#e2e8f0] border-t-2 border-b-slate-900 py-8 mt-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between md:items-start items-center space-y-6 md:space-y-0">
          {/* Logo and Contact Information */}
          <div className="flex flex-col items-center flex-1 md:items-start space-y-4 md:space-y-6">
            <img
              className="max-w-xs md:max-w-28"
              src={logo}
              alt="Sachin Just Drive Logo"
            />

            <div className="flex flex-col justify-center md:flex-row gap-3 items-center space-x-3 ">
              <FaLocationDot className="text-lg" />
              <p className="text-sm md:text-base text-center md:text-start">
                #30th 'B' Main, opp. Siddalingeshwara Theater, J.P. Nagar 6th
                Phase, Bengaluru-78
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-lg" />
              <p className="text-sm md:text-base">E-mail: sachin@gmail.com</p>
            </div>

            <div className="flex items-center space-x-3">
              <FaMobileScreenButton className="text-lg" />
              <p className="text-sm md:text-base">9008834574</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaMobileScreenButton className="text-lg" />
              <p className="text-sm md:text-base">9900930047</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaMobileScreenButton className="text-lg" />
              <p className="text-sm md:text-base">9742344480</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaMobileScreenButton className="text-lg" />
              <p className="text-sm md:text-base">9880883454</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4 flex-1 items-center justify-center">
            <h2 className="text-lg font-bold text-primary text-center">
              Quick Links
            </h2>
            <ul className="space-y-2 flex flex-col justify-center items-center">
              <li className="hover:text-blue-600 transition">Home</li>
              <li className="hover:text-blue-600 transition">About</li>
              <li className="hover:text-blue-600 transition">Fleet</li>
              <li className="hover:text-blue-600 transition">Contact</li>
            </ul>
          </div>

          {/* Map */}
          <div className="flex justify-center md:justify-end flex-1">
            <iframe
              title="Google Maps Location of Sachin Just Drive"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0460700046715!2d77.5810778!3d12.904759199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae156b89e6b3d1%3A0xf89397861723c66a!2s30th%20B%20Main%20Rd%2C%20KR%20Layout%2C%20JP%20Nagar%20Phase%206%2C%20J.%20P.%20Nagar%2C%20Bengaluru%2C%20Karnataka%20560078!5e0!3m2!1sen!2sin!4v1722763520438!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
