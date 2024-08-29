const mongoose = require('mongoose');

const userRoundResultsSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    playerOneName:{
        type:String,
        required:true
    },
    playerTwoName:{
        type:String,
        required:true
    },
    roundResult:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const UserRoundResults = mongoose.model("UserRoundResults",userRoundResultsSchema)
module.exports = UserRoundResults;