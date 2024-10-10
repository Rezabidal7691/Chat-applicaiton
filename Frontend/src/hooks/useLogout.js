import axios from "axios"
import toast from "react-hot-toast"
import { baseUrl } from "../services/baseUrl"
import { useState } from "react"
import { useAuthContext } from "../context/AuthContext"

const useLogout = ()=>{

    const [isLoading , setIsloading] = useState(false)
    const {setCurrentUser} = useAuthContext() 
    const logout = async ()=>{
        try {
            setIsloading(true)
            const res = await axios.get(`${baseUrl}/auth/logout` , {
                withCredentials : true 
            })
            if(res?.data?.status === 'success'){
                toast.success('عملیات خروج با موفقیت انجام شد .')
                setCurrentUser(null)
            }else{
                throw new Error(res?.data?.message || 'خطایی ناشناخته رخ داد')
            }
        } catch (error) {
            toast.error(error.message)
        }finally{
            setIsloading(false)
        }
    }
    return {isLoading , logout}
}

export default useLogout