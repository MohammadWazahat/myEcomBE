//dotEnv imports
require("dotenv").config();

const express = require("express");
const { connectMongoDb } = require("./Connection/connection");
const Razorpay = require("razorpay");

//Routes import
const routes = require("./Routers/user");
const routesTwo = require("./Routers/adminUserRoutes");
const routesThree = require("./Routers/userEcomRoute");
const authRoutes = require("./Routers/auth");
const paymentRoute = require("./Routers/paymentRoutes.js");

//Middleware import
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");


const app = express();

//Variable
// const port = process.env.PORT || 3015;
const port = 3015;

//Connection
// connectMongoDb("mongodb://127.0.0.1:27017/myEcom");

const username = encodeURIComponent("muhammadwazahatrza092");
const password = encodeURIComponent("244466666");
// ${username}:${password}

// const DB = "mongodb://127.0.0.1:27017/myEcom";
const DB = `mongodb+srv://${username}:${password}@cluster0.gm8yk.mongodb.net/DatabaseEcom?retryWrites=true&w=majority&appName=Cluster0`;


//Connection 
connectMongoDb(DB , {
  useNewUrlParser : true ,
  useCreateIndex : true ,
  useUnifiedTopology : true ,
  useFindAndModify : false 
}).then(()=>{
  console.log('connection successful');
}).catch((err)=>console.log('error'));

//Middleware
app.use(cors());
// Middleware for Ejs
app.set("view engine", "ejs");
app.set("views", path.resolve("./Views"));

//Middleware for rendering form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Auth Routes Middleware
app.use(authRoutes);

//Middleware to render all the routes
app.use(routes);
app.use(routesTwo);
app.use(routesThree);

//Payment routes
app.use("/api", paymentRoute);

app.get("/api/getkey", (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
