const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/index')

const app = express()
app.use(bodyParser.json())

//MongoDB Connectivity  mongodb+srv://guvi:guvi@guvi.mxnupan.mongodb.net/guvi // mongodb://localhost:27017/guvi
mongoose.connect('mongodb+srv://guvi:guvi@guvi.mxnupan.mongodb.net/guvi')
.then(() => {
    console.log("MongoDB Connected Successfully")
}).catch((error)=>{
    console.log('MongoDB Connection Failed')
})

//USE ROUTES
app.use('/API', routes)

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server Running on Port - ${PORT}`)
})