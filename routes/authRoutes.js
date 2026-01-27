const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");
const { validateSignUp } = require("../middlewares/validation.middlewares.js");
const router = express.Router();
``;

router.post("/register", validateForm, registerUser);
router.post("/login", validateForm, loginUser);

module.exports = router;
