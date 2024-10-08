import React from 'react'
import {CiLogout } from 'react-icons/ci'
export default function LogoutButton() {
  return (
    <div className='sticky z-[10000] text-xl text-slate-400 bg-base-100 p-1 rounded-full  cursor-pointer bottom-0 right-2'>
        <CiLogout/>
    </div>
  )
}
