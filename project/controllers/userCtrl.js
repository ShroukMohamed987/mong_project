const User = require("../models/personModel");
const Register = async (req, res) => {
  try {
 
    const { name,  email, password} = req.body;
    //check if user Already exist in DB or not
    const user = await User.findOne({ email });
    //return this message if user exist in db
    if (user) return res.status(400).json({ msg: "This user Already Exist" });
   const created =await User.create(req.body)
    res.status(201).json({created});
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

//login
const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
     
      res.status(200).json({ user});
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  };


  module.exports={
      Register,
      login,
     
  }