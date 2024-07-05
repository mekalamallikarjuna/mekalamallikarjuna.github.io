// Oracle.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';
import OracleConcepts from './OracleConcepts';
const Oracle = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:Oracle");
    return (
    <>
    <h3> Oracle:</h3>
    <p>Oracle Database is a proprietary multi-model database management system produced and marketed by Oracle Corporation. It is a database commonly used for running online transaction processing, data warehousing and mixed database workloads.</p>
    <OracleConcepts/>
    </>
    );
}

export default Oracle;
