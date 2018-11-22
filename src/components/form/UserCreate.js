
/*
 WebWalterWrite... 1ères lignes avec  Hooks 😅😅😅
 Formulaire utilisé conjoitenment avec le repository https://github.com/WebWalterWrite/MailerTemplates
 pour tester des envois de mail avec nodemailer-hbs et api gmail
*/

import React, { useState } from "react";

// import composant commun
import {useInputValue } from '../common/useState';

// import utils function
import { fetchForm } from '../../utils/api';
import { isValidForm } from '../../utils/form-validation';

const errStyle = {color:'#FF5252', fontSize:'0.8em'}
const succStyle = { color: "#66BB6A", fontSize: "0.8em" };

export const UserCreate = () => {
  
  // Errors state du formulaire
  const [errors, setErrors] = useState({});


  // Soumission du formulaire
  const onSubmit = async (e) => {
    setErrors({})
    e.preventDefault();
    const data = new FormData(e.target);
    let user = {
      firstname: data.get("firstname"),
      lastname: data.get("lastname"),
      email: data.get("email"),
      password: data.get("password")
    };
    
    // Validation formulaire côté client
    const resClient = await isValidForm(user)
    if(resClient) return setErrors(resClient)

    //validation formulaire côté serveur
    const resServer = await fetchForm(user);
    
    return setErrors(resServer);

  };

  const firstname = useInputValue("", "text", "ex: jhon", "firstname");
  const lastname = useInputValue("", "text", "ex: snow", "lastname");
  const email = useInputValue("", "email", "ex: j.s@winterfell.got", "email");
  const password = useInputValue("","password","ex: whitewalkers","password");

  return (
    <div>
      <form onSubmit={onSubmit}>
        {/* input firstname */}
        <div>
          <label htmlFor="firstname">Prénom</label>
          <input {...firstname} />
          <div style={errStyle}>{errors.firstname}</div>
        </div>

        {/* input lastname */}
        <div>
          <label htmlFor="lastname">Nom</label>
          <input {...lastname} />
		 <div style={errStyle}>{errors.lastname}</div>
        </div>

        {/* input email */}
        <div>
          <label htmlFor="email">Email</label>
          <input {...email}/>
          <div style={errStyle}>{errors.email}</div>
        </div>

        {/* input password */}
        <div>
          <label htmlFor="password">Mot de Passe</label>
          <input {...password} />
          <div style={errStyle}>{errors.password}</div>
        </div>
		<div style={errors.msg ? errStyle : succStyle}>{errors.msg || errors.user}</div>
        <input type="submit" value="valider" />
      </form>
    </div>
  );
};
