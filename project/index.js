require('dotenv').config()
const express=require('express')
 const app=express();

 const notFoundMiddleware=require('./middleware/not-found')
 const errorMiddleware=require('./middleware/error-handler')
   


 //middleware
 app.use(express.json())

//connect db
const connectDB = require('./db/connect')


//////product routes
const productsRouter = require('./routes/products')



 //routes

//  app.get('/',(req,res)=>{
//      res.send('<h1>store api</h1><a href="/api/v1/products"> product routes</a>')
//  })

 app.use('/api/v1/products',require('./routes/products'))
 app.use('/api/v1/users',require("./routes/userRoute"))
 app.use('/api/v1/shop',require("./routes/shop"))

 app .use(notFoundMiddleware)
 app.use(errorMiddleware)

 const port=process.env.PORT ||3000


 const start =async()=>{
     try{
         //conect to db

        await connectDB(process.env.MONGO_URL)
        app.listen(port, console.log(`Server is listening port ${port}...`))


     }catch(error){
         console.log(error)

     }
 }
 start()

