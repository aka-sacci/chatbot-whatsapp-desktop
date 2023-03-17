import { iComponent } from "../../../../@types/myTypes"
import styled, { ThemeProvider } from "styled-components"

export default function Header(props: iComponent) {
    const { isMobileDevice } = props
    const profilePic = require('../../../../images/background.jpg')
    const talkIcon = require('../../../../images/icons/dialogo.png')
    const moreOptionsIcon = require('../../../../images/icons/mais.png')

    return (
        <>
            <ThemeProvider theme={
                {
                    isMobileDevice: isMobileDevice,
                    profilePic: profilePic,
                    talkIcon: talkIcon,
                    moreOptionsIcon: moreOptionsIcon
                }
            }>
                    <MainDiv>
                        <ProfilePicDiv>
                            <ProfilePic></ProfilePic>
                        </ProfilePicDiv>
                        <IconsDiv>
                            <TalkIcon
                                title="Nova conversa"></TalkIcon>
                        </IconsDiv>
                    </MainDiv>
            </ThemeProvider>
        </>
    )
}

const MainDiv = styled.div`
    width: ${props => (props.theme.isMobileDevice ? "100vh" : "calc(100vw - 70vw)")};
    height: 4.8rem;
    background-color: #f0f2f5;

    display: flex;
    position: relative;
`

const ProfilePicDiv = styled.div`
    text-align: left;
    flex: 1;
    margin-top: 1rem;
    margin-left: 1rem;
`

const IconsDiv = styled.div`
    text-align: right;
    flex: 1;
    margin-top: 1.7rem;
    margin-right: 1rem;
    width: 10%;
`

const ProfilePic = styled.img`
    content: url(${props => props.theme.profilePic});

    width: 45px;
    height: 45px;
    border-radius: 50%;
`

const TalkIcon = styled.img`
    content: url(${props => props.theme.talkIcon});

    width: 20px;
    height: 20px;
    margin-right: 2rem;

    :hover{
        cursor: pointer;
    }
`