import "./App.css";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import CariKelasPage from "./pages/CariKelasPage";
// import { useSelector } from 'react-redux';
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import TransaksiAdmin from "./pages/TransaksiAdmin";
import FormAddClass from "./components/FormAddClass";

function App() {
  // const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  // const userRole = useSelector(state => state.auth.userRole);
  return (
    <Router>
      <Routes>
        {/* route client */}

        <Route path="/" element={<Home />} />
        <Route path="CariKelasPage" element={<CariKelasPage />} />
        {/* <Route path="#mentor" element={<Kategori/>} /> */}
        <Route path="AdminDashboard" element={<AdminDashboard />} />
        {/* <Route path="/transaksi" element={<TransaksiAdmin/>} /> */}

        {/* Rute untuk admin */}
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/transaksi" element={<TransaksiAdmin />} />
        <Route path="/dashboard/FormAddClass" element={<FormAddClass />} />

        {/* <Route path="/admin">
         {userRole === 'admin' ? <AdminPage /> : <Redirect to="/login" />}
       </Route>
       <Route path="/client">
         {userRole === 'client' ? <ClientPage /> : <Redirect to="/login" />}
       </Route> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}
export default App;
