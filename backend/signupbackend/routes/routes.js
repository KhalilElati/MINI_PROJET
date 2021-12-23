const express=require('express')
const router = express.Router()
//copy of the Schema === schéma mtaa kol user chneya les données mtee3ou !! 
const signUpTemplateCopy=require('../models/signUpModels')

//User adding his account by signing in !!!!!!!!!
router.post('/signup', (req,res)=> {
    const signedUpUser= new signUpTemplateCopy({
        username:req.body.username,
        password:req.body.password,
    })
    //bech nsaviw les données li dakhalhom l'User w nsobouhom f file JSON 
    
    signedUpUser.save()
    .then(e=>{
        res.json(e)
    })
    //ken fama prob nraj3oulou erreur 
    .catch(error=>{
        res.json(error)
    })
})

module.exports=router 