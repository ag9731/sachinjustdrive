import React from "react";
import { FaCity, FaWhatsapp } from "react-icons/fa6";


const Section5 = () => {
    const array = [
      {
        icon: FaCity,
        city: "Mysore",
        phoneno: 919620277177,
      },
      {
        icon: FaCity,
        city: "Bengaluru",
        phoneno: 919880883454,
      },
      {
        icon: FaCity,
        city: "Manglore",
        phoneno: 919620000811,
      },
    ];
  return (
    <section className="bg-[#F0EBE5] py-16">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">OUR BRANCHES</h1>
        <p className="text-secondary">You Can Reach Us Any Time</p>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row h-[100vh] md:h-auto justify-around container mx-auto items-center gap-10 md:gap-5 px-5 md:px-0 mt-10">
        {array.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex flex-col gap-2 items-center flex-1 justify-center w-[100%] h-52 shadow-2xl"
            >
              <Icon className="text-4xl" />
              <h1 className="font-bold text-secondary ">{item.city}</h1>
              <div className="flex items-center py-1 px-4 rounded-3xl gap-3 bg-secondary">
                <FaWhatsapp className="text-white" />
                <a
                  href={`https://wa.me/${item.phoneno}`}
                  className="text-white hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.phoneno}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Section5;
 