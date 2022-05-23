const ProductDoc = require('../controllers/productsCtrl');

const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,

    required: [true, "Please Enter Name"],
  },
  price: {
    type: Number,
    trim: true,
    maxlength: [8, "price cannot exceed 8 characer"],
    required: [true, "Please Enter Price"],
  },
  description: {
    type: String,
    required: [true, "Please Enter description"],
  },
  comments:[{
    type:mongoose.Schema.ObjectId,
  ref:"User",
  required:true
  }]
  
});
module.exports = mongoose.model("Product", ProductSchema);
//module.exports = mongoose.model("doc", ProductSchema);
//var document = mongoose.model('productsModel',ProductSchema);