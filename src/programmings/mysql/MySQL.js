import React from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import MysqlConcepts from './MysqlConcepts';
const MySQL = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:MySQL");   
    return (
        <>
            <h1> MySQL:</h1>
            <p>MySQL is an open-source relational database management system. Its name is a combination of "My", the name of co-founder Michael Widenius's daughter My, and "SQL", the acronym for Structured Query Language</p>
            <MysqlConcepts/>
        </>
    );
}

export default MySQL;
