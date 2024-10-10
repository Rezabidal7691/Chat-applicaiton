import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useSelectedConversation } from "../../context/SelectConversationContext";
import useConversations from "../../hooks/useConversations";
import { useAuthContext } from "../../context/AuthContext";
function Search() {
  const [search, setSearch] = useState("");
  const {conversations , setConversations  , getConversations } = useConversations()
  const {setSelectedConversation}  = useSelectedConversation()
  useEffect(()=>{
    getConversations()
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    let conversation = conversations.find((conversation) => {
      return conversation.fullname.toLowerCase().includes(search.toLowerCase())
    });
    setSelectedConversation(conversation)
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full sticky top-0 right-0 flex justify-between items-center bg-base-100 p-3"
    >
      <input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        type="text"
        className="input input-bordered input-sm w-full max-w-xs ml-2"
        placeholder="جستجو"
      />
      <button
        type="submit"
        className="btn btn-primary rounded-lg text-xs btn-sm text-white "
      >
        <FaSearch />
      </button>
    </form>
  );
}

export default Search;
