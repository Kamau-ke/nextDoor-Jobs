const Job=require('../model/job')
const {notFound, badRequest}=require('../errors/index')

const getAllJobs=async (req, res)=>{
    const jobs=await Job.find({})
    res.status(200).json({success:true, data:jobs}, {nHits:jobs.length})
}

const getUserJobs=async (req, res)=>{
    const jobs=await Job.find({createdBy:req.user.userID})
    res.status(200).json({success:true, data:jobs},{nHits:jobs.length})
}

const getJob=async (req,res)=>{
    const {id}=req.params
    const job=await Job.find({_id:id})
    if(!job){
        throw new notFound('Job not found')
    }

    res.status(200).json({job})
}

const editJob=async (req,res)=>{
    
}