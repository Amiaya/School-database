const express = require('express')
const studentController = require('./../controllers/studentController')

const router = express.Router()
router.route('/').get(studentController.getAllStudent).post(studentController.createStudent)

module.exports = router