// WebWalterWrite... first lines with Hooks 😅😅😅

import React, { useState } from "react";

// State
const useInputValue = (initialValue, type, placeholder) => {
  const [value, setValue] = useState(initialValue);

  return {
    onChange: e => {
      e.preventDefault();
      setValue(e.target.value);
    },
    value,
    type,
    placeholder,
    name: placeholder,
  };
};

// Soumission du formulaire
const onSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.target);

    let user = {
    firstname : data.get('firstname'),
    lastname :data.get('lastname'),
    email :data.get('email'),
    }

    console.log(user)
};


// Formulaire
export const Form = () => {

  const firstname = useInputValue("", "text", "firstname");
  const lastname = useInputValue("", "text", "lastname");
  const email = useInputValue("", "email", "email");


  return (
    <div>
      <form onSubmit={onSubmit}>
              <label htmlFor="firstname">Enter username</label>
        <input {...firstname} />
        <input {...lastname} />
        <input {...email} />
        <input type="submit" value="valider" />
      </form>
    </div>
  );
};
