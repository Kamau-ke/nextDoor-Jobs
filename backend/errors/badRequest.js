const customApiError=require('./customError')

class notFound extends customApiError{
    constructor(message){
        super(message)
        this.statusCode=400
    }
}

module.exports=notFound