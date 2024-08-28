const AdminUser = require("../Models/adminEcomModel");

//Handlers or controllers : they will go in the controller file
// Crete new user
const handleCreateNewProduct = async (req, res) => {
  console.log("hello");
  // console.log(req)
  const body = req.body;
  console.log(body)
  const result = await AdminUser.create({
    brand_name: body.brand_name,
    model_name: body.model_name,
    cover_image: body.cover_image,
    images: body.images,
    price: body.price,
    stock: body.stock,
    color: body.color,
    storage: body.storage,
    ram: body.ram,
    processor: body.processor,
    rating: body.rating,
    rating_count: body.rating_count,
    description: body.description,
    camera_rear: body.camera_rear,
    camera_front: body.camera_front,
    display: body.display,
    battery: body.battery,
    amount: body.amount,
  });
  console.log("result", result);
  return res.status(201).json({ msg: "success" });
};

// Get or Read all users
const handleGetAllProducts = async (req, res) => {
  const user = await AdminUser.find({});
  res.json(user);
};

// Get or read single user by id
const handleGetProductById = async (req, res) => {
  const user = await AdminUser.findById(req.params.id);
  return res.json(user);
};

// Patch or update single user by id
const handleUpdateProductById = async (req, res) => {
  const user = await AdminUser.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  return res.json(user);
};

// Delete single user by id
const handleDeleteProductById = async (req, res) => {
  console.log("i m delete")
  const user = await AdminUser.findByIdAndDelete(req.params.id);
  return res.json(user);
};

module.exports = {
  handleCreateNewProduct,
  handleGetAllProducts,
  handleGetProductById,
  handleUpdateProductById,
  handleDeleteProductById,
};
