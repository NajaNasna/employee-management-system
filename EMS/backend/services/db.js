const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/EMS')
const Ems = mongoose.model('ems',{                         //  ems is the collection name
    id:String,
    name:String,
    age:Number,
    desg:String,
    salary:String
})

module.exports = {
    Ems
}