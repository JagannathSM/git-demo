const mongoose = require('mongoose');

const userRoundResultsSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    roundPoint:{
        type:Number,
        required:true
    }
},{
    timestamps:true
})

const UserRoundResults = mongoose.model("UserRoundResults",userRoundResultsSchema)
module.exports = UserRoundResults;