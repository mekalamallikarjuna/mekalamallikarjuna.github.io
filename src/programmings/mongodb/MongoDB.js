// MongoDB.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';

const MongoDB = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:MongoDB");
    return (<h1> MongoDB:</h1>);
}

export default MongoDB;
