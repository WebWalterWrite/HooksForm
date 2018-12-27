import styled from "styled-components";
import { media } from "../../utils/responsive.styled";

export const Title = styled.h1`
	border: solid 2px #61dafb;
	color: #61dafb;
	text-align: center;
	margin: 0 auto;
	padding: 1rem;
	width: 20%;
	${media.phone`
            width:70%;
          `}
`;
export const Form = styled.form`
	text-align: center;
	margin-top: 1rem;
      padding-bottom:1rem;
      height:auto;
	label {
		color: #ffffff;
		font-size: 3vh;
	}
	button {
		background-color: #cf2d53;
		color: #ffffff;
		border-radius: none !important;
		font-size: 3vh;
		padding: 0.5rem;
            margin:1rem 0 0 0;
		width: 10%;
		outline: none;
		${media.phone`
            width:30%;
          `}
	}
`;

export const Input = styled.input`
	font-size: 3vh;
	outline-color: #61dafb;
	padding: 1vh;
	width: 20%;
	margin-bottom: 1.5vh;
	border-radius:0;
	border:none;
	background-color: ${props => props.color};
	${media.phone`
            width:70%;
          `}
`;

export const Error = styled.div`
	color: ${props => props.errStyle && "#F05B24"};
	padding: ${props => props.errStyle ? .5 + "rem" : 0};
	font-size: 1em;
	margin: 0 auto;
	width: 20%;
	${media.phone`
            width: 70%;
      `}
	>ul {
		margin: 0 auto;
		text-align: left;
		li {
			margin-left: 2em;
		}
	}
`;
