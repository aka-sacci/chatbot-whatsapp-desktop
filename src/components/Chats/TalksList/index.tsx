import { iComponent } from "../../../@types/myTypes"
import styled, { ThemeProvider } from "styled-components"
import Header from "./Header"
import { useEffect, useState } from "react"
import TalksFilter from "./TalksFilterDiv"
import Talks from "./Talks"



export default function TalksList(props: iComponent) {
    const { isMobileDevice } = props
    const [searchbarText, setSearchbarText] = useState<String>('')
    const [searchStatus, setSearchStatus] = useState<Number>(0)

    const handleSearchbar = async (searchbarTextFromChild: string) => {
        setSearchbarText(searchbarTextFromChild)
    }

    const handleSearchStatus = (loginStatusFromChild: number) => {
        setSearchStatus(loginStatusFromChild)
    }

    useEffect(() => {
        if (searchbarText === "") {
            console.log(`Retorna todas as conversas`)
        } else {
            console.log(`Procura ${searchbarText} no DB`)
        }

    }, [searchbarText])

    return (
        <>
            <ThemeProvider theme={
                {
                    isMobileDevice: isMobileDevice,
                }
            }>
                <MainTalksDiv>
                    <Header isMobileDevice={isMobileDevice} />
                    <BodyDiv>
                        <TalksFilter isMobileDevice={isMobileDevice} handleSearchbar={handleSearchbar} handleSearchStatus={handleSearchStatus} />
                        <Talks isMobileDevice={isMobileDevice} searchStatus={searchStatus}></Talks>
                    </BodyDiv>
                </MainTalksDiv>
            </ThemeProvider>
        </>
    )
}

const MainTalksDiv = styled.div`
    background-color: #ffffff;
    height: 100vh;
    width: ${props => (props.theme.isMobileDevice ? "100vh" : "calc(100vw - 70vw)")};
    
`
const BodyDiv = styled.div`
    background-color: #ffffff;
    height: calc(100vh - 4.8rem - 2.5rem - 1.1rem);
`