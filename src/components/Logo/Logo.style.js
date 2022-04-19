import styled from 'styled-components'

export const StyledLogo = styled.div`
    display: flex;
    align-items: center;
    gap: 1.45rem;
    font-size: 2.375rem;
    color: var(--primary-red);
    margin:${(props)=>props.margin};
`
