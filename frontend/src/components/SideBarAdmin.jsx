import { useState } from "react";
import { BrowserRouter, Routes, Route, Link,useNavigate  } from "react-router-dom";
import TransaksiAdmin from "../pages/TransaksiAdmin";
import AdminDashboard from "../pages/AdminDashboard";
import IsiSideBarAdmin from "./IsiSideBarAdmin";
// import { useDispatch, useSelector } from "react-redux";
import { IoPerson, IoPricetag, IoHome, IoLogOut } from "react-icons/io5";

function SideBarAdmin() {
  const [activeMenu, setActiveMenu] = useState();
  const [open, setOpen] = useState();
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const { user } = useSelector((state) => state.auth);

  // const logout = () => {
  //   dispatch(LogOut());
  //   dispatch(reset());
  //   navigate("/");
  // };
  const Menus = [
    { title: "Dashboard", src: "Chart_fill", to: "/dashboard" },
    { title: "Transaksi", src: <IoHome/>, to: "/transaksi" },
    
  ];
 

  // const navigate = useNavigate();

  const handleMenuClick = (menu) => {
   setActiveMenu(menu);
  //  navigate(menu.to);
   console.log("menu", menu);
  };

  return (
    <div>
      <div className="flex">
        <div className={` ${open ? "w-72" : "w-20 "} bg-secondary h-screen p-5  pt-8 relative duration-300`}>
          <img
            src="../src/assets/control.png"
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center">
            <img src="../src/assets/images/logo.png" className={`  cursor-pointer duration-500 ${open && "rotate-[360deg]"}`} />
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
                <Link to={Menu.to} onClick={() => setActiveMenu(Menu.to)}> 
                <button>
                  <img src={`../src/assets/${Menu.src}.png`} />
                </button>
                <span className={`${!open && "hidden"} origin-left duration-200`}>{Menu.title}</span>
              </Link>
              </li>
            ))}
          </ul>
          {/* <button onClick={logout} className="button is-white">
              <IoLogOut /> Logout
            </button> */}
        </div>

        {/* <IsiSideBarAdmin/> */}
        <div className="">
   
           
          <main>{}</main>
          {/* {activeMenu === "Dashboard" && <AdminDashboard/>}
          {activeMenu === "Transaksi" && <TransaksiAdmin />} 
           {activeMenu === 'Transaksi' && <TransaksiAdmin />} */}
        </div>
      </div>
    </div>
  );
}
export default SideBarAdmin;
