import Keuangan from "../assets/icons/keuangan.png";
import Pemasaran from "../assets/icons/pemasaran.png";
import Manajemen from "../assets/icons/manajemen.png";
import Pengembagan from "../assets/icons/softskil.png";
import Kewirausahaan from "../assets/icons/kewirausahaan.png";
import Desain from "../assets/icons/desain.png";

export const navLinks = [
    { href: "#beranda", label: "Beranda" },
    { href: "#cari-kelas", label: "Cari Kelas " },
    { href: "#mentors", label: "Mentor" },
    { href: "#tentang", label: "Tentang" },
];

export const category = [
    {title: "Keuangan", image: Keuangan,bg: "bg-blue-keuangan",jumlahKelas: "10"},
    {title: "Manajemen", image: Manajemen,bg:"bg-blue-manajemen",jumlahKelas: "10"},
    {title: "Pemasaran", image: Pemasaran,bg:"bg-yellow-pemasaran",jumlahKelas: "10"},
    {title: "Pengembangan Diri", image: Pengembagan, bg:"bg-purple-soft",jumlahKelas: "10"},
    {title: "Desain", image: Desain,bg:"bg-brown-desain", jumlahKelas: "10"},
    {title: "Kewirausahaan", image: Kewirausahaan,bg:"bg-tosca-desain", jumlahKelas: "10"},

]