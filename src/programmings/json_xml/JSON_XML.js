// JSON_XML.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';

const JSON_XML = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:JSON & XML");
    return (<h1> JSON & XML:</h1>);
}

export default JSON_XML;
