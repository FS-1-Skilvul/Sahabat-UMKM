const { Kelas, sequelize } = require("../models");

module.exports = {
  getAllKelas: async (req, res) => {
    try {
      const kelas = await Kelas.findAll();
      res.json({
        message: "Success get all kelas",
        data: kelas,
      });
    } catch (error) {
      res.status(500).json({
        error: "Internal Server Error",
        details: error.message,
      });
    }
  },

  getKelasById: async (req, res) => {
    const kelasId = req.params.id;
    try {
      const kelas = await Kelas.findOne({
        where: {
          id: kelasId,
        },
      });

      // if kelas not found
      if (!kelas) {
        return res.status(404).json({ message: "Kelas not found" });
      }

      // if kelas found
      res.json({
        message: "Success get kelas",
        data: kelas,
      });
    } catch (error) {
      res.status(500).json({
        error: "Internal Server Error",
        details: error.message,
      });
    }
  },

  getKelasByName: async (req, res) => {
    const query = req.params.query.toLowerCase();

    try {
      const kelas = await Kelas.findAll({
        where: {
          nama_kelas: sequelize.where(
            sequelize.fn("LOWER", sequelize.col("nama_kelas")),
            "LIKE",
            `%${query}%`
          ),
          // convert kolom nama_kelas dalam db jadi lowercase, cari nama kelas secara case-insensitive
        },
      });

      res.json({
        message: "Succes get kelas",
        data: kelas,
      });
    } catch (error) {
      res.status(500).json({
        error: "Internal Server Error",
        details: error.message,
      });
    }
  },

  getKelasByCategory: async (req, res) => {
    const idCategory = req.params.id;

    try {
      const kelas = await Kelas.findAll({
        where: {
          id_kategori: idCategory,
        },
      });

      res.json({
        message: "Succes get kelas",
        data: kelas,
      });
    } catch (error) {
      res.status(500).json({
        error: "Internal Server Error",
        details: error.message,
      });
    }
  },

  createKelas: async (req, res) => {
    const {
      id_kategori,
      nama_kelas,
      deskripsi,
      harga,
      gambar,
      video,
      nama_pengajar,
      detail_pengajar,
      durasi,
      rating,
    } = req.body;

    if (
      id_kategori == undefined ||
      !nama_kelas ||
      !deskripsi ||
      harga == undefined ||
      !gambar ||
      !video ||
      !nama_pengajar ||
      !detail_pengajar ||
      !durasi ||
      rating == undefined
    ) {
      return res.status(400).json({
        message: "Incomplete data",
      });
    }

    try {
      await Kelas.create({
        id_kategori,
        nama_kelas,
        deskripsi,
        harga,
        gambar,
        video,
        nama_pengajar,
        detail_pengajar,
        durasi,
        rating,
      });
      res.status(201).json({
        message: "Success create new kelas",
      });
    } catch (error) {
      res.status(500).json({
        error: "Internal Server Error",
        details: error.message,
      });
    }
  },

  editKelas: async (req, res) => {
    const kelasId = req.params.id;
    const updateData = req.body;

    try {
      const oldKelas = await Kelas.findOne({
        where: {
          id: kelasId,
        },
      });

      // if kelas not found
      if (!oldKelas) {
        return res.status(404).json({ message: "Kelas not found" });
      }

      await oldKelas.update(updateData);

      res.json({
        message: "Success update kelas",
        data: updateData,
      });
    } catch (error) {
      res.status(500).json({
        error: "Internal Server Error",
        details: error.message,
      });
    }
  },

  deleteKelasById: async (req, res) => {
    const kelasId = req.params.id;

    try {
      const kelasToDelete = await Kelas.findOne({
        where: {
          id: kelasId,
        },
      });

      if (!kelasToDelete) {
        return res.status(404).json({ message: "Kelas not found" });
      }

      await Kelas.destroy({
        where: {
          id: kelasId,
        },
      });

      res.json({
        message: "Success delete kelas",
      });
    } catch (error) {
      res.status(500).json({
        error: "Internal Server Error",
        details: error.message,
      });
    }
  },

  deleteAllKelas: async (req, res) => {
    try {
      await Kelas.truncate();

      res.json({
        message: "Success delete all kelas",
      });
    } catch (error) {
      res.status(500).json({
        error: "Internal Server Error",
        details: error.message,
      });
    }
  },
};
