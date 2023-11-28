const express = require("express");
const bcrypt = require("bcrypt");
const route = express.Router();
const jwt = require("jsonwebtoken");
const { User } = require("../models");
const validateRole = require("../middleware/auth.admin");

route.post('/login', async (req, res) => {
    const checkEmail = await User.findOne({ where: { email: req.body.email } });

    if (!checkEmail) {
        return res.status(400).json({
            status: 400,
            message: "User not found",
        });
    }

    const matchPassword = bcrypt.compareSync(req.body.password, checkEmail.password);

    if (!matchPassword) {
        return res.status(400).json({
            status: 400,
            message: "Incorrect password",
        });
    }

    // Assign token
    const token = jwt.sign({ id: checkEmail.id, role: checkEmail.role }, 'ryryryryry', { expiresIn: "7d" });
    console.log('Generated Token:', token);

    // Set req.user
    req.user = { id: checkEmail.id, role: checkEmail.role };

    res.json({
        message: "login success",
        token,
    });
});


route.post("/regis", async (req, res) => {
  let data = req.body;
  let saltRounds = 10;
  let hashPassword = bcrypt.hashSync(data.password, saltRounds);

  data.password = hashPassword;
  const newUser = await User.create(data);
  res.json({
    message: "regis success",
    data: newUser,
  });
});

route.get("/admin", validateRole, (req, res) => {
  console.log("Decoded Token:", req.user);
  res.json({ message: "Welcome, admin!" });
});

module.exports = route;
