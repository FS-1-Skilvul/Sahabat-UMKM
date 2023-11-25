import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TransaksiAdmin from "../pages/TransaksiAdmin";
import AdminDashboard from "../pages/AdminDashboard";

function SideBarAdmin() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill", to: "" },
    { title: "Inbox", src: "Chat", to: "/admin/transaksi" },
    { title: "Accounts", src: "User", gap: true, to: "" },
    { title: "Schedule ", src: "Calendar", to: "" },
  ];
  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div>
      <div className="flex">
        <div className={` ${open ? "w-72" : "w-20 "} bg-dark-purple h-screen p-5  pt-8 relative duration-300`}>
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
                <button>
                  <img src={`../src/assets/${Menu.src}.png`} />
                </button>
                <span className={`${!open && "hidden"} origin-left duration-200`}>{Menu.title}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="h-screen flex-1 p-7">
          {activeMenu === "Dashboard" && <AdminDashboard/>}
          {activeMenu === "Inbox" && <TransaksiAdmin />}
          {/* {activeMenu === 'Transaksi' && <Transaksi />} */}
        </div>
      </div>
    </div>
  );
}
export default SideBarAdmin;
