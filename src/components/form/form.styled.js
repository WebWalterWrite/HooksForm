import styled from 'styled-components';
import {media} from '../../utils/responsive.styled';

export const Form = styled.form`
  text-align:center;
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
      margin-bottom:1.5vh;
      border-radius:0;
      background-color:${props => props.color};
      
`

export const Error = styled.div`
      color:${props => props.errStyle && '#FF5252'};
      font-size:1em;
      height:1em;
      margin-bottom:1em;
`;