import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useAuth } from "../contexts/AuthContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
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
        const userRole = res.data.data.role;
        console.log("User Role:", userRole);
        // console.log('data :', token)
        // Cookies.set("token", res.data.token);
        console.log("token", res.data.token);
        // Cookies.set("userData", JSON.stringify(res.data.data));
        console.log("berhasil login");
        console.log("Navigating to admin/dashboard or user/dashboard...");

        if (userRole === true) {
          // Admin role
          console.log("User is an admin");
          navigate("/admin-dashboard");
        } else {
          // Regular user role
          console.log("User is a regular user");
          login(res.data.token, JSON.stringify(res.data.data)); // stored user login data to context
          navigate("/user/dashboard");
        }
      })
      .catch((err) => {
        if (err.response) {
          setError(err.response.data.message);
        }
      });
  };
  return (
    <>
      <div className="h-full">
        <body className=" bg-gray-100 flex h-full items-center py-16">
          <main className="w-full max-w-md mx-auto p-6">
            <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm">
              <div className="p-4 sm:p-7">
                <div className="text-center">
                  <h1 className="block text-2xl font-bold text-gray-800 font-poppins ">Masuk</h1>
                  <p className="mt-2 text-sm text-gray-600 font-poppins">
                    Belum punya akun?{" "}
                    <a className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/register">
                      Buat akun disini{" "}
                    </a>
                  </p>
                </div>

                <div className="mt-5">
                  <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
                    Or
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="grid gap-y-4">
                      <div>
                        <label htmlFor="email" className="block  mb-2 dark:text-black text-md ">
                          Email
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="py-3 px-4 block w-full border border-gray-400 rounded-lg text-sm  focus:ring focus:ring-blue-500 outline-none disabled:opacity-50 disabled:pointer-events-none  "
                            required
                            aria-describedby="email-error"
                          />
                          <div className="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                            <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                            </svg>
                          </div>
                        </div>
                        <p className="hidden text-xs text-red-600 mt-2" id="email-error">
                          Please include a valid email address so we can get back to you
                        </p>
                      </div>

                      <div>
                        <div className="flex justify-between items-center">
                          <label htmlFor="password" className="block text-md mb-2 text-black">
                            Password
                          </label>
                        </div>
                        <div className="relative">
                          <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="py-3 px-4 block w-full border border-gray-400 rounded-lg text-sm  focus:ring focus:ring-blue-500 outline-none disabled:opacity-50 disabled:pointer-events-none  "
                            required
                            aria-describedby="email-error"
                          />
                          <div className="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                            <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                            </svg>
                          </div>
                        </div>
                        <p className="hidden text-xs text-red-600 mt-2" id="password-error">
                          8+ characters required
                        </p>
                      </div>

                      <div className="flex items-center"></div>
                      {error && <p className="text-red-600 text-sm font-semibold font-poppins text-center mb-2">{error}</p>}
                      <button
                        type="submit"
                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 font-poppins" 
                      >
                     Masuk
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </main>
        </body>
      </div>
    </>
  );
};

export default LoginPage;
