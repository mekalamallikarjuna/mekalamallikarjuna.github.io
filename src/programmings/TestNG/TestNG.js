// TestNG.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';

const TestNG = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:TestNG");
    return (<h1> TestNG:</h1>);
}

export default TestNG;
