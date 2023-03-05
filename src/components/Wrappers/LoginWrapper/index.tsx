import styled, { ThemeProvider } from 'styled-components'
import FormLogin from '../../FormLogin';
import { useEffect, useState } from 'react'
import { iLoginWrapperProps } from '../../../@types/myTypes';

function LoginWrapper(props: iLoginWrapperProps) {
    const [isOpened, setIsOpened] = useState(false)

    useEffect(() => {
        setIsOpened(true)
    }, [])

    const { type, isMobileDevice } = props
    return (
        <>
            <ThemeProvider theme={
                {
                    open: isOpened,
                    isMobileDevice: isMobileDevice 
                }
            }>
                <CreateUserDiv>
                    {type === "create" ? 
                    <FormLogin isMobileDevice={isMobileDevice} /> : 
                    <FormLogin isMobileDevice={isMobileDevice}/>}
                </CreateUserDiv>
            </ThemeProvider>
        </>
    )
}

export default LoginWrapper

const CreateUserDiv = styled.div`
    background-color:#f7f7f7;
    border-radius: 1%;
    height: ${props => (props.theme.isMobileDevice ? "100vh" : "calc(100vh - 30vh)")};
    width: ${props => (props.theme.isMobileDevice ? "100vh" : "calc(100vw - 30vw)")};
    max-height: ${props => (props.theme.open ? "100%" : "0")};
    transition: max-height 0.8s;
`