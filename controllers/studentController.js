const Student = require('./../models/studentModel')
const catchAsync =  require('./../utils/catchAsync')

exports.getAllStudent =catchAsync(async (req,res,next) => {
        student = await Student.find()
        res.status(200).json({
            status: "success",
            data: {
                student
            }
        })
})

exports.createStudent = catchAsync(async (req,res,next) => {
    const student = new Student({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        age: req.body.age,
        gender: req.body.gender,
        matric_no: req.body.matric
    })
    // const student = await Student.create(req.body)
    res.status(200).json({
        status: "success",
        data: {
            student
        }
    })
    console.log(req.body)
})