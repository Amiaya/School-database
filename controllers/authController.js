const jwt = require('jsonwebtoken')
const Teacher = require('./../models/teacherModel')
const catchAsync = require('./../utils/catchAsync')
const AppError = require('./../utils/appError')


exports.signup = catchAsync(async(req,res,next) => {
    const newTeacher = await Teacher.create(req.body)

    const token = jwt.sign({id: newTeacher._id },  process.env.JWT_SECRET, {
        expires_in: process.env.JWT_EXPIRES_IN
    })
    res.status(201).json({
        status: "success",
        token,
        data: {
            teacher: newTeacher
        }
    })
})


exports.login = (req,res,next) => {
    const {email, password} = req.body

    if(!email || !password){
        return next(new AppError('Please provide your password and email', 400))
    }

    const token = ''
    res.status(200).json({
        status: "success",
        token
    })
}