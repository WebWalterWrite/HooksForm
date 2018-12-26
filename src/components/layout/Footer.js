import React from 'react';
import {Intro,Nav} from './layout.styled';
const Footer = () => (
    <footer>
        <Intro txta>
            <h1>Project Ressources</h1>
        </Intro>
        <Nav color={{fc:"#61dafb", bc:"#FFFFFF"}}>
            <ul>
                <li>
                    <a 
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/WebWalterWrite/HooksForm">Front Repository Github</a>
                </li>
                <li>
                    <a 
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/WebWalterWrite/MailerTemplates">Back Repository Github</a>
                </li>
                <li>
                    <a 
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://reactjs.org/docs/hooks-intro.html"
                    >
                    React Hooks Introducing
                    </a>
                </li>
            </ul>
        </Nav>
    </footer>
)

export default Footer;