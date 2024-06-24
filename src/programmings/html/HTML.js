// HTML.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';

const HTML = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:HTML");
    return (<h1> HTML:</h1>);
}

export default HTML;
