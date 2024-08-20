const express = require('express');
const cors = require("cors");
const bodyparser = require("body-parser");
require("dotenv").config();
require("./DB/ConnectMongoDB");

const authRoute = require('./Routes/authRoutes');
const questionRoute = require('./Routes/questionRoutes');
const userRoute = require('./Routes/userRoutes');


const app = express();
app.use(cors());

app.use(bodyparser.json());

app.use('/api/auth', authRoute);
app.use('/api/quiz', questionRoute);
app.use('/api/user', userRoute);

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server Running on Port - ${PORT}`)
}) 