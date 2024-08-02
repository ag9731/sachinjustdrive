import React from "react";
import {
  FaBusSimple,
  FaCircleUser,
  FaCar,
  FaCarOn,
  FaJetFighterUp,
  FaBus,
} from "react-icons/fa6";

const Section3 = () => {
  return (
    <div className="bg-[#F3EEE8] py-10 md:py-16">
      {/* top section */}
      <section className="">
        <h1 className="text-4xl text-center font-bold">OUR SERVICES</h1>
      </section>

      {/* bottom section */}
      <section className="flex flex-col justify-center container mx-auto gap-10 py-10">
        <div className="flex flex-wrap md:flex-nowrap px-5 md:px-0 items-center gap-14 md:gap-10">
          <div className="flex flex-col items-center gap-5 py-10 px-4 shadow-xl flex-1 h-60">
            <FaCircleUser className="text-4xl" />
            <h1 className="text-center  font-bold text-secondary">
              EMPLOYEE TRANSPORTATION
            </h1>
            <p className="text-center text-[2vmax] md:text-[1vmax]">
              Reliable commuting solutions for your workforce.
            </p>
          </div>
          <div className="flex flex-col items-center gap-5 py-10 px-4 shadow-xl flex-1 h-60">
            <FaCar className="text-4xl" />
            <h1 className="text-center font-bold text-secondary">
              CARPORATE CAR RENTALS
            </h1>
            <p className="text-center ">
              Professional transportation services tailored for businesses.
            </p>
          </div>
          <div className="flex flex-col items-center gap-5 py-10 px-4 shadow-xl flex-1 h-60">
            <FaBusSimple className="text-4xl" />
            <h1 className="text-center font-bold text-secondary">
              EVENT TRANSPORTATION
            </h1>
            <p className="text-center text-[2vmax] md:text-[1vmax]">
              Seamless and reliable transportation solutions for your events
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row px-5 items-center gap-14 md:gap-10">
          <div className="flex flex-col items-center gap-5 py-10 px-4 shadow-xl flex-1 h-60">
            <FaCarOn className="text-4xl" />
            <h1 className="text-center font-bold text-secondary">
              OUT STATION
            </h1>
            <p className="text-center  text-[2vmax] md:text-[1vmax]">
              Outstation travel made easy Reliable transportation solutions for
              your journeys beyond.
            </p>
          </div>
          <div className="flex flex-col items-center gap-5 py-10 px-4 shadow-xl flex-1 h-60">
            <FaJetFighterUp className="text-4xl" />
            <h1 className="text-center font-bold text-secondary">
              AIRPORT PICKUP DROP
            </h1>
            <p className="text-center  text-[2vmax] md:text-[1vmax]">
              Airport pickup and drop-off services Seamless transportation
              solutions for your needs.
            </p>
          </div>
          <div className="flex flex-col items-center gap-5 py-10 px-4 shadow-xl flex-1 h-60">
            <FaBus className="text-4xl" />
            <h1 className="text-center font-bold text-secondary">
              TOUR PACKAGES
            </h1>
            <p className="text-center text-[2vmax] md:text-[1vmax]">
              For unforgettable adventures Tailored tour packages to explore the
              world.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section3;
