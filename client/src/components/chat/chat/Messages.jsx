import { Box, styled, Typography } from '@mui/material'
import Footer from './Footer';
import Message from './Message';
import { useContext, useState, useEffect, useRef } from 'react';
import { AccountContext } from "../../../context/AccountProvider"
import { getMessages, newMessage, getConversation } from '../../../service/api';

const Messages = ({ conversation, person }) => {


    const [value, setValue] = useState("");
    const [messages, setMessages] = useState([]);
    // const [newMessageFlag, setNewMessageFlag] = useState(false);
    const [file, setFile] = useState();
    const [image, setImage]= useState("");
    const [incomingMessage, setIncomingMessage]= useState(null);
    //const [conversation, setConversation] = useState({});
    const scrollRef = useRef();
    const { account, socket, newMessageFlag, setNewMessageFlag } = useContext(AccountContext);


    useEffect(()=>{
        socket.current.on("getMessage", data => {
            setIncomingMessage({
                ...data,
                createdAt: Date.now()
            })
        })
    },[])


    // const { person }= useContext(AccountContext);
    //console.log(conversation,"yevala");


    useEffect(() => {

        // const getConversationDetails = async()=>{
        //     let data = await getConversation({ senderId: account.sub, reciverId: person.sub})
        //     setConversation(data);
        //     //console.log(conversation,"adasfa");
        //  }
        //  getConversationDetails();


        const getMessageDetails = async () => {
            let data = await getMessages(conversation._id);
            console.log(data);
            setMessages(data);


        }
        conversation._id && getMessageDetails();

    }, [person._id, conversation._id, newMessageFlag])

    useEffect(()=>{
        scrollRef.current?.scrollIntoView({transition: "smooth"})
    },[messages])

    useEffect(()=>{
        incomingMessage && conversation?.members?.includes(incomingMessage.senderId) &&
            setMessages(prev => [...prev, incomingMessage])
    }, [incomingMessage, conversation])

    const sendText = async (e) => {

        const code = e.keyCode || e.which;
        if (code === 13) {
            let message = {};
            if(!file) {

                message = {
                    senderId: account.sub,
                    reciverId: person.sub,
                    conversationId: conversation._id,
                    type: "text",
                    text: value
                }
            } else {
                message = {
                    senderId: account.sub,
                    reciverId: person.sub,
                    conversationId: conversation._id,
                    type: "file",
                    text: image
                }
            }
            console.log(message);

            socket.current.emit("sendMessage", message);
            
            await newMessage(message);

            setValue("");
            setFile("");
            setImage("")
            setNewMessageFlag(prev => !prev)
        }
    }

    return (
        <Wrapper>
            <Component>
                {
                    messages && messages.map(message => (

                        <Container ref={scrollRef}>
                            <Message message={message} />
                        </Container>

                    ))
                }
            </Component>
            <Footer
                sendText={sendText}
                setValue={setValue}
                value={value}
                file={file}
                setFile={setFile}
                setImage={setImage}
            />
        </Wrapper>
    )
}

const Wrapper = styled(Box)`
    background-image: url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"});
    background-size: 50%;
`
const Component = styled(Box)`
    height: 77vh;
    overflow-y: scroll;
`
const Container = styled(Box)`
    padding: 1px 80px;
`

export default Messages