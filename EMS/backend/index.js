const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const logic = require('./services/logic')

const app = express()
app.use(cors({origin : "http://localhost:3000"}))
app.use(express.json())

app.listen(8000,()=>{
    console.log('Ems server started at port 8000');
})


// get all api

app.get('/get-all-employees',(req,res)=>{
    logic.allEmployee().then((result)=>{
        res.status(result.statusCode).json(result)
    })
})


// add employee from frontend

app.post('/add-employee',(req,res)=>{
    logic.addEmployee(req.body.id,req.body.name,req.body.age,req.body.desg,req.body.salary)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})


// delete an employee from api
app.delete('/delete-emp/:id',(req,res)=>{
    logic.removeEmployee(req.params.id).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})



// to get data for edit
app.get('/getEditEmployee/:id',(req,res)=>{
    logic.getEmployee(req.params.id).then((result)=>{
        console.log(result)
        res.status(result.statusCode).json(result)
 
    })
})

// update employee from frontend
app.post('/updateEmployee',(req,res)=>{
    logic.editEmployee(req.body.id,req.body.name,req.body.age,req.body.designation,req.body.salary).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})