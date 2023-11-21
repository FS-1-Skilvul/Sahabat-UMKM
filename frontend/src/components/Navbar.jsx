import logo from "../assets/images/logo.png";
import { navLinks } from "../constants";
import { GiHamburgerMenu } from "react-icons/gi";
function navbar() {
  return (
    <header className="">
      <nav className=" flex justify-between items-center padding-x py-5 absolute z-10 w-full bg-secondary">
        <a href="/">
          <img src={logo} alt="logo" width={140} height={40} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href="{link.href}" className="font-montserrat text-black">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex gap-2 leading-normal font-montserrat max-lg:hidden wide:mr-24 items-center'>
          <a href='/' className="font px-5 py-1 text-white">Buat Akun</a>
          {/* <span>/</span> */}
          <a href='/' className="bg-primary px-8 py-2 rounded-lg font-medium text-white">Masuk</a>
        </div>

        <div className="hidden max-lg:block">
          <GiHamburgerMenu />
        </div>
      </nav>
    </header>
  );
}

export default navbar;
