import {isEmpty, isErrors} from './fields-validation';

/** 
@desc Valider la saisie des champs de formulaire
@func isValidForm - Traitement données de formulaires
@param {object} data - Contient les valeurs des champs du formulaire.
@param {object} errors - contient les éventuelles erreurs retournées.
@returns {Object | Boolean } Objet contenant les erreurs ou false si aucune erreur.
*/
export const isValidForm = async (data) => {
    
    const errors = {};
    const {firstname, lastname, email, password, repassword} = data;

    errors.errFirstname = firstname !== undefined && await isEmpty(firstname, 'prenom');
    errors.errLastname = lastname  !== undefined && await isEmpty(lastname,'nom');
    errors.errEmail = email !== undefined && await isEmpty(email, 'email');
    errors.errPassword = password !== undefined && await isEmpty(password, 'mot de passe');
    errors.errRepassword = repassword !== undefined && await isEmpty(repassword, "mot de passe");

    return await isErrors(errors);
}

/**
 * @func isEmail - Vérifier le format email
 * @param {string} user - Contient la saisie du formulaire.
 * @returns {Object | Boolean } Objet contenant les erreurs ou false si aucune erreur.
 */
export const isEmail = async user => {
    const errors = {}
    errors.email = await isEmpty(user.email,'email');

    return await isErrors(errors);
};



