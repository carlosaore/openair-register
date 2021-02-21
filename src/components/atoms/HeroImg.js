import styled from 'styled-components';

const HeroImg = styled.div`
    background-image: url(${props => props.url});
    background-position : center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    height : 100vh;
    display : flex;
    justify-content : center;
    align-content : center;
    flex-direction : row;
    flex-wrap : wrap;

    @media (max-width: 700px) {
        background-position : left;
    }
`

export default HeroImg;