import { isEmpty, isLength } from './fields-validation';

// Tester si aucune erreur.
test('isEmpty => Aucune erreur', () =>{
    const notEmpty =  isEmpty('sammy', 'test')
    expect(notEmpty).toBeFalsy();
});

// Tester si le champ est vide est erreur renvoyée
test('isEmpty => empty field', () =>{
    const msg = 'Le test doit être rempli';
    const oneCharacter = isEmpty('', 'test')
    expect(oneCharacter).toEqual(msg);
});

// Tester nb de carctères requis
test('isLength => min caractères', () =>{
    const msg = 'Le test doit contenir entre 3 et 30 caractères';
    const minCharacter = isLength('sa', 'test');
    expect(minCharacter).toEqual(msg)
});


