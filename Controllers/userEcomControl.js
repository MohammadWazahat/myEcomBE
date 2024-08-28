const UserProduct = require("../Models/EcomUserModel");

const handleAddToCartProduct = async (req, res) => {
    console.log("hello");
    const body = req.body;
    // console.log("i m whole body", body);
    await UserProduct.create(body);
    return res.status(201).json({ msg: "success" });
};

// Get or Read all users
const handleGetCartProducts = async (req, res) => {
  console.log("hello i m get cart product");

  const user = await UserProduct.find();
  res.json(user);
};

// Get or read single user by id
const handleGetCartProductById = async (req, res) => {
  const user = await UserProduct.findById(req.params.id);
  return res.json(user);
};

// Patch or update single user by id
const handleUpdateCartProductById = async (req, res) => {
  console.log("i m update product");
  console.log(req.body);
  const user = await UserProduct.findByIdAndUpdate(req.params.id, req.body);
  return res.json(user);
};

// Delete single user by id
const handleDeleteCartProductById = async (req, res) => {
  console.log("i m delete");
  const user = await UserProduct.findByIdAndDelete(req.params.id);
  console.log(user);
  return res.json(user);
};

module.exports = {
  handleAddToCartProduct,
  handleGetCartProducts,
  handleGetCartProductById,
  handleUpdateCartProductById,
  handleDeleteCartProductById,
};


// const express = require("express");
// const router = express.Router();
//Handlers or controllers : they will go in the controller file
// Crete new user
// const handleAddToCartProduct = async (req, res) => {
//   console.log("hello");
//   // console.log(req)
//   const body = req.body;
//   console.log("i m whole body",body);
//   const user = await UserProduct.find();
//   console.log("i m user data" , user)
//   const newComp = user.find(
//     (item) => item._id == req.body._id
//   );
//   console.log("i m newcomp " , newComp);
//   if (!newComp) {
//       const result = await UserProduct.create(body)
//   }else{
//     console.log("user alreay exist")
//   }
// //   const result = await UserProduct.create(body)
// //   const result = await UserProduct.create({
// //     brand_name: body.brand_name,
// //     model_name: body.model_name,
// //     cover_image: body.cover_image,
// //     images: body.images,
// //     price: body.price,
// //     stock: body.stock,
// //     color: body.color,
// //     storage: body.storage,
// //     ram: body.ram,
// //     processor: body.processor,
// //     rating: body.rating,
// //     rating_count: body.rating_count,
// //     description: body.description,
// //     camera_rear: body.camera_rear,
// //     camera_front: body.camera_front,
// //     display: body.display,
// //     battery: body.battery,
// //     amount: body.amount,
// //   });
// //   console.log("result", result);
//   return res.status(201).json({ msg: "success" });
// };


// const handleAddToCartProduct = async (req, res) => {
//   console.log("hello");
//   // console.log(req)
//   const body = req.body;
//   console.log("i m whole body", body);
//   await UserProduct.create(body);
//   return res.status(201).json({ msg: "success" });

//   const user = await UserProduct.find();
//   console.log("i m user data", user);
//   const newComp = user.find((item) => item._id == req.body._id);
//   console.log("i m newcomp ", newComp);
//   if (!newComp) {
//     await UserProduct.create(body);
//     return res.status(201).json({ msg: "success" });
//   } else {
//     console.log("user alreay exist");
    // const user = await UserProduct.findByIdAndUpdate(newComp._id, {
    //   ...body,
    // //   amount: newComp.amount + 1,
    // });
    // console.log("i m updated user", user);
    // return res.json(user);
//   }
// };
