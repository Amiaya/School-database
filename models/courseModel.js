const mongoose = require('mongoose')

var courseSchema = new mongoose.Schema({
    name: {type: String, required: true},
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Teacher",
        required: true
    },
    student: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student"
    }],
    code: {
        type: String,
        required: true
    }
})

const Course = mongoose.model("Course", courseSchema)

module.exports = Course
