// WebWalterWrite... first lines with Hooks 😅😅😅

import React, { useState } from "react";

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
  };
};

export const Form = () => {
  const firstname = useInputValue("", "text", "firstname");
  const lastname = useInputValue("", "text", "lastname");
  const email = useInputValue("", "email", "email adress");

  return (
    <div>
      <form>
        <input {...firstname} />
        <input {...lastname} />
        <input {...email} />
      </form>
    </div>
  );
};





