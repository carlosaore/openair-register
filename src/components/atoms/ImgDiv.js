import styled from 'styled-components';

const ImgDiv = styled.div`
    background-image: url(${props => props.url});
    background-position : center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    height : 100vh;
    display : flex;
    justify-content : center;
    align-items : center;
`

export default ImgDiv;