const customApiError=require('./customError')

class notFound extends customApiError{
    constructor(message){
        super(message)
        this.statusCode=401
    }
}

module.exports=notFound