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
    coverLetter:{
        type:String,
        required:[true, 'Provide your application']
    },
    appliedAt:{
        type:Date
    }
})

module.exports=mongoose.model('Application', applicationSchema)