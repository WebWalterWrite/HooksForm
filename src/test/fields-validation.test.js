import { isEmpty, isLength, isEmail, isPassword } from '../utils/fields-validation';

// Tester si aucune erreur.
test('isEmpty => sans erreur', () =>{
    const notEmpty =  isEmpty('sammy', 'test')
    expect(notEmpty).toBeFalsy();
});

// Tester si le champ est vide est erreur renvoyée
test('isEmpty => sans erreur', () =>{
    const msg = 'Le test doit être rempli';
    const oneCharacter = isEmpty('', 'test')
    expect(oneCharacter).toEqual(msg);
});

// Tester nb de carctères requis
test('isLength => erreur min caractères', () =>{
    const msg = 'Le test doit contenir entre 3 et 30 caractères';
    const minCharacter = isLength('sa', 'test');
    expect(minCharacter).toEqual(msg);
});

test('isLengh => not undefined', () =>{
    const minCharacter = isLength('sammy', 'test');
    expect(minCharacter).toBeFalsy();
});

// Tester erreur format email
test('isEmail => email invalide', () =>{
    const msg = "Format email invalide";
    const emailValid = isEmail('samy&.com', 'email');
    expect(emailValid).toEqual(msg);
});

// Tester succes format email
test('isEmail => email valide', () =>{
    const emailValid = isEmail('sammy@gmail.com', 'email');
    expect(emailValid).toBeFalsy();
})

/*
    TEST MOT DE PASSE
*/
let expected;
// Tester mot de passe sans la saisie de caractères spéciaux.
test('isPassword => caractères non saisi', async () =>{
    expected = {
        specCharacter :"Le mot de passe doit contenir au moins un des caractères $, @, !, %, ?",
        number: false,
        upperCase: false,
    };
    const passwordValid = await isPassword('Sammy77','mot de passe');
    expect(passwordValid).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                ...expected
            })
        ])
    )
});

// Tester mot de passe sans la saisie de 2 chiffrens consécutils
test('isPassword => chiffres non consécutifs ou 1 seul saisi', async () =>{
    expected = { 
        specCharacter :false,
        number: "Le mot de passe doit contenir au moins 2 chiffres consécutifs entre 0 et 9",
        upperCase: false,
    };
    const passwordValid = await isPassword('Sammy7!$', 'mot de passe');
    expect(passwordValid).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                ...expected
            })
        ])
    )
});

//Tester mot de passe sans la saisie de lettre(s) majuscule(s)
test('isPassword => Lettre(s) majuscule', async ()=>{
    expected = { 
        specCharacter :false,
        number: false,
        upperCase: "Le mot de passe doit contenir au moins une lettre majuscule",
    };
    
    const passwordValid = await isPassword('sammy77!$','mot de passe');
    expect(passwordValid).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                ...expected
            })
        ])
    )
});

// Tester mot de passe avec aucune des conditions requises
test('isPassword => Aucunes conditions respectées ', async () =>{
    expected = {
        specCharacter :"Le mot de passe doit contenir au moins un des caractères $, @, !, %, ?",
        number: "Le mot de passe doit contenir au moins 2 chiffres consécutifs entre 0 et 9",
        upperCase: "Le mot de passe doit contenir au moins une lettre majuscule",
    }
    const passwordValid = await isPassword('sammy7', 'mot de passe');
    expect(passwordValid).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                ...expected
            })
        ])
    )
})








