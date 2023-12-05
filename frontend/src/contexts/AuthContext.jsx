// import Cookies from "js-cookie";
// import { createContext, useContext, useEffect, useState } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isUserLogin, setIsUserLogin] = useState(false);
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     // Check for the presence of the token and userData in cookies
//     const storedAuthToken = Cookies.get("token");
//     const storedUserData = Cookies.get("userData");

//     if (storedAuthToken && storedUserData) {
//       // Update the state when the cookies change
//       setIsUserLogin(true);
//       const decodedUserData = decodeURIComponent(storedUserData);
//       setUserData(JSON.parse(decodedUserData));
//     } else {
//       // Clear state if cookies are not present
//       setIsUserLogin(false);
//       setUserData(null);
//     }
//   }, []);

//   return (
//     <AuthContext.Provider value={{ isUserLogin, userData }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// AuthContext.js
import React, { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isUserLogin, setIsUserLogin] = useState(false);
  const [userData, setUserData] = useState(null);

  const login = (userToken, userData) => {
    Cookies.set("token", userToken);
    Cookies.set("userData", userData);
    setUserData(userData);
    console.log(userData);
    setIsUserLogin(true);
  };

  const logout = () => {
    setIsUserLogin(false);
    setUserData(null);
    Cookies.remove("token");
    Cookies.remove("userData");
  };

  return (
    <AuthContext.Provider value={{ isUserLogin, userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
