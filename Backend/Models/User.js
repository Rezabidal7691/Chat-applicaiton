import mongoose, { Schema } from "mongoose";

const User = new Schema({
    fullname : {type : String , required  :true },
    username : {type : String , required : true },
    password : {type : String , required : true },
    avatar : {type : String , default : 'user.png'}
} , {
    timestamps : true 
})


export default mongoose.model('User' , User)