const express=require('express')
const router=express.Router()

const {getMe}=require('../Controllers/auth')
const verifyMe=require('../middlewares/verify')



module.exports=router