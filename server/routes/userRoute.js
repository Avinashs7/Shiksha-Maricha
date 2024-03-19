const express=require('express')
const { addStudent, isUser ,getUser,addTutor, editUser} = require('../controllers/userController')
const { userOnly } = require('../middlewares/auth')
const router=express.Router()

router.post('/signup',addStudent)
router.post('/tutor/add',addTutor)
router.post('/login',isUser)
router.patch('/api/edit',userOnly,editUser)
router.get('/api',userOnly,getUser)


module.exports=router