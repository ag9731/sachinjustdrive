import React from "react";
import Section2 from "../HomePage/Layout/Section2/Section2";
import Section7 from "../HomePage/Layout/Section7/Section7";

const About = () => {

  const array = [
    {
      id: 1,
      title: " Unmatched Reliability",
      desc: "Our commitment to punctuality means you can count on us to get you where you need to go, right on time. Whether it’s a crucial business meeting or a leisurely outing, our dependable service ensures you won’t miss a moment.",
    },
    {
      id: 2,
      title: "Comfort and Safety",
      desc: "Your comfort and safety are our top priorities. Our fleet of modern, well-maintained vehicles is designed for a smooth, enjoyable ride. Our professional drivers are not only skilled and experienced but also trained to prioritize your well-being throughout the journey.",
    },
    {
      id: 3,
      title: "Exceptional Customer Service",
      desc: "We believe in delivering more than just a ride. Our friendly customer service team is available to assist you with any queries or special requests, ensuring a personalized and hassle-free experience from start to finish.",
    },
    {
      id: 4,
      title: "Affordable Rates",
      desc: "Traveling with Sachin Just Drive means getting premium service at competitive prices. We offer transparent pricing with no hidden fees, making quality transportation accessible to everyone.",
    },
    {
      id: 5,
      title: "Comprehensive Coverage",
      desc: "With services extending across Bengaluru, Mangalore, and Mysore, we’re here to meet all your travel needs. Whether you’re exploring the city or heading to a neighboring locale, we’ve got you covered.",
    },
  ];

  return (
    <>
      <div className="bg-gray-100 py-10 px-6 md:px-12 lg:px-24">
        <Section2 />
        <Section7 />
      </div>

      {/* 2nd section */}
      <section className="bg-[#f3eee8]">
        <div className="container mx-auto py-10">
          <h1 className="text-4xl font-marcellus text-center md:text-start">
            Why Choose Us
          </h1>
          {array.map((items) => (
            <>
              <div key={items.id} className="mt-7 flex flex-col gap-5 px-6 md:px-0">
                {/* <img src={items.img} alt={items.alt} className="max-w-40" /> */}
                <h1 className="font-semibold uppercase text-secondary text-2xl text-center md:text-start">
                  {items.title}
                </h1>
                <p className="text-[#828282] text-[2vmax] md:text-[1vmax] text-center md:text-start md:flex-start">
                  {items.desc}
                </p>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
