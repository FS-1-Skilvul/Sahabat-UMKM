import { useState } from "react";
import {  Link,useNavigate  } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import  Control from '../assets/images/control.png'
import  List from '../assets/images/list.png'
import  Transaksi from '../assets/images/transaks.png'
import Logo from '../assets/images/Logo.png'
import  User from '../assets/images/user.png'
import  Category from '../assets/images/category.png'
// import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import axios from "axios";
function SideBarAdmin() {
  const [activeMenu, setActiveMenu] = useState();
  const [open, setOpen] = useState();
  const token = Cookies.get("token");
  const navigate = useNavigate();
 
  const Menus = [
    { title: "Kelas", src: List, to: "/dataKelas" },
    { title: "User", src: User, to: "/userAdmin" },
    { title: "Transaksi", src: Transaksi, to: "/transaksi" },
    { title: "Kategori Kelas", src: Category, to: "/kategori" },
    
  ];
 

  // const navigate = useNavigate();

  const handleMenuClick = (menu) => {
   setActiveMenu(menu);
  //  navigate(menu.to);
   console.log("menu", menu);
  };

  const logout = async()=>{
    try{
      const response = await axios.get("https://backend-production-4c5b.up.railway.app/logout", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      console.log(response)
      Cookies.remove("token");
      navigate("/login")
    }catch(error){
      console.log("Error fetching data:", error);
    }
  }
  return (
    <div>
      <div className="flex items-center">
        <div className={` ${open ? "w-72" : "w-20 "} bg-secondary h-screen p-5  pt-8 relative duration-300`}>
          <img
            src={Control}
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center">
            <img src={Logo} className={` `} />
            <h1 className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"}`}></h1>
          </div>
          <ul className="pt-6">
            {Menus.map((Menu, index) => (
              <li
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${activeMenu === Menu.title && "bg-light-white"}  `}
                onClick={() => handleMenuClick(Menu.title)}
                >
                <Link to={Menu.to} onClick={() => setActiveMenu(Menu.to)} className="flex items-center gap-3 mt-4"> 
                <button>
                  <img src={Menu.src} className="w-8"  />
           
                </button>
                <span className={`${!open && "hidden"} origin-left duration-200 font-semibold text-lg text-center`}>{Menu.title}</span>

              </Link>
              </li>
            ))}
          </ul>
            <FaSignOutAlt size={30} className="text-gray-400 flex mt-5 mx-2  rounded-md text-center cursor-pointer hover:bg-light-white  text-sm  gap-x-2 " onClick={logout}/>
        
        </div>

        {/* <IsiSideBarAdmin/> */}
        <div className="">
   
           
          <main>{}</main>
       
        </div>
      </div>
    </div>
  );
}
export default SideBarAdmin;
