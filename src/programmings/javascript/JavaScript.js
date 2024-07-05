// Contact.js
import React from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import JavaScriptConcepts from './JavaScriptConcepts';
const JavaScript = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:Javascript");   
    return (
        <>
        <h3>JavaScript:</h3>
        <p></p>
        <JavaScriptConcepts/>
        </>
);
}

export default JavaScript;
