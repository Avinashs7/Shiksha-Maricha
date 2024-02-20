const express=require('express')
const { addUser, isUser } = require('../controllers/userController')
const router=express.Router()

router.post('/signup',addUser)
router.get('/login/:email/:password',isUser)

module.exports=router