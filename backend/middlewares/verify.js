const express=require('express')
const jwt=require('jsonwebtoken')

const verifyToken=(req, res, next)=>{
    const token=req.cookies.token
    if(!token){
       return res.redirect('/login')
    }
    
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded)=>{
        if(err) {
           return res.redirect('/login')
        }
       
        
        req.userId=decoded.userId
        next()
    })
}

const checkUser=(req, res, next)=>{
    const token=req.cookies.token

    if(!token){
        res.status(400).json({message:'No user available'})
    }

    const user=jwt.decode(token, process.env.JWT_SECRET)
    
}


module.exports={verifyToken}
