const customApiError=require('./customError')

class notFound extends customApiError{
    constructor(message){
        super(message)
        this.statusCode=404
    }
}

module.exports=notFound