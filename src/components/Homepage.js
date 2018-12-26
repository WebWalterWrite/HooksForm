import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
    width:90%;
    margin:0 auto;
`;  

export default () => (
    <Section>
    <p>Quelques formulaires réalisés avec la nouvelle fonctionnalité <strong>useState</strong> de React. Ils sont fonctionnels côté serveur, testez-les et vous recevrez un email expédié depuis un back conçu avec NodeJs.</p>
    </Section>
);