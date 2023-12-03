import  { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://backend-production-4c5b.up.railway.app/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        // Simpan token ke cookie
        const userRole =  res.data.data.role;
        console.log("User Role:", userRole);
        // console.log('data :', token)
        Cookies.set("token", res.data.token);
        console.log("token", res.data.token);
        console.log("berhasil login");
        console.log("Navigating to admin/dashboard or user/dashboard...");
  
        
        if (userRole === true) {
          // Admin role
          console.log("User is an admin");
          navigate("/admin-dashboard");
        } else {
          // Regular user role
          console.log("User is a regular user");
          navigate("/user-dashboard");
        }

      })
      .catch((err) => {
        if (err.response) {
          setError(err.response.data.message);
        }
      });
  };
  return (
    <div className="h-screen flex flex-row justify-around items-center mx-auto">
      <h1 className=" text-6xl text-center  font-medium">
        SELAMAT DATANG <br /> KEMBALI
      </h1>
      <form action="#" className="p-6  border-4 border-umkm3 w-96 rounded h-5/6 flex flex-col justify-between" onSubmit={handleSubmit}>
        <div>
          <h3 className="text-center font-semibold text-2xl">Masuk</h3>
          {/* login input */}
          <label htmlFor="email" className="block font-bold mb-2">
            Email
          </label>
          <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} className="border-2 border-umkm3 rounded-[16px] w-full h-10 px-2" />
          <label htmlFor="password" className="block font-bold mb-2">
            Password
          </label>
          <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} className="border-2 border-umkm3 rounded-[16px] w-full h-10 px-2" />
          {error && <p>{error}</p>}
          <p className="text-end text-red-500 font-semibold my-1">Lupa Password?</p>
        </div>

        <div>
          <button type="submit" className="bg-primary p-3 text-white font-semibold rounded-[16px] w-[100%]">
            Masuk
          </button>
          <p className="text-center mx-2">
            Belum Punya Akun?{" "}
            <span className="text-blue-500 font-semibold">
              <a href="/register"> Daftar</a>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
