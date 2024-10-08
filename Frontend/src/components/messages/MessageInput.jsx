import React from 'react'
import {BsFillSendFill  } from 'react-icons/bs'

function MessageInput() {
  return (
    <div className="w-full sticky bottom-0 right-0 flex justify-between items-center bg-base-100 p-3">
    <input
      type="text"
      className="w-[90%] input input-bordered input-sm  ml-2"
      placeholder="جستجو"
    />
    <button className="btn btn-primary rounded-lg text-xs btn-sm text-white ">
      <BsFillSendFill  />
    </button>
  </div>
  )
}

export default MessageInput