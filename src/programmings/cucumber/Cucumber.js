// Cucumber.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';

const Cucumber = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:Cucumber");
    return (<h1> Cucumber:</h1>);
}

export default Cucumber;
