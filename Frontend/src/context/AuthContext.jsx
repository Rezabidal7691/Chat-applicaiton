import axios from 'axios'
import { createContext, useContext, useEffect, useState } from "react";
import { baseUrl } from '../services/baseUrl';
const AuthContext = createContext()

export const useAuthContext = ()=> useContext(AuthContext)

export const AuthContextProvider = ({children})=>{
    const [currentUser , setCurrentUser ] = useState(null)

    const getCurrentUser = async ()=>{
        try {
            const res = await axios.get(`${baseUrl}/auth/profile` , {
                withCredentials : true
            }) 
            setCurrentUser(res?.data?.user)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{ 
        getCurrentUser()
    } , [currentUser?._id])
    return (
    <AuthContext.Provider value={{currentUser , setCurrentUser}}>
        {children}
    </AuthContext.Provider>
    )
}