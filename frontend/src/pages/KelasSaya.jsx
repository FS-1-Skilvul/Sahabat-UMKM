import { useEffect, useState } from "react";
import KelasSayaCard from "../components/KelasSayaCard";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

export default function KelasSaya() {
  const token = Cookies.get("token");
  const userData = JSON.parse(Cookies.get("userData"));
  const [transaksi, setTransaksi] = useState([]);
  const [kelas, setKelas] = useState([]);
  useEffect(() => {
    fetch(`https://backend-production-4c5b.up.railway.app/transaksi/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const dataTransaksi = data.data.filter(
          (item) => item.id_user === userData.id
        );
        console.log(dataTransaksi);
        setTransaksi(dataTransaksi);
      });
  }, [userData.id, token]);

  useEffect(() => {
    fetch(`https://backend-production-4c5b.up.railway.app/kelas/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const dataKelas = data.data.filter((item) =>
          transaksi.some((trans) => trans.id_kelas === item.id)
        );
        console.log(dataKelas);
        setKelas(dataKelas);
      });
  }, [transaksi, token]);

  return (
    <div className="px-10">
      <div className="flex gap-10 flex-wrap justify-center mt-24">
        {kelas.map((item) => (
          <Link to={`/user/kelas/${item.id}`}>
            <KelasSayaCard key={item.id} kelas={item} />
          </Link>
        ))}
      </div>
      \
    </div>
  );
}
