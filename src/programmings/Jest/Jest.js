// Jest.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';
import JestConcepts from './JestConcepts';

const Jest = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:Jest");
    return (
    <>
        <h1> Jest:</h1>
        <p>Jest is a JavaScript Testing Framework with a focus on simplicity. Our main focus is using Jest with Selenium.</p>
        <JestConcepts/>
    </>
    );
}

export default Jest;
