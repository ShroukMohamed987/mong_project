const mongoose = require("mongoose");
const ShopSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,

    required: [true, "Please Enter Name"],
  },
  address: {
    type: String,
    trim: true
  },
  allCost:{type: Array},
  person:[{
    type:mongoose.Schema.ObjectId,
    ref:"Shop",
    required:true
  }]
  
});
module.exports = mongoose.model("Shop", ShopSchema);