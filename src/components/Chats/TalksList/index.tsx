import { iComponent } from "../../../@types/myTypes"
import styled, { ThemeProvider } from "styled-components"



export default function TalksList(props: iComponent) {
    const { isMobileDevice } = props
    const profilePic = require('../../../images/background.jpg')
    return (
        <>
            <ThemeProvider theme={
                {
                    isMobileDevice: isMobileDevice,
                    profilePic: profilePic
                }
            }>
                <MainTalksDiv>
                    <Header>
                        <ProfilePic></ProfilePic>
                    </Header>
                </MainTalksDiv>
            </ThemeProvider>
        </>
    )
}

const MainTalksDiv = styled.div`
    background-color: #f0f2f5;
    height: 100vh;
    width: ${props => (props.theme.isMobileDevice ? "100vh" : "calc(100vw - 70vw)")};
    
`
const Header = styled.div`
    width: ${props => (props.theme.isMobileDevice ? "100vh" : "calc(100vw - 70vw)")};
    height: 10vh;
    background-color: #f0f2f5;
`

const ProfilePic = styled.img`
    content: url(${props => props.theme.profilePic});

    width: 40px;
    height: 40px;
    border-radius: 50%;

    margin-top: 1rem;
    margin-left: 1rem;

`