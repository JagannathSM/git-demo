const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    role:{
        type:String,
        enum: ["User", "Admin"],
        default:"User"
    },
    password:{
        type:String,
        required:true
    },
    passResetToken:{
        type:String,
        required:false,
        default:null
    },
    passResetTokenExp:{
        type:Date,
        required:false,
        default:null
    },
    totalRoundPayed:{
        type:Number,
        default:0
    },
    totalWon:{
        type:Number,
        default:0
    },
    totalLost:{
        type:Number,
        default:0
    }
});

const User = mongoose.model("User",userSchema)
module.exports = User;