import mongoose from "mongoose";

const loginSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    join:{type:Date,default:Date.now}
})

const loginModel = mongoose.model('users',loginSchema)

export default loginModel