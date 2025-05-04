const Application =require('../model/applications')
const badRequest=require('../errors/badRequest')
const notFound=require('../errors/notFound')

const createApplication=async (req, res)=>{
    const {userId}=req.params
  
    if(!userId){
        throw badRequest('Login first')
    }

    const application=await Application.create({...req.body})

    res.status(200).json({application})
}

const editApplication=async (req, res)=>{
    const {userId, applicationId}=req.params
    
    if(!userId){
        throw badRequest('Login first')
    }

    const application=await Application.findOneAndUpdate({_id:applicationId, applicant:userId}, {...req.body}, {new:true, runValidators:true})

    if(!application){
        throw notFound('Application not found')
    }
    res.status(200).json({application})
}

const deleteApplication=async(req, res)=>{
    const {applicationId, userId}=req.params

    if(!userId){
        throw badRequest('Login first')
    }

    if(!applicationId){
        throw badRequest('Job not found')
    }

    const application=await Application.findOneAndDelete({applicationId})

    res.status(200).json({message:'Application deleted successfully'})

}

module.exports={createApplication, editApplication, deleteApplication}