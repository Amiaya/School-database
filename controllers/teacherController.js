const Teacher = require('./../models/teacherModel')
const catchAsync = require('./../utils/catchAsync')

exports.getAllTeacher = catchAsync(async (req,res,next) => {
        teacher = await Teacher.find()
        res.status(200).json({
            status: "success",
            data: {
                teacher
            }
        })    
})

exports. createTeacher = catchAsync(async(req,res,next) => {
        const teacher = new Teacher({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            age: req.body.age,
            gender: req.body.gender,
            phone: req.body.phone,
            email: req.body.teacher
        })
        res.status(200).json({
            status: "success",
            data: {
                teacher
            }
        })
        console.log(req.body)
})
