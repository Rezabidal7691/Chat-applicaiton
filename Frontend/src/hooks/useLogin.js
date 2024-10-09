import axios from "axios"
import { useState } from "react"
import { baseUrl } from "../services/baseUrl"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/AuthContext"

const useLogin = ()=>{
    const [isLoading , setIsloading] = useState(false)
    const {currentUser, setCurrentUser} = useAuthContext()
    const login = async (data)=>{
        try {
            setIsloading(true)
            const res = await axios.post(`${baseUrl}/auth/signin` , data, {
                withCredentials : true 
            })
            console.log(res);
            if(res?.data?.status === 'success'){
                toast.success('عملیات ورود با موفقیت انجام شد .')
                setCurrentUser(res?.data?.user)
            }else{
                throw new Error(res?.data?.message || 'خطایی ناشناخته رخ داد')
            }
        } catch (error) {
            toast.error(error.message)
        }finally {
            setIsloading(false)
        }
    }
    return {login , isLoading}
}

export default useLogin