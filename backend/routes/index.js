const express = require("express");
const route = express.Router();

const kelasRoutes = require("./kelas-routes");

route.use("/kelas", kelasRoutes);

module.exports = route;
