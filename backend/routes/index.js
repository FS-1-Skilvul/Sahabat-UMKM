const express = require("express");
const route = express.Router();

const kelasRoutes = require("./kelas-routes");
const kategoriRoutes = require("./kategori-routes");
const daftarKelasRoutes = require("./daftar-kelas-routes");

route.use("/kelas", kelasRoutes);
route.use("/kategori", kategoriRoutes);
route.use("/daftar-kelas", daftarKelasRoutes);

module.exports = route;
