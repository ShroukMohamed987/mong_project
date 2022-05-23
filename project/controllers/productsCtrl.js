const mongoose = require("mongoose");
//const productsModel = require('../models/productsModel');
const Product = require('../models/productsModel');
const doc = require('../routes/products');
const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({  })
  res.status(200).json({ products });
};
const createproduct = async (req, res) => {
    const product = await Product.create(req.body)
    res.status(200).json({ product })
  }

  /////bulk insert

  const createManyProduct = async (req, res) => {
    const product = await Product.insertMany(req.body)
    res.status(200).json({ product })
  }

  const getproduct = async (req, res) => {
    const x = req.params.id
    console.log(x)
    const product = await Product.findOne({
      _id: x,
      
    })
    if (!product) {
        res.status(400).send("error")
    }
    res.status(200).json({ product })
  }
  const deleteproduct = async (req, res) => {
    const x = req.params.id
    console.log(x)
    const product = await Product.deleteOne({
      _id: x,
      
    })
    if (!product) {
        res.status(400).send("error")
    }
    res.status(200).json({ product })
  }
  const updateProduct = async (req, res) => {
    try {
      let product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(500).json({
          success: false,
          msg: "Product Not Found",
        });
      }
      product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      });
  
      return res.status(200).json({
        success: true,
        msg: "Product Updated",
      });
    } catch (error) {
      res.status(500).json(error.message);
    }
  };

  
 

  ///one to many
  const UserByProduct = async (req, res) => {
    
        const { id } = req.params;
        const user = await product.findById(id).populate('productsModel');
        res.send(user);
      }





  module.exports={
    getAllProductsStatic,
    createproduct,
    getproduct,
    deleteproduct,
    updateProduct,
    UserByProduct,
    createManyProduct
   
  }