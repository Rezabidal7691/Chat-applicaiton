import React from 'react'
import Conversation from './Conversation'

function Conversations() {
  return (
    <div className=' w-full mt-5 flex flex-col justify-start items-start h-[300px] overflow-y-auto'>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
    </div>
  )
}

export default Conversations