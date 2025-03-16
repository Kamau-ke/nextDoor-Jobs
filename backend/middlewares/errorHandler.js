const customApiError = require("../errors/customError")


const errorHandlerMiddleware=(err, req, res, next)=>{

    let customError={
        statusCode:err.statusCode || 500,
        message:err.message || 'Something went wrong, please try again later'

    }
   
    // if(err instanceof customApiError){
    //    return res.status(err.statusCode).json({message:err.message})
    // }

    

    if(err.name==='ValidationError'){
        customError.statusCode=400,
        customError.message=Object.values(err.errors).map(error=>error.message).join(',')
    }
    

    return res.status(customError.statusCode).json({success:false, message:customError.message})


   
}

module.exports=errorHandlerMiddleware