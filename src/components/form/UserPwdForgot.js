import React, { useState } from "react";
import { useInputValue } from "../common/useState";
import { fetchForm } from "../../utils/api";
import { isValidForm } from '../../utils/form-validation';

// import style
import { Title, Form, Input, Error } from './form.styled';


export const UserPwdForgot = () => {
	const [msg, setMsg] = useState({});

	// soumission du formulaire
	const onSubmit = e => {
        setMsg({})
		e.preventDefault();
		const data = new FormData(e.target);
		let userEmail = {
			email: {val: data.get("email"), type: 'email'}
		};
		resClient(userEmail);
	};
	
    
	// Valider côté client le formulaire.
	const resClient = async data => {
		const result = await isValidForm(data);
		result && setMsg(result)
        // result ? setMsg(result) : resServer(data) // disable server response

    };
    
	// Envoyer vers serveur la demande
	/*eslint-disable*/
    const resServer = async data => {
        const result = await fetchForm(data,'forgot');
        return setMsg(result);
	};
	
	const email = useInputValue("", "email", "ex: cersei@portreal.got", "email");
	return (
	<section>
            <Title>Mot de Passe Oublié</Title>
			<Form onSubmit={onSubmit}>
				{/* input email */}
				<div>
					<label htmlFor="email">Email</label>
				</div>
				<div >
					<Input {...email} />
					<Error errStyle={msg && msg.errEmail}>
				    {msg.errEmail || msg.noEmail}
                	</Error>
				</div>
				<button>Valider</button>
			</Form>
		</section>
	);
};
