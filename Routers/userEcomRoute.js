const express = require("express");
const router = express.Router();

const {
 
    handleAddToCartProduct,
    handleGetCartProducts,
    handleGetCartProductById,
    handleUpdateCartProductById,
    handleDeleteCartProductById,

 } = require("../Controllers/userEcomControl");



// Routers : they will go in the router file

// Create request
router.post("/users/userProduct/",handleAddToCartProduct); 
//Read all request from mongodb  
router.get("/users/userProduct/",handleGetCartProducts );
// only one request from mongodb To get single user data from mongodb file using id param
router.get("/users/userProduct/:id", handleGetCartProductById);
//Patch or Update request
router.put("/users/userProduct/:id", handleUpdateCartProductById);
//delete request
router.delete("/users/userProduct/:id",handleDeleteCartProductById);




module.exports = router ;