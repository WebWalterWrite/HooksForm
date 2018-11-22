import React, { Fragment, useState } from "react";
import { useInputValue } from "../common/useState";
import { fetchForm } from "../../utils/api";
import { isEmail } from '../../utils/form-validation';

const errStyle = {color:'#FF5252', fontSize:'0.8em'}
const succStyle = { color: "#66BB6A", fontSize: "0.8em" };

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
    console.log(msg)
	const email = useInputValue("", "email", "ex: cersei@portreal.got", "email");
	return (
		<Fragment>  
			<form onSubmit={onSubmit}>
				{/* input email */}
				<div>
					<label htmlFor="email">Email</label>
					<input {...email} />
					<div style={!msg.email ? errStyle : succStyle}>{msg.email || msg.noEmail}</div>
				</div>
				<input type="submit" value="valider" />
			</form>
		</Fragment>
	);
};
