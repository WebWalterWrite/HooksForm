
/*
 WebWalterWrite... 1ères lignes avec  Hooks 😅😅😅
 Formulaire utilisé conjoitenment avec le repository https://github.com/WebWalterWrite/MailerTemplates
 pour tester des envois de mail avec nodemailer-hbs et api gmail
*/

import React, { useState } from "react";
import axios from "axios";
import {useInputValue } from '../common/useState';

const errStyle = {color:'#FF5252', fontSize:'0.8em'}
const succStyle = { color: "#66BB6A", fontSize: "0.8em" };

export const UserCreate = () => {
  
  // Errors state du formulaire
  const [errors, setErrors] = useState({});


  // Soumission du formulaire
  const onSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.target);
    let user = {
      firstname: data.get("firstname"),
      lastname: data.get("lastname"),
      email: data.get("email"),
      password: data.get("password")
    };

    fetchForm(user);
    
  };

  /**
   * @desc - Insére en BDD le formulaire, renvoi un objet avec message erreurs ou succès
   * @func fetchForm - insert en base de données le formulaire
   * @param {object} data - Contient les données du formulaire
   * @param {object} newUser - la réponse du serveur
   */
  const fetchForm = async (data) => {
	  // fetch en bdd
	  const newUser = await axios.post("http://localhost:4000/user/create", data);

	  if (newUser) {
		  const { errors } = newUser.data;
      setErrors(errors);
      console.log(errors);
	  }
  }

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
          <input {...email} />
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
