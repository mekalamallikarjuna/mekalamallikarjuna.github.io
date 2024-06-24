// Jasmine.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';

const Jasmine = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:Jasmine");
    return (<h1> Jasmine:</h1>);
}

export default Jasmine;
