// WebWalterWrite... first lines with Hooks 😅😅😅
import React, { useState } from "react";
import axios from 'axios';

// State


const useInputValue = (initialValue, type, placeholder, name) => {
	const [value, setValue] = useState(initialValue);

	return {
		onChange: e => {
			e.preventDefault();
			setValue(e.target.value);
		},
		value,
		type,
		placeholder,
		name
	};
};


// Soumission du formulaire
const onSubmit = async (e) => {

	e.preventDefault();
	const data = new FormData(e.target);

	let user = {
		firstname: data.get("firstname"),
		lastname: data.get("lastname"),
    email: data.get("email"),
    password: data.get('password')
	};

  // fetch en bdd 
  const newUser = await axios.post('http://localhost:4000/user/create',user);

  if(newUser){
    const {data} = newUser
    console.log(data)
  };

};

// Formulaire
export const Form = () => {
	const firstname = useInputValue("", "text", "ex: jhon","lastname");
	const lastname = useInputValue("", "text", "ex: snow","firstname");
	const email = useInputValue("", "email", "ex: jhon.snow@winterfell.got","email");
  const password = useInputValue("", "password", "ex: whitewalkers","password");


	return (
		<div>
			<form onSubmit={onSubmit}>
				{/* input firstname */}
				<div>
					<label htmlFor="firstname">Prénom</label>
					<input {...firstname} />
				</div>

				{/* input lastname */}
				<div>
					<label htmlFor="lastname">Nom</label>
					<input {...lastname} />
				</div>

				{/* input email */}
				<div>
					<label htmlFor="email">Email</label>
					<input {...email} />
				</div>

				{/* input password */}
				<div>
					<label htmlFor="password">Mot de Passe</label>
					<input {...password} />
				</div>

				<input type="submit" value="valider" />
			</form>

		</div>
	);
};
