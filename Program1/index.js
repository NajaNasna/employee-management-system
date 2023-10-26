const express = require('express')                // express is the framework
const mongoose = require('mongoose')             //  mongoose used to connect mongodb with node
const cors = require('cors')       //  cors (cross-origin resource sharing) is the middleware used to connect frontend with backend ie., to connect two different ports
const Usermodel = require('./model/User')   



const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/detail")



app.get('/getUsers',(req,res)=>{
    Usermodel.find().then(users => res.json(users))
    .catch(err=> res.json(err))
})

app.listen(5000,()=>{
    console.log('server is running')
})


app.post('/submit',(req,res)=>{
    const user = new Usermodel ({
        name:req.body.name,
        age: req.body.age,
        place:req.body.place
    })

    user.save().then((user)=>res.json(user)).catch(err=>res.json(err))

})



