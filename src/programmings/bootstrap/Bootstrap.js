// Bootstrap.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';

const Bootstrap = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:Bootstrap");
    return (<h1> Bootstrap:</h1>);
}

export default Bootstrap;
