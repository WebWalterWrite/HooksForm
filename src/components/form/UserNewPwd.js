import React, { useState } from "react";

// import composant commun
import { useInputValue } from "../common/useState";
import { Password, RePassword } from "../common/passwordError";
import { InputPwd } from "../common/input";

// import validation form
import { isValidForm } from "../../utils/form-validation";

// import fetch server
import { fetchForm } from "../../utils/api";

// import style
import { Title, Form, Input, Error } from "./form.styled";

export const userNewPwd = () => {
  // Message server
  const [msg, setMsg] = useState({});

  // soumission du formulaire
  const onSubmit = e => {
    setMsg({});
    e.preventDefault();
    const data = new FormData(e.target);
    let userData = {
      email: data.get("email"),
      password: data.get("password"),
      repassword: data.get("repassword")
    };
    resClient(userData);
  };

  // Valider côté client le formulaire.
  const resClient = async data => {
    const result = await isValidForm(data);
    result ? setMsg(result) : resServer(data);
  };

  // Envoyer vers serveur la demande
  const resServer = async data => {
    const result = await fetchForm(data, "forgot");
    return setMsg(result);
  };

  // Input Form
  const email = useInputValue("", "email", "ex: cersei@portreal.got", "email");

  return (
    <section>
      <Title>Nouveau mot de passe</Title>
      <Form onSubmit={onSubmit}>
        {/* input email */}
        <div>
          <label htmlFor="email">Votre Email</label>
        </div>
        <div>
          <Input {...email} />
          <Error errStyle={msg && msg.errEmail}>
            {msg.errEmail || msg.noEmail}
          </Error>
        </div>
        <div>
          <label htmlFor="password">Mot de passe</label>
        </div>

        <InputPwd />
        <Error errStyle={msg && msg.errPassword}>
          <Password msg={msg} />
        </Error>

        <div>
          <label htmlFor="repassword">Confirmer mot de passe</label>
        </div>

        <InputPwd name="repassword" />
        <Error errStyle={msg && msg.errRepassword}>
          <RePassword msg={msg} />
        </Error>
        <button>Valider</button>
      </Form>
    </section>
  );
};
