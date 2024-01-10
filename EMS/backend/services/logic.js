const db = require('./db')


const allEmployee = () =>{
    return db.Ems.find().then(
        (result) =>{
            console.log(result)
            if(result){
                return{
                    statusCode:200,
                    employees:result
                }
            }else{
                return{
                    statusCode: 404,
                    message: "no data found"
                }
            }
        }
    )
}


const addEmployee = (id, empName, age, desg, salary)=>{
    return db.Ems.findOne({id}).then((result)=>{
        if(result){
            return{
                statusCode : 401,
                message : "employee already exist"
            }
        } 
        else{
            const newEmp = new db.Ems({
                id,
                name:empName,
                age,
                desg,
                salary
            })
            newEmp.save()

            return{
                statusCode:200,
                message:"new data successfully added"
            }
        }
    })
}


const removeEmployee = (id) =>{
    return db.Ems.deleteOne({id}).then((result)=>{
        if(result){
            return{
                statusCode : 200,
                message : "Data removed successfully"
            }
        }else{
            return{
                statusCode: 404,
                message: 'Data not found'
            }
        }
    })
}



// to get the details of the employee which we are going to edit
const getEmployee = (id) =>{
    return db.Ems.findOne({id}).then((result)=>{
        if(result){
            return{
                statusCode : 200,
                employee : result
            }          

        }else{
            return{
                statusCode: 404,
                message : 'Data not found'
            }
        }
    })
}

const editEmployee = (id,name,age,designation,salary) =>{
    return db.Ems.findOne({id}).then((result)=>{
        if(result){
            result.id=id,
            result.name= name,
            result.age = age,
            result.desg = designation,
            result.salary=salary
            result.save()
            return{
                statusCode:200,
                message:"updated successfully"
            }
        }else{
            return{
                statusCode:404,
                message:"updation failed"
            }
        }
    })

}


module.exports = {allEmployee, addEmployee, removeEmployee,getEmployee,editEmployee}