const customApiError=require('./customError')

class badRequest extends customApiError{
    constructor(message){
        super(message)
        this.statusCode=400
    }
}

module.exports=badRequest