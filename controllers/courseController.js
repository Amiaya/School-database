const Course = require('./../models/courseModel')
const catchAsync = require('./../utils/catchAsync')

exports.getAllCourse = catchAsync(async (req,res,next) => {
        const course = await Course.find()
        res.status(200).json({
            status: "success",
            data: {
                course
            }
        })
})

exports.createCourse = catchAsync(async(req,res) => {
        const course = await Course.create({
            name: req.body.name,
            code: req.body.code
        })
        res.status(200).json({
            status: "success",
            data: {
                course
            }
        })
        console.log(req.body)
})
