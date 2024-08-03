import "./App.css";
import { Fragment } from "react";
import Header from "./components/Layout/Navbar/Header/Header";
import HomePage from "./components/Layout/HomePage/HomePage";
import Footer from "./components/Layout/Navbar/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/Layout/About/About";
import Service from "./components/Layout/Services/Service";
import Contact from "./components/Layout/Contact/Contact";
import WhatsAppButton from "./components/Layout/WhatsupButton/WhatsupButton";
import Manpower from "./components/Layout/Manpower/Manpower";

function App() {
  return (
    <Fragment>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sachin-man-power" element={<Manpower/>} />
          </Routes>
          <Footer />
        </div>
      </Router>
      <WhatsAppButton/>
    </Fragment>
  );
}

export default App;
