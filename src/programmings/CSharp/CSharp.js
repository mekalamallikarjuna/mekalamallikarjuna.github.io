// C#.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';

const CSharp = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:C#");
    return (<h1> C#:</h1>);
}

export default CSharp;
