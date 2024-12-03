const mongoose=require('mongoose')
const jwt=require('jsonwebtoken')

const userSchema=new mongoose.Schema(
    {
        firstName:{
            type:String,
            required:[true, 'First name required']
        },
        lastName:{
            type:String,
            required:[true, 'Last name required']
        },
        email:{
            type:String,
            required:[true, 'Email required'],
            match: [
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                'Please provide a valid email'
            ],
            unique: true
        },
        phone:{
            type:Number,
            required:[true, 'Phone number required']
        },
        country:{
            type:String,
            required:[true, 'Country name required']
        },
        password:{
            type:String,
            required:[true, 'Password  required']
        }


    }
)


userSchema.methods.createJWT=function(){
    return jwt.sign({userID:this._id, userName:this.firstName}, process.env.JWT_SECRET, {expiresIn:process.env.JWT_LIFETIME})

}

module.exports=mongoose.model('User', userSchema)

