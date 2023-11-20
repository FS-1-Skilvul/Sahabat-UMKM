const express = require("express");
const route = express.Router();

const kelasRoutes = require("./kelas-routes");
const kategoriRoutes = require("./kategori-routes");

route.use("/kelas", kelasRoutes);
route.use("/kategori", kategoriRoutes);

module.exports = route;
