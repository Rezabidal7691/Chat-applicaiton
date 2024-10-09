import React from 'react'
import Search from './Search'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

function Sidebar() {
  return (
    <div className='relative w-[30%] min-w-[200px] flex flex-col justify-start items-start gap-y-2 h-full pb-10'>
        <Search/>
        <Conversations/>
        <LogoutButton/>
    </div>
  )
}

export default Sidebar