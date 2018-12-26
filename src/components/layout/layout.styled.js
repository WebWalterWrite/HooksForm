import styled from 'styled-components';
import { media } from '../../utils/responsive.styled';

export const Intro = styled.div`
    h1{
        color:#61dafb;
        font-size:8vh;
        text-align:${props => props.txta && "center"}
    }

`;
export const Nav = styled.nav`
    padding:3rem;
   ${media.phone`
    padding:1rem;
   `}
    ul{
        display:flex;
        justify-content:space-around;
        ${media.phone`
        display:block;
        justify-content:center;
        `}

    }
    li{
        list-style-type: none;
        background-color:${props => props.color.bc};
        padding:1rem;
        ${media.phone`
        padding:.5rem;
        width:100%;
        margin:1rem 0rem 1rem 0rem;
        `}
        width:25%;
        display:flex;
        justify-content:center;
        align-items:center;
        :hover{
            border:solid .2rem ${props => props.color.fc};
            padding:.6vh;
            transition:all 150ms ease-in-out;

            a{
                letter-spacing:.2rem;
                transition:all 200ms ease-in-out;
            }
           
        }
    }
    a{  
        text-decoration:none;
        text-align:center;
        color:${props => props.color.fc};
        font-size:18px;
        letter-spacing:2px;
        font-weight:900;
    }
`; 