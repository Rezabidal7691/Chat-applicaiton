import React, { useEffect } from "react";
import userImage from "../../assets/images/user.png";
import toast from "react-hot-toast";
import axios from "axios";
import { useSelectedConversation } from "../../context/SelectConversationContext";
import { baseUrl } from "../../services/baseUrl";
import { useSocketContext } from "../../context/SocketContext";
function Conversation({ conversation }) {
  const {
    selectedConversation,
    setSelectedConversation,
    setMessages,
    messages,
  } = useSelectedConversation();
  const selected = selectedConversation?._id === conversation?._id;
  const {onlineUsers} = useSocketContext()
  const isOnline = onlineUsers.includes(conversation._id)
  const getMessages = async () => {
    try {
      if (selectedConversation) {
        const res = await axios.get(
          `${baseUrl}/message/${selectedConversation._id}`,
          {
            withCredentials: true,
          }
        );
        setMessages(res?.data);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    getMessages();
  }, [ selectedConversation?._id]);
  const handleClick = () => {
    setSelectedConversation(conversation);
    console.log(selectedConversation);
  };
  return (
    <div
      onClick={handleClick}
      className={`hover:bg-slate-700 transition-all duration-500 cursor-pointer w-full py-2 flex justify-start items-center gap-x-3 border-b border-slate-600 ${
        selected ? "bg-slate-700" : ""
      }`}
    >
      <div className={`avatar ${isOnline ? 'online' : ''} w-[40px] h-[40px]`}>
        <div className="w-24 rounded-full">
          <img src={userImage} />
        </div>
      </div>
      <span className="text-white text-sm">{conversation?.fullname}</span>
    </div>
  );
}

export default Conversation;
