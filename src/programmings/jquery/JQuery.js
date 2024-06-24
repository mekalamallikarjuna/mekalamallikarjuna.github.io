// JQuery.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';

const JQuery = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:JQuery");
    return (<h1> JQuery:</h1>);
}

export default JQuery;
