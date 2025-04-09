const User=require('../model/user')
const {badRequest, unAuthorized, notFound}=require('../errors')
const customApiError = require('../errors/customError')

const register=async (req, res)=>{
    const { email }=req.body

    const user=await User.findOne({email})
    if(user){
        throw new badRequest('User already exist')
    }

    const newUser=await User.create({...req.body})
    const token=newUser.createToken()

    res.cookie('token', token, {
        httpOnly:true,
        maxAge:24*60*60*1000
    })

    res.status(200).json({name:newUser.name})
}

const login=async (req, res)=>{
    const {email, password}=req.body

    if(!email || !password){
         throw new badRequest('Provide both email and password') 
        
    }

    const user=await User.findOne({email})
    if(!user){
        throw new badRequest('user not found')
        
    }

    const isCorrectPassword=await user.comparePassword(password)

    if(!isCorrectPassword){
        throw new badRequest('incorrect password')
        
        
    }

    const token=user.createToken()

    res.cookie('token', token, {
        httpOnly:true,
        maxAge:24*60*60*1000
    })
    

    res.status(200).json({user:{name:user.name, email:user.email}})
}

const me=async (req, res)=>{
    const user=req.user.user
    res.status(200).json({user: user})
}


const logout=(req, res)=>{
    res.cookie('token', '', { maxAge: 1})
    res.status(200).json({message:'Logged out'})
}






module.exports={register,login, me, logout}