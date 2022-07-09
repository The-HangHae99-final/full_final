const dotenv = require("dotenv");

dotenv.config();
const express = require("express");
const router = express.Router();
const userController = require("../controller/users");
const passport = require("passport");

//회원가입 - 개인
router.post("/users/signup", userController.signup);

//로그인
router.post("/users/login", userController.login);

//소셜로그인
router.post(
  "/users/login",
  passport.authenticate("local", {
    session: false,
    failureRedirect: "/auth/fail",
  })
);

module.exports = router;