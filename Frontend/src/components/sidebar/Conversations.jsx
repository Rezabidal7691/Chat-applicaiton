import React, { useEffect } from "react";
import Conversation from "./Conversation";
import useConversations from "../../hooks/useConversations";
import { useAuthContext } from "../../context/AuthContext";

function Conversations() {
    const { currentUser } = useAuthContext()
  const { isLoading, conversations, getConversations } = useConversations();
  useEffect(() => {
    getConversations();
  }, [conversations , currentUser]);
  return (
    <div className=" w-full mt-5 flex flex-col justify-start items-start h-[300px] overflow-y-auto">
      {conversations.map((conversation) => (
        <Conversation key={conversation._id} conversation={conversation} />
      ))}
    </div>
  );
}

export default Conversations;
