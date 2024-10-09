import axios from "axios"
import toast from "react-hot-toast"
import { baseUrl } from "../services/baseUrl"
import { useAuthContext } from "../context/AuthContext"
import { useState } from "react"

const useSignup = ()=>{
    const {setCurrentUser, currentUser } = useAuthContext()
    const [isLoading , setIsloading] = useState(false)
    const signup = async (data)=>{
        try {
            setIsloading(true)
            const res = await axios.post(`${baseUrl}/auth/signup` , data , {
                withCredentials : true 
            })
            if(res?.data?.status === 'success'){
                toast.success('عملیات ثبت نام با موفقیت انجام شد .')
                setCurrentUser(res?.data?.user)
            }else{
                throw new Error(res?.data?.message || 'خطایی ناشناخته رخ داد')
            }
        } catch (error) {
            toast.error(error.message)
        }finally{
            setIsloading(false)
        }
    }
    return {isLoading , signup}
}

export default useSignup