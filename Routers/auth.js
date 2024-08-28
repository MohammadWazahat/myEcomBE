const express = require("express");
const router = express.Router();
const { myAuthMiddle, myAuthTest } = require("../Middleware/authMiddleware");
const {
  handleSignUp,
  handleGetAuthUsers,
  handleLogIn,
} = require("../Controllers/auth");

// Routers : they will go in the router file
//Roue for sign up
router.post("/users/signUp", handleSignUp);

//Roue for Log In
router.post("/users/logIn", handleLogIn);

//Read all request from mongodb
router.get("/users/", handleGetAuthUsers);

// router.get("/users/", myAuthTest ,handleGetAllUsers);
// router.get("/users/" ,handleGetAllUsers);

module.exports = router;