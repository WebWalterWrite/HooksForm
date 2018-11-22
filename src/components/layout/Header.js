import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Hooks Form</h1>
        <nav>
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
        </nav>
    </header>
)

export default Header;