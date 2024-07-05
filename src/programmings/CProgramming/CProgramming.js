// CProgramming.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';
import CProgrammingConcepts from './CProgrammingConcepts';

const CProgramming = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:CProgramming");
    return (
    <>
    <h1> C Programming:</h1>
    <p><strong>Definition:</strong> C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system. It was originally developed by Dennis Ritchie between 1969 and 1973 at Bell Labs.</p>
    <CProgrammingConcepts/>
    </>
    );
}

export default CProgramming;
