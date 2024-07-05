// CSS.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';
import CssConcepts from './CssConcepts';
const CSS = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:CSS");
    return (
    <>
        <h1> CSS:</h1>
        <p>Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.</p>
        <CssConcepts/>

    </>);
}

export default CSS;
