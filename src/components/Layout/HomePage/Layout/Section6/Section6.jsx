import React from "react";
import "./Section6.css";
import { FaClockRotateLeft } from "react-icons/fa6";

const Section6 = () => {
  const array1 = [
    { time: "4 Hours", price: "500 Rs" },
    { time: "Extra Hours", price: "80 Rs" },
    { time: "8 Hours", price: "800 Rs" },
    { time: "Extra Hours", price: "80 Rs" },
    { time: "1/2 Hour", price: "45 Rs" },
  ];

  const outOfStation = [
    { time: "Per Day (6AM to 6PM)", food: "With Food", price: "1200 Rs" },
    { time: "Per Day (6AM to 6PM)", food: "Without Food", price: "1500 Rs" },
    {
      time: "Night Stay Charge",
      food: "With Washroom Facility",
      price: "200 Rs",
    },
  ];

  const nightDrops = [
    { time: "Night One Way Drop City", price: "800 Rs" },
    { time: "Night Airport Drop", price: "1000 Rs" },
  ];

  const importedVehicle = [
    { time: "4 Hours", price: "600 Rs" },
    { time: "Extra Hours", price: "100 Rs" },
    { time: "Out Side With Food", price: "1500 Rs" },
  ];

  const goodsVehicle = [
    { time: "4 Hours", price: "600 Rs" },
    { time: "Extra Hours", price: "100 Rs" },
    { time: "Full Day", price: "1500 Rs + Food" },
  ];

  const bangloreCityDrop = [
    { time: "Drop", price: "800 Rs" },
    { time: "9 pm Service Charge", price: "50 Rs" },
    { time: "11 pm Service Charge", price: "100 Rs" },
  ];

  return (
    <>
      <section className="bg-[#f7f7f7] py-16">
        {/* Upper Section */}
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold uppercase">Pricing and Services</h1>
          <p className="mt-6 text-[#e23c12] font-bold">Don't Drink And Drive</p>
          <div className="flex items-center gap-5 mt-4">
            <FaClockRotateLeft />
            <h1 className="uppercase">24 Hours On Call Driver Service</h1>
          </div>
          <div className="mt-7">
            <h1 className="uppercase">Permanent Drivers Available</h1>
            <p>Out Station Drop</p>
          </div>
          <div className="mt-4">
            <h1 className="uppercase">Any Types Of Vehicles Available</h1>
            <p>On Call Drivers</p>
            <p>If Booked and Cancelled 200 Rs</p>
          </div>
        </div>

        <section className="flex flex-col container mx-auto mt-10">
          {/* Services And Charges */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Hourly Prices */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h1 className="text-[#e23c12] text-2xl font-bold uppercase mb-4">
                Driver Hourly Prices
              </h1>
              <table className="w-full table-auto">
                <thead>
                  <tr>
                    <th className="border px-4 py-2">Time</th>
                    <th className="border px-4 py-2">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {array1.map((item, index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2">{item.time}</td>
                      <td className="border px-4 py-2">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Out Of Station Prices */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h1 className="text-[#e23c12] text-2xl font-bold uppercase mb-4">
                Out Of Station Prices
              </h1>
              <table className="w-full table-auto">
                <thead>
                  <tr>
                    <th className="border px-4 py-2">Time</th>
                    <th className="border px-4 py-2">Facility</th>
                    <th className="border px-4 py-2">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {outOfStation.map((item, index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2">{item.time}</td>
                      <td className="border px-4 py-2">{item.food}</td>
                      <td className="border px-4 py-2">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-2 text-sm text-gray-600">
                Note: Night Driving Extra
              </p>
            </div>

            {/* Night Drops */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h1 className="text-[#e23c12] text-2xl font-bold uppercase mb-4">
                Night Drops
              </h1>
              <table className="w-full table-auto">
                <thead>
                  <tr>
                    <th className="border px-4 py-2">Time</th>
                    <th className="border px-4 py-2">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {nightDrops.map((item, index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2">{item.time}</td>
                      <td className="border px-4 py-2">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Imported Vehicle */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h1 className="text-[#e23c12] text-2xl font-bold uppercase mb-4">
                Imported Vehicle
              </h1>
              <table className="w-full table-auto">
                <thead>
                  <tr>
                    <th className="border px-4 py-2">Time</th>
                    <th className="border px-4 py-2">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {importedVehicle.map((item, index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2">{item.time}</td>
                      <td className="border px-4 py-2">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Goods Vehicle */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h1 className="text-[#e23c12] text-2xl font-bold uppercase mb-4">
                Goods Vehicle
              </h1>
              <table className="w-full table-auto">
                <thead>
                  <tr>
                    <th className="border px-4 py-2">Time</th>
                    <th className="border px-4 py-2">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {goodsVehicle.map((item, index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2">{item.time}</td>
                      <td className="border px-4 py-2">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Bangalore City Drop */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h1 className="text-[#e23c12] text-2xl font-bold uppercase mb-4">
                City Drop
              </h1>
              <table className="w-full table-auto">
                <thead>
                  <tr>
                    <th className="border px-4 py-2">Time</th>
                    <th className="border px-4 py-2">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {bangloreCityDrop.map((item, index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2">{item.time}</td>
                      <td className="border px-4 py-2">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Section6;
