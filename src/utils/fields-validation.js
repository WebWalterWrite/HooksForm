// Objet contenant les éventuelles erreurs
let msg;


/**
 * @func isEmpty - Vérifie si champ n'est pas vide et transfére l'action à la prochaine fonction
 * @param {*} val  - Contient la saisie du champ input
 * @param {*} field - Contient le nom du champ
 * @returns {Function | string} - passe à la prochaine fonction ou renvoi un msg d'erreur
 */
const isEmpty = (val, field) => {
    msg = `${field === 'email' ? "L'" : 'Le'} ${field} doit être rempli`;
    return val.length === 0
    ? msg
    : field !== 'email' && field !== 'mot de passe' // Ces champs ne sont pas traités par isLength fn
    ? isFullString(val, field)
    : field === 'email'
    ? isEmail(val, field)
    : isPassword(val, field)
};


/**
 * @desc Valider que la saisie ne contient que des lettres
 * @param {string} val - Contient la saisie du champ input 
 * @param {string} field - contient le nom du champ 
 * @returns { boolean | object } - Si aucune erreur ou un objet contenant les erreurs.
 */
export const isFullString = (val, field) => {
    msg = `Le ${field} ne doit contenir que des lettres`;
    
    // Regex
    const regexString =  /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/

    // Vérification condition
    const isString = regexString.test(val);

    return !isString
    ? msg
    : isLength(val, field)

};

/**
 * @func isLength - Test la longueur du champ 
 * @param {string} val - Contient la saisie du champ input
 * @param {string} field - contient le nom du champ
 * @return {boolean | string } - Si aucune erreur ou  un msg avec l'erreur rencontrée
 */
export const isLength = (val, field) => {
    msg = `Le ${field} doit contenir entre 3 et 30 caractères`;
 
    const size = 2 < val.length && val.length < 32
    return !size 
    ? msg
    : false
};

/**
 * @desc Valider le format du mot de passe
 * @func isPassword 
 * @param {string} val - Contient la saisie du champ input
 * @param {string} field - contient le nom du champ
 * @returns { boolean | object } - Si aucune erreur ou un objet contenant les erreurs.
 */
export const isPassword = async (val, field) =>{

    // Conteneur errurs
    const errors = {};

    // Message erreur
    msg = `Le ${field} doit contenir au moins`
    const specialsCharacter = "un des caractères $, @, !, %, ?";
    const upperCase = "une lettre majuscule";
    const number = "2 chiffres consécutifs entre 0 et 9";

    // Regex
    const regexNumeric = /(?:(?=.*[0-9])(?=.*\d{2}).*)/;
    const regexUpperCase = /(?=.*[A-Z])/
    const regexSpecCharacters = /(?=.*[$@!%])/

    // Vérifications condition
    const isNumber = regexNumeric.test(val);
    const isUpperCase =regexUpperCase.test(val);
    const isSpecCharacters = regexSpecCharacters.test(val);

    // Injecter les erreurs si false
    errors.number = !isNumber && `${msg} ${number}`;
    errors.upperCase = !isUpperCase && `${msg} ${upperCase}`;
    errors.specCharacter = !isSpecCharacters && `${msg} ${specialsCharacter}`;
    
    // Retourner les erreurs
    return await isErrors(errors);

}



/**
 * @func isEmail - Vérifie que le champ email contient bien un email.
 * @param {string} val - Contient la saisie du champ input.
 * @param {string} field  -Contient le nom du champ.
 * @returns {string | boolean} - Retounrne message erreur ou false. 
 */
export const isEmail = (val, field) => {
    msg = `Format ${field} invalide`;

    const regexMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isMail = regexMail.test(val);

    return !isMail ? msg : false
};



/**
 * @func isErrors - Vérifie et retourne les erreurs
 * @param {object} errors - contient les erreurs de saisie du formulaire 
 * @returns {Array | boolean} - Renvoi un tableau d'objet avec les erreurs ou false si aucune erreur.
 */
 const isErrors = (errors) => {
    for(let error in errors){
        if(!errors[error]) delete (errors[error])
    }   
   
    return Object.values(errors).length > 0 ? errors : false
};
export {
    isEmpty,
    isErrors
}