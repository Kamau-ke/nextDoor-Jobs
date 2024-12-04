const customError=require('../errors/customError')

const errorHandlerMiddleware=(err, req, res, next)=>{
    if(err instanceof customError){
        return res.status(err.statusCode).json({msg:err.message})
    }
}

module.exports=errorHandlerMiddleware