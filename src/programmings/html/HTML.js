// HTML.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';
import HtmlConcepts from './HtmlConcepts';

const HTML = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:HTML");
    return (
        <>
        <h3>HTML:-</h3>
        <p>HyperText Markup Language is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript. </p>
        <HtmlConcepts/>
        </>

    );
}

export default HTML;
