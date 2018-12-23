import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import * as serviceWorker from './serviceWorker';

const GlobalStyle = createGlobalStyle`

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    html, body{
        position:relative;
        height:100%;
        width:100%;
    }
    main{
        position:absolute;
        background-color:#282C33;
        height:100%;
        width:100%;
    }
    header, footer{
        background-color:#202329;
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
