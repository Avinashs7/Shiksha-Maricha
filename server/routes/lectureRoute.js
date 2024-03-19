const express=require('express')
const {tutorOnly, userOnly}=require('../middlewares/auth')
const router=express.Router()

const {addLecture, getLecture}=require('../controllers/lectureController')

router.get('/api/get/:cid',userOnly,getLecture)
router.post('/api/add',tutorOnly,addLecture)

module.exports=router