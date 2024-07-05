// PostgreSQL.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';
import PostgresqlConcepts from './PostgresqlConcepts';

const PostgreSQL = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:PostgreSQL");
    return (
        <>
        <h1> PostgreSQL:</h1>
        <p>PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance.</p>
        <PostgresqlConcepts />
        </>
    );
}

export default PostgreSQL;
