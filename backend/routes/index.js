const express = require('express');
const route = express.Router()
const authRoute = require('./auth-route');
const userRoute = require('./user.route');
const verifyToken = require('../middleware/token');


route.get('/',(req,res)=>{
    res.json("selamat datang di express sequelieze migration")
})

route.use("/auth", authRoute);
route.use("/users", verifyToken,userRoute);
module.exports=route
