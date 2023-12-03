import logo from "../assets/images/logo.png";
import { navLandingLinks, navLoginLinks } from "../constants";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import React from "react";
import CariKelasPage from "../pages/CariKelasPage";

function Navbar() {
  const handleClick = (event) => {
    event.preventDefault();
    const id = event.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  };
  const [activeNav, setActiveNav] = useState("Beranda");
  const { isUserLogin } = useAuth();
  console.log(isUserLogin);

  let [open, setOpen] = useState(false);
  return (
    <>
      <header className="fixed top-0 left-0  w-full shadow-md">
        <nav className=" md:flex justify-between   py-5 md:px-10 px-7  bg-secondary">
          <a href="/">
            <img src={logo} alt="logo" width={140} height={40} />
          </a>

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden "
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>

          <ul
            className={`md:flex md:items-center gap-10 md:pb-0 pb-12 absolute md:static font-semibold bg-white md:bg-transparent  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 " : "top-[-490px]"
            }`}
          >
            {isUserLogin
              ? navLoginLinks.map((link) => (
                  <li key={link.label} className="md:ml-8 text-lg md:my-0 my-7">
                    <a
                      className={`font-montserrat text-white hover:text-gray-400 ${
                        activeNav === link.label ? "active" : ""
                      }  `}
                      href={link.to}
                    >
                      {link.label}
                    </a>
                  </li>
                ))
              : navLandingLinks.map((link) => (
                  <li key={link.label} className="md:ml-8 text-lg md:my-0 my-7">
                    <a
                      className={`font-montserrat text-white hover:text-gray-400 ${
                        activeNav === link.label ? "active" : ""
                      }  `}
                      href={link.to}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
          </ul>
          <div className="flex gap-2 leading-normal font-montserrat max-lg:hidden wide:mr-24 items-center">
            {isUserLogin ? (
              <div className="rounded-full overflow-hidden h-10 w-10 border-[1.5px] border-primary cursor-pointer">
                <img
                  src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div>
                <a
                  href="/register"
                  className="font px-5 py-1 text-white  hover:text-primary"
                >
                  Buat Akun
                </a>
                <a
                  href="/login"
                  className="bg-primary px-8 py-2 rounded-lg font-medium text-white"
                >
                  Masuk
                </a>
              </div>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}
// }
export default Navbar;
