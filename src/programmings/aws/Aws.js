// Aws.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';

const Aws = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:AWS");
    return (<h1> AWS:</h1>);
}

export default Aws;
