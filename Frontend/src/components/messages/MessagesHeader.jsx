import React from "react";
import userImage1 from '../../assets/images/user.png'
import { useSelectedConversation } from "../../context/SelectConversationContext";
function MessagesHeader() {
    const {selectedConversation} = useSelectedConversation()
  return (
    <div className="bg-slate-900 py-1 px-5 w-full sticky top-0 right-0">
      <div className="w-full  my-2 flex justify-start items-center gap-x-3">
        <div className="avatar online w-[40px] h-[40px]  -z-20">
          <div className="w-24 rounded-full -z-30">
            <img src={userImage1}/>
          </div>
        </div>
        <span className="text-white text-sm">{selectedConversation.fullname}</span>
      </div>
    </div>
  );
}

export default MessagesHeader;
