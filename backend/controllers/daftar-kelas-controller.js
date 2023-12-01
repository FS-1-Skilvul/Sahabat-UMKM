const { Daftar_Kelas } = require("../models");

module.exports = {
  getAllDaftarKelasByUserId: async (req, res) => {
    const userId = req.params.id;
    try {
      const userKelas = await Daftar_Kelas.findAll({
        where: {
          id_user: userId,
        },
      });
      res.json({
        message: "Success get all user kelas",
        data: userKelas,
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

  addDaftarKelasByUserId: async (req, res) => {
    const userId = req.params.id;
    const { id_kelas } = req.body;

    if (!id_kelas) {
      return res.status(400).json({
        message: "Incomplete data",
      });
    }

    try {
      await Daftar_Kelas.create({
        id_user: userId,
        id_kelas,
        status_pendaftaran: "Belum Mulai",
      });

      res.status(201).json({
        message: "Success create new daftar kelas",
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
