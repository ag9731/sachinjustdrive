import React from "react";
import Section1 from "./Layout/Section1/Section1";
import Section2 from "./Layout/Section2/Section2";
import "./HomePage.css";
import Section3 from "./Layout/Section3/Section3";
import Section4 from "./Layout/Section4/Section4";
import Section5 from "./Layout/Section5/Section5";
import Section6 from "./Layout/Section6/Section6";
import Section7 from "./Layout/Section7/Section7";
import note from "../../../assets/homePage/sachin just drive note.jpg";
import Note from "./Layout/Note/Note";

const HomePage = () => {
  return (
    <div className="HomePageSection">
      <Section1 />
      <Note/>
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
    </div>
  );
};

export default HomePage;
