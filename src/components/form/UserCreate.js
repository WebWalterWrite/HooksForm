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
			firstname: data.get("firstname"),
			lastname: data.get("lastname"),
			email: data.get("email"),
			password: data.get("password")
		};

		// Validation formulaire côté client
		const resClient = await isValidForm(user);
		if (resClient) return setMsg(resClient);

		//validation formulaire côté serveur
		const resServer = await fetchForm(user, "create");
		return setMsg(resServer);
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
					<InputPwd/>
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
