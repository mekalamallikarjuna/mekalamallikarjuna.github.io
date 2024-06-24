import React from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const MySQL = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:MySQL");   
    return (<h1> MySQL:</h1>);
}

export default MySQL;
