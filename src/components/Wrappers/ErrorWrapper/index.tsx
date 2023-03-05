import styled, { ThemeProvider } from 'styled-components'
import { iErrorWrapperProps } from "../../../@types/myTypes";
import { useState, useEffect } from 'react'

function ErrorWrapper(props: iErrorWrapperProps) {
    const [isOpened, setIsOpened] = useState(false)

    useEffect(() => {
        setIsOpened(true)
    }, [])

    const { error } = props

    const message = error.message
    const name = error.name
    return (
        <ThemeProvider theme={
            { open: isOpened }
        }>
            <DivErrorWrapper role='alert'><b>Houve o seguinte erro: {name}: {message}</b></DivErrorWrapper>
        </ThemeProvider>
    )
}

export default ErrorWrapper

const DivErrorWrapper = styled.div`
    background-color: #ebe2c0;
    color: #6b5618;
    opacity: ${props => (props.theme.open ? "0.9" : "0")};
    transition: opacity 2s;
    
`