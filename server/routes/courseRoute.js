const express=require('express')
const router=express.Router()
const {allCourses,oneCourse,addCourse,deleteCourse, allStream}=require('../controllers/courseController')
const { tutorOnly } = require('../middlewares/auth')

//Required for the main page rendering and its for all
router.get('/stream/getStream',allStream)
router.get('/getAllCourses',allCourses)

//
router.get('/:cid',oneCourse)

//Adding a course in permitted only for the tutor
router.post('/api/add',tutorOnly,addCourse)

router.delete('/:cid',deleteCourse)


module.exports=router