import Cookies from "js-cookie";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const storedAuthToken = Cookies.get("token") ? true : false;
  const storedUserData = Cookies.get("userData");

  const [isUserLogin, setIsUserLogin] = useState(storedAuthToken);
  const [userData, setUserData] = useState(JSON.parse(storedUserData));
  //   const login = () => {
  //     setIsUserLogin(true);
  //   };

  //   const logout = () => {
  //     setIsUserLogin(false);
  //   };

  //   useEffect(() => {
  //     localStorage.setItem("isUserLogin", JSON.stringify(isUserLogin));
  //   }, [isUserLogin]);

  return (
    <AuthContext.Provider value={{ isUserLogin, userData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
