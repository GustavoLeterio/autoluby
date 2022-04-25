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

export const InputField = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2.77vh;
    width: calc(100% - 30px);
    color: var(--gray);
    font-weight: 600;
    border: ${(props) => props.auth.border};
    font-size: .8125rem;
    padding: 10px 15px;
    transition: 0.5s ease-in-out;

    & input{
        max-width: 90%;
        margin:0;
        padding: 0;
        outline: none;
        border: none;
        font-family: 'poppins', sans-serif;
        font-weight: 600;
        color: ${(props) => props.auth.inputColor};
        box-shadow: 0 0 0px 1000px #ffffff inset !important; //Remove Autofill background
    }
    & input::placeholder{
        font-weight: 400;
    }


    & span{
        font-size: .8rem;
        color: ${(props) => props.auth.messageColor};
        position: absolute;
        z-index: 1;
        background-color: white;
        opacity: ${(props) => props.auth.fontOpacity};
    }

    & img{
        width: 14px;
        height: 14px;
        opacity: ${(props) => props.auth.iconOpacity};
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