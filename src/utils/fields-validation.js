// Objet contenant les éventuelles erreurs
let msg;

const isEmpty = (val, field) => {
    msg = `${field === 'email' ? "L'" : 'Le '} ${field} doit être rempli`;
    return val.length === 0
    ? msg
    : field !== 'email'
    ? isLength(val, field)
    : isEmail(val, field)
};

const isLength = (val, field) => {
    msg = `Le ${field} doit contenir entre 3 et 30 caractères`;

    const size = 2 < val.length && val.length < 32
    return !size ? msg : false
};

const isEmail = (val, field) => {
    console.log(val)
    msg = `Format ${field} invalide`;
    return !val.includes('@') ? msg : false

};
// Supprimer les champs sans erreurs
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