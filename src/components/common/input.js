import React,{ useState, useRef, memo } from 'react';
import styled from 'styled-components';
import { useInputValue } from './useState';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-regular-svg-icons';
import { media } from '../../utils/responsive.styled';

const Mdp = styled.div`
  display: flex;
  align-items: center;
  background-color:#FFFFFF;
  width: 20%;
  margin: 0 auto;
  ${media.phone`
        width:70%;
    `}
  input {
    font-size: 3vh;
    outline-color: #61dafb;
    padding: 1vh;
    width: 90%;
    border:none;
    background-color: ${props => props.color};
    ${media.phone`
            width:85%;
          `}
  }
  svg{
      margin:0 auto;
      
  }
`;

/**
 * @desc Renvoi un champ input password avec affichage/masquage du mdp
 * @func InputPwd - affiche un champ input password
 * @param {String} name - Contient la valeur de l'attribut name du champ input
 * 
 */

export const InputPwd = memo(({name="password"}) => {
   
    // Etat de l'icone
    const [eye, setEye] = useState(true);

    // Imput password
    const inputPass = useRef(null)

    // Masquer / Montrer l'icon
    const show = () =>{
        setEye( prevState => !prevState)
    }

    const InputPass = useInputValue('',eye ? "password" : "text","ex: lanister1234",name)
    return <Mdp>
        <input {...InputPass} ref={inputPass}/>
       
          <FontAwesomeIcon onClick={show} icon={eye ? faEyeSlash : faEye} size="lg" />
       
      </Mdp>;
});