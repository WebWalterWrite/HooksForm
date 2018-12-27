import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import { media } from './utils/responsive.styled';
import * as serviceWorker from './serviceWorker';

const GlobalStyle = createGlobalStyle`

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    html, body{
        height:100%;
        width:100%;
    }
    main{
        background-color:#282C33;
        padding-top:2rem;
        padding-bottom:2rem;
        width:100%;
        height:auto;
        min-height:100vh;
    }
    header, footer{
        background-color:#202329;
    }
    p{
        color:#FFFFFF;
        font-size:2rem;
        text-align:justify;
        ${media.phone`
            font-size:1rem;
        `}
    }
    a{
        color:#FFFFFF;
        text-decoration:none;
    }
`;
ReactDOM.render(
<Fragment>
     <GlobalStyle/>
    <App />
</Fragment>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
