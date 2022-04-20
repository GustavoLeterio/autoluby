import styled from 'styled-components'

export const Main = styled.main`
    display: flex;
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(100vw - 51.804vw);
`
export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    & .link{
        color: var(--primary-red);
    }
`

export const TextWrapper = styled.section`
    margin-bottom: 7.3vh;
    font-weight: 600;

    & h1{
        font-size: 2.375rem;
        margin-bottom: 6px;
        color: var(--dark-gray);
    }
    & p{
        margin: 0;
        color: var(--light-gray);
        font-size: 0.75rem;
    }
`

export const Fieldset = styled.fieldset`
    border:none;
    padding: 0;
    margin: 0;
    width: 100%;

    & label{
        color: var(--gray);
        font-size: .875rem;
        font-weight: 600;
    }

    & input{
        margin-bottom: 2.77vh ;
        width: calc(100% - 30px);
        outline: none;
        color: var(--light-gray);
        font-weight: 400;
        border: 1px solid var(--input-border);
        background-color: var(--input-background);
        font-size: .8125rem;
        padding: 10px 15px;
    }

    & input[type="text"], & input[type="password"]{
        margin-top:.45rem;
        font-family: 'poppins', sans-serif;
        font-weight: 400;
        color: var(--light-gray);
    }


    & input[type="submit" i]{
        width: 100%;
        cursor: pointer;
        padding: 10px 0;
        background-color: var(--primary-red) ;
        border: none;
        color: white;
        font-size: .875rem;
        font-weight: 600;
        font-family: 'Poppins', sans-serif;
        margin-bottom: 4.111vh;
    }
`
export const Settings = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;
    font-size: .85rem;
    margin-bottom: 4.5221vh;

    & label{
        color: var(--primary-red);
        cursor: pointer;

    }
    & label input{
        width: auto;
        cursor: pointer;
        accent-color: var(--primary-red);
        transform-origin: center;
        margin: 0 0.85rem 0 5px;
        transform: scale(1.8);
    }
`

export const Signup = styled.p`
    color: var(--gray);
    font-weight: 500;
    font-size: .875rem;
`

export const BgImage = styled.img`
    object-fit: cover;
    height: 100vh;
    width: 51.804vw;
`