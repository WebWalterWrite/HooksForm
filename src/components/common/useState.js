import { useState } from 'react';

  /**
  @desc Equivalent à this.onHandleChange avec un composant class.
  @func useInputValue - Rempli le champ courant
  @param {string} initialValue - Chaine de caratcère vide pour initialiser le champ à chaque chargement.
  @param {type} 
  */

export const useInputValue = (initialValue, type, placeholder, name) => {

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
