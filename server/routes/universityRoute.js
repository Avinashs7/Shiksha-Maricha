const express=require('express')
const { addUniversity, deleteUniversity } = require('../controllers/universityController')
const router=express.Router()

router.post('/add',addUniversity)
router.delete('/:uid',deleteUniversity)

module.exports=router