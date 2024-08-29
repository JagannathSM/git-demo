const User = require("../Model/User");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");
const sendEmail = require("../Utils/EmailServises");

dotenv.config();

const generateToken = (user) => {
  const jwtData = {
    _id: user._id,
    username: user.firstname,
    email: user.email,
    role: user.role,
  };
  return jwt.sign(jwtData, process.env.JWTSECRET, { expiresIn: "1d" });
};

exports.userRegister = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).send("All credentials required");
  }

  try {
    const user_detail = await User.findOne({ email });
    if (user_detail) {
      return res.status(400).send("User / Email already exists!");
    }

    const salt = parseInt(process.env.SALT);
    const hasedPassword = await bcrypt.hash(password, salt);

    const new_user = new User({
      username,
      email,
      password: hasedPassword,
    });
    await new_user.save();
    res.status(200).send("Account Created Successfully");
  } catch (err) {
    res.status(400).send("Error while creating user account");
  }
};

exports.userlogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const check_user = await User.findOne({ email });
    if (!check_user) {
      return res.status(400).send("Email Not Exists");
    }
    const isMatch = await bcrypt.compare(password, check_user.password);
    if (!isMatch) {
      return res.status(400).send("Incorrect password");
    }
    res.status(200).json({
      token: generateToken(check_user),
    });
  } catch (err) {
    res.status(400).send("Connection timeout! Error when login");
  }
};

exports.resetPassToken = async (req, res) => {
  const { email } = req.body;
  const userData = await User.findOne({ email });

  if (!userData) {
    return res.status(400).send("Email Not found");
  }

  const passResetToken = Math.random().toString(36).slice(-8);
  userData.passResetToken = passResetToken;
  userData.passResetTokenExp = Date.now() + 3600000; //Validate for 1hr

  await userData.save();

  const message = `<div style="diaplay:flex;flex-direction:column;justify-content:center;text-align: center;background-color: lightblue;border: 5px outset black;color:black">
      <div style="padding:10px;margin:5px">
      <h3 style="margin:0px">Password Reset Request</h3>
      <p>Your Password reset token - ${passResetToken}. Click on the below link to reset your password, this link expires in 1hr. <br>  If you did not request this, please ignore this email and your password will remain unchanged.</p>
      <a style="text-decoration:none; border:1px solid black; background-color:black;color:white;padding:4px;border-radius:5px" type="button" href="${process.env.NETLIFY_PASSWORD}${passResetToken}" target="_blank">Reset Password</a>
      </div>
      </div>`;
  sendEmail({
    email: userData.email,
    subject: "Password Reset Request",
    message,
    res,
  });
};

exports.verifyResetPassToken = async (req, res) => {
  const { passResetToken } = req.params;

  try {
    const user = await User.findOne({ passResetToken });
    if (!user) {
      return res.status(400).send("Password reset token expiered!");
    }

    if (Date.parse(user.passResetTokenExp) < Date.now()) {
      return res.status(400).send("Reset Token Expires!");
    }

    res.status(200).send("Token Verifyed Success");
  } catch (err) {
    res.status(400).send("Error while checking reset-pass-token");
  }
};

exports.createNewPass = async (req, res) => {
  const { passResetToken } = req.params;
  const { newPassword } = req.body;

  try {
    const user = await User.findOne({ passResetToken });

    if (!newPassword) {
      return res.status(400).send("Required Field newPassword");
    }

    const salt = parseInt(process.env.SALT);
    const hasedPassword = await bcrypt.hash(newPassword, salt);

    await User.updateOne(
      { _id: user._id },
      { password: hasedPassword, passResetToken: null, passResetTokenExp: null }
    );
    res
      .status(200)
      .json({
        token: generateToken(user),
        message: "Updated password Succesfully",
      });
  } catch (err) {
    res.status(400).send("Error while reset new password");
  }
};
