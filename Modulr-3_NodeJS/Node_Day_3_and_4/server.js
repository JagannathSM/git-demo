const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/index')
const dotenv = require('dotenv')

//Load Environment Variable from .env file
//user_env = process.env.NODE_ENV
//dotenv.config({path:`${user_env}`})
dotenv.config();

const app = express()
app.use(bodyParser.json())

//MongoDB Connectivity  mongodb+srv://guvi:guvi@guvi.mxnupan.mongodb.net/guvi // mongodb://localhost:27017/guvi
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected Successfully")
}).catch((error)=>{
    console.log('MongoDB Connection Failed')
})
// console.log(`MONGO_URI - ${process.env.MONGO_URI}`)


//USE ROUTES
app.use('/API', routes)

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server Running on Port - ${PORT}`)
})