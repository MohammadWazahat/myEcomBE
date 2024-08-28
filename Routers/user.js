const express = require("express");
const router = express.Router();

const {
  handleCreateNewUser,
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
} = require("../Controllers/user");

// Routers : they will go in the router file

// Create request
router.post("/users/myData/", handleCreateNewUser);
//Read all request from mongodb
router.get("/users/myData/", handleGetAllUsers);
// only one request from mongodb To get single user data from mongodb file using id param
router.get("/users/myData/:id", handleGetUserById);
//Patch or Update request
router.patch("/users/myData/:id", handleUpdateUserById);
//delete request
router.delete("/users/myData/:id", handleDeleteUserById);

module.exports = router;
