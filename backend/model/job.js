const mongoose=require('mongoose')

const jobSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true, 'Provide job title']
    },
    position:{
        type:String
    },
    skills:{
        type:String,
        required:[true, 'Provide skills required']
    },
    description:{
        type:String,
        required:[true, 'Provide job description']

    },
    location:{
        type:String

    },
    budget:{
        type:Number,
        required:[true, 'Provide your budget']
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        // required:[true, 'Please provide your name']
    }

}, {timestamps:true})

module.exports=mongoose.model('Job', jobSchema)