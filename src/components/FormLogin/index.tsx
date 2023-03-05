import { useContext, useEffect, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { iComponent, iEvent } from '../../@types/myTypes'
import ErrorWrapper from '../Wrappers/ErrorWrapper'
import { AuthContext } from '../../providers/AuthProvider'
import { useNavigate } from 'react-router-dom'
const leftBG = require('../../images/leftBG.jpg')

export default function FormLogin(props: iComponent) {

    const [inputUsid, setInputUsid] = useState<string>("")
    const [inputPassword, setInputPassword] = useState<string>("")
    const [error, setError] = useState<Error>(Error)
    const [errorBool, setErrorBool] = useState<boolean>(false)
    const [isOpened, setIsOpened] = useState(false)
    const { isMobileDevice } = props
    const nav = useNavigate()
    const { onLogin } = useContext(AuthContext)
    useEffect(() => {
        setIsOpened(true)
    }, [])

    const inputsHandler = (e: iEvent) => {
        switch (e.target.name) {
            case "usid":
                setInputUsid(e.target.value)
                break
            case "password":
                setInputPassword(e.target.value)
                break
        }
    }

    const submitHandler = async (e: any) => {
        e.preventDefault()
        setErrorBool(false)
        try {
            await onLogin({ password: inputPassword, usid: inputUsid })
            nav('/chats')

        } catch (err: any) {
            setInputPassword("")
            setError(err)
            setErrorBool(true)
        }
    }

    return (
        <MainDiv>

            <ThemeProvider theme={
                {
                    open: isOpened,
                    isMobileDevice
                }
            }>
                <ChildDiv>
                    {isMobileDevice ? <br /> : <></>}
                    <WelcomeBack>BEM VINDO DE VOLTA!</WelcomeBack>
                    <HrElement />
                    <GreetingText>Você está prestes a acessar o sistema Unified Store, o qual foi desenvolvido com muito ❤️ pela equipe da RJL, visando melhorar a comunicação dos clientes com a loja, tudo por um único portal. Aproveite!</GreetingText>
                    {isMobileDevice ? <br /> : <></>}
                </ChildDiv>
                <ChildDiv>
                    <center>
                        {errorBool ? <ErrorWrapper error={error} /> : <></>}
                        <Title>Conecte-se ao Unified Store</Title>

                        <form onSubmit={submitHandler}>

                            <Input
                                type="text"
                                placeholder="ID US"
                                name="usid"
                                onChange={inputsHandler}
                                value={inputUsid}
                                required />

                            <Input
                                type="password"
                                placeholder="SENHA"
                                name="password"
                                onChange={inputsHandler}
                                value={inputPassword}
                                required />

                            <ButtonSubmit type='submit'>Entrar</ButtonSubmit>

                        </form>
                        <ContactAdm>Não tem acesso? Contate o administrador da sua unidade!</ContactAdm>
                    </center>
                </ChildDiv>
            </ThemeProvider>
        </MainDiv>
    )
}


const MainDiv = styled.div`
    display: ${props => (props.theme.isMobileDevice ? "inline" : "flex")};;
    position: relative;

    opacity: ${props => (props.theme.open ? "0.9" : "0")};
    transition: opacity 1s;
    transition-delay: 0.5s;
    
`
const ChildDiv = styled.div`
    text-align: center;
    flex: 1;
    height: ${props => (props.theme.isMobileDevice ? "" : "calc(100vh - 30vh)")};
    :first-child{
        background: url(${leftBG});
        background-repeat: no-repeat;
        background-size: cover;
    }
    
`
const WelcomeBack = styled.h2`
    font-weight: 900;
    margin-top: ${props => (props.theme.isMobileDevice ? "0" : "calc(100vh - 75vh)")};;
    color: white;

`
const HrElement = styled.hr`
    margin-top: -0.5rem;
    width: 80%;
`

const GreetingText = styled.p`
    margin-top: 1rem;
    opacity: ${props => (props.theme.open ? "0.9" : "0")};
    transition: opacity 1s;
    transition-delay: 0.5s;
    color: white;
    font-size: 0.8rem;
    margin-left: ${props => (props.theme.isMobileDevice ? "2rem" : "6rem")};
    margin-right: 2rem;
    text-align: ${props => (props.theme.isMobileDevice ? "center" : "right")};
    `

const Title = styled.h2`
    font-weight: 900;
    margin-top: calc(100vh - 81vh);
    margin-bottom: 2rem;
    opacity: ${props => (props.theme.open ? "0.9" : "0")};
    transition: opacity 1s;
    transition-delay: 0.5s;
    color: #4e0096;
    
`

const Input = styled.input`
    width: 60%;
    height: 2em;
    border-left: 1;
    border-left-width: 0.20rem;
    border-color: #4e0096;
    border-bottom: 0;
    border-right: 0;
    border-top: 0;
    background: #ededed;
    display: flex;
    padding: 10px;
    outline: 1px;
    font-family: 'Roboto Mono', sans-serif;
    
    font-size: 0.8rem;
    color: #4e0096;
    font-weight: 900;
    letter-spacing: 0.040rem;

    outline-offset: -1rem;
    margin-bottom: 1em;

    opacity: ${props => (props.theme.open ? "0.9" : "0")};
    transition: opacity 1s;
    transition-delay: 0.5s;

  &:focus {
        border: 0.20rem solid #4e0096;
        transition: border 0.1s;
    }
  `

const ButtonSubmit = styled.button`
    width: 60%;
    height: 2rem;
    border: 2px solid #5c5c5c;
    margin-top: 2rem;
    font-family: 'Roboto Mono', sans-serif;

    opacity: ${props => (props.theme.open ? "0.9" : "0")};
    transition: opacity 1s;
    transition-delay: 0.5s;
   
    background-color: #4e0096;
    color: white;
    font-size: 1.1rem;
    font-weight: 900;

    :hover {
        cursor: pointer;
    }
`

const ContactAdm = styled.p`
    font-size: 0.8rem;

`