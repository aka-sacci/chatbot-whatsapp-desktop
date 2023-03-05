import { iPageProps } from "../@types/myTypes";
import TalksList from "components/Chats/TalksList";
import MainWrapper from "components/Wrappers/MainWrapper";
import styled, { ThemeProvider } from "styled-components";
import Talk from "components/Chats/Talk";
const background = require('../images/background white.jpg')

export default function Chats(props: iPageProps) {
    const { isMobileDevice } = props
    //<button onClick={logout}>Sair</button>
    return (
        <MainWrapper background={background} isInfinite={false}>
            <ThemeProvider theme={
                {
                    isMobileDevice: isMobileDevice
                }
            }>
                <MainDiv>
                    <TalksList isMobileDevice={isMobileDevice} />
                    <Talk isMobileDevice={isMobileDevice}></Talk>
                </MainDiv>
            </ThemeProvider>
        </MainWrapper>

    )
}

const MainDiv = styled.div`
    display: ${props => (props.theme.isMobileDevice ? "inline" : "flex")};;
    position: relative;
    background-color: aqua;
    height: 100vh;
    width: 100vw;
`