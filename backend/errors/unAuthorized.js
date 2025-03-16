const customApiError=require('./customError')

class unUthorized extends customApiError{
    constructor(message){
        super(message)
        this.statusCode=401
    }
}

module.exports=unUthorized