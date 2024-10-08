import React from "react";
import userImage from '../../assets/images/user1.jpg'
function Conversation() {
  return (
    <div className="w-full py-2 my-2 flex justify-start items-center gap-x-3 border-b border-slate-600">
      <div className="avatar online w-[40px] h-[40px]  -z-20">
        <div className="w-24 rounded-full -z-30">
          <img src={userImage} />
        </div>
      </div>
      <span className="text-white text-sm">رضا</span>
    </div>
  );
}

export default Conversation;
