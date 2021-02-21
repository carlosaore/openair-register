import styled, { css } from 'styled-components';

const P = styled.p`
    font-size : 0.9em;
    text-align : center;
    width : 100%;

    ${props => props.white && css`
        color:white;
    `}

    ${props => props.margin && css`
        margin-left : 5vw;
        margin-right : 5vw;
    `}

`

export default P;
