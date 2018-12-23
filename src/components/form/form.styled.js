import styled from 'styled-components';
import {media} from '../../utils/responsive.styled';

export const Title= styled.h1`
      border:solid 2px #61dafb;
      color:#61dafb;
      text-align:center;
      margin: 0 auto;
      margin-top:2rem;
      padding:.8rem;
      width:20%;
      ${media.phone`
            width:70%;
          `}
`;
export const Form = styled.form`
  text-align:center;
  margin-top:1rem;
  label{
      color:#FFFFFF;
      font-size:3vh;

  }
    button{
          background-color:#CF2D53;
          color:#FFFFFF;
          border-radius:none !important;
          font-size:3vh;
          padding:.5rem;
          width:10%;
          outline:none;
          ${media.phone`
            width:30%;
          `}
      }
`;

export const Input = styled.input`
      font-size:3vh;
      outline-color:#61dafb;
      padding:1vh;
      width:20%;
      margin-bottom:1.5vh;
      border-radius:0;
      background-color:${props => props.color};
      ${media.phone`
            width:70%;
          `}
      
`

export const Error = styled.div`
      color:${props => props.errStyle && '#FF5252'};
      font-size:1em;
      height:1em;
      margin-bottom:1em;
`;