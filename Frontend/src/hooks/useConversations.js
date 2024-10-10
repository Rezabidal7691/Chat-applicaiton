import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"
import { baseUrl } from "../services/baseUrl"

const useConversations = ()=>{
    const [isLoading , setIsloading] = useState(false)
    const [conversations , setConversations] = useState([])
    const [messages , setMessages ] = useState([])
    const getConversations = async ()=>{
        try {
            const res = await axios.get(`${baseUrl}/users` , {
                withCredentials : true 
            })
            setConversations(res?.data)
        } catch (error) {
            toast.error(error.message)
        }
    }
    
    return {isLoading , conversations , getConversations , setConversations}
}

export default useConversations