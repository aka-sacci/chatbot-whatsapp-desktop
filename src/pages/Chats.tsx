import { iPageProps } from "../@types/myTypes";
import TalksList from "components/Chats/TalksList";
import MainWrapper from "components/Wrappers/MainWrapper";
import styled, { ThemeProvider } from "styled-components";
import Talk from "components/Chats/Talk";
import { useEffect, useState } from "react";
const background = require('../images/background white.jpg')

export default function Chats(props: iPageProps) {
    const { isMobileDevice } = props
    const [isOpened, setIsOpened] = useState(false)

    useEffect(() => {
        setIsOpened(true)
    }, [])
    //<button onClick={logout}>Sair</button>
    return (
        <MainWrapper background={background} isInfinite={false}>
            <ThemeProvider theme={
                {
                    open: isOpened,
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
    height: 100vh;
    width: 100vw;



    animation: fadeIn 0.7s;
    -webkit-animation: fadeIn 0.7s;
    -moz-animation: fadeIn 0.7s;
    -o-animation: fadeIn 0.7s;
    -ms-animation: fadeIn 0.7s;

    @keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@-moz-keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@-webkit-keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@-o-keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@-ms-keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
    
`