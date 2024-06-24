// React JS.js
import React from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const MyReact = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:React JS");
    return (<h1> React JS:</h1>);

}

export default MyReact;
