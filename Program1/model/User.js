const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        name : String,
        age : Number,
        place : String
    }
)

const Usermodel = mongoose.model("users",userSchema)   //  user is the collection name here


module.exports = Usermodel          //  use braces if there are multiple items to export and separate the items with comma










