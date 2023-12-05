import { useState } from "react";
import {  Link,useNavigate  } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import axios from "axios";
function SideBarAdmin() {
  const [activeMenu, setActiveMenu] = useState();
  const [open, setOpen] = useState();
  const token = Cookies.get("token");
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const { user } = useSelector((state) => state.auth);

  // const logout = () => {
  //   dispatch(LogOut());
  //   dispatch(reset());
  //   navigate("/");
  // };
  const Menus = [
    { title: "Kelas", src: "list", to: "/dataKelas" },
    { title: "User", src: "user", to: "/userAdmin" },
    { title: "Transaksi", src: "transaks", to: "/transaksi" },
    { title: "Kategori Kelas", src: "category", to: "/kategori" },
    
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
            src="../src/assets/control.png"
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center">
            <img src="../src/assets/images/logo.png" className={` `} />
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
                  <img src={`../src/assets/${Menu.src}.png`} className="w-8" />
                </button>
                <span className={`${!open && "hidden"} origin-left duration-200 font-semibold text-lg text-center`}>{Menu.title}</span>

              </Link>
              </li>
            ))}
          </ul>
            <FaSignOutAlt size={30} className="text-gray-400 flex mt-5 mx-2  rounded-md text-center cursor-pointer hover:bg-light-white  text-sm  gap-x-2 " onClick={logout}/>
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
