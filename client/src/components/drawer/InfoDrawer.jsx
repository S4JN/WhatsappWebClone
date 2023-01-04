import React from 'react'
import { Drawer, Typography, Box, styled } from '@mui/material';
import Profile from './Profile';
import { ArrowBack } from '@mui/icons-material';

const drawerStyle = {
    left: 20,
    top: 17,
    height: "95%",
    width: "32.8%",
    boxShadow: "none",

}

const InfoDrawer = ({ open, setOpen }) => {

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Drawer
            open={open}
            onClose={handleClose}
            PaperProps={{ sx: drawerStyle }}
            style={{ zIndex: 1500 }}
        >
            <Header>
                <ArrowBack onClick={handleClose} />
                <Typography>Profile</Typography>
            </Header>
            <Component>
                <Profile />
            </Component>
        </Drawer>
    )
}


const Header = styled(Box)`
    background: #008069;
    height: 107px;
    color: #FFFFFF;
    display: flex;
    & > svg, & >p {
        margin-top: auto;
        padding: 20px;
        font-weight: 600;
    }
`;

const Component =styled(Box)`
    background: #ededed;
    height: 85%;
`

export default InfoDrawer