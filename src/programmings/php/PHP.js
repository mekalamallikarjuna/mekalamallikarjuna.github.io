// PHP.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';

const PHP = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:PHP");
    return (<h1> PHP:</h1>);
}

export default PHP;
