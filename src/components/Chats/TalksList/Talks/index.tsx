import { iComponent } from "../../../../@types/myTypes"
import styled, { ThemeProvider } from "styled-components"

export default function Talks(props: iComponent) {
    const { isMobileDevice, searchStatus } = props
    return (
        <ThemeProvider theme={
            {
                isMobileDevice: isMobileDevice,
            }
        }>
            <MainDiv>
                {searchStatus === 1 ?
                <></> : 
                    <SearchingDiv>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    O Unified Sistem está buscando suas conversas, mensagens ou contatos. Por favor, aguarde!
                    </SearchingDiv>
                }
            </MainDiv>
        </ThemeProvider>
    )
}

const MainDiv = styled.div`
    background-color: #ffff;
    height: calc(100vh - 4.8rem - 2.5rem - 1.1rem);
    text-align: center;
`

const SearchingDiv = styled.div`
    text-align: center;
    font-size: 0.7rem;
    width: 100%;
    align-self: center;
    position: relative;
`