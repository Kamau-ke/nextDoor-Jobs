const mongoose=require('mongoose')

const applicationSchema=new mongoose.Schema({
    job:{
        type:mongoose.Types.ObjectId,
        ref:'Job'
    },
    applicant:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    },
    application:{
        type:String,
        required:[true, 'Provide your application']
    }
})

module.exports=mongoose.model('Application', applicationSchema)