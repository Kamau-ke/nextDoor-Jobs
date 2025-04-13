const express=require('express')
const router=express.Router()
const {register, login, logout, me}=require('../Controllers/auth')
const {redirectIfAuthenticated}=require('../middlewares/verify')
const verifyToken=require('../middlewares/verify')
// const app=express()
// app.use(redirectIfAuthenticated)
router.route('/login').post(login)
router.route('/register').post(register)
router.route('/logout').get(logout)
router.route('/me').get(verifyToken,me )



module.exports=router