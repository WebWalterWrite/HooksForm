import { useState } from 'react';


   /**
  @desc Equivalent à this.onHandleChange avec un composant class.
  @func useInputValue - Rempli le champ courant
  @param {string} initialValue - Chaine de caratcère vide pour initialiser le champ à chaque chargement.
  @param {type} 
  */


export const useInputValue = (initialValue, type, placeholder, name, state) => {

    const [value, setValue] = useState(initialValue);
    
    return {
        onChange: e => {
            e.preventDefault();
            setValue(e.target.value);
        },
        onKeyPress: e => {
           if(state){
            e.target.style.backgroundColor = '#FFFFFF';
           }
        },
        value,
        type,
        placeholder,
        name,
    };
};




