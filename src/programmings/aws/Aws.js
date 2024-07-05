// Aws.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';
import AwsConcepts from './AwsConcepts';

const Aws = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:AWS");
    return (
        <>
            <h1> AWS:</h1>
            <p>Amazon Web Services, Inc. is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis. Clients will often use this in combination with autoscaling.</p>
            <AwsConcepts/>
        </>
    );
}

export default Aws;
