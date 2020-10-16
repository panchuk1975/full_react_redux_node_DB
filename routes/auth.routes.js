const { Router } = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const router = Router();

// /api/auth/register-----------------------------------------//
router.post(
  "/register",
  // validation middleware
  [
    check("email", "Email is not correct!!!").isEmail(),
    check("passsword", "Minimum passsword langth is 6 symbols!!!").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    try {
      // validation process create result aray
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Somthing wrong, check user registration data!",
        });
      }
      // get the user data from req.boy
      const { email, password } = req.body;
      // check is user exists?
      const candidate = await User.findOne({ email });
      if (candidate) {
        return res.status(400).json({ message: "This user is exists!" });
      }
      // passwword hashing
      const hashedPassword = await bcrypt.hash(password, 14);
      //create New User
      const user = new User({ email, password: hashedPassword });
      //save newUser to DB
      await user.save();
      res.status(201).json({ message: "User was created!" });
    } catch (e) {
      res.status(500).json({ mesage: "Something wrong auth register!" });
    }
  }
);

// /api/auth/login----------------------------------------------//
router.post(
  "/login",
  [
    check("email", "Enter email correctly!").normalizeEmail().isEmail(),
    check("password", "Enter password!").exists(),
  ],
  async (req, res) => {
    try {
      // validation process create result aray
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Somthing wrong, check user login data!",
        });
      }
      // finde user
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "This user is not exists!" });
      }
      // is user passswords match?
      const isMatch = await bcrypt.compare(password, usser.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Password is not correct!" });
      }
      // authorithation process
      const token = jwt.sign({ userId: user.Id }, config.get("jwtSecret"), {
        expiresIn: "1h",
      });
      res.json({ token, user: user.id });
    } catch (e) {
      res.status(500).json({ mesage: "Something wrong auth login!" });
    }
  }
);

module.exports = router;
