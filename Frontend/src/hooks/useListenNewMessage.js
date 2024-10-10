import { useEffect } from "react"
import { useSelectedConversation } from "../context/SelectConversationContext"
import { useSocketContext } from "../context/SocketContext"
import notificationSound from '../assets/sound/notification.mp3'
export const useListenNewMessage = ()=>{
    const {socket} = useSocketContext()
    const {messages , setMessages , } = useSelectedConversation()
    useEffect(()=> {
        socket.on('newMessage' , (newMessage)=>{
            newMessage.souldShake = true;
            const sound = new Audio(notificationSound)
            sound.play();
            setMessages([...messages , newMessage])
        })
    }  , [messages])
    console.log('message s : ' , messages);
}