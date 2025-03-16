const express=require('express')
const router=express.Router()
const {register, login, getMe}=require('../Controllers/auth')



router.route('/login').post(login)
router.route('/register').post(register)



module.exports=router