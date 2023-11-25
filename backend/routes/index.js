
const express = require('express');
const route = express.Router()
const authRoute = require('./auth-route');
const userRoute = require('./user.route');
const verifyToken = require('../middleware/token');





const kelasRoutes = require("./kelas-routes");
const kategoriRoutes = require("./kategori-routes");
const daftarKelasRoutes = require("./daftar-kelas-routes");
// route.get('/',(req,res)=>{
//     res.json("selamat datang di express sequelieze migration")
// })
route.use("/kelas", kelasRoutes);
route.use("/kategori", kategoriRoutes);
route.use("/daftar-kelas", daftarKelasRoutes);

route.use("/auth", authRoute);
route.use("/users", verifyToken,userRoute);
module.exports=route

