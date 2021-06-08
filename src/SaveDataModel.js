const mongoose = require("mongoose");


const dataSchema = mongoose.Schema(
   
  {
      name:String,
      symbol:String,
      marketCap:String,
      price:String
      
  }
);


const Data = mongoose.model("Data", dataSchema);
module.exports = Data;