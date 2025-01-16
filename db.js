const mongoose = require('mongoose');
const { number } = require('zod');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;





const userSchema = new Schema({
    email : {type : String , unique : true},
    password : String,
    firstName : String,
    lastName : String
})

const adminSchema = new Schema({
    email : {type : String , unique : true},
    password : String,
    firstName : String,
    lastName : String
})

const courseSchema = new Schema({
   
    title : String,
    description : String,
    imageUrl : String,
    price : Number,
    creatorId : ObjectId
})

const purchaseSchema = new Schema({
    courseId : ObjectId,
    userId : ObjectId
})

const userModel = mongoose.model("users" , userSchema)
const adminModel = mongoose.model("admin" , adminSchema)
const courseModel = mongoose.model("courses" , courseSchema)
const purchaseModel = mongoose.model("purschase" , purchaseSchema)

module.exports = {
    userModel ,
    adminModel ,
    courseModel ,
    purchaseModel
}
