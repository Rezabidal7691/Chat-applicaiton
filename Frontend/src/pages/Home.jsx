import React, { useEffect } from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import MessagesContainer from '../components/messages/MessagesContainer'
import { useAuthContext } from '../context/AuthContext'

function Home() {
    const {currentUser} = useAuthContext()
    useEffect(()=>{
        console.log(currentUser);
    } , [currentUser])
  return (
    <div className=' flex justify-start items-start w-[90%] h-[450px] max-h-[450px] overflow-hidden mx-auto my-10 rounded-lg shadow-md '>
        <Sidebar/>
        <MessagesContainer/>
    </div>
  )
}

export default Home