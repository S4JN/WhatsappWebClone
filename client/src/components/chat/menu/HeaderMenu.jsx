import { useState } from 'react'
import { MoreVert } from '@mui/icons-material'
import { Menu, MenuItem, styled } from '@mui/material';

function HeaderMenu( {setOpenDrawer} ) {

    const [open, setOpen] = useState(null);
    const handleClose= () =>{
        setOpen(null);
    }
    const handleClick =(e) =>{
        setOpen(e.currentTarget);
    }



    return (
        <>
            <MoreVert onClick={handleClick} />
            <Menu
                id="basic-menu"
                anchorEl={open}
                keepMounted
                open={open}
                onClose={handleClose}
                getContentAnchorE1={null}
                anchorOrigin= {{
                    vertical: "bottom",
                    horizontal: "center"
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                }}
            >
                <MenuOption onClick={()=> { handleClose(); setOpenDrawer(true); }}>Profile</MenuOption>
                <MenuOption onClick={handleClose}>Logout</MenuOption>
            </Menu>

        </>
    )
}

const MenuOption = styled(MenuItem)`
    font-size: 14px;
    padding: 15px 60px 5px 24px;
    color: #4a4a4a;
`

export default HeaderMenu