// Selenium_Testing.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';

const Selenium_Testing = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR: Selenium Testing");
    return (<h1> Selenium Testing:</h1>);
}

export default Selenium_Testing;
