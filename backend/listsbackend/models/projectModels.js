const mongoose = require('mongoose')


const projectSchema = new mongoose.Schema({
    projectName:{
        type:String,
        required:true,
    },
    projectType:{
        type:String,
        required:true,
    },
    projectDescription:{
        type:String, 
    },
    projectDeadline:{
        type:String,
        required:true,
    },
    projectMembers:{
        type:String, 
    },
})
module.exports=mongoose.model('projectsTable',projectSchema)