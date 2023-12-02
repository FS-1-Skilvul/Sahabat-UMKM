import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const RegistrationPage = (req, res) => {
  const [nama, setNama] = useState("");
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [konfirmasiPassword, konfirmasi_password] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // if (!nama || !email || !password || !konfirmasiPassword) {
    //   console.log("Semua bidang harus diisi");
    //   return;
    // }

    // // Validasi password dan konfirmasi password
    // if (password !== konfirmasiPassword) {
    //   return res.status(400).json({
    //     status: 400,
    //     message: "Password dan Konfirmasi Password tidak cocok",
    //   });
    // }

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
        console.log(`Success` + res.data);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="h-screen flex flex-row justify-around items-center mx-auto">
      <h1 className=" text-6xl text-center  font-medium">
        BERGABUNG <br /> BERSAMA KAMI
      </h1>
      <form
        onSubmit={handleSubmit}
        action="#"
        className="p-6 flex flex-col border-4 border-umkm3 w-96 rounded h-5/6 flex flex-col justify-between"
      >
        <div>
          <h3 className="text-center font-semibold text-2xl">Masuk</h3>
          <label htmlFor="nama" className="block font-bold mb-2">
            Nama Lengkap
          </label>
          <input
            type="text"
            name="nama"
            id="nama"
            className="border-2 border-umkm3 rounded-[16px] w-full h-10 px-2"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
          {/* login input */}
          <label htmlFor="email" className="block font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="border-2 border-umkm3 rounded-[16px] w-full h-10 px-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password" className="block font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="border-2 border-umkm3 rounded-[16px] w-full h-10 px-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="konfirmasipassword" className="block font-bold mb-2">
            Konfirmasi Password
          </label>
          <input
            type="password"
            name="konfirmasipassword"
            id="konfirmasipassword"
            className="border-2 border-umkm3 rounded-[16px] w-full h-10 px-2"
            value={konfirmasiPassword}
            onChange={(e) => konfirmasi_password(e.target.value)}
          />
          <p className="text-end text-red-500 font-semibold my-1">
            Lupa Password?
          </p>
        </div>

        <div>
          <button
            type="submit"
            className="bg-primary p-3 text-white font-semibold rounded-[16px] w-[100%]"
          >
            <a href="/login"></a>
            Daftar
          </button>
          <p className="text-center mx-2">
            Sudah Punya Akun?{" "}
            <span className="text-blue-500 font-semibold">Masuk</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegistrationPage;
