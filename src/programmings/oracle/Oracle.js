// Oracle.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';

const Oracle = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:Oracle");
    return (<h1> Oracle:</h1>);
}

export default Oracle;
