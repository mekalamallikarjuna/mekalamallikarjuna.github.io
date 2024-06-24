// Docker.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';

const Docker = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:Docker");
    return (<h1> Docker:</h1>);
}

export default Docker;
