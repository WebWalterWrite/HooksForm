import React,{ useState } from 'react';
import { Link } from 'react-router-dom'

// import composant commun
import {useInputValue } from '../common/useState';
import { Password } from '../common/passwordError';
import { InputPwd } from '../common/input';
// import validation form
import { isValidForm } from '../../utils/form-validation';

import { fetchForm } from "../../utils/api";

// import style
import { Title, Form, Input, Error } from './form.styled';


export const UserConnexion = () => {

    // Message server
    const [msg, setMsg ]= useState({});


	// soumission du formulaire
	const onSubmit = e => {
        setMsg({})
		e.preventDefault();
		const data = new FormData(e.target);
        let userData = {
            email: { val: data.get("email"), type: 'email'},
            password: { val: data.get('password'), type: 'login'}
        };
		resClient(userData);
	};
    
	// Valider côté client le formulaire.
	const resClient = async (data) => {
        const result = await isValidForm(data)
        result && setMsg(result)
        // result ? setMsg(result) : resServer({email, password}) // disable server response
        
    };
  
    // Envoyer vers serveur la demande
    /*eslint-disable*/
    const resServer = async data => {
        const result = await fetchForm(data,'forgot');
        result &&  setMsg(result);
    };

    // Input Form
    const email = useInputValue("",'email',"ex: cersei@portreal.got", "email")
    
    return(
        <section>
            <Title>Connexion</Title>
        <Form onSubmit={onSubmit}>
{/* input email */}
			<div>
				<label htmlFor="email">Email</label>
			</div>
			<div >
			<Input {...email}  autoComplete="email"/>
				<Error errStyle={msg && msg.errEmail}>
				    {msg.errEmail || msg.noEmail}
                </Error>
			</div>
			<div>
				<label htmlFor="password">Mot de passe</label>
			</div> 

            <InputPwd complete="cuurent-password"/>
                <Error errStyle={msg && msg.errPassword}>
                   <Password msg={msg}/>
                </Error>

			<button>Valider</button>
                <div><Link to="/formulaire/mot-de-passe-oublie">mot de passe oublié</Link></div>
        </Form>
        </section>
    )
}
