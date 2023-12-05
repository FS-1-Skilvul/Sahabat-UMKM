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

<div className="h-full">
  <body className=" bg-gray-100 flex h-full items-center py-16">
    <main className="w-full max-w-md mx-auto p-6">
      <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 ">Sign in</h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            gsdf
              <a className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="../examples/html/signup.html">
                Sign up here
              </a>
            </p>
          </div>

          <div className="mt-5">
           
            <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">Or</div>

          
            <form>
              <div className="grid gap-y-4">
             
                <div>
                  <label htmlFor="email" className="block text-sm mb-2 text-black">Email address</label>
                  <div className="relative">
                    <input type="email" id="email" name="email" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required aria-describedby="email-error"/>
                    <div className="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">

                      <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                      </svg>
                    </div>
                  </div>
                  <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                </div>
              
                <div>
                  <div className="flex justify-between items-center">
                    <label htmlFor="password" className="block text-sm mb-2 dark:text-white">Password</label>
                    <a className="text-sm text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="../examples/html/recover-account.html">Forgot password?</a>
                  </div>
                  <div className="relative">
                    <input type="password" id="password" name="password" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required aria-describedby="password-error"/>
                    <div className="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                      <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                      </svg>
                    </div>
                  </div>
                  <p className="hidden text-xs text-red-600 mt-2" id="password-error">8+ characters required</p>
                </div>
              
                <div className="flex items-center">
                  <div className="flex">
                    <input id="remember-me" name="remember-me" type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"/>
                  </div>
                  <div className="ms-3">
                    <label for="remember-me" className="text-sm dark:text-white">Remember me</label>
                  </div>
                </div>
           

                <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Sign in</button>
              </div>
            </form>
           
          </div>
        </div>
      </div>
    </main>
  </body>
  </div>


    /* // // <div className="h-screen flex flex-row justify-around items-center mx-auto">
    // //   <h1 className=" text-6xl text-center  font-medium">
    // //     SELAMAT DATANG <br /> KEMBALI
    // //   </h1>
    // //   <form action="#" className="p-6  border-4 border-umkm3 w-96 rounded h-5/6 flex flex-col justify-between" onSubmit={handleSubmit}>
    // //     <div>
    // //       <h3 className="text-center font-semibold text-2xl">Masuk</h3>
    // //       login input
    // //       <label htmlFor="email" className="block font-bold mb-2">
    // //         Email
    // //       </label>
    // //       <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} className="border-2 border-umkm3 rounded-[16px] w-full h-10 px-2" />
    // //       <label htmlFor="password" className="block font-bold mb-2">
    // //         Password
    // //       </label>
    // //       <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} className="border-2 border-umkm3 rounded-[16px] w-full h-10 px-2" />
    // //       {error && <p>{error}</p>}
    // //       <p className="text-end text-red-500 font-semibold my-1">Lupa Password?</p>
    // //     </div>

    // //     <div>
    // //       <button  type="submit" className="bg-primary p-3 text-white font-semibold rounded-[16px] w-[100%]">
    // //         Masuk
    // //       </button>
    // //       <p className="text-center mx-2">
    // //         Belum Punya Akun?{" "}
    // //         <span className="text-blue-500 font-semibold">
    // //           <a href="/register"> Daftar</a>
    // //         </span>
    // //       </p>
    // //     </div>
    // //   </form>
    // </div> */
  );
};

export default LoginPage;
