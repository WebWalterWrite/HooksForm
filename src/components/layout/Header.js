import React from 'react';
import { Link } from 'react-router-dom';
import { Intro, Nav } from './layout.styled';
const Header = () => (
    <header>
        <Intro>
        <h1>Hooks Form</h1>
        <p>Quelques formulaires réalisés avec la nouvelle fonctionnalité <strong>useState</strong> de React. Ils sont fonctionnels côté serveur, testez-les et vous recevrez un email expédié depuis un back conçu en NodeJs, Nodemailer, nodemailer-express-handlebars, GMAIL API</p>
        </Intro>
        <Nav>
            <ul>
                <li>
                    <Link to="/formulaire/inscription">S'inscire</Link>
                </li>
                <li>
                    <Link to="/formulaire/connexion">Se connecter</Link>
                </li>
                <li>
                    <Link to="/formulaire/mot-de-passe-oublie">Mot de passe oublié</Link>
                </li>

                <li>
                    <Link to="/formulaire/reinitialisation-mot-de-passe">Nouveau mot de passe</Link>
                </li>
            </ul>
        </Nav>
    </header>
)

export default Header;