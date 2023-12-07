import Logo from "../assets/images/Logo.png";
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <>
    <div className="">


      
        <div className="main-footer py-10 px-5 flex justify-between  bg-secondary mt-20   text-white ">
          <div className="flex flex-col gap-4 md:flex-col  ">
            <img src={Logo} className="w-40" alt="" />
            <p className="font-poppins text-sm leading-6">
              Kami percaya bahwa pertumbuhan UMKM adalah kunci untuk <br /> menggerakkan ekonomi lokal dan menciptakan lapangan kerja.
            </p>

            <div className="flex gap-3 items-center ">
              <IoLogoFacebook className="text-2xl" />
              <FaTwitter className="text-2xl" />
              <FaInstagram className="text-2xl" />
              <FaYoutube className="text-3xl" />
            </div>
            <div className="flex "></div>
          </div>

          <div className="flex flex-col">
            <h1 className="font-semibold font-poppins pb-4 text-lg">Menu</h1>
            <ul className="flex flex-col gap-2 font-poppins text-sm ">
              <li>Beranda</li>
              <li>Cari Kelas</li>
              <li>Mentor</li>
              <li>Tentang</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h1 className="font-semibold font-poppins pb-4 text-lg">Komunitas</h1>
            <ul className="flex flex-col gap-2 font-poppins text-sm">
              <li>Mulai Berlangganan</li>
              <li>Rencana Tim</li>
              <li>Cari Teman</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h1 className="font-semibold font-poppins text-lg pb-4">Tentang</h1>
            <ul className="flex flex-col gap-2 font-poppins text-sm">
              <li>Kontak Kami</li>
              <li>Privasi dan kebijakan</li>
              <li>syarat dan ketentuan</li>
              <li>FAQ</li>
              <hr className="w-full border-white mt-4" />
            </ul>
          </div>
        </div>
    </div>

    </>
  );
};

export default Footer;
