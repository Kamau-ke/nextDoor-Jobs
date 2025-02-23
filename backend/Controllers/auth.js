const User=require('../model/user')
const {badRequest, unAuthorized, notFound}=require('../errors/index')

const register=async (req, res)=>{
    
    const user=await User.create({...req.body})
  
    
    const token=user.createToken()

    res.cookie('token', token, {
        httpOnly:true,
        sameSite:true,
        maxAge:24*60*60*1000
    })

    res.status(200).json({name:user.name})
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

    const isCorrectPassword=await user.comparePassword(password)

    if(!isCorrectPassword){
        throw new unAuthorized('Incorrect password')
    }

    const token=user.createToken()

    res.cookie('token', token, {
        httpOnly:true,
        sameSite:'None',
        maxAge:24*60*60*1000
    })
    

    res.status(200).json({user:{name:user.name, email:user.email}})
}

const getMe=async (req, res)=>{
    try {
        const user=await User.findById(req.userId).select('-password')
        if(!user){
            res.status(404).json({message:'user not found'})
        }
        res.json({user})
    } catch (error) {
        res.status(500).json({message:'Server error'})
    }
}




module.exports={register,login, getMe}