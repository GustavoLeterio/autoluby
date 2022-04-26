import styled from 'styled-components'


export const Main = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - var(--header-height));
`

export const ContentWrapper = styled.div`
    display: flex;
    justify-self: center;
    flex-direction: column;
    & h1,h2{
        color: var(--dark-gray);
        font-weight: 600;
        margin: 5px 0;
    } 

    & h3{
        font-weight: 500;
        color: var(--gray);
        margin-bottom:30px;
    }
    
`

export const Menu = styled.ul`
    display: flex;
    flex-direction: column;
    margin:0;
    padding: 0;
    width: 41.666vw;
    list-style: none;
    gap:1.9vh;

`

export const MenuItem = styled.li`
    background: #FFFFFF;
    border: 1px solid var(--input-border);
    box-shadow: 0px 0px 6px rgba(162, 162, 162, 0.25);
    border-radius: 3px;
    transition: 150ms ease-in-out;
    &:hover{
        transform: scale(1.05);
    }
    & a{
        display:flex;
        justify-content: space-between;
        width: 100%;
        height: 100%;
    }

    & a>div{
        width: 47.5%;
        margin: 3.75% 0 0 3.75%; 
        height: 100%;
    }

    & a>div>h2{
        margin:0 0 1.25% 0;
    }

    & a>p{
        font-size: 0.875rem;
        margin:0 10px;
        margin-bottom: 3.75%;
        color: var(--primary-red);
        align-self: flex-end;
        white-space: nowrap;
    }

    & a>img {
        width: 32%;
        object-fit: cover;
    }
`