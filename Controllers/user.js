const User = require("../Models/user");

//Handlers or controllers : they will go in the controller file
// Crete new user
const handleCreateNewUser = async (req, res) => {
  const body = req.body;
  const result = await User.create({
    username: body.username,
    password: body.password,
    gender: body.gender,
    email: body.email,
  });
  console.log("result", result);
  return res.status(201).json({ msg: "success" });
};

// Get or Read all users
const handleGetAllUsers = async (req, res) => {
  const user = await User.find({});
  res.json(user);
};

// Get or read single user by id
const handleGetUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  return res.json(user);
};

// Patch or update single user by id
const handleUpdateUserById = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  return res.json(user);
};

// Delete single user by id
const handleDeleteUserById = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  return res.json(user);
};

module.exports = {
  handleCreateNewUser,
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
};
