// TypeScript.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';
import TypeScriptConcepts from './TypeScriptConcepts';

const TypeScript = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:TypeScript");
    return (<>
    <h1> TypeScript:</h1>
    <p></p>
    <TypeScriptConcepts />
    </>);
}

export default TypeScript;
