import React,{ useState } from 'react';

// import composant commun
import {useInputValue } from '../common/useState';
// import validation form
import { isValidForm } from '../../utils/form-validation';

// import style
import { Form, Input, Error } from './form.styled';

export const UserConnexion = () => {

    // Message server
    const [msg, setMsg ]= useState({});

	// soumission du formulaire
	const onSubmit = e => {
        setMsg({})
		e.preventDefault();
		const data = new FormData(e.target);
        let userData = {
            email: data.get("email"),
            password: data.get('password')
        };
		resClient(userData);
	};
    
	// Valider côté client le formulaire.
	const resClient = async (data) => {
        const result = await isValidForm(data)
        result ? setMsg(result) : resServer({email, password})
        
    };
    console.log(msg)
    // Envoyer vers serveur la demande
    const resServer = async data => {
        //const result = await fetchForm(data,'forgot');
        //return setMsg(result);
    };

    // Input Form
    const email = useInputValue("",'email',"ex: cersei@portreal.got", "email")
    const password = useInputValue('',"password","ex: lanister1234","password")

    return(
        <Form onSubmit={onSubmit}>
{/* input email */}
			<div>
				<label htmlFor="email">Email</label>
			</div>
			<div >
			<Input {...email} />
				<Error errStyle={msg.errEmail}>
				    {msg.errEmail || msg.noEmail}
                </Error>
			</div>
			<div>
				<label htmlFor="password">Mot de passe</label>
			</div> 
            <Input {...password} />
                <Error errStyle={msg.errPassword}>
                    {msg.errPassword}
                </Error>

			<button>Valider</button>
        </Form>
    )
}
