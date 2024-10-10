import { createContext, useContext, useState } from "react";

const SelectConversation = createContext();
export const useSelectedConversation = ()=> useContext(SelectConversation)
export const SelectConversationProvider = ({children})=>{
    const [selectedConversation , setSelectedConversation] = useState(null);
    const [messages , setMessages] = useState([])
    return (
    <SelectConversation.Provider value={{selectedConversation , setSelectedConversation , messages, setMessages}}>
        {children}
    </SelectConversation.Provider>
    )
}
