const express =require ('express')

const app=express()

const mongoose = require('mongoose')
const cors = require('cors')

mongoose.connect("mongodb+srv://khalil:khalil@cluster0.onzgm.mongodb.net/myTable?retryWrites=true&w=majority",
()=>console.log('successful connection'))

//bodyParser == ay objet iji sous forme JSON 
app.use(express.json())


const routeUrls = require('./signupbackend/routes/routes')
//this connectes the routes with the server 
// each URL in every middleware in routes.js is connected through this  to the app



app.use(cors())
app.use('/app',routeUrls)
app.listen(4000, ()=> console.log('sever up and running '));