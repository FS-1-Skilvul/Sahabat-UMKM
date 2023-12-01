const express = require("express");
const route = express.Router();

const {
  getAllKategori,
  getKategoriById,
  createKategori,
  editKategori,
  deleteKategoriById,
} = require("../controllers/kategori-controller");

route.get("/", getAllKategori);
route.get("/:id", getKategoriById);
route.post("/", createKategori);
route.put("/:id", editKategori);
route.delete("/:id", deleteKategoriById);

module.exports = route;
