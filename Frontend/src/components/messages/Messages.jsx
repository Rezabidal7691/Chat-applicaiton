import React, { useEffect, useRef, useState } from "react";
import { useSelectedConversation } from "../../context/SelectConversationContext";
import toast from "react-hot-toast";
import axios from "axios";
import { baseUrl } from "../../services/baseUrl";
import Message from "./Message";
import { useListenNewMessage } from "../../hooks/useListenNewMessage";

function Messages() {
  const { selectedConversation, setSelectedConversation, messages } =
    useSelectedConversation();
    const lastMessage = useRef();
    useListenNewMessage()
  useEffect(() => {
    setTimeout(() => {
      lastMessage.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages , selectedConversation]);
  return (
    <div className="my-5 px-5 w-full flex flex-col h-[300px] overflow-y-auto pb-5 ">
      {messages.length > 0 ? (
        <>
          {messages.map((message , index) => (
            <div key={index} ref={lastMessage} >
              <Message message={message}/>
            </div>
          ))}
        </>
      ) : (
        <p className="w-full h-full flex justify-center items-center text-slate-400 text-xs">پیامی وجود ندارد </p>
      )}
    </div>
  );
}

export default Messages;
