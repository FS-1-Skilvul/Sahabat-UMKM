import Navbar from "./components/navbar";
import "./App.css";
import { Routes, BrowserRouter as Router,Route } from "react-router-dom"
import Kategori from "./sections/Kategori";
import CariKelasPage from "./pages/CariKelasPage";
// import { useSelector } from 'react-redux';
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import TransaksiAdmin from "./pages/TransaksiAdmin";
import SideBarAdmin from "./components/SideBarAdmin";


function App() {
  // const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  // const userRole = useSelector(state => state.auth.userRole);
  return (
   
    <Router>
    {/* <Navbar /> */}
    {/* <SideBarAdmin /> */}
    <Routes>

      {/* route client */}

      <Route path="/" element={<Home />} />
      <Route path="CariKelasPage" element={<CariKelasPage/>} />
      {/* <Route path="#mentor" element={<Kategori/>} /> */}
      <Route path="AdminDashboard" element={<AdminDashboard/>} />
      {/* <Route path="/transaksi" element={<TransaksiAdmin/>} /> */}

          <Route path="admin/transaksi" element={<TransaksiAdmin />} />
      
          {/* Rute untuk admin */}
          <Route path="/admin/*" element={<SideBarAdmin />}>
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
        </Route>
      {/* <Route path="/admin">
         {userRole === 'admin' ? <AdminPage /> : <Redirect to="/login" />}
       </Route>
       <Route path="/client">
         {userRole === 'client' ? <ClientPage /> : <Redirect to="/login" />}
       </Route> */}
    </Routes>
    {/* <Footer /> */}
  </Router>
  
  )
}

function AdminRoutes() {
  return (

    <Routes>
      <Route path="dashboard" element={<AdminDashboard />} />
      <Route path="transaksi" element={<TransaksiAdmin />} />
    </Routes>
  );
}
export default App;
