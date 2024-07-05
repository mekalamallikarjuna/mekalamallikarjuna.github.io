// Cucumber.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';
import CucumberBDDConcepts from './CucumberBDDConcepts';
const Cucumber = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:Cucumber");
    return (
    <>
        <h1> Cucumber:</h1>
        <p>Cucumber is a software tool that supports behavior-driven development. Central to the Cucumber BDD approach is its ordinary language parser called Gherkin. It allows expected software behaviors to be specified in a logical language that customers can understand.</p>
        <CucumberBDDConcepts/>
    </>
    
    );
}

export default Cucumber;
