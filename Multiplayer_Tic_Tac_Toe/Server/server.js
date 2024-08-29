const express = require("express");
const cors= require("cors");
require("dotenv").config();
require("./DB/ConnectMongoDB");

const bodyParser = require("body-parser");

const authRoute = require('./Routes/authRoutes');
const userRoute = require('./Routes/userRoutes');

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);


app.listen(PORT,()=>{
    console.log(`Server Running on Port - ${PORT}`)
}) 