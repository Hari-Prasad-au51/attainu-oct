

import { Box, styled } from "@mui/material";

import { useContext, useState, useEffect } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { getMessages, newMessage } from "../../../service/api";

import Footer from "./Footer";
import Message from "./Message";

const Wrapper = styled(Box)`
    background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    background-size: 50%
`;
const Component = styled(Box)`
    height: 75vh;
    overflow-y: scroll;
    width: 100%;
`;

const Messages = ({ person, conversation }) => {

    const [value, setValue] = useState('');
    const [ messages, setMessages ] = useState([]);
    const [newMessageFlag, setNewMessageFlag] = useState(false);
    const [ incomingMessage, setIncomingMessage ] = useState(null);

    const{ account, socket } = useContext(AccountContext);

    useEffect(() => {
        socket.current.on('getMessage', data => {
            setIncomingMessage({
                ...data,
                createdAt: Date.now()
            })
        })
    }, [])

    useEffect(() => {
        const getMessageDetails = async () => {
            let data = await getMessages(conversation._id);
            setMessages(data);
        }
        conversation._id && getMessageDetails();
    }, [person._id, conversation._id, newMessageFlag]);

    useEffect(() => {
        incomingMessage && conversation?.members?.includes(incomingMessage.senderId) && 
        setMessages(prev => [...prev, incomingMessage])
    }, [incomingMessage, conversation])


    const sendText = async (e) => {
        
        const code = e.keyCode || e.which;
        if(code === 13){
            let message ={
                senderId: account.sub,
                receiverId: person.sub,
                conversationId: conversation._id,
                type: "text",
                text: value
            }

            socket.current.emit('sendMessage', message);
            
            await newMessage(message);

            setValue('');
            setNewMessageFlag(prev => !prev)
        }
    }

    return(
        <Wrapper>
            <Component>
                {
                    messages && messages.map(message =>(
                        <Message message={message} />
                    ))
                }
            </Component>
            <Footer 
                sendText = {sendText}
                setValue={setValue}
                value={value}
            />
        </Wrapper>
    )
}


export default Messages;



// ({
//     backgroundImage: 'url(${`})'
// })