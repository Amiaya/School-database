const mongoose = require('mongoose')

var studentSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: [true,'This is required']
    },
    lastname: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course"
    }],
    matric_no: {
        type: Number,
        unique: true
    }
})


const Student = mongoose.model("Student", studentSchema)

module.exports = Student