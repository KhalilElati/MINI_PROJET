const express=require('express')
const router= express.Router()
const projectModel =require('../models/projectModels')
router.post('/',async (req,res)=>{  
    let project=new projectModel({
        projectName: req.body.projectName,
        projectType: req.body.projectType,
        projectDescription: req.body.projectDescription,
        projectDeadline: req.body.projectDeadline, 
        projectMembers: req.body.projectMembers,
    })  
    console.log(project)
    project.save()
    .then(e=>{
        res.json(e) 
    }) 
    .catch(error=>{
        res.json(error)
    })
    /*
    try{
        project= await project.save()
        res.redirect(200,`/projects/${project.id}`)
    }catch(e){
        console.log(e)
        res.redirect('/projects/new')
    }
    */
}) 

router.get('/', (req, res) => {

    projectModel.find({})
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });
}); 
router.get('/:id', (req, res) => {
console.log(req.params.id  +'hhhhhh')
    projectModel.findOne ({ Id: req.params._id})
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', daerrorta); 
        });
}); 
module.exports=router 