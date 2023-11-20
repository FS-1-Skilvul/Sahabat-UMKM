const express = require('express');
const router = express.Router();
const kelasController = require('../controllers/kelas-controller');
const validateRole = require('../middleware/auth.admin');


router.post('/kelas', validateRole, kelasController.createKelas);

// Rute untuk memperbarui kelas berdasarkan ID
router.put('/kelas/:id', validateRole, kelasController.editKelas);

// Rute untuk menghapus kelas berdasarkan ID
router.delete('/kelas/:id', validateRole, kelasController.deleteKelasById);

module.exports = router;