const express = require("express");
const route = express.Router();

const {
  getAllKelas,
  getKelasById,
  getKelasByName,
  getKelasByCategory,
  createKelas,
  editKelas,
  deleteKelasById,
  deleteAllKelas,
} = require("../controllers/kelas-controller");

route.get("/", getAllKelas);
route.get("/:id", getKelasById);
route.get("/search/:query", getKelasByName);
route.get("/category/:id", getKelasByCategory);
route.post("/", createKelas);
route.put("/:id", editKelas);
route.delete("/:id", deleteKelasById);
route.delete("/", deleteAllKelas);

module.exports = route;
