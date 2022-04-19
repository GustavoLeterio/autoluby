import styled from 'styled-components'

export const StyledHeader = styled.header`
    display: flex;
    height: 9vh;
    justify-content: space-between;
    align-items: center;
    padding: 0 7.8vw;
    background: #FFFFFF;
    box-shadow: 0px 2px 25px rgba(169, 169, 169, 0.2);
    font-weight: 600;
`

export const SearchBox = styled.div`
    display: ${props=>props.display};
    align-items: center;
    padding: 2px 5px;
    background: #F9F9F9;
    border: 1px solid #E6E6E6;
    border-radius: 3px;
    box-shadow: 0px 0px 6px rgba(162, 162, 162, 0.25);
`

export const Input = styled.input`
    border: none;
    outline: none;
    font-weight: 400;
    font-size: 1.8rem;
    margin: 0;
    padding: 0;
    background-color: transparent;
`

export const Icon = styled.img`
    cursor: pointer;
`

export const Button = styled.button`
    border: none;
    border-radius: 3px;
    cursor: pointer;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: .75rem;
    background: var(--primary-red);
    color: white;
    font-size: 1.14rem;
`