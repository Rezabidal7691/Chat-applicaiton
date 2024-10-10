import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"
import { baseUrl } from "../services/baseUrl"
import { useSelectedConversation } from "../context/SelectConversationContext"
import { useAuthContext } from "../context/AuthContext"

const useSendMessage = ()=>{
    const {selectedConversation , setMessages} = useSelectedConversation()
    const {currentUser} = useAuthContext()
    const [isLoading , setIsloading ] = useState(false)
    const sendMessage = async (msg)=>{
        try {
            setIsloading(true)
            const res = await axios.post(`${baseUrl}/message/send/${selectedConversation._id}` , {message : msg} , {
                withCredentials : true
            })
            if(res?.data?.status === 'error'){
                return toast.error(res?.data?.message)
            }
            setMessages((prev)=> {
                return [...prev , {sender : currentUser._id , receiver : selectedConversation._id , message : msg}]
            })
            
        } catch (error) {
            toast.error(error.message)
        }finally{
            setIsloading(false)
        }
    }
    return {isLoading , sendMessage}
}

export default useSendMessage