const register=(req, res)=>{
    res.status(200).json({success:true, data:req.body})
}

const login=(req, res)=>{
    res.status(200).json({success:true, msg:'user login successfully'})
}


module.exports={register,login}