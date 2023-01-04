import React from 'react'
import { Box, styled, Typography } from '@mui/material'
import { useContext } from 'react'
import { AccountContext } from '../../context/AccountProvider'

function Profile() {

    const { account } = useContext(AccountContext);
    console.log(account.name);
    return (
        <>
            <ImageContainer>
                <Image src={account.picture} alt="dp" />
            </ImageContainer>
            <BoxWrapper>
                <Typography>Your Name</Typography>
                <Typography>{account.name}</Typography>
            </BoxWrapper>
            <DescriptionContainer>
                <Typography>
                This name will be visible to your WhatsApp Contacts.
                </Typography>
            </DescriptionContainer>
            <Box></Box>

        </>
    )
}

const ImageContainer = styled(Box)`
    display: flex;
    justify-content: center;
`
const Image = styled("img")({
    width: 150,
    height: 150,
    borderRadius: "50%",
    padding: "25px 0"
})

const BoxWrapper = styled(Box)`
    background: #FFFFFF;
    padding: 12px 30px 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.08);

    & :first-child {
        font-size: 13px;
        color: #009688;
        font-weight: 200;
    }
    & :last-child {
        margin: 14px 0;
        color: #4a4a4a;
    }
`
const DescriptionContainer =styled(Box)`
    padding: 15px 20px 30px 30px;
    & > p {
        font-size: 13px;
        color: #869680;
    }
`

export default Profile