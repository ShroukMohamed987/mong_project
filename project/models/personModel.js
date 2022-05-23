const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,

    required: [true, "Please Enter Name"],
  },
  email: {
    type: String,
    trim: true
  },
  password: {
    type: String,
    required: [true, "Please Enter address"],
  },
  product:{
    type:mongoose.Schema.ObjectId,
    ref:"Product",
},
shops:[{
  type:mongoose.Schema.ObjectId,
  ref:"Shop",
}]
  
});
module.exports = mongoose.model("User", UserSchema);