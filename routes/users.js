const UserController = require("../controlles/users");
const express = require("express");

// API routes
const router = express.Router();

router
  .route("/register")
  .post(UserController.register)


  router
  .route("/login")
  .post(UserController.login)


module.exports = router;

