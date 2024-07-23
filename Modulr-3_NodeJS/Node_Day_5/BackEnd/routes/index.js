const express = require('express')
const User = require("../models/user")
const bcrypt = require("bcryptjs")
const dotenv = require("dotenv")
const JWT = require("jsonwebtoken")

dotenv.config()
const router = express.Router()

const generateToken = (user) =>{
    return JWT.sign(
        {userName:user.userName,password:user.password},
        process.env.JWT_TOKEN,{
            expiresIn:"1hr"
        }
    )
}


//POST MENTOR DETAILS API CRETETING
router.post("/register", async (req,res)=>{
    try{
        const {userName, password} = req.body;
        // const credentials = new User(req.body);
        const user = await User.findOne({userName})
        if(!user){
            //Hash the password
            const hasedPassword = await bcrypt.hash(password,10);
            const credentials = new User({userName,password:hasedPassword})
            await credentials.save();
            res.status(200).json({userID:credentials._id,userName:credentials.userName,JWT_PASSCODE:generateToken(credentials)})
        }
        else{
            return res.status(400).send("UserName already exisits")
        }
    } catch (err) {
        res.status(400).send(err)
    }
})

//Login
router.post("/login", async(req,res)=>{
    try{
        const {userName, password} = req.body;
        const user = await User.findOne({userName})
        if(!user){
            return res.status(404).send("User Not Exists",userName)
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send("Incorrect password");
        }
        res.status(200).json({userID:user._id,userName:user.userName,JWT_PASSCODE:generateToken(user)})

    } catch (err) {
        res.status(400).send(err)
    }
})

module.exports = router;