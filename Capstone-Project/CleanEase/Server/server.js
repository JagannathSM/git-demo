const express = require("express");
const cors= require("cors");
require("dotenv").config();
require("./DB/ConnectMongoDB");
const bodyParser = require("body-parser");
const authRoute = require('./Routes/authRoutes');
const userRoute = require('./Routes/userRoutes');
const bookingRoute = require('./Routes/bookingRoutes');
const notificationRoute = require('./Routes/notificationRoutes');
const cleanEaseRoute = require('./Routes/cleanEaseRoutes');
const razorPayRoute = require('./Routes/razorPayRoutes');
const UserCheckListRoute = require("./Routes/userCheckListRoutes");

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use('/api/booking', bookingRoute);
app.use('/api/notification', notificationRoute);
app.use('/api/data', cleanEaseRoute);
app.use('/api/payment', razorPayRoute);
app.use('/api/checklist', UserCheckListRoute);

app.listen(PORT,()=>{
    console.log(`Server Running on Port - ${PORT}`)
}) 