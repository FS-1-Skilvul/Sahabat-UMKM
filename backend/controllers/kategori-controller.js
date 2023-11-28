const { Kategori_Kelas } = require("../models");

module.exports = {
  getAllKategori: async (req, res) => {
    try {
      const kategori = await Kategori_Kelas.findAll({});
      res.json({
        message: "Success get all kategori",
        data: kategori,
      });
    } catch (error) {
      res.status(500).json({
        error: "Internal Server Error",
        detail: error.message,
      });
    }
  },

  getKategoriById: async (req, res) => {
    const kategoriId = req.params.id;
    try {
      const kategori = await Kategori_Kelas.findOne({
        where: {
          id: kategoriId,
        },
      });

      // if kategori not found
      if (!kategori) {
        return res.status(404).json({ message: "Kategori not found" });
      }

      // if kategori found
      res.json({
        message: "Success get kategori",
        data: kategori,
      });
    } catch (error) {
      res.status(500).json({
        error: "Internal Server Error",
        detail: error.message,
      });
    }
  },

  createKategori: async (req, res) => {
    const { nama_kategori, deskripsi } = req.body;

    if (!nama_kategori || !deskripsi) {
      return res.status(400).json({
        message: "Incomplete data",
      });
    }

    try {
      await Kategori_Kelas.create({
        nama_kategori,
        deskripsi,
      });

      res.status(201).json({
        message: "Success create new kategori",
      });
    } catch (error) {
      res.status(500).json({
        error: "Internal Server Error",
        detail: error.message,
      });
    }
  },

  editKategori: async (req, res) => {
    const kategoriId = req.params.id;
    const updateData = req.body;

    try {
      const oldKategori = await Kategori_Kelas.findOne({
        where: {
          id: kategoriId,
        },
      });

      // if kelas not found
      if (!oldKategori) {
        return res.status(404).json({ message: "Kategori not found" });
      }

      await oldKategori.update(updateData);

      res.json({
        message: "Success update Kategori",
        data: updateData,
      });
    } catch (error) {
      res.status(500).json({
        error: "Internal Server Error",
        detail: error.message,
      });
    }
  },

  deleteKategoriById: async (req, res) => {
    const kategoriId = req.params.id;

    try {
      const kategoriToDelete = await Kategori_Kelas.findOne({
        where: {
          id: kategoriId,
        },
      });

      if (!kategoriToDelete) {
        return res.status(404).json({ message: "Kategori not found" });
      }

      await Kategori_Kelas.destroy({
        where: {
          id: kategoriId,
        },
      });

      res.json({
        message: "Success delete kategori",
      });
    } catch (error) {
      res.status(500).json({
        error: "Internal Server Error",
        detail: error.message,
      });
    }
  },
};
