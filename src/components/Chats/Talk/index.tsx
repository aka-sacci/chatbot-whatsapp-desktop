import { iComponent } from "../../../@types/myTypes"
import styled, { ThemeProvider } from "styled-components"

export default function Talk(props: iComponent) {
    const { isMobileDevice } = props

    return (
        <>
            <ThemeProvider theme={
                {
                    isMobileDevice: isMobileDevice
                }
            }>
                <MainTalkDiv>
                    teste
                </MainTalkDiv>
            </ThemeProvider>
        </>
    )
}

const MainTalkDiv = styled.div`
    background-color: green;
    height: 100vh;
    width: ${props => (props.theme.isMobileDevice ? "100vh" : "calc(100vw - 20vw)")};
    
`