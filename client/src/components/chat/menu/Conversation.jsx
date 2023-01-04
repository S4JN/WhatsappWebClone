import React from 'react'
import { Box, Typography, styled } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import { AccountContext } from '../../../context/AccountProvider'
import { setConversation, getConversation } from '../../../service/api'
import { formatDate } from '../../../utils/common-utils'

function Conversation({ user }) {

    const { setPerson, account, newMessageFlag } = useContext(AccountContext);

    const [message, setMessage] = useState({});

    useEffect(() => {
        const getConversationDetails = async () => {
            const data = await getConversation({ senderId: account.sub, reciverId: user.sub })
            setMessage({ text: data?.message, timestamp: data?.updatedAt })
        }
        getConversationDetails();
    }, [newMessageFlag])

    const getUser = async () => {
        setPerson(user);
        await setConversation({ senderId: account.sub, reciverId: user.sub })
    }



    return (
        <Component onClick={() => getUser()} >
            <Box>
                <Image src={user.picture} alt="dp" />
            </Box>
            <Box style={{ width: "100%" }}>
                <Container>
                    <Typography>{user.name}</Typography>
                    {
                        message?.text &&
                        <Timestamp>{formatDate(message?.timestamp)}</Timestamp>
                    }
                </Container>
                <Box>
                    <Text>
                        {message?.text?.includes("localhost") ? "media" : message.text}
                    </Text>
                </Box>
            </Box>
        </Component>
    )
}

const Container =styled(Box)`
    display: flex;

`
const Timestamp = styled(Typography)`
    font-size: 12px;
    margin-left: auto;
    color: #00000099;
    margin-right: 20px;
`
const Text = styled(Typography)`
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);
`


const Component = styled(Box)`
    display: flex;
    height: 45px;
    padding: 13px 0;
    cursor: pointer;
`
const Image = styled("img")({
    width: 50,
    height: 50,
    borderRadius: "50%",
    padding: "0 14px"
})

export default Conversation