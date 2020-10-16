const { Router } = require("express");
const router = Router();

// /api/auth/register
router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;
  } catch (e) {
    res.status(500).json({ mesage: "Something wrong auth register!" });
  }
});

// /api/auth/login
router.post("/login", async (req, res) => {});

module.exports = router;
