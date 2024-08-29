const express = require("express");
const router = express.Router();

const {
    handleCreateNewProduct ,
    handleGetAllProducts ,
    handleGetProductById ,
    handleUpdateProductById ,
    handleDeleteProductById ,
 } = require("../Controllers/adminUserControls");
 const { myAuthMiddle, myAuthTest } = require("../Middleware/authMiddleware");


// Routers : they will go in the router file

// Create request
router.post("/users/myProducts/",handleCreateNewProduct); 
//Read all request from mongodb  
router.get("/users/myProducts/",myAuthMiddle,handleGetAllProducts );
// router.get("/users/myProducts/",handleGetAllProducts );
// only one request from mongodb To get single user data from mongodb file using id param
router.get("/users/myProducts/:id", handleGetProductById);
//Patch or Update request
router.patch("/users/myProducts/:id",handleUpdateProductById );
//delete request
router.delete("/users/myProducts/:id",handleDeleteProductById);




module.exports = router ;