// Objet contenant les éventuelles erreurs
let msg;

const isEmpty = (val, field) => {
    msg = `Le champ ${field} doit être rempli`;
    return val.length === 0
    ? msg
    : field !== 'email'
    ? isLength(val, field)
    : isEmail(val, field)
};

const isLength = (val, field) => {
    msg = `Le champ ${field} doit contenir entre 3 et 30 caractères`;

    const size = 2 < val.length && val.length < 32
    return !size ? msg : null
};

const isEmail = (val, field) => {

    msg = `Format ${field} invalide`;
    return !val.includes('@') ? msg : false

};

/** 
@desc Valider la saisie des champs de formulaire
@func isValidForm - Traitement données de formulaires
@param {object} data - Contient les valeurs des champs du formulaire.
@param {object} errors - contient les éventuelles erreurs retournées.
*/
export const isValidForm = async (data) => {
const errors = {};
const {firstname, lastname, email, password} = data;

errors.firstname = await isEmpty(firstname, 'prenom');
errors.lastname = await isEmpty(lastname,'nom');
errors.email = await isEmpty(email, 'email');
errors.password = await isEmpty(password, 'mot de passe');

// Supprimer les champs sans erreurs

for(let error in errors){
    if(!errors[error]) delete (errors[error])
}   

return Object.values(errors).length > 0 ? errors : false
}
