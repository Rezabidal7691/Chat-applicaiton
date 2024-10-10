import React, { useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import { useSelectedConversation } from "../../context/SelectConversationContext";
import useSendMessage from "../../hooks/useSendMessage";

function MessageInput() {
  const { selectedConversation, messages, setMessages } =
    useSelectedConversation();
    const {sendMessage , isLoading}  = useSendMessage()
  const [msg, setMsg] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!msg) return ;
    sendMessage(msg)
    setMsg('')
  }
  return (
    <form onSubmit={handleSubmit} className="w-full sticky bottom-0 right-0 flex justify-between items-center bg-base-100 p-3">
      <input
        onChange={(e) => setMsg(e.target.value)}
        value={msg}
        type="text"
        className="w-[90%] input input-bordered input-sm  ml-2"
        placeholder="پیامی بنویسید ... "
      />
      <button className="btn btn-primary rounded-lg text-xs btn-sm text-white ">
        <BsFillSendFill />
      </button>
    </form>
  );
}

export default MessageInput;
