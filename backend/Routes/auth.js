const express=require('express')
const router=express.Router()
const {register, login, getMe}=require('../Controllers/auth')
const verifyMe=require('../middlewares/verify')


router.route('/login').post(login)
router.route('/register').post(register)
router.route('/me').get(verifyMe, getMe)


module.exports=router