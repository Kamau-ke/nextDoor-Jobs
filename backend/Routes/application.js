const express=require('express')
const {createApplication, editApplication, deleteApplication}=require('../Controllers/application')
const Router=express.Router()
const verifyToken=require('../middlewares/verify')

Router.route('/').post(createApplication)
Router.route('/:id').patch(editApplication).delete(deleteApplication)

module.exports=Router