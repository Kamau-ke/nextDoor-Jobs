const Job=require('../model/job')
const {notFound, badRequest}=require('../errors/index')

const createJob=async (req, res)=>{
    req.body.createdBy=req.user.userID
    const job=await Job.create({...req.body})
    res.status(201).json({job})
}

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
    const {user:{userID},params:{id:jobId}, body:{title, description, budget, location,position, skills} }=req
    const job=await Job.findOneAndUpdate({_id:jobId, createdBy:userID}, req.body, {new:true, runValidators:true})
    res.status(200).json({job})
}

const deleteJob=async (req, res)=>{
    const {user:{userID}, params:{id:jobId}}=req

    const job=await Job.findOneAndDelete({_id:jobId, createdBy:userID})
    if(!job){
        throw new badRequest('Job not found')
    }

    res.status(200).json('Job deleted successfully')
}

module.exports={
    createJob,
    getAllJobs,
    getUserJobs,
    getJob,
    editJob,
    deleteJob
}