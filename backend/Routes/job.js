const express=require('express')
const router=express.Router()
const {createJob,
    getAllJobs,
    getUserJobs,
    getJob,
    editJob,
    deleteJob}=require('../Controllers/job')
router.route('/').get(getAllJobs).post(createJob)
router.route('/:id').get(getJob).patch(editJob).delete(deleteJob)
router.route('/user/:userId').get(getUserJobs)

module.exports=router