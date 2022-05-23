const Shop = require('../models/shopModel');

const getAllshop = async (req, res) => {
  const shops = await Shop.find({  })
  res.status(200).json({ shops });
};

const getOneShop = async (req, res) => {
  const sh = req.params.id
  console.log(sh)
  const shop = await Shop.findOne({
    _id: sh,
    
  })
  if (!shop) {
      res.status(400).send("error")
  }
  res.status(200).json({ shop })
}


//get All using Aggregation
const getAllshopWithAgg = async (req, res) => {
  const shops = await Shop.aggregate([
    { $match: { name: "shop1" } } ,
    {$group : {_id :"$name"}} ,
     {
          $addFields: {
            totalsalary: { $sum: "$allCost" } ,

          }
        },
        {
          $addFields: {
            totalsalary2: { $add: ["$totalsalary",1000] } ,

          }
        },
        {
          $lookup:{
            from:'person',
            localField:'_id',
            foreignField:'_id',
            as:'person_shop'
            
          }
        },
        {
           $project: { name: "shop2", address: "tantaaa" } 
        }
        
])
  res.status(200).json({ shops });
};


const createٍshop = async (req, res) => {
  const shop = await Shop.create(req.body)
  res.status(200).json({ shop })
}
  module.exports={
    getAllshop,
    createٍshop,
    getAllshopWithAgg,
    getOneShop
  }