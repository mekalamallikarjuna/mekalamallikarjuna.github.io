// RSpec.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';
import RspecTestingConcepts from './RspecTestingConcepts';
const RSpecTesting = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:RSpec");
    return (
        <>
        <h3>RSpec:</h3>
        <p>RSpec is a computer domain-specific language testing tool written in the programming language Ruby to test Ruby code. It is a behavior-driven development framework which is extensively used in production applications.</p>
        <RspecTestingConcepts/>
        </>
    );
}

export default RSpecTesting;
