import Keuangan from "../assets/icons/keuangan.png";
import Pemasaran from "../assets/icons/pemasaran.png";
import Manajemen from "../assets/icons/manajemen.png";
import Pengembagan from "../assets/icons/softskil.png";
import Kewirausahaan from "../assets/icons/kewirausahaan.png";
import Desain from "../assets/icons/desain.png";
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export const navLandingLinks = [
  { to: "/", label: "Beranda" },
  { to: "/user/search", label: "Cari Kelas " },
  // { to: "/AdminDashboard", label: "Mentor" },
  { to: "#tentang-section", label: "Tentang" },
];

export const navLoginLinks = [
  { to: "/user/dashboard", label: "Dashboard" },
  { to: "/user/search", label: "Cari Kelas" },
  { to: "/user/myclass", label: "Kelas Saya" },
];
// {
// landing:
// login: [
//   { to: "/", label: "Dashboard" },
//   { to: "/myclass", label: "Kelas Saya" },
//   { to: "/search", label: "Cari Kelas" },
// ],
// };

export const category = [
  {
    title: "Keuangan",
    href: "",
    image: Keuangan,
    bg: "bg-blue-keuangan",
    jumlahKelas: "10",
  },
  {
    title: "Manajemen",
    href: "/CariKelasPage",
    image: Manajemen,
    bg: "bg-blue-manajemen",
    jumlahKelas: "10",
  },
  {
    title: "Pemasaran",
    href: "",
    image: Pemasaran,
    bg: "bg-yellow-pemasaran",
    jumlahKelas: "10",
  },
  {
    title: "Pengembangan Diri",
    href: "",
    image: Pengembagan,
    bg: "bg-purple-soft",
    jumlahKelas: "10",
  },
  {
    title: "Desain",
    href: "",
    image: Desain,
    bg: "bg-brown-desain",
    jumlahKelas: "10",
  },
  {
    title: "Kewirausahaan",
    href: "",
    image: Kewirausahaan,
    bg: "bg-tosca-desain",
    jumlahKelas: "10",
  },
];

export const sidebar = [
  { title: "Dashboard", to: "/admin" },
  { title: "Inbox", to: "/transaksi" },
  // {title: "Dashboard" ,to:"/admin"}
];
