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

    const {
        firstname:f="",
        lastname:l="",
        email:e="",
        password:p="",
        repassword:rp=""
    } = data;

    errors.errFirstname = f.val !== undefined && await isEmpty(f.val, 'prenom', f.type);
    errors.errLastname = l.val  !== undefined && await isEmpty(l.val,'nom', l.type);
    errors.errEmail = e.val !== undefined && await isEmpty(e.val, 'email', e.type);
    errors.errPassword = p.val !== undefined && await isEmpty(p.val, 'mot de passe', p.type);
    errors.errRepassword = rp.val && await isEmpty(rp.val, "mot de passe", rp.type);

    return await isErrors(errors);
}





