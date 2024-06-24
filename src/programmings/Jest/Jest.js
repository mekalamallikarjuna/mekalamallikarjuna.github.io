// Jest.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';

const Jest = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:Jest");
    return (<h1> Jest:</h1>);
}

export default Jest;
