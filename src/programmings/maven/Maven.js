// Maven.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';

const Maven = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:Maven");
    return (<h1> Maven:</h1>);
}

export default Maven;
