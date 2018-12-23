import styled from 'styled-components';
import { media } from '../../utils/responsive.styled';

export const Intro = styled.div`
    h1{
        color:#61dafb;
        font-size:8vh;
    }
    p{
        color:#FFFFFF;
        font-size:3vh;
    }
`;
export const Nav = styled.nav`
    padding:10vh;
    ul{
        ${media.phone`
        display:block;
        `}
        display:flex;
        justify-content:space-around;
    }
    li{

        list-style-type: none;
        background-color:#61dafb;
        padding:1vh;
        ${media.phone`
        width:100%;
        margin:2vh 0 1vh 0;
        `}
        width:20%;
        display:flex;
        justify-content:center;
        align-items:center;

        :hover{
            border:solid .4vh #FFFFFF;
            padding:.6vh;
            box-shadow: 1px 1px 2px  #FFFFFF;
        }
    }
    a{  
        text-decoration:none;
        text-align:center;
        color:#FFFFFF;
        font-size:18px;
        letter-spacing:2px;
        font-weight:900;
    }
`; 