// Github.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';

const Github = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:Github");
    return (<h1> Github:</h1>);
}

export default Github;
