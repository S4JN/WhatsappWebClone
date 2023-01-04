import React from 'react'
import { useContext } from 'react';
import { AccountContext } from '../../../context/AccountProvider';
import { Box, Typography, styled } from "@mui/material"
import { Search, MoreVert } from "@mui/icons-material";
import { defaultProfilePicture } from '../../../constants/data';
import { borderRadius } from '@mui/system';


function ChatHeader({ person }) {
  
    const { activeUsers } = useContext(AccountContext);
  
  
  
  
    return (
        <Header>
            <Image src={person.picture} alt='dp' />
            <Box>
                <Name>{person.name}</Name>
                <Status>{activeUsers?.find(user => user.sub === person.sub) ? "Online" : "Offline" }</Status>
            </Box>
            <RightContainer>
                <Search />
                <MoreVert />
            </RightContainer>        
        </Header>

    )
}

const Header =styled(Box)`
    height: 44px;
    background: #ededed;
    padding: 8px 16px;
    display: flex;
    align-items: center;
`
const Image = styled("img")({
    height: 40,
    width: 40,
    objectFit: 'cover',
    borderRadius: '50%'
})

const Name =styled(Typography)` 
    margin-left: 12px;
`

const Status =styled(Typography)` 
    margin-left: 12px;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.6);

`
const RightContainer =styled(Box)`
    margin-left: auto;
    & > svg {
        padding: 8px;
        font-size: 24px;
        color: #000;
    }
`

export default ChatHeader