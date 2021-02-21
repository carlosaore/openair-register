import Header from './atoms/Header';
import ImgDiv from './atoms/ImgDiv';
import OpaqueDiv from './atoms/OpaqueDiv';
import Ol from './atoms/Ol';
import Form from './Form';


const Register = () => (
    <ImgDiv url="./images/pexels-geancarlo-peruzzolo-6796971.jpg">
        <OpaqueDiv>
            <Header>
                Registrate aquí
            </Header>
            <Ol white margin>
                <li>Rellena tus datos</li>
                <li>Elige los días que quieres entrenar</li>
                <li>Elije la franja horaria de tu preferencia, si quieres otra elige la opción Otra y en observaciones coméntanos cuál sería la mejor para tí</li>
                <li>DEMO: Rellena los datos, click en enviar y luego click <a href="https://docs.google.com/spreadsheets/d/1WpYYDfAIm816x_IX1ERJY-isfe2QV-GUjTzkwbtUfVI/edit?usp=sharing">aqui</a> para ver que la hoja de datos actualizada</li>
            </Ol>
            <Form />
        </OpaqueDiv>
    </ImgDiv>
)

export default Register;
