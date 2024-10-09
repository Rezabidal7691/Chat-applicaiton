import React from "react";
import MessagesHeader from "./MessagesHeader";
import Messages from "./Messages";
import MessageInput from "./MessageInput";

function MessagesContainer() {
  const selectedC = false;
  return (
    <>
      {selectedC ? (
        <div className="w-[70%] h-full overflow-y-auto relative flex flex-col justify-between items-start">
          <MessagesHeader />
          <Messages />
          <MessageInput />
        </div>
      ) : (
        <div className="w-full h-full flex flex-col justify-center items-center ">
          <h1 className="mb-5 text-slate-500 text-lg">
           <span> به </span>
            <span className="text-primary font-bold text-xl"> چتینـــــو </span>{" "}
            خوش آمدید :) 
          </h1>
            <p className="text-sm text-slate-400 mt-4">برای گفتگو با دوستانتان از منو دوست خودتان را انتخاب کنید </p>
        </div>
      )}
    </>
  );
}

export default MessagesContainer;
