import React, {useState} from 'react';
import styled from 'styled-components';
import { useInputValue } from './useState';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-regular-svg-icons';
import { media } from '../../utils/responsive.styled';

const Mdp = styled.div`
    display:flex;
    align-items:center;
    width:20%;
    margin:0 auto;
    ${media.phone`
        width:70%;
    `}
    input{
        font-size: 3vh;
	    outline-color: #61dafb;
	    padding: 1vh;
        width:80%;
	    margin-bottom: 1.5vh;
	    border-radius: 0;
	    background-color: ${props => props.color};
	    ${media.phone`
            width:80%;
          `}
    }
    >div{
        background-color:#FFFFFF;
        width:20%;
        padding:1vh;
        margin-bottom: 1.5vh;
        ${media.phone`
        padding:.8vh;
        `}
    }

`


export const InputPwd = () => {

    // Etat de l'icone
    const [eye, setEye] = useState(true);

    // Masquer / Montrer l'icon
    const show = () =>{
        setEye( prevState => !prevState)
    }

    const InputPass = useInputValue('',"password","ex: lanister1234","password")
    return(
    <Mdp>
    <input {...InputPass}/>
    <div>
        <FontAwesomeIcon onClick={show} icon={eye ? faEyeSlash : faEye} size="2x"/>
    </div>
    </Mdp>
    )
};