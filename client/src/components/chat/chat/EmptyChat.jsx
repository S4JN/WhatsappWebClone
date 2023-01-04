import { Box, Typography, styled, Divider } from '@mui/material'
import React from 'react'
import { emptyChatImage } from '../../../constants/data'

function EmptyChat() {
  return (
    <Component>
        <Container>
            <Image src={emptyChatImage} alt="img"/>
            <Title>
                Whatsapp Made By Srajan
            </Title>
            <SubTitle>
                Now send messages fast
            </SubTitle>
            <SubTitle>lorem ipsum sit emet asafsdkg faadf</SubTitle>
            <StyledDivider />
        </Container>
    </Component>
    )
}

const Component =styled(Box)`
    background: #f8f9fa;
    padding: 30px 0;
    text-align: center;
    height: 100vh;

`
const Container =styled(Box)`
    padding: 0 200px;
`
const Image =styled("img")({
    width: 400,
    marginTop: 100
})

const Title =styled(Typography)`
    font-size: 32px;
    margin: 25px 0 10px 0;
    font-family: inherit;
    font-weight: 300;
    color: #415253
`
const SubTitle= styled(Typography)`
    font-size: 14px;
    color: #667781;
    font-weight: 400;
    font-family: inherit;
`
const StyledDivider =styled(Divider)`
    margin: 40px 0;
    opacity: 0.4;
`

export default EmptyChat