// Aiml.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';

const Aiml = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:AI/ML");
    return (<h1> AI/ML:</h1>);
}

export default Aiml;
