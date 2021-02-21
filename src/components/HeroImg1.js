import HeroImg from './atoms/HeroImg';
import Logo from './atoms/Logo';
import SubTitle from './atoms/SubTitle';

const HeroImg1 = () => (
    <HeroImg url="./images/pexels-leon-ardho-1552242.jpg">
        <Logo src="./images/logo.png" alt="PROMUSCLE" />
        <SubTitle>
        Entrenamientos grupales online y al aire libre en la ciudad de Valencia
        </SubTitle>
    </HeroImg>
)

export default HeroImg1;
