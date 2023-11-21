const express = require("express");
const route = express.Router();

const {
  getAllDaftarKelasByUserId, // melihat jumlah kelas yang dibeli setiap user
  addDaftarKelasByUserId, // menambah kelas yang dibeli user
} = require("../controllers/daftar-kelas-controller");

route.get("/user/:id", getAllDaftarKelasByUserId);
route.post("/user/:id", addDaftarKelasByUserId);

module.exports = route;
