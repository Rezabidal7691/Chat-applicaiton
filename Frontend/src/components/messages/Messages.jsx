import React from "react";

function Messages() {
  return (
    <div className="my-5 px-5 w-full flex flex-col h-[300px] overflow-y-auto pb-5">
      <div className="text-end w-full text-xs mt-4">
        <div className="bg-slate-700 rounded-md text-gray-500 inline-block py-2 px-5">
          سلام رضا خوبی ؟
        </div>
      </div>
      <div className="text-start w-full text-xs mt-4">
        <div className="bg-slate-700 rounded-md text-gray-500 inline-block py-2 px-5">
          سلام ممنونم تو خوبی ؟
        </div>
      </div>

    </div>
  );
}

export default Messages;
