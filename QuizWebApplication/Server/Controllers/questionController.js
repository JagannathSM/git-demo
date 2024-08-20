const QuizQuestions = require("../Model/QuizQuestions");

exports.getQuestions = async(req,res) => {
    try{
        const data = await QuizQuestions.find();
        res.status(200).json({data});
    } catch(err){
        res.status(400).send("Error while getting Quiz questions")
    }
}