import { useState, useEffect } from "react";
import Layout from "./Layout";
function UserAdmin() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
      // Fetch data from the "/kelas" endpoint
      fetch("https://backend-production-4c5b.up.railway.app/user")
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          // Assuming data is in the format you provided
          setUsers(data.data);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const handleDeleteCategory = (categoryId) => {
        // Mengirim permintaan DELETE ke API
        fetch(`https://backend-production-4c5b.up.railway.app/kategori/${categoryId}`, {
          method: 'DELETE',
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            // Berhasil menghapus, perbarui stvate atau lakukan tindakan lain jika diperlukan
            setUsers((prevUsers) => prevUsers.filter((user) => user.id !== categoryId));
          })
          .catch((error) => console.error('Error deleting category:', error));
      };
      
  
    return (
      <Layout>
        <div className="flex flex-col py-5">
          {/* <SideBarAdmin /> */}
          <h1 className="flex justify-left font-bold text-2xl font-montserrat mt-5 text-primary"> Daftar Client</h1>
          <table className="table-auto m-4 border-collapse ">
            <thead className="">
              <tr className=" text-center font-bold  ring-offset-neutral-400">
                <th>ID</th>
                <th>Nama Kategori</th>
                <th>Deskripsi</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody className="min-h-screen">
              {users.map((user) => (
                <tr key={user.id} className="w-24">
                  <td className="text-left align-top">{user.id}</td>
                  <td className="text-left align-top">{user.nama_kategori}</td>
                  <td className="text-left align top">{user.deskripsi}</td>
                  <td className="text-left align-top"><a href="formaddclass">
                    <div className="edit-delete flex items-center justify-center">
                    <a href="#" className=" font-poppins text-sm font-semibold rounded-md bg-red-500 p-[6px]" onClick={() => handleDeleteCategory(user.id)}>Hapus</a>
                    </div>
                    </a></td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Konten utama */}
          {/* <Outlet /> */}
        </div>
      </Layout>
  )
}

export default UserAdmin
