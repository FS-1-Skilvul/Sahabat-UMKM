import logo from "../assets/images/logo.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { navLinks } from "../constants";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

import React from "react";
import CariKelasPage from "../pages/CariKelasPage";
// import { Link } from 'react-router-dom';
function Navbar() {
  const handleClick = (event) => {
    event.preventDefault();
    const id = event.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  };
  const [activeNav, setActiveNav] = useState("Beranda");
  return (
    <>
      <header className="sticky top-0  shadow-md">
        <nav className=" flex justify-between items-center  padding-x py-5 absolute z-10 w-full bg-secondary">
          <a href="/">
            <img src={logo} alt="logo" width={140} height={40} />
          </a>
          <ul className="flex-1 flex justify-center items-center font-semibold gap-16 max-lg:hidden">
            {navLinks.map((link) => (
              <li key={link.label}>
                {/* <a href="" className="font-montserrat text-gray-800">
                  {link.label}
                </a> */}
                <Link
                  to={link.to}
                  className={`font-montserrat text-gray-800 ${
                    activeNav === link.label ? "active" : ""
                  }`}
                  onClick={() => setActiveNav(link.label)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-2 leading-normal font-montserrat max-lg:hidden wide:mr-24 items-center">
            <a href="/" className="font px-5 py-1 text-white">
              Buat Akun
            </a>
            {/* <span>/</span> */}
            <a
              href="/"
              className="bg-primary px-8 py-2 rounded-lg font-medium text-white"
            >
              Masuk
            </a>
          </div>

          <div className="hidden max-lg:block">
            <GiHamburgerMenu />
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
