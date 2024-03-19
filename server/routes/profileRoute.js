const express=require('express')
const { addProfile, deleteProfile,getProfile } = require('../controllers/profileController')
const {userOnly}=require('../middlewares/auth')
const router=express.Router()

router.patch('/api/edit',userOnly,addProfile)
router.get('/api',userOnly,getProfile)
router.delete('/delete/:id',deleteProfile)

module.exports=router