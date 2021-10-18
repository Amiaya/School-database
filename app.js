const express = require('express')
const mongoose = require('mongoose')



const studentRouter = require('./routes/studentRoute')
const teacherRouter = require('./routes/teacherRoute')
const courseRouter = require('./routes/courseRoute')

const AppError = require('./utils/appError')
const globalErrorHandler = require('./controllers/errorController')

const app = express()


app.use(express.json())

app.use('/api/v1/student',studentRouter)
app.use('/api/v1/teacher',teacherRouter)
app.use('/app/v1/course', courseRouter)

app.all('*', (req,res,next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`,404))
})

app.use(globalErrorHandler)


module.exports = app