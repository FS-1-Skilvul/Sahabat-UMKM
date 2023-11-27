const express = require("express");
const {
  getAllTransaksi,
  getTransaksiById,
  createTransaksi,
  editTransaksi,
  deleteTransaksiById,
} = require("../controllers/transaksi-controller");

const route = express.Router();
route.get("/", getAllTransaksi);
route.get("/:id", getTransaksiById);
route.post("/", createTransaksi);
route.put("/:id", editTransaksi);
route.delete("/:id", deleteTransaksiById);

module.exports = route;
