const { Transaksi } = require("../models");

module.exports = {
  getAllTransaksi: async (req, res) => {
    const transaksi = await Transaksi.findAll();
    res.json({
      message: "Berhasil Mendapatkan Data Transaksi!",
      data: transaksi,
    });
  },

  getTransaksiById: async (req, res) => {
    const transaksiId = req.params.id;
    try {
      const transaksi = await Transaksi.findOne({
        where: {
          id: transaksiId,
        },
      });

      if (!transaksi) {
        return res.status(404).json({
          message: "Transaksi Tidak Ditemukan!",
        });
      }

      res.json({
        message: "ID Transaksi Berhasil Didapatkan!",
        data: transaksi,
      });
    } catch (error) {
      res.status(500).json({
        error: "Internal Server Error",
        detail: error.message,
      });
    }
  },

  createTransaksi: async (req, res) => {
    const { id_user, id_kelas, tanggal_transaksi, total } = req.body;

    if (!id_user || !id_kelas || !tanggal_transaksi || !total) {
      return res.status(400).json({
        message: "Incomplete data",
      });
    }

    try {
      await Transaksi.create({
        id_user,
        id_kelas,
        tanggal_transaksi,
        total,
      });

      res.status(201).json({
        message: "Success create Transaksi",
      });
    } catch (error) {
      res.status(500).json({
        error: "Internal Server Error",
        detail: error.message,
      });
    }
  },

  editTransaksi: async (req, res) => {
    const transaksiId = req.params.id;
    const updateData = req.body;

    try {
      const oldTransaksi = await Transaksi.findOne({
        where: {
          id: transaksiId,
        },
      });

      if (!oldTransaksi) {
        return res.status(404).json({ message: "Transaksi not found" });
      }

      await oldTransaksi.update(updateData);

      res.json({
        message: "Sukses Mengubah Data Transaksi!",
        data: updateData,
      });
    } catch (error) {
      res.status(500).json({
        error: "Internal Server Error",
        detail: error.message,
      });
    }
  },

  deleteTransaksiById: async (req, res) => {
    const transaksiId = req.params.id;

    try {
      const transaksiToDelete = await Transaksi.findOne({
        where: {
          id: transaksiId,
        },
      });

      if (!transaksiToDelete) {
        return res.status(404).json({ message: "Transaksi not found" });
      }

      await Transaksi.destroy({
        where: {
          id: transaksiId,
        },
      });

      res.json({
        message: "Success delete Transaksi",
      });
    } catch (error) {
      res.status(500).json({
        error: "Internal Server Error",
        detail: error.message,
      });
    }
  },
};
