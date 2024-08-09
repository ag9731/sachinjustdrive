import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUsers,
  FaTools,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const services = {
  location:
    "30th 'B' Main, opp. Siddalingeshwara Theater, J.P. Nagar 6th Phase, Bengaluru-78",
  mobileNumbers: ["9008834574", "9900930047", "9742344480", "9880883454"],
  email: "sachin@gmail.com",
  receptionist: [
    {
      title: "Welcome girls",
      description:
        "Our charming and professional welcome girls ensure your guests receive a warm and gracious greeting, setting a positive tone for your event from the moment they arrive.",
    },
    {
      title: "Welcome boys",
      description:
        "Our courteous and attentive welcome boys provide a friendly and professional first impression, guiding your guests seamlessly and making them feel valued and special.",
    },
    {
      title: "Door keeper",
      description:
        "Our reliable door keepers manage entry and exit points efficiently, ensuring security and smooth flow of guests throughout the event.",
    },
    {
      title: "Bouncers",
      description:
        "Our trained bouncers offer strong security presence and handle crowd control, ensuring a safe and secure environment for all attendees.",
    },
    {
      title: "Valet parking",
      description:
        "Our efficient valet parking service provides hassle-free parking for your guests, offering convenience and peace of mind from arrival to departure.",
    },
  ],
  laboriousServices: [
    {
      title: "House keeping",
      description:
        "Our meticulous housekeeping team ensures a clean and tidy environment, maintaining high standards of hygiene throughout your event.",
    },
    {
      title: "Tank cleaning",
      description:
        "Our professional tank cleaning services guarantee clean and sanitized water storage, contributing to a healthier environment for your guests.",
    },
    {
      title: "Security guards",
      description:
        "Our vigilant security guards provide robust protection and ensure the safety of all guests, deterring any potential issues effectively.",
    },
    {
      title: "Garden cleaning",
      description:
        "Our garden cleaning service keeps outdoor areas pristine and welcoming, enhancing the aesthetic appeal of your event's surroundings.",
    },
    {
      title: "Electrician",
      description:
        "Our skilled electricians handle all electrical setups and troubleshooting, ensuring a safe and uninterrupted power supply for your event.",
    },
    {
      title: "Painter",
      description:
        "Our professional painters offer precise and high-quality painting services, adding vibrant and appealing aesthetics to your event venue.",
    },
    {
      title: "Plumber",
      description:
        "Our experienced plumbers manage all plumbing needs efficiently, ensuring smooth water flow and handling any plumbing issues promptly.",
    },
  ],
};

const Manpower = () => {
  return (
    <section className="container mx-auto mt-10 p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8" style={{ color: "#e23c12" }}>
          Sachin Man Power
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2
            className="text-2xl font-bold mb-4 flex items-center"
            style={{ color: "#e23c12" }}
          >
            <FaMapMarkerAlt className="mr-2" /> Location
          </h2>
          <p>{services.location}</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2
            className="text-2xl font-bold mb-4 flex items-center"
            style={{ color: "#e23c12" }}
          >
            <FaPhone className="mr-2" /> Mobile Numbers
          </h2>
          <ul>
            {services.mobileNumbers.map((number, index) => (
              <li key={index} className="hover:underline">
                {number}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2
            className="text-2xl font-bold mb-4 flex items-center"
            style={{ color: "#e23c12" }}
          >
            <FaEnvelope className="mr-2" /> Email
          </h2>
          <p>{services.email}</p>
        </div>
        {services.receptionist.map((service, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6">
            <h2
              className="text-2xl font-bold mb-4 flex items-center"
              style={{ color: "#e23c12" }}
            >
              <FaUsers className="mr-2" /> {service.title}
            </h2>
            <p>{service.description}</p>
          </div>
        ))}
        {services.laboriousServices.map((service, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6">
            <h2
              className="text-2xl font-bold mb-4 flex items-center"
              style={{ color: "#e23c12" }}
            >
              <FaTools className="mr-2" /> {service.title}
            </h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      <section className="flex justify-center py-10">
        <Link to="/contact">
          <button className="bg-secondary hidden md:block border-none px-6 py-2 transition-all hover:bg-primary hover:border-black text-white rounded-full">
            BOOK NOW
          </button>
        </Link>
      </section>
    </section>
  );
};

export default Manpower;
