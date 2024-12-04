const User=require('../model/user')

const register=async (req, res)=>{
    const user=await User.create({...req.body})

    const token=user.createToken()

    res.status(200).json({name:user.name}, token)
}

const login=(req, res)=>{
    res.status(200).json({success:true, msg:'user login successfully'})
}


module.exports={register,login}