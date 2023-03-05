import { iMainWrapperProps } from '../../../@types/myTypes';
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components';


function MainWrapper(props: iMainWrapperProps) {
    const { background } = props
    return (
        <ThemeProvider theme={{ background: background, isInfinite: props.isInfinite }}>
            <DivMainWrapper>
                    <Content className="container">
                        {props.children}
                    </Content>
            </DivMainWrapper>
        </ThemeProvider>
    )
}

export default MainWrapper

const DivMainWrapper = styled.div`
    background: url(${props => props.theme.background});
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`

const Content = styled.div`
    height: ${props => props.theme.isInfinite ? null : '100vh'};
    display: flex;
    justify-content: center;
    align-items: center;
`