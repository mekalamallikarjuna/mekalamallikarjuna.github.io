// CProgramming.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';

const CProgramming = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:CProgramming");
    return (<h1> C Programming:</h1>);
}

export default CProgramming;
