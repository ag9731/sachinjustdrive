import React from "react";
import { MdInfo } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";

const Note = () => {
  return (
    <div className="container mx-auto p-4 mt-7">
      <h1 className="text-2xl font-bold mb-4" style={{ color: "#E23C12" }}>
        Sachin Just Drive
      </h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4 flex items-start">
          <MdInfo className="text-3xl mr-2" style={{ color: "#E23C12" }} />
          <p className="text-lg">
            If you book a driver from Sachin Just Drive, if any problems occur
            with the drivers, please inform us immediately.
          </p>
        </div>
        <div className="mb-4 flex items-start ">
          <MdInfo className="text-3xl mr-2" style={{ color: "#E23C12" }} />
          <p className="text-lg">
            If you engage our drivers not through Sachin Just Drive without
            informing us, we are not responsible for any issues that arise from
            drivers.
          </p>
        </div>
        <div className="flex items-start">
          <FaRegClock className="text-3xl mr-2" style={{ color: "#E23C12" }} />
          <p className="text-lg">
            For booking drivers, book at least 2 hours early before the journey
            time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Note;
