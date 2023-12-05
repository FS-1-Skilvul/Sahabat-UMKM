import  { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const RegistrationPage = (req, res) => {
  const [nama, setNama] = useState("");
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [konfirmasiPassword, konfirmasi_password] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!nama || !email || !password || !konfirmasiPassword) {
      
      console.log("Semua bidang harus diisi");
      setMsg("Semua bidang harus diisi");
      return;
    }

    // Validasi password dan konfirmasi password
    if (password !== konfirmasiPassword) {
      return res.status(400).json({
        status: 400,
        message: "Password dan Konfirmasi Password tidak cocok",
      });
    }

    // Kirim data formulir ke backend
    const formData = {
      nama: nama,
      email: email,
      password: password,
      konfirmasi_password: konfirmasiPassword,
    };

    axios
      .post("https://backend-production-4c5b.up.railway.app/register", formData)
      .then((res) => {
        console.log(`Success` + res);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  return (
    <div className="relative overflow-hidden">

        {/* <!-- Hero --> */}
        <div className="mx-auto max-w-screen-md py-9 px-4 sm:px-6 md:max-w-screen-xl  md:px-8 h-screen ">

        <div className="hidden md:block md:absolute md:top-0 md:start-1/2 md:end-0 h-screen bg-[url('https://images.unsplash.com/photo-1700190827495-f9d8eec1a08c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-center bg-cover"></div>
          <div className=" md:w-1/2 xl:pe-0 xl:w-5/12">
            {/* <!-- Title --> */}
            <h1 className="text-4xl text-gray-800 font-bold md:text-4xl md:leading-tight  lg:text-4xl    lg:leading-tight dark:text-gray-800">
              Atasi masalah untuk setiap  <span className="text-blue-600 dark:text-secondary">umkm</span>
            </h1>
            <p className="mt-3 text-base leading-6 text-gray-500"> Bergabunglah dengan kami untuk memperdalam pengetahuan bisnis umkm anda!</p>
            {/* <!-- End Title --> */}


         
            {/* <!-- Form --> */}
            <form className="mt-7" onSubmit={handleSubmit}>
              <div className="mb-4 mt-4">
                <label htmlFor="hs-hero-name-2 nama" className="block text-sm font-medium dark:text-white">
                  <span className="sr-only">Nama Lengkap</span>
                </label>
                <input
                  type="text"
                  id="hs-hero-name-2"
                  value={nama} onChange={(e) => setNama(e.target.value)} 
                  className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm  focus:ring focus:ring-blue-500 outline-none disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Nama Lengkap"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="hs-hero-email-2" className="block text-sm font-medium dark:text-white">
                  <span className="sr-only">Email address</span>
                </label>
                <input
                  type="email"
                  id="hs-hero-name-2"
                  value={email} onChange={(e) => setEmail(e.target.value)} 
                  className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm  focus:ring focus:ring-blue-500 outline-none disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Email"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="hs-hero-password-2" className="block text-sm font-medium dark:text-white">
                  <span className="sr-only">Password</span>
                </label>
                <input
                  type="password"
                  id="hs-hero-name-2"
                  value={password} onChange={(e) => setPassword(e.target.value)} 
                  className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm  focus:ring focus:ring-blue-500 outline-none disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Password"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="hs-hero-password-2" className="block text-sm font-medium dark:text-white">
                  <span className="sr-only">Konfirmasi Password</span>
                </label>
                <input
                  type="password"
                  id="hs-hero-name-2"
                  value={konfirmasiPassword} onChange={(e) => konfirmasi_password(e.target.value)} 
                  className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm  focus:ring focus:ring-blue-500 outline-none disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Konfirmasi Password"
                />
              </div>
              {msg && <p className="text-red-600 text-sm font-semibold font-poppins text-center mb-2">{msg}</p>}
              <div className="grid">
                <button
                  type="submit"
                  className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >Buat Akun
                </button>
              </div>
            </form>
          </div>
        </div>
    </div>
  );
};

export default RegistrationPage;
