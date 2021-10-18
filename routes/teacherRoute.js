const express = require('express')
const teacherController = require('./../controllers/teacherController')
const authController = require('./../controllers/authController')


const router = express.Router()

router.post('/signup', authController.signup)
router.post('/login', authController.login)
router.route('/').get(teacherController.getAllTeacher).post(teacherController.createTeacher)


module.exports = router