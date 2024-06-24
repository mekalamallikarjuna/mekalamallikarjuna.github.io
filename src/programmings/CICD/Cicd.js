// Cicd.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';

const Cicd = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:CI/CD");
    return (<h1> CI/CD:</h1>);
}

export default Cicd;
