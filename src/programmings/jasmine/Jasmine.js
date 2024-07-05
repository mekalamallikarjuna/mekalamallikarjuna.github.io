// Jasmine.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';
import JasmineConcepts from './JasmineConcepts';
const Jasmine = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:Jasmine");
    return (
        <>
            <h3> Jasmine Testing:</h3>
            <p>Jasmine is an open-source testing framework for JavaScript. It aims to run on any JavaScript-enabled platform, to not intrude on the application nor the IDE, and to have easy-to-read syntax. It is heavily influenced by other unit testing frameworks, such as ScrewUnit, JSSpec, JSpec, and RSpec.</p>
            <JasmineConcepts/>
        </>
        
    );
}

export default Jasmine;
