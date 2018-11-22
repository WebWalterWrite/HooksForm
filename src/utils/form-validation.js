
/** 
@desc Valider la saisie des champs de formulaire
@func isValidForm - Traitement données de formulaires
@param {object} data - Contient les valeurs des champs du formulaire.
@param {object} errors - contient les éventuelles erreurs retournées.
*/

import {isEmpty, isErrors} from './fields-validation';

export const isValidForm = async (data) => {
const errors = {};
const {firstname, lastname, email, password} = data;

errors.errFirstname = await isEmpty(firstname, 'prenom');
errors.errLastname = await isEmpty(lastname,'nom');
errors.errEmail = await isEmpty(email, 'email');
errors.errPassword = await isEmpty(password, 'mot de passe');

    return await isErrors(errors);
}

export const isEmail = async user => {
    const errors = {}
    errors.email = await isEmpty(user.email,'email');

    return await isErrors(errors);
};



