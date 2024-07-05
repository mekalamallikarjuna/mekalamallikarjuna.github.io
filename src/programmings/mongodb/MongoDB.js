// MongoDB.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';
import MongodbConcepts from './MongodbConcepts';
const MongoDB = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:MongoDB");
    return (
    <>
        <h1> MongoDB:</h1>
        <p>MongoDB is a source-available, cross-platform, document-oriented database program. Classified as a NoSQL database product, MongoDB utilizes JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and current versions are licensed under the Server Side Public License.</p>
        <MongodbConcepts/>
    </>
    );
}

export default MongoDB;
