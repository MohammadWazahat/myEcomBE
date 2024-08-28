const mongoose = require("mongoose");

// Connecting mongodb by using mongoose
async function connectMongoDb(url){
return mongoose.connect(url);
};

module.exports = { connectMongoDb} ;