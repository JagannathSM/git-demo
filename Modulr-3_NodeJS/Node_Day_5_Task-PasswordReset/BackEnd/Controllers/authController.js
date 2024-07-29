const User = require("../Models/User");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");
const sendPassResetEmail = require("../Utils/EmailServices");

dotenv.config();

const generateToken = (user) => {
  const jwtData = { _id: user._id, userName: user.userName, email: user.email };
  return jwt.sign(jwtData, process.env.JWTSECRET, { expiresIn: "1h" });
};

exports.registerUser = async (req, res) => {
  const { userName, password, email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).send("Email already exisits");
    } else {
      const salt = parseInt(process.env.SALT);
      const hasedPassword = await bcrypt.hash(password, salt);
      const new_user = new User({ userName, password: hasedPassword, email });
      await new_user.save();
      res.status(200).json({
        message: "Successfully Registered",
      });
    }
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const check_user = await User.findOne({ email });
    if (!check_user) {
      return res.status(404).send("Email Not Exists");
    }
    const isMatch = await bcrypt.compare(password, check_user.password);
    if (!isMatch) {
      return res.status(400).send("Incorrect password");
    }
    // const jwtData = { _id:check_user._id, userName: check_user.userName, email: check_user.email}
    // const token = jwt.sign(jwtData, process.env.JWTSCERET,{expiresIn:"10m"})

    res.status(200).json({
      token: generateToken(check_user),
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.resetPassToken = async (req, res) => {
  const { email } = req.body;
  const userData = await User.findOne({ email });

  if (!userData) {
    return res.status(404).json({ message: "Email Not found" });
  }

  const passResetToken = Math.random().toString(36).slice(-8);
  userData.passResetToken = passResetToken;
  userData.passResetTokenExp = Date.now()+ 3600000 //Validate for 1hr

  await userData.save();

  const message = `<div style="width:100%;heigth:300;box-shadow:1px 2px 2px white">
  <p>Use this token <span style="font-weight:900;color:white">${passResetToken}</span> to reset your password</p><br>
  <p style="color:red">Token is  will expire in 1hr.</p>
  </div>`;
  sendPassResetEmail({
    email: userData.email,
    subject: "Password Reset Request",
    message,
    res,
  });
};

exports.verifyResetPassToken = async (req, res) => {
  const passResetToken = req.params.token;
  const { new_password } = req.body;
  const user = await User.findOne({passResetToken})

  if(!user){
    return res.status(404).json({message:"Invalid Password reset Token"})
  }

  if((Date.parse(user.passResetTokenExp)) < Date.now()){
    return res.status(500).json({message:"Reset Token Expires!"})
  }

  if(!new_password){
    return res.status(400).json({message:"Required Field new_password"})
  }

  const salt = parseInt(process.env.SALT);
  const hasedPassword = await bcrypt.hash(new_password, salt);

  user.password = hasedPassword;
  user.passResetToken = null;
  user.passResetTokenExp = null;

  await user.save();
  res.status(201).json({message:"Updated password Succesfully"})
}