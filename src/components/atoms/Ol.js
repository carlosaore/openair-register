import styled, { css } from 'styled-components';

const Ol = styled.ol`
    font-size : 0.9em;

    ${props => props.white && css`
        color:white;
    `}

    ${props => props.margin && css`
        margin-left : 5vw;
        margin-right : 5vw;
    `}
`

export default Ol;
