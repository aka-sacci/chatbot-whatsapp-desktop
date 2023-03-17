import { iComponent } from "../../../../@types/myTypes"
import styled, { ThemeProvider } from "styled-components"
import { useRef, useState, useEffect } from "react"

export default function TalksFilter(props: iComponent) {
    const { isMobileDevice, handleSearchbar, handleSearchStatus } = props
    const searchIcon = require('../../../../images/icons/procurar.png')
    const arrowIcon = require('../../../../images/icons/arrow.png')
    const filterIcon = require('../../../../images/icons/filtrar.png')
    const textInput = useRef<HTMLInputElement>(null);
    const [searchbarText, setSearchbarText] = useState("");
    const [iconSearchDiv, setIconSearchDiv] = useState(<SearchIcon />)

    useEffect(() => {
        if (searchbarText === "") {
            setIconSearchDiv(<SearchIcon />)
        } else {
            setIconSearchDiv(<ArrowIcon />)
        }

        handleSearchStatus(0)
        let timeOutId = setTimeout(() => {
            handleSearchStatus(1)
            handleSearchbar(searchbarText)

        }, 300);
        return () => clearTimeout(timeOutId);
    }, [searchbarText]);

    const handleOnBlur = () => {

        switch (searchbarText) {
            case "":
                setIconSearchDiv(<SearchIcon />)
                break;
            default:
                setIconSearchDiv(<ArrowIcon />)
        }
    }

    return (
        <BorderedDiv>
            <ThemeProvider theme={
                {
                    isMobileDevice: isMobileDevice,
                    searchIcon: searchIcon,
                    filterIcon: filterIcon,
                    arrowIcon: arrowIcon
                }
            }>
                <MainDiv>
                    <SearchIconDiv>
                        {iconSearchDiv}
                    </SearchIconDiv>
                    <SearchBar
                        placeholder="Pesquisar ou começar um novo atendimento"
                        onChange={() => setSearchbarText(String(textInput.current?.value))}
                        onFocus={() => setIconSearchDiv(<ArrowIcon />)}
                        onBlur={() => handleOnBlur()}
                        value={searchbarText}
                        ref={textInput}
                    />
                    <FilterIconDiv>
                        <FilterIcon />
                    </FilterIconDiv>
                </MainDiv>
            </ThemeProvider>
        </BorderedDiv>
    )
}

const BorderedDiv = styled.div`
border: #f0f2f5 solid 0.1rem;
`

const MainDiv = styled.div`
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    height: 2.5rem;
    background-color: #ffff;
    display: flex;
    position: relative;

    `
const FilterIconDiv = styled.div`
    text-align: right;
    margin-right: 0.8rem;
    margin-left: 1rem;

`

const SearchIconDiv = styled.div`
    flex: 1;
    margin-left: 1rem;
    background-color: #f0f2f5;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    
`

const SearchIcon = styled.img`
    margin-left: 1rem;
    margin-top: 0.65rem;
    margin-right: 5px;
    content: url(${props => props.theme.searchIcon});
    width: 15px;
    height: 15px;
    :hover{
        cursor: pointer;
    }
`

const ArrowIcon = styled.img`
    margin-left: 1rem;
    margin-top: 0.65rem;
    margin-right: 5px;
    content: url(${props => props.theme.arrowIcon});
    width: 15px;
    height: 15px;
    :hover{
        cursor: pointer;
    }
`

const SearchBar = styled.input`
    width: 70%;
    border: 0;
    color: #57676f;
    font-size: 0.8rem;
    font-weight: 500;
    background-color: #f0f2f5;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;

    

    :focus{
        outline: none;
    }
`

const FilterIcon = styled.img`
    margin-top: 0.65rem;
    content: url(${props => props.theme.filterIcon});

    width: 15px;
    height: 15px;

    :hover{
        cursor: pointer;
    }
`