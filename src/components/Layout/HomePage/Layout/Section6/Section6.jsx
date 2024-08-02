import React from "react";

const Section6 = () => {

  // Hourly Price Structure
  const hourely = [
    {
      service: "Up to 4 hours",
      price: 500,
    },
    {
      service: "8 hours",
      price: 800,
    },
    {
      service: "Extra hours",
      price: 80,
    },
    {
      service: "½ hour",
      price: 45,
    },
  ];


  //Drink and drive Price Structure
  const drinkanddrive = [
    {
      service: "Local in Bangalore",
      price: 800,
    },
    {
      service: "Pick & Drop",
      price: 800,
    },
    {
      service: "One Side Drop(Local Bengaluru)",
      price: 700,
    },
  ];


//   Airport Duty
   const airport = [
     {
       service: "Morning Airport Duty (4 hours)",
       price: 500,
       extra:80
     },
     {
       service: "Night Airport Duty (3 hours)",
       price: 750,
       extra:80,
     },
   ];

//    City Drops
const city = [
  {
    service: "Mysore Drop (including bus charges)",
    price: 1400,
  },
  {
    service: "Hyderabad Drop",
    price: 1200,
  },
  {
    service: "Bangalore Outer City (80 km, up to 8 hours)",
    price: 1000,
  },
];

// Out Of Station Rates
const driver = [
  {
    service: "Yellow Board Car",
    hour:"(up to 4 hours)",
    price: 1200,
  },
  {
    service: "Goods Vehicle",
    hour:"(up to 6 hours)",
    price: 1500,
  },
  {
    service: "Imported Vehicle",
    hour:"(Local, up to 4 hours)",
    price: 1500,
  },
  {
    service: "Imported Vehicle",
    hour:"Outside trip",
    price: 80,
  },
];


// Out Of Station Rates
const outstation = [
  {
    service: "With food (6 AM to 6 PM)",
    price: 1200,
  },
  {
    service: "Without food",
    price: 1500,
  },
  {
    service: "Beyond 6 PM for driving",
    price: 80,
  },
];


  return (
    <>
      <section className="bg-[#f7f7f7] py-16">
        {/* Upper Section */}
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold uppercase text-center">
            Pricing and Services
          </h1>
        </div>

        <section className="flex flex-col">
          <h1 className="text-white text-center md:text-start container mx-auto bg-primary px-2 py-4 font-bold uppercase mt-10 text-2xl">
            Hourely Prices
          </h1>
          <div className="container mx-auto flex-col md:flex-row  md:h-auto gap-10 md:gap-5 px-5 md:px-0 flex  justify-around items-center mt-10">
            {hourely.map((item, index) => (
              <>
                <div
                  key={index}
                  className="flex flex-col items-center h-64 w-[100%] justify-center flex-1 py-8 shadow-2xl gap-5"
                >
                  <h1 className="uppercase text-2xl text-center text-secondary font-bold">
                    {item.service}
                  </h1>
                  <h1 className="text-white bg-primary px-5 py-2">
                    ₹{item.price}
                  </h1>
                  <button className=" py-1 px-8 rounded-3xl bg-secondary text-white">
                    BOOK
                  </button>
                </div>
              </>
            ))}
          </div>

          {/* Drink and Drive Night Drop */}
          <h1 className="text-white text-center md:text-start container mx-auto bg-primary px-2 py-4 font-bold uppercase mt-10 text-2xl">
            Drink and Drive Night Drop
          </h1>
          <div className="container mx-auto flex-col md:flex-row  md:h-auto gap-10 md:gap-5 px-5 md:px-0 flex  justify-around items-center mt-10">
            {drinkanddrive.map((item, index) => (
              <>
                <div
                  key={index}
                  className="flex flex-col items-center h-64 w-[100%] justify-center flex-1 py-8 shadow-2xl gap-5"
                >
                  <h1 className="uppercase text-2xl text-center text-secondary font-bold">
                    {item.service}
                  </h1>
                  <h1 className="text-white bg-primary px-5 py-2">
                    ₹{item.price}
                  </h1>
                  <button className=" py-1 px-8 rounded-3xl bg-secondary text-white">
                    BOOK
                  </button>
                </div>
              </>
            ))}
          </div>

          {/* Airport Duty */}
          <h1 className="text-white text-center md:text-start container mx-auto bg-primary px-2 py-4 font-bold uppercase mt-10 text-2xl">
            Airport Duty
          </h1>
          <div className="container mx-auto flex-col md:flex-row  md:h-auto gap-10 md:gap-5 px-5 md:px-0 flex  justify-around items-center mt-10">
            {airport.map((item, index) => (
              <>
                <div
                  key={index}
                  className="flex flex-col items-center h-64 w-[100%] justify-center flex-1 py-8 shadow-2xl gap-5"
                >
                  <h1 className="uppercase text-2xl text-center text-secondary font-bold">
                    {item.service}
                  </h1>
                  <p className="text-center">(Extra Hour {item.extra})</p>
                  <h1 className="text-white bg-primary px-5 py-2">
                    ₹{item.price}
                  </h1>
                  <button className=" py-1 px-8 rounded-3xl bg-secondary text-white">
                    BOOK
                  </button>
                </div>
              </>
            ))}
          </div>

          {/* CITY DROP*/}
          <h1 className="text-white text-center md:text-start container mx-auto bg-primary px-2 py-4 font-bold uppercase mt-10 text-2xl">
            City Drop
          </h1>
          <div className="container mx-auto flex-col md:flex-row  md:h-auto gap-10 md:gap-5 px-5 md:px-0 flex  justify-around items-center mt-10">
            {city.map((item, index) => (
              <>
                <div
                  key={index}
                  className="flex flex-col items-center h-64 w-[100%] justify-center flex-1 py-8 shadow-2xl gap-5"
                >
                  <h1 className="uppercase text-2xl text-center text-secondary font-bold">
                    {item.service}
                  </h1>
                  <h1 className="text-white bg-primary px-5 py-2">
                    ₹{item.price}
                  </h1>
                  <button className=" py-1 px-8 rounded-3xl bg-secondary text-white">
                    BOOK
                  </button>
                </div>
              </>
            ))}
          </div>

          {/* Out Station Rates*/}
          <h1 className="text-white text-center md:text-start container mx-auto bg-primary px-2 py-4 font-bold uppercase mt-10 text-2xl">
            Out-of-Station Rates
          </h1>
          <div className="container mx-auto flex-col md:flex-row  md:h-auto gap-10 md:gap-5 px-5 md:px-0 flex  justify-around items-center mt-10">
            {outstation.map((item, index) => (
              <>
                <div
                  key={index}
                  className="flex flex-col items-center h-64 w-[100%] justify-center flex-1 py-8 shadow-2xl gap-5"
                >
                  <h1 className="uppercase text-2xl text-center text-secondary font-bold">
                    {item.service}
                  </h1>
                  <h1 className="text-white bg-primary px-5 py-2">
                    ₹{item.price}
                  </h1>
                  <button className=" py-1 px-8 rounded-3xl bg-secondary text-white">
                    BOOK
                  </button>
                </div>
              </>
            ))}
          </div>

          {/* Driver Rates*/}
          <h1 className="text-white text-center md:text-start container mx-auto bg-primary px-2 py-4 font-bold uppercase mt-10 text-2xl">
            Driver Rates
          </h1>
          <div className="container mx-auto flex-col md:flex-row  md:h-auto gap-10 md:gap-5 px-5 md:px-0 flex  justify-around items-center mt-10">
            {driver.map((item, index) => (
              <>
                <div
                  key={index}
                  className="flex flex-col items-center h-64 w-[100%] justify-center flex-1 py-8 shadow-2xl gap-5"
                >
                  <h1 className="uppercase text-2xl text-center text-secondary font-bold">
                    {item.service}
                  </h1>
                  <p className="text-center">{item.hour}</p>
                  <h1 className="text-white bg-primary px-5 py-2">
                    ₹{item.price}
                  </h1>
                  <button className=" py-1 px-8 rounded-3xl bg-secondary text-white">
                    BOOK
                  </button>
                </div>
              </>
            ))}
          </div>
        </section>
      </section>
    </>
  );
};

export default Section6;
