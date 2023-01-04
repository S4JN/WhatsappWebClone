import React, { useEffect, useState } from 'react'
import { Box } from "@mui/material";
import ChatHeader from './ChatHeader';
import Messages from './Messages';
import { useContext } from 'react';
import { AccountContext } from '../../../context/AccountProvider';
import { getConversation } from '../../../service/api';


function ChatBox() {
    
    const { person, account } = useContext(AccountContext);
    const [conversation, setConversation] = useState({});

    useEffect(()=>{
        const getConversationDetails = async()=>{
           let data = await getConversation({ senderId: account.sub, reciverId: person.sub})
           setConversation(data);
           //console.log(conversation,"adasfa");
        }
        getConversationDetails();
    },[person.sub]);
  
    return (
        <Box style={{ height: "75%" }}>
            <ChatHeader person={person} />
            <Messages person={person} conversation={conversation} />
        </Box>
    )
}

export default ChatBox