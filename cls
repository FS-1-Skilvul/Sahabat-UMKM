[1mdiff --git a/backend/.env b/backend/.env[m
[1mdeleted file mode 100644[m
[1mindex 0c916bf..0000000[m
[1m--- a/backend/.env[m
[1m+++ /dev/null[m
[36m@@ -1,5 +0,0 @@[m
[31m-DB_USERNAME=root[m
[31m-DB_PASSWORD=smitherens[m
[31m-DB_DATABASE=sahabat_umkm[m
[31m-DB_DIALECT=mysql[m
[31m-DB_HOST=localhost[m
\ No newline at end of file[m
[1mdiff --git a/backend/.env.example b/backend/.env.example[m
[1mdeleted file mode 100644[m
[1mindex b051466..0000000[m
[1m--- a/backend/.env.example[m
[1m+++ /dev/null[m
[36m@@ -1,4 +0,0 @@[m
[31m-DB_USERNAME=nama_pengguna_anda[m
[31m-DB_PASSWORD=kata_sandi_anda[m
[31m-DB_DATABASE=nama_database_anda[m
[31m-DB_HOST=alamat_host_database_anda[m
[1mdiff --git a/backend/.gitignore b/backend/.gitignore[m
[1mindex 3b0b403..a547bf3 100644[m
[1m--- a/backend/.gitignore[m
[1m+++ b/backend/.gitignore[m
[36m@@ -22,5 +22,3 @@[m [mdist-ssr[m
 *.njsproj[m
 *.sln[m
 *.sw?[m
[31m-[m
[31m-.env[m
\ No newline at end of file[m
[1mdiff --git a/backend/app.js b/backend/app.js[m
[1mindex d029c3f..e1204d8 100644[m
[1m--- a/backend/app.js[m
[1m+++ b/backend/app.js[m
[36m@@ -1,14 +1,12 @@[m
[31m-const db = require("./models");[m
 const express = require("express");[m
 const app = express();[m
 [m
 const allRoutes = require("./routes");[m
[31m-[m
 const PORT = process.env.PORT || 3000;[m
 [m
 app.use(express.json());[m
 app.use(allRoutes);[m
 [m
 app.listen(PORT, () => {[m
[31m-  console.log(`Server running on port ${PORT}`);[m
[32m+[m[32m  console.log("Server Running On PORT " + PORT);[m
 });[m
[1mdiff --git a/backend/config/config.js b/backend/config/config.js[m
[1mindex e240012..634c23b 100644[m
[1m--- a/backend/config/config.js[m
[1m+++ b/backend/config/config.js[m
[36m@@ -1,24 +1,23 @@[m
[31m-require('dotenv').config();[m
 module.exports = {[m
   development: {[m
[31m-    username: process.env.DB_USERNAME ,[m
[31m-    password: process.env.DB_PASSWORD,[m
[31m-    database: process.env.DB_DATABASE,[m
[31m-    host:  process.env.DB_HOST,[m
[31m-    dialect: process.env.DB_DIALECT,[m
[32m+[m[32m    username: "root",[m
[32m+[m[32m    password: "root",[m
[32m+[m[32m    database: "db_tugas_skilvulfinalproject_sahabatumkm",[m
[32m+[m[32m    host: "localhost",[m
[32m+[m[32m    dialect: "mysql",[m
   },[m
   test: {[m
[31m-    username: process.env.DB_USERNAME ,[m
[31m-    password: process.env.DB_PASSWORD,[m
[31m-    database: process.env.DB_DATABASE,[m
[31m-    host:  process.env.DB_HOST,[m
[31m-    dialect: process.env.DB_DIALECT,[m
[32m+[m[32m    username: "root",[m
[32m+[m[32m    password: null,[m
[32m+[m[32m    database: "database_test",[m
[32m+[m[32m    host: "127.0.0.1",[m
[32m+[m[32m    dialect: "mysql",[m
   },[m
   production: {[m
[31m-    username: process.env.DB_USERNAME,[m
[31m-    password:  process.env.DB_PASSWORD,[m
[31m-    database: process.env.DB_DATABASE,[m
[31m-    host:  process.env.DB_HOST,[m
[31m-    dialect: process.env.DB_DIALECT,[m
[32m+[m[32m    username: "root",[m
[32m+[m[32m    password: null,[m
[32m+[m[32m    database: "database_production",[m
[32m+[m[32m    host: "127.0.0.1",[m
[32m+[m[32m    dialect: "mysql",[m
   },[m
 };[m
[1mdiff --git a/backend/controllers/auth.controller.js b/backend/controllers/auth.controller.js[m
[1mdeleted file mode 100644[m
[1mindex 90af617..0000000[m
[1m--- a/backend/controllers/auth.controller.js[m
[1m+++ /dev/null[m
[36m@@ -1,4 +0,0 @@[m
[31m-const express = require('express');[m
[31m-const route = express.Router();[m
[31m-[m
[31m-[m
[1mdiff --git a/backend/controllers/daftar-kelas-controller.js b/backend/controllers/daftar-kelas-controller.js[m
[1mdeleted file mode 100644[m
[1mindex 6f704df..0000000[m
[1m--- a/backend/controllers/daftar-kelas-controller.js[m
[1m+++ /dev/null[m
[36m@@ -1,139 +0,0 @@[m
[31m-const { Daftar_Kelas } = require("../models");[m
[31m-[m
[31m-module.exports = {[m
[31m-  getAllDaftarKelasByUserId: async (req, res) => {[m
[31m-    const userId = req.params.id;[m
[31m-    try {[m
[31m-      const userKelas = await Daftar_Kelas.findAll({[m
[31m-        where: {[m
[31m-          id_user: userId,[m
[31m-        },[m
[31m-      });[m
[31m-      res.json({[m
[31m-        message: "Success get all user kelas",[m
[31m-        data: userKelas,[m
[31m-      });[m
[31m-    } catch (error) {[m
[31m-      res.status(500).json({[m
[31m-        error: "Internal Server Error",[m
[31m-        detail: error.message,[m
[31m-      });[m
[31m-    }[m
[31m-  },[m
[31m-[m
[31m-  getKategoriById: async (req, res) => {[m
[31m-    const kategoriId = req.params.id;[m
[31m-    try {[m
[31m-      const kategori = await Kategori_Kelas.findOne({[m
[31m-        where: {[m
[31m-          id: kategoriId,[m
[31m-        },[m
[31m-      });[m
[31m-[m
[31m-      // if kategori not found[m
[31m-      if (!kategori) {[m
[31m-        return res.status(404).json({ message: "Kategori not found" });[m
[31m-      }[m
[31m-[m
[31m-      // if kategori found[m
[31m-      res.json({[m
[31m-        message: "Success get kategori",[m
[31m-        data: kategori,[m
[31m-      });[m
[31m-    } catch (error) {[m
[31m-      res.status(500).json({[m
[31m-        error: "Internal Server Error",[m
[31m-        detail: error.message,[m
[31m-      });[m
[31m-    }[m
[31m-  },[m
[31m-[m
[31m-  addDaftarKelasByUserId: async (req, res) => {[m
[31m-    const userId = req.params.id;[m
[31m-    const { id_kelas } = req.body;[m
[31m-[m
[31m-    if (!id_kelas) {[m
[31m-      return res.status(400).json({[m
[31m-        message: "Incomplete data",[m
[31m-      });[m
[31m-    }[m
[31m-[m
[31m-    try {[m
[31m-      await Daftar_Kelas.create({[m
[31m-        id_user: userId,[m
[31m-        id_kelas,[m
[31m-        status_pendaftaran: "Belum Mulai",[m
[31m-      });[m
[31m-[m
[31m-      res.status(201).json({[m
[31m-        message: "Success create new daftar kelas",[m
[31m-      });[m
[31m-    } catch (error) {[m
[31m-      res.status(500).json({[m
[31m-        error: "Internal Server Error",[m
[31m-        detail: error.message,[m
[31m-      });[m
[31m-    }[m
[31m-  },[m
[31m-[m
[31m-  editKategori: async (req, res) => {[m
[31m-    const kategoriId = req.params.id;[m
[31m-    const updateData = req.body;[m
[31m-[m
[31m-    try {[m
[31m-      const oldKategori = await Kategori_Kelas.findOne({[m
[31m-        where: {[m
[31m-          id: kategoriId,[m
[31m-        },[m
[31m-      });[m
[31m-[m
[31m-      // if kelas not found[m
[31m-      if (!oldKategori) {[m
[31m-        return res.status(404).json({ message: "Kategori not found" });[m
[31m-      }[m
[31m-[m
[31m-      await oldKategori.update(updateData);[m
[31m-[m
[31m-      res.json({[m
[31m-        message: "Success update Kategori",[m
[31m-        data: updateData,[m
[31m-      });[m
[31m-    } catch (error) {[m
[31m-      res.status(500).json({[m
[31m-        error: "Internal Server Error",[m
[31m-        detail: error.message,[m
[31m-      });[m
[31m-    }[m
[31m-  },[m
[31m-[m
[31m-  deleteKategoriById: async (req, res) => {[m
[31m-    const kategoriId = req.params.id;[m
[31m-[m
[31m-    try {[m
[31m-      const kategoriToDelete = await Kategori_Kelas.findOne({[m
[31m-        where: {[m
[31m-          id: kategoriId,[m
[31m-        },[m
[31m-      });[m
[31m-[m
[31m-      if (!kategoriToDelete) {[m
[31m-        return res.status(404).json({ message: "Kategori not found" });[m
[31m-      }[m
[31m-[m
[31m-      await Kategori_Kelas.destroy({[m
[31m-        where: {[m
[31m-          id: kategoriId,[m
[31m-        },[m
[31m-      });[m
[31m-[m
[31m-      res.json({[m
[31m-        message: "Success delete kategori",[m
[31m-      });[m
[31m-    } catch (error) {[m
[31m-      res.status(500).json({[m
[31m-        error: "Internal Server Error",[m
[31m-        detail: error