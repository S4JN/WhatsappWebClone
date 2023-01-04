import React from 'react'
import { useEffect } from 'react';
import { Box, InputBase, styled } from '@mui/material'
import { EmojiEmotionsOutlined, AttachFile, Mic} from '@mui/icons-material';
import { uploadFile } from '../../../service/api';

function Footer({ sendText, setValue, value, file, setFile, setImage }) {


    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);

               let response = await uploadFile(data);
               setImage(response.data);
            }
        }
        getImage();
    }, [file])

    const onFileChange = (e) => {
        console.log(e);
        setFile(e.target.files[0]);
        setValue(e.target.files[0].name);
    }


    return (
        <Container>
            <EmojiEmotionsOutlined />
            <label htmlFor='fileInput'>
                <ClipIcon />
            </label>
            <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={(e) => onFileChange(e)}
            />
            <Search>
                <InputField
                    placeholder='Type a message'
                    onChange={(e) => setValue(e.target.value)}
                    onKeyPress={(e) => sendText(e)}
                    value={value}
                />
            </Search>
            <Mic />
        </Container>
    )
}

const Container = styled(Box)`
    height: 60px;
    background: #ededed;
    display: flex;
    width: 100%;
    align-items: center;
    padding: 5px 15px;
    padding-bottom : 9px;
    & > * {
        margin: 5px;
        color: #919191;
    }
`;
const Search = styled(Box)`
    background-color: #ffffff;
    border-radius: 10px;
    width: calc(94% - 100px);
`

const InputField = styled(InputBase)`
    width: 100%;
    padding: 20px;
    height: 20px;
    padding-left: 25px;
    font-size: 15px;
`
const ClipIcon = styled(AttachFile)`
    transform: rotate(40deg);
    cursor: pointer
`

export default Footer