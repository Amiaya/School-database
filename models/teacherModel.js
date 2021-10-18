const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')


var teacherSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true
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
        ref: "Course",
        unique: true
    }],
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },
    phone: {
        type: Number,
        required: true
    },
    number_years: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    passwordConfirm: {
        type: String,
        required: true,
        validate: {
            validator: function(el){
                return el === this.password
            },
            message: "password are not the same"
        }
    }
})

teacherSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next()

    this.password = await bcrypt.hash(this.password,12)

    this.passwordConfirm = undefined
})

const Teacher = mongoose.model("Teacher", teacherSchema)

module.exports = Teacher