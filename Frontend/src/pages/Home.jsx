import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import MessagesContainer from '../components/messages/MessagesContainer'

function Home() {
  return (
    <div className=' flex justify-start items-start w-[90%] h-[450px] max-h-[450px] overflow-hidden mx-auto my-10 rounded-lg shadow-md '>
        <Sidebar/>
        <MessagesContainer/>
    </div>
  )
}

export default Home