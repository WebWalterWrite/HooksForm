/*
 WebWalterWrite... 1ères lignes avec  Hooks 😅😅😅
 Formulaire utilisé conjoitenment avec le repository https://github.com/WebWalterWrite/MailerTemplates
 pour tester des envois de mail avec nodemailer-hbs et api gmail
*/

import React, { useState } from "react";

// import composant commun
import { useInputValue } from "../common/useState";
import { Password } from '../common/passwordError';
import { InputPwd } from "../common/input";


// import style
import { Title, Form, Input, Error } from "./form.styled";
// import utils function
import { fetchForm } from "../../utils/api";
import { isValidForm } from "../../utils/form-validation";

export const UserCreate = () => {
	// Errors state du formulaire
	const [msg, setMsg] = useState({});

	// Soumission du formulaire
	const onSubmit = async e => {
		setMsg({});
		e.preventDefault();
		const data = new FormData(e.target);

		let user = {
			firstname: {val:data.get("firstname"), type:""},
			lastname: {val: data.get("lastname"), type:""},
			email: {val: data.get("email"), type: 'email'},
			password: {val: data.get("password"), type: 'mdp'}
		};
		resClient(user)
	}

	// Validation formulaire côté client
	const resClient = async user => {
		const result= await isValidForm(user);
		return result && setMsg(result);
	    // result ? setMsg(result) : resServer(user) // disable server response
	}

	//validation formulaire côté serveur
	/*eslint-disable*/
    const resServer = async data => {
        const result = await fetchForm(data,'forgot');
        return setMsg(result);
	};


	const firstname = useInputValue(
		"",
		"text",
		"ex: jhon",
		"firstname",
		msg.errFirstname,
		setMsg
	);
	const lastname = useInputValue(
		"",
		"text",
		"ex: snow",
		"lastname",
		msg.errLastname
	);
	const email = useInputValue(
		"",
		"email",
		"ex: j.s@winterfell.got",
		"email",
		msg.errEmail
	);


	return (
		<section>
			<Title>Inscription</Title>
			<Form onSubmit={onSubmit}>
				{/* Input firstname */}
				<div>
					<label htmlFor="firstname">Prénom</label>
				</div>
				<div>
					<Input {...firstname} />
					<Error errStyle={msg && msg.errFirstname}>{msg.errFirstname}</Error>
				</div>

				{/* Input lastname */}
				<div>
					<label htmlFor="lastname">Nom</label>
				</div>
				<div>
					<Input {...lastname} />
					<Error errStyle={msg && msg.errLastname}>{msg.errLastname}</Error>
				</div>

				{/* Input email */}
				<div>
					<label htmlFor="email">Email</label>
				</div>

				<div>
					<Input {...email} />
					<Error errStyle={msg && msg.errEmail}>{msg.errEmail}</Error>
				</div>

				{/* Input password */}
				<div>
					<label htmlFor="password">Mot de Passe</label>
				</div>

				<div>
					<InputPwd complete="new-password"/>
					<Error errStyle={msg && msg.errPassword}>
                   		<Password msg={msg}/>
                	</Error>
				</div>

				<button>Valider</button>
				<Error errStyle={msg ? msg.emailExist : msg.user}>{msg.emailExist || msg.user}</Error>
			</Form>
		</section>
	);
};
