import React from 'react'
import MessagesHeader from './MessagesHeader'
import Messages from './Messages'

function MessagesContainer() {
  return (
    <div className='w-[70%] h-full overflow-y-auto relative'>
        <MessagesHeader/>
        <Messages/>
    </div>
  )
}

export default MessagesContainer