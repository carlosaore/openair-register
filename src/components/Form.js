import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';

const url = "https://sheet.best/api/sheets/27d88dc3-2ca4-416e-b634-5a4c5284bfce";

const StyledForm = styled.form`
    width : 80%;
    display : flex;
    flex-direction : column;
    label {
        display : flex;
        flex-direction : column;
        margin-bottom : 10px;
        font-size : 0.6em;
        text-align : left;
        width : 100%;
        color : darkgoldenrod;
        font-weight : bold;
    }

    .field {
        background-color : darkgrey;
        border : none;
        height : 3em;
    }

    #submit {
        background-color : darkgoldenrod;
        border-radius : 5px;
        border : none;
        height : 3em;
        font-weight : bold;
        color : black;
        text-transform : uppercase;
        margin-top : 10px;
    }

    select {
        background-color : darkgrey;
        border : none;
        height : 3em;
    }

`

const Form = () => {

    const [formulario, setFormulario] = useState({nombre : "", dia : "", horario : ""});

    const handleInputChange = (event) => {
        setFormulario({
            ...formulario,
            [event.target.name] : event.target.value
        })
    }

    const sendData = (event) => {
        event.preventDefault()
        console.log(formulario);
        axios.post(url, formulario)
            .then(res => console.log(res));
            window.alert("Registro exitoso!");
    }
    
    return (
    <>
        <StyledForm>
            <label>
                Nombre:
                <input className="field" type="text" name="nombre" placeholder="Tu nombre" onChange={handleInputChange}/>
            </label>
            <label>
                Día:
                <select name="dia" defaultValue="" onChange={handleInputChange}>
                    <option value="" disabled hidden>Elije...</option>
                    <option value="lunes">Lunes</option>
                    <option value="martes">Martes</option>
                    <option value="sabado">Sabado</option>
                </select>
            </label>
            <label>
                Horario:
                <select name="horario" defaultValue="" onChange={handleInputChange}>
                    <option value="" disabled hidden>Elije...</option>
                    <option value="mañana">Mañana</option>
                    <option value="tarde">Tarde</option>
                </select>
            </label>
            <input id="submit" type="submit" value="send" onClick={sendData} /> 
        </StyledForm>
    </>

)};

export default Form;