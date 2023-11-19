const express = require('express');
const bcrypt = require('bcrypt')
const route = express.Router();
const {User} = require('../models')

route.post ('/login',(req,res)=>{
    let data = req.body
    
})
route.post ('/regis', async(req,res)=>{
    let data = req.body
    let saltRounds = 10
    let hashPassword = bcrypt.hashSync(data.password, saltRounds)
    
    data.password = hashPassword
    const newUser = await User.create(data);
    res.json({
        message:"regis success",
        data:newUser
    })

})


module.exports = route