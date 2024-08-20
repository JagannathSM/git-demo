const mongoose = require('mongoose');

const quizQuestionsSchema = new mongoose.Schema({
    Question:{
        type:String,
        required:true
    },
    Option1:{
        type:String,
        required:true
    },
    Option2:{
        type:String,
        required:true
    },
    Option3:{
        type:String,
        required:true
    },
    Option4:{
        type:String,
        required:true
    },
    Answer:{
        type:Number,
        required:true
    },
    temp:{
        type:Number,
        default:0
    }
})

const QuizQuestions = mongoose.model("QuizQuestions",quizQuestionsSchema)
module.exports = QuizQuestions;