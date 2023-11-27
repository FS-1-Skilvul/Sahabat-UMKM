const express = require("express");
const route = express.Router();

const transaksiRoute = require("./transaksi-route");

route.get("/", (req, res) => {
  res.json("Selamat Datang di SAHABAT UMKM");
});

route.use("/transaksi", transaksiRoute);

module.exports = route;
