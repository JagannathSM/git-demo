const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    studentID:{
        type: Number,
        required: true,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value'
        }
    },
    mentor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Mentor"
    },
    previousMentors:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Mentor"
        }
    ]
})

const Student = mongoose.model("Student",studentSchema)
module.exports = Student;