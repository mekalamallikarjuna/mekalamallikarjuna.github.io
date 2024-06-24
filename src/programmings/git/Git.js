// Git.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';

const Git = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:Git");
    return (<h1> Git:</h1>);
}

export default Git;
