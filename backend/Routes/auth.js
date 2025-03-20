const express=require('express')
const router=express.Router()
const {register, login, logout}=require('../Controllers/auth')
const {redirectIfAuthenticated}=require('../middlewares/verify')
// const app=express()
// app.use(redirectIfAuthenticated)
router.route('/login').post(login)
router.route('/register').post(register)
router.route('/logout').get(logout)



module.exports=router