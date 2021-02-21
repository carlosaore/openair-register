import styled from 'styled-components';

const OpaqueDiv = styled.div`
    width : 80%;
    height : 80%;
    background: rgb(0, 0, 0); /* Fallback for older browsers without RGBA-support */
    background: rgba(0, 0, 0, 0.6);
    display : flex;
    justify-content : center;
    align-content : center;
    flex-direction : row;
    flex-wrap : wrap;
`

export default OpaqueDiv;