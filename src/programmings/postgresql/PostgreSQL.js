// PostgreSQL.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';

const PostgreSQL = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:PostgreSQL");
    return (<h1> PostgreSQL:</h1>);
}

export default PostgreSQL;
