// TypeScript.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';

const TypeScript = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:TypeScript");
    return (<h1> TypeScript:</h1>);
}

export default TypeScript;
