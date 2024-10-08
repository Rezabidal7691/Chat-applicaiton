import React from 'react'
import MessagesHeader from './MessagesHeader'
import Messages from './Messages'
import MessageInput from './MessageInput'

function MessagesContainer() {
  return (
    <div className='w-[70%] h-full overflow-y-auto relative flex flex-col justify-between items-start'>
        <MessagesHeader/>
        <Messages/>
        <MessageInput/>
    </div>
  )
}

export default MessagesContainer