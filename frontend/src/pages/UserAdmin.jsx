import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Layout from "./Layout";
import axios from "axios";
function UserAdmin() {
    const [users, setUsers] = useState([]);
    const token = Cookies.get('token');

    const fetchData = async () => {
      try{
        const response = await axios.get('https://backend-production-4c5b.up.railway.app/user/all',{
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUsers (response.data.data);
      }
      catch(error){
        console.error('Error fetching data:', error);
      }
    }
    useEffect(() => {
      fetchData();
    },[]);


    
  
  
    return (
      <Layout>
        <div className="flex flex-col py-5">
          {/* <SideBarAdmin /> */}
          <h1 className="flex justify-left font-bold text-2xl font-montserrat mt-5 text-primary"> Daftar Client</h1>
          <table className="table-auto m-4 border-collapse ">
            <thead className="">
              <tr className="  font-bold  ring-offset-neutral-400 bg-secondary text-white">
                <th className="text-left">ID</th>
                <th>Nama User</th>
                <th>Email</th>
               
              </tr>
            </thead>
            <tbody className="min-h-screen">
            {Array.isArray(users) && users.length > 0 ? (
              users.map((user) => (
                <tr key={user.id} className="w-24 text-center">
                  <td className="text- align-top">{user.id}</td>
                  <td className="text- align-top">{user.nama}</td>
                  <td className="text- align top">{user.email}</td>
                 
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">No users found.</td>
              </tr>
            )}
          </tbody>
          </table>
        </div>
      </Layout>
  )
}

export default UserAdmin
