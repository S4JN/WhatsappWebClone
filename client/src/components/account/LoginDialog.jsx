
import { Dialog, Box, Typography,List, ListItem,styled } from "@mui/material";
import { qrCodeImage } from "../../constants/data";
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { addUser } from "../../service/api";

const dialogStyle={
    height: "96%",
    marginTop: "12%",
    width: "60%",
    maxWidth: "100%",
    maxHeight: "100%",
    boxShadow: "none",
    overflow: "hidden"


}
const LoginDialog = () => {
    
    const { setAccount }= useContext(AccountContext);

    const onLoginSuccess =async (res)=>{
        console.log("login success");
        const decoded = jwt_decode(res.credential);
        console.log(decoded);
        setAccount(decoded);
        await addUser(decoded);
    }
    
    const onLoginError =(res)=>{
        console.log("login error");
        console.log(res);
    }
    
    
    return (
        <Dialog
            open={true}
            PaperProps={{sx: dialogStyle}}
            hideBackdrop={true}
        >
            <Component>
                <Container>
                    <Title>To Use Whatsapp On Your Computer: </Title>
                    <StyledList>
                        <ListItem>1. Open Whatsapp on ypur phone</ListItem>
                        <ListItem>2. Tap on Menu vagera</ListItem>
                        <ListItem>3. Scan kro Qr Code aor raz ki baat jano</ListItem>

                    </StyledList>
                </Container>
                <Box  style={{position: "relative"}}>
                    <Qrcode src={qrCodeImage} alt="qr-code"></Qrcode>
                    <Box style={{position: "absolute", top: "50%", transform: "translateX(25%)"}}>
                        <GoogleLogin
                            onSuccess={onLoginSuccess}
                            onError={onLoginError}
                        
                         />
                    </Box>

                </Box>
            </Component>
        </Dialog>
    )
}


const Title=styled(Typography)`
    font-size: 26px;
    color: #525252;
    font-weight: 300;
    font-family: inherit;
    margin-bottom: 25px;

`
const StyledList = styled(List)`
    & > li{
        padding: 0;
        margin-top: 15px;
        font-size: 18px;
        line-height:28px;
        color: #4a4a4a;
    }
`


const Component=styled(Box)`
    display: flex;
`
const Container= styled(Box)`
    padding: 56px 0px 0px 56px;
`
const Qrcode= styled("img")({
    height: 264,
    width: 264,
    margin: "50px 0 0 50px"

})

export default LoginDialog;