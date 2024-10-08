import Conversation from "../Models/Conversation.js";
import Message from "../Models/Message.js";
import User from "../Models/User.js";

class MessageController{
    async sendMessage (req, res ,next){
        try {
            const sender =  req.user._id;
            const {receiver} = req.params;
            const {message} = req.body;
            if(!message) return res.status(400).json({status : 'error' , message : "پیامی وارد نشده است"})
            if(!receiver) {
                return res.status(400).json({status : 'error' , message : "کاربری برای ارسال انتخاب نشده است"})
            }
            const receiverUser = await User.findById(receiver)
            if(!receiverUser) {
                return res.status(400).json({status : 'error' , message : "کاربری یافت نشد"})
            }
            let conversation = await Conversation.findOne({participants : {$all : [sender , receiver ]}})
            if(!conversation){
                conversation = await Conversation.create({
                    participants  : [sender , receiver ],
                })
            }
            const newMessage = new Message({
                sender ,
                receiver,
                message
            })
            conversation.messages = [...conversation.messages , newMessage]
            await newMessage.save()
            await conversation.save()
            res.json({status : 'success' , conversation, newMessage})
        } catch (error) {
            next(error)
        }
    }
    async getMessages(req, res ,next){
        try {
            const sender = req.user._id;
            const {receiver} = req.params;
            const conversation = await Conversation.findOne({participants : {$in : [sender , receiver]}}).populate({path : 'messages'})
            console.log(conversation);
            if(conversation.length === 0 ){
                return res.json([])
            }
            const messages = conversation.messages;
            return res.json(messages)
        } catch (error) {
            next(error)
        }
    }
}

export default new MessageController()