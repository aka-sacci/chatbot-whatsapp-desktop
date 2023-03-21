import { iComponent } from "../../../../@types/myTypes"
import styled, { ThemeProvider } from "styled-components"
import { useContext, useEffect, useState, useRef } from "react"
import { AuthContext } from "providers/AuthProvider"
import { useNavigate } from 'react-router-dom'

export default function Header(props: iComponent) {
    const { isMobileDevice } = props
    const profilePic = require('../../../../images/background.jpg')
    const talkIcon = require('../../../../images/icons/dialogo.png')
    const moreOptionsIcon = require('../../../../images/icons/mais.png')
    const [optionButtonisToggled, setOptionButtonIsToggled] = useState(false)
    const { onLogout } = useContext(AuthContext)
    const refDiv = useRef<HTMLDivElement>(null);
    const nav = useNavigate()

    const handleToggleButton = () => {
        setOptionButtonIsToggled(!optionButtonisToggled)
    }

    const handleLogout = async () => {
        await onLogout()
        nav('/login')
    }

    useEffect(() => {

        const clickOutsideListener = (event: any) => {
            if (optionButtonisToggled && refDiv.current && !refDiv.current.contains(event.target)) {
                setOptionButtonIsToggled(false)
            }
        }
        document.addEventListener("mousedown", clickOutsideListener);
        return () => {
            document.removeEventListener("mousedown", clickOutsideListener);
        };

    }, [optionButtonisToggled]);

    return (
        <>
            <ThemeProvider theme={
                {
                    isMobileDevice: isMobileDevice,
                    profilePic: profilePic,
                    talkIcon: talkIcon,
                    moreOptionsIcon: moreOptionsIcon,
                    optionButtonisToggled: optionButtonisToggled
                }
            }>
                <MainDiv>
                    <ProfilePicDiv>
                        <ProfilePic></ProfilePic>
                    </ProfilePicDiv>
                    <IconsDiv>
                        <TalkIcon
                            title="Nova conversa"></TalkIcon>
                        <MoreOptionsIcon title="Mais opções"
                            onClick={() => handleToggleButton()}
                        ></MoreOptionsIcon>
                    </IconsDiv>
                    <OptionsDiv ref={refDiv}>
                        <NewOption onClick={handleLogout}>Desconectar</NewOption>
                    </OptionsDiv>
                </MainDiv>
            </ThemeProvider>
        </>
    )
}

const MainDiv = styled.div`
    width: ${props => (props.theme.isMobileDevice ? "100vh" : "calc(100vw - 70vw)")};
    height: 4rem;
    background-color: #f0f2f5;

    display: flex;
    position: relative;
`

const ProfilePicDiv = styled.div`
    text-align: left;
    flex: 1;
    margin-top: 0.6rem;
    margin-left: 1rem;
`

const IconsDiv = styled.div`
    text-align: right;
    flex: 1;
    margin-top: 1.4rem;
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
    margin-right: 1.5rem;

    :hover{
        cursor: pointer;
    }
`

const MoreOptionsIcon = styled.img`
    content: url(${props => props.theme.moreOptionsIcon});

    width: 20px;
    height: 20px;
    margin-right: 1rem;

    :hover{
        cursor: pointer;
    }
`
const OptionsDiv = styled.div`
    position: absolute;
    height: 2rem;
    width: 7rem;

    left: calc(100vw - 78vw);
    top: 4rem;

    text-align: center;
    background-color: #ffff;
    z-index: 1;
    border: 0.1px solid;
    visibility: ${props => props.theme.optionButtonisToggled ? 'visible' : 'hidden'};

    transform: ${props => (props.theme.optionButtonisToggled ? "scale(1, 1)" : "scale(0.1, 0.5)")};
    transition: transform 0.2s;


`

const NewOption = styled.div`
    margin-top: 0.25rem;
    :hover{
        cursor: pointer;
        background-color: #f0f2f5;
    }
`