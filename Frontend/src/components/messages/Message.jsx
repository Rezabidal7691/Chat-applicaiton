import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import { useSelectedConversation } from "../../context/SelectConversationContext";
import moment from "moment-jalaali";
moment.loadPersian({
  usePersianDigits: true,
  dialect: "persian-modern",
});
function Message({ message }) {
  const { currentUser } = useAuthContext();
  const { selectedConversation } = useSelectedConversation();
  const from = message.sender === currentUser._id;

  return (
    <div className={`${from ? "text-start" : "text-end"} w-full text-xs mt-4`}>
      <div className={`flex flex-col gap-y-2 ${from ? 'items-start justify-start' : 'items-end justify-end' }`}>
        <span className="text-slate-600 text-xs">{from ? "شما" : selectedConversation.fullname}</span>
        <div className= {`bg-slate-700 rounded-md text-gray-500 py-2 px-5 inline-block w-auto  ${message.souldShake ? 'shake' : ''}`} >
          {message.message}
        </div>
        <span className="text-slate-600 text-xs">{moment(message.updatedAt).fromNow()}</span>
      </div>
    </div>
  );
}

export default Message;
