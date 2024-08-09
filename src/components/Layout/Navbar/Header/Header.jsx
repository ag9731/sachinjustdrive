import React, { Fragment, useState } from "react";
import "./Header.css";
import logo from "../../../../assets/sachin_just_drive_Logo.png";
import { FaAngleDown } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <Fragment>
      <div className="w-full h-24 bg-milkyWhite shadow-md overflow-hidden">
        <div className="container relative mx-auto flex items-center justify-between">
          {/* Left Side Data */}
          <section className="flex items-center gap-10">
            <img
              className="max-w-40  min-w-32"
              src={logo}
              alt="Sachin Just Drive Logo"
            />
            {/* Nav Items */}
            <div className="hidden md:block">
              <ul className="flex flex-col md:flex-row gap-0 z-50 md:static md:gap-10">
                <li>
                  <NavLink
                    to="/"
                    activeClassName="text-red-500"
                    className="text-black"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    activeClassName="text-red-500"
                    className="text-black"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services"
                    activeClassName="text-red-500"
                    className="text-black"
                  >
                    Pricing & Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/sachin-man-power"
                    activeClassName="text-red-500"
                    className="text-black"
                  >
                    Sachin ManPowers
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    activeClassName="text-red-500"
                    className="text-black"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <div
              className=" block md:hidden"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              <div className="absolute right-5 top-1/2 transform -translate-y-1/2 mobileClose">
                {menuOpen ? (
                  <FaTimes className="text-4xl transition-transform duration-300" />
                ) : (
                  <FaBars className="text-4xl transition-transform duration-300" />
                )}
              </div>
            </div>
          </section>

          {/* Right Side Data */}
          <section>
            <Link to="/contact">
              <button className="bg-secondary hidden md:block border-none px-6 py-2 transition-all hover:bg-primary hover:border-black text-white rounded-full">
                BOOK NOW
              </button>
            </Link>
          </section>
        </div>

        {/* Mobile menu */}
        <div
          className={`fixed inset-0 bg-secondary mobilemenu py-10 transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col gap-3 items-center mobilemenu">
            <li
              className="text-white font-bold text-center py-2 text-[2.8vmax]"
              onClick={handleMenuItemClick}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className="text-white font-bold text-center py-2 text-[2.8vmax]"
              onClick={handleMenuItemClick}
            >
              <Link to="/about">About</Link>
            </li>
            <li
              className="text-white font-bold text-center py-2 text-[2.8vmax]"
              onClick={handleMenuItemClick}
            >
              <Link to="/services">Pricing</Link>
            </li>
            <li
              className="text-white font-bold text-center py-2 text-[2.8vmax]"
              onClick={handleMenuItemClick}
            >
              <Link to="/fleet">Fleet</Link>
            </li>
            <li
              className="text-white font-bold text-center py-2 text-[2.8vmax]"
              onClick={handleMenuItemClick}
            >
              <Link to="/sachin-man-power">Sachin Management</Link>
            </li>
            <li
              className="text-white font-bold text-center py-2 text-[2.8vmax]"
              onClick={handleMenuItemClick}
            >
              <Link to="/contact">Contact</Link>
            </li>
            <li onClick={handleMenuItemClick}>
              <img
                className="max-w-40 bg-white min-w-32"
                src={logo}
                alt="Sachin Just Drive Logo"
              />
            </li>
            <li onClick={handleMenuItemClick}>
              <div className="flex bg-white px-10 gap-6 md:gap-3 justify-center md:justify-start py-4">
                <FaFacebook className="cursor-pointer fill-blue-700 text-1xl" />
                <FaInstagram className="cursor-pointer fill-pink-800 text-1xl" />
                <FaYoutube className="cursor-pointer fill-red-700 text-1xl" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
