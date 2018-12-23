import React, { Fragment, useState } from "react";
import { useInputValue } from "../common/useState";
import { fetchForm } from "../../utils/api";
import { isEmail } from '../../utils/form-validation';

// import style
import { Form, Input, Error } from './form.styled';


export const UserPwdForgot = () => {
	const [msg, setMsg] = useState({});

	// soumission du formulaire
	const onSubmit = e => {
        setMsg({})
		e.preventDefault();
		const data = new FormData(e.target);
		let userEmail = {email: data.get("email")};
		resClient(userEmail);
	};
	
    
	// Valider côté client le formulaire.
	const resClient = async data => {
		const result = await isEmail(data);
		result ? setMsg(result) : resServer(data)
    };
    
    // Envoyer vers serveur la demande
    const resServer = async data => {
        const result = await fetchForm(data,'forgot');
        return setMsg(result);
    };
	const email = useInputValue("", "email", "ex: cersei@portreal.got", "email");
	return (
		<Fragment>  
			<Form onSubmit={onSubmit}>
				{/* input email */}
				<div>
					<label htmlFor="email">Email</label>
				</div>
				<div >
					<Input {...email} />
					<Error errStyle>
					{msg.email || msg.noEmail}
					</Error>
				</div>
				<button>Valider</button>
			</Form>
		</Fragment>
	);
};
