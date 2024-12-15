const User=require('../model/user')
const {badRequest, unAuthorized, notFound}=require('../errors/index')

const register=async (req, res)=>{
    console.log(req.body);
    const user=await User.create({...req.body})
  
    
    const token=user.createToken()

    res.status(200).json({name:user.name}, token)
}

const login=async (req, res)=>{
    const {email, password}=req.body
    if(!email || !password){
        throw new badRequest('Provide both email and password')
    }

    const user=await User.findOne({email})
    if(!user){
        throw new notFound('invalid credentials')
    }

    const isCorrectPassword=await User.comparePassword(password)

    if(!isCorrectPassword){
        throw new unAuthorized('Incorrect password')
    }

    const token=user.createToken()

    res.status(200).json({user:{name:user.name, email:user.email}, token})
}


module.exports={register,login}