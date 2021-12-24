const express=require('express')
const router= express.Router()
const Project =require('../models/projectModels')
router.post('/',async (req,res)=>{ 
    console.log('hhhhheeeeey')
    const project=new Project({
        projectName: req.body.projectName,
        projectType: req.body.projectType,
        projectDescription: req.body.projectDescription,
        projectDeadline: req.body.projectDeadline, 
        projectMembers: req.body.projectMembers,
    })
    try{
        project= await project.save()
        res.redirect(200,`/projects/${project.id}`)
    }catch(e){
        res.redirect('/projects/new' )
    }
})
router.get('/:id',(req,res)=>{ 
    res.send('hello');
})

module.exports=router