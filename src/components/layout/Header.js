import React from 'react';
import { Link } from 'react-router-dom';
import { Intro, Nav } from './layout.styled';
const Header = () => (
    <header>
        <Intro>
        <h1><Link to="/">Hooks Form</Link></h1>
        </Intro>
        <Nav color={{bc:"#61dafb", fc:"#FFFFFF"}}>
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
            </ul>
        </Nav>
    </header>
)

export default Header;