import logo from "../assets/images/logo.png";
import { navLinks } from "../constants";
import { useState } from "react";
// import { Link as RouterLink } from "react-router-dom";
// import { Link, animateScroll as scroll } from "react-scroll";
// import { Link } from 'react-router-dom';
function Navbar() {
  // const handleClick = (event) => {
  //   event.preventDefault();
  //   const id = event.target.getAttribute("href");
  //   document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  // };
  const [activeNav, setActiveNav] = useState("Beranda");

  let [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0  w-full shadow-md">
        <nav className=" md:flex justify-between   py-5 md:px-10 px-7  bg-secondary">
          <a href="/">
            <img src={logo} alt="logo" width={140} height={40} />
          </a>

          <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden ">
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>

          <ul
            className={`md:flex md:items-center gap-10 md:pb-0 pb-12 absolute md:static font-semibold bg-white md:bg-transparent  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 " : "top-[-490px]"
            }`}
          >
            {navLinks.map((link) => (
              <li key={link.label} className="md:ml-8 text-lg md:my-0 my-7">
                <a className={`font-montserrat text-gray-800 hover:text-gray-400 ${activeNav === link.label ? "active" : ""}  `} href={link.to}>
                  {link.label}
                </a>
                {/* <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70} // Sesuaikan dengan tinggi elemen header jika ada
                  duration={500}
                  className={`font-montserrat text-gray-800 hover:text-gray-400 ${activeNav === link.label ? "active" : ""} cursor-pointer`}
                  onClick={() => {
                    setActiveNav(link.label);
                    setOpen(false); // Tutup menu setelah mengklik tautan
                  }}
                >
                  {link.label}
                </Link> */}

                {/* <Link
                  to={link.to}
                  id={link.id}
                  activeClass="active"
            
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className={`font-montserrat text-gray-800 ${activeNav === link.label ? "active" : ""}`}
                  onClick={() => setActiveNav(link.label)}
                >
                  {link.label}
                </Link> */}
              </li>
            ))}
          </ul>
          <div className="flex gap-2 leading-normal font-montserrat max-lg:hidden wide:mr-24 items-center">
            <a href="/regis" className="font px-5 py-1 text-white hover:text-primary">
              Buat Akun
            </a>
            {/* <span>/</span> */}
            <a href="/login" className="bg-primary px-8 py-2 rounded-lg font-medium text-white">
              Masuk
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
