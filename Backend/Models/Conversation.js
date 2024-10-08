import mongoose, { Schema } from "mongoose";

const Conversation = new Schema({
    participants :[ {type : Schema.Types.ObjectId , ref : "User"}],
    messages : [{type : Schema.Types.ObjectId , ref : "Message"}]
} , {
    timestamps : true 
})


export default mongoose.model('Conversation' , Conversation)