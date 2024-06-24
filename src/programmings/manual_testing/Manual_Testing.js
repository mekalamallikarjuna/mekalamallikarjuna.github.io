// Manual_Testing.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';

const Manual_Testing = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR: Manual Testing");
    return (<h1> Manual Testing:</h1>);
}

export default Manual_Testing;
